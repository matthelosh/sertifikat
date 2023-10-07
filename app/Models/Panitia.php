<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Panitia extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama',
        'jabatan',
        'status',
        'kegiatan_id'
    ];

    function kegiatan() {
        return $this->belongsTo(Kegiatan::class, 'kegiatan_id', 'kode');
    }
}
