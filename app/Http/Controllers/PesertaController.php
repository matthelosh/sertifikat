<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use App\Models\Peserta;
use Illuminate\Http\Request;

class PesertaController extends Controller
{
    public function store(Request $request) {
        // dd(json_decode($request->peserta));
        
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
                'foto' => $request['foto'] ?? null
            ]);

            return back()->with('status', 'Ok');
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
