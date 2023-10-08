<script setup>
import { ref, defineAsyncComponent } from 'vue';
import { Icon } from '@iconify/vue';
import 'element-plus/es/components/table/style/css'

const AuthenticatedLayout  = defineAsyncComponent(() => import('@/Layouts/AuthenticatedLayout.vue'));
defineProps({ kegiatans: Array });

const search = ref('')

</script>

<template>
    <AuthenticatedLayout>
        <template #page-title>
            <Icon icon="mdi:human-male-board-poll" class="text-slate-500 text-xl" />
            Data Kegiatan
        </template>
        <template #items-toolbar>
            <el-input type="text" placeholder="Cari" v-model="search" clearable>
                <template #prefix>
                    <Icon icon="mdi:magnify" />
                </template>
            </el-input>
        </template>
        <el-table :data="kegiatans" class="w-full bg-white text-xs" stripe >
            <el-table-column header-align="center" align="center" prop="kode" label="Kode" />
            <el-table-column header-align="center" prop="nama" label="Nama Kegiatan" />
            <el-table-column header-align="center" prop="mulai" label="Tanggal" />
            <el-table-column header-align="center" prop="penyelenggara" label="Penyelenggara" />
            <el-table-column header-align="center" prop="lokasi" label="Lokasi" />
            <el-table-column header-align="center" prop="ttd_1" label="Penanggungjawab" />
            <el-table-column header-align="center" align="center" prop="keterangan" label="Keterangan" />
            <el-table-column header-align="center" align="center" label="Opsi">
                <template #default="scope">
                    <button class="bg-red-500 py-1 px-3 rounded-lg text-white shadow-md my-4">
                        Hapus
                    </button>
                </template>    
            </el-table-column>
        </el-table>
    </AuthenticatedLayout>
</template>