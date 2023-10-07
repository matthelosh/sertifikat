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
        Schema::create('pesertas', function (Blueprint $table) {
            $table->id();
            $table->string('no_id', 30);
            $table->string('nama', 100);
            $table->enum('jk', ['Laki-laki','Perempuan']);
            $table->string('instansi', 100);
            $table->string('alamat', 191)->nullable();
            $table->string('kegiatan_id', 30);
            $table->string('sebagai', 191);
            $table->text('foto')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pesertas');
    }
};
