<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kegiatans', function (Blueprint $table) {
            $table->id();
            $table->string('kode', 30)->unique();
            $table->text('nama', 191);
            $table->date('mulai');
            $table->date('selesai');
            $table->string('penyelenggara', 191);
            $table->string('lokasi', 100);
            $table->string('ttd_1', 100);
            $table->string('ttd_2', 100)->nullable();
            $table->string('ttd_3', 100)->nullable();
            $table->text('keterangan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kegiatans');
    }
};
