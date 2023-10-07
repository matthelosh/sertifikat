<script setup>
import { ref, defineAsyncComponent } from 'vue';

const AuthenticatedLayout  = defineAsyncComponent(() => import('@/Layouts/AuthenticatedLayout.vue'));

const datas = ref([
    {
        kode: 'hsnsp2023',
        nama: 'Gelar Hari Santri Nasional dan Sumpah Pemuda 2023',
        mulai: '2023-10-28',
        selesai: '2023-10-28',
        penyelenggara: 'Korwil Kecamatan Wagir',
        lokasi: 'Kecamatan Wagir',
        ttd_1: 'Korwil Dinas Pendidikan Kecamatan Wagir',
        keterangan: 'Sukses'
    },
    {
        kode: 'hsnsp2023',
        nama: 'Gelar Hari Santri Nasional dan Sumpah Pemuda 2023',
        mulai: '2023-10-28',
        selesai: '2023-10-28',
        penyelenggara: 'Korwil Kecamatan Wagir',
        lokasi: 'Kecamatan Wagir',
        ttd_1: 'Korwil Dinas Pendidikan Kecamatan Wagir',
        keterangan: 'Sukses'
    },
])
</script>

<template>
    <AuthenticatedLayout>
        <el-table :data="datas" class="w-full bg-white text-sm" stripe border>
            <el-table-column border prop="kode" label="Kode" />
            <el-table-column border prop="nama" label="Nama Kegiatan" />
            <el-table-column border prop="mulai" label="Tanggal" />
            <el-table-column border prop="penyelenggara" label="Penyelenggara" />
            <el-table-column border prop="lokasi" label="Lokasi" />
            <el-table-column border prop="ttd_1" label="Penanggungjawab" />
            <el-table-column border prop="keterangan" label="Keterangan" />
        </el-table>
    </AuthenticatedLayout>
</template>