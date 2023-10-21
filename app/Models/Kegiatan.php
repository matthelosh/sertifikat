<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kegiatan extends Model
{
    use HasFactory;

    protected $fillable = [
        'kode',
        'nama',
        'mulai',
        'selesai',
        'penyelenggara',
        'lokasi',
        'ttd_1',
        'ttd_2',
        'ttd_3',
        'keterangan'
    ];

    function pesertas() {
        return $this->hasMany(Peserta::class, 'kegiatan_id', 'kode');
    }

    function logos() {
        return $this->hasMany(Logo::class, 'kegiatan_id', 'kode');
    }
}
