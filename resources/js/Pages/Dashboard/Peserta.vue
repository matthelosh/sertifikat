<script setup>
import { ref, defineAsyncComponent } from 'vue';
import { Icon } from '@iconify/vue';
// import 'element-plus/es/components/table/src/table/defaults';
import 'element-plus/es/components/table/style/css'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const props = defineProps({ pesertas: Array})

const defaultImage = (e) => {
    e.target.src = '/img/avatar.png'
}
</script>

<template>
    <AuthenticatedLayout pageTitle="Data Peserta">
        <template #page-title>
            <Icon icon="mdi:human-queue" class="text-slate-500 text-xl" />
            Data Peserta Kegiatan
        </template>
        <el-table :data="pesertas" height="100%"  stripe border >
            <el-table-column header-align="center" prop="no_id" label="No. ID"  />
            <el-table-column header-align="center" prop="nama" label="Nama" />
            <el-table-column header-align="center" prop="jk" label="Jenis Kelamin" />
            <el-table-column header-align="center" prop="instansi" label="Asal Lembaga" />
            <el-table-column header-align="center" prop="alamat" label="Alamat" />
            <el-table-column header-align="center" prop="sebagai" label="Status Peserta" />
            <el-table-column header-align="center" label="Foto">
                <template #default="scope">
                    <div class=" flex justify-center">
                        <img :src="scope.row.foto" alt="Foto" class="h-16 shadow" @error="defaultImage">
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </AuthenticatedLayout>
</template>

<style>
/* th.el-table__cell {
    color: #454545!important;
}
.el-table__cell {
    border: 1px solid gray!important;
    padding: 2px 5px; 
}*/
</style>