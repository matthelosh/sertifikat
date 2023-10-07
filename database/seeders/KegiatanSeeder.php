<?php

namespace Database\Seeders;

use App\Models\Kegiatan;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class KegiatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Kegiatan::create([
            'kode' => 'gshsnsp2023',
            'nama' => 'Gebyar Seni Hari Santri Nasional dan Sumpah Pemuda 2023',
            'mulai' => '2023-10-28',
            'selesai' => '2023-10-28',
            'penyelenggara' => 'Korwil DInas Pendidikan Kecamatan Wagir',
            'lokasi' => 'Wagir',
            'ttd_1' => 'Korwil Dinas Pendidikan Kecamatan Wagir',
            'ttd_2' => 'Ketua K3S SD Kecamatan Wagir',
            'ttd_3' => 'Ketua KKG PAI Kecamatan Wagir',
            'keterangan' => 'Terlaksana'
        ]);
    }
}
