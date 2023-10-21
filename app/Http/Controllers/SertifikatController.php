<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Peserta;
use App\Models\Kegiatan;
use App\Models\Sertifikat;
use Illuminate\Http\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

class SertifikatController extends Controller
{
    public function home(Request $request) {
        return Inertia::render('Dashboard/Sertifikat', [
            'kegiatans' => Kegiatan::with('pesertas')->get(),
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function view(Request $request) {
        $sertifikats = Sertifikat::where('peserta_id',$request->query('peserta'))->get();
        return Inertia::render('Front/Sertifikat', [
            'sertifikat' => $sertifikats,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
