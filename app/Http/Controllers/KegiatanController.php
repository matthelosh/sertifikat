<?php

namespace App\Http\Controllers;

use App\Models\Kegiatan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KegiatanController extends Controller
{
    function home() {
        return Inertia::render('Dashboard/Kegiatan', [
            'kegiatans' => Kegiatan::with('pesertas')->get()
        ]);
    }
}
