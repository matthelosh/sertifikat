<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logo extends Model
{
    use HasFactory;

    protected $fillable = [
        'kegiatan_id',
        'url',
        'keterangan'
    ];

    function kegiatan() {
        return $this->belongsTo(Kegiatan::class, 'kegiatan_id', 'kode');
    }
}
