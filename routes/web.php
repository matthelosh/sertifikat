<?php
namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Peserta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('guest');

Route::post('/peserta/daftar', [PesertaController::class, 'store'])->name('peserta.daftar');

Route::get('/daftar-peserta', function() {
    return Inertia::render('Front/Daftar', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('front.daftar');

Route::prefix('dashboard')->group(function() {
    Route::get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::prefix('kegiatan')->group(function () {
        Route::get('/', function() {
            return Inertia::render('Dashboard/Kegiatan');
        })->name('dashboard.kegiatan');
    });
    Route::prefix('peserta')->group(function () {
        Route::get('/', [PesertaController::class, 'home'])->name('dashboard.peserta');
    });
    Route::prefix('panitia')->group(function () {
        Route::get('/', function() {
            return Inertia::render('Dashboard/Panitia');
        })->name('dashboard.panitia');
    });
})->middleware(['auth', 'verified']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
