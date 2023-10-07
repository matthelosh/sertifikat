<script setup>
import { ref, defineAsyncComponent } from 'vue';
import 'element-plus/es/components/table/src/table/defaults';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const props = defineProps({ pesertas: Array})
</script>

<template>
    <AuthenticatedLayout>
        <h1>Peserta</h1>
        <el-table :data="pesertas" border class="text-sm" striped>
            <el-table-column prop="no_id" label="No. ID" />
            <el-table-column prop="nama" label="Nama" />
            <el-table-column prop="jk" label="Jenis Kelamin" />
            <el-table-column prop="instansi" label="Asal Lembaga" />
            <el-table-column prop="alamat" label="Alamat" />
            <el-table-column prop="sebagai" label="Status Peserta" />
            <el-table-column label="Foto">
                <template #default="scope">
                    <img :src="scope.row.foto" alt="Foto">
                </template>
            </el-table-column>
        </el-table>
    </AuthenticatedLayout>
</template>