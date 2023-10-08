<?php

namespace Database\Seeders;

use App\Models\Panitia;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PanitiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Panitia::create([
            'nama' => 'Ikhwan',
            'jabatan' => 'admin',
            'status' => 'aktif',
        ]);
    }
}
