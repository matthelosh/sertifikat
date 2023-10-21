<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Peserta;
use App\Models\Kegiatan;
use Illuminate\Http\Request;
use App\Http\Requests\PesertaRequest;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Storage;

class PesertaController extends Controller
{

    public function homeFront(Request $request) {
        return Inertia::render('Front/Peserta', [
            'pesertas' => Peserta::with('kegiatan')->get(),
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function home(Request $request) {
        return Inertia::render('Dashboard/Peserta', [
            'pesertas' => Peserta::all(),
        ]);
    }
    public function store(PesertaRequest $request) {
        // dd(json_decode($request->peserta));
        if($request->file('file_foto')) {
            $file = $request->file('file_foto');
            $store = Storage::putFileAs('public/images/peserta', $request->file('file_foto'), $request->no_id.'.'.$file->extension());
            $url = Storage::url($store);
        }
        try {
            $kegiatan = Kegiatan::find(1);
            Peserta::create([
                'no_id' => $request['no_id'],
                'nama' => $request['nama'],
                'jk' => $request['jk'],
                'instansi' => $request['instansi'],
                'alamat' => $request['alamat'] ?? null,
                'kegiatan_id' => $kegiatan->kode,
                'sebagai' => $request['sebagai'],
                'foto' => $request->file('file_foto') ? $url : ($request['foto'] ?? null)
            ]);

            return back()->with('status', 'Ok');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
