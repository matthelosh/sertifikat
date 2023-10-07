<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = ['admin', 'panitia', 'peserta'];
        $permissions = ['create user', 'read user', 'update user', 'delete user', 'create kegiatan', 'read kegiatan', 'update kegiatan', 'delete kegiatan', 'create sertifikat', 'read sertifikat','update sertifikat','delete sertifikat' ];

        foreach($roles as $role)
        {
            Role::create(['name' => $role]);
        }

        foreach($permissions as $permission)
        {
            Permission::create(['name' => $permission]);
        }

        $allpermisions = Permission::all();
        $admin = Role::where('name','admin')->first();
        $admin->syncPermissions($allpermisions);
    }
}
