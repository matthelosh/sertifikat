<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sertifikat extends Model
{
    use HasFactory;

    protected $fillable = [
        'kode',
        'kegiatan_id',
        'peserta_id',
        'status',
        'keterangan'
    ];

    function peserta() {
        return $this->belongsTo(Peserta::class, 'peserta_id', 'no_id');
    }
    function kegiatan() {
        return $this->belongsTo(Kegiatan::class, 'kegiatan_id', 'kode');
    }
}
