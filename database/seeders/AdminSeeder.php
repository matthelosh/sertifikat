<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'admin',
            'email' => 'cert@matsoleh.my.id',
            'password' => Hash::make('123'),
            'userable_type' => 'App\\Models\\Panitia',
            'userable_id' => '1'
        ]);
    }
}
