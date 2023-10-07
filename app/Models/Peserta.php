<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    use HasFactory;

    protected $fillable = [
        'no_id',
        'nama',
        'jk',
        'instansi',
        'alamat',
        'kegiatan_id',
        'sebagai',
        'foto'
    ];

    function kegiatan() {
        return $this->belongsTo(Kegiatan::class, 'kegiatan_id', 'kode');
    }
}
