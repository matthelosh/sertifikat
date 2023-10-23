<script setup>
import { ref, defineAsyncComponent, computed } from 'vue';
import { Icon } from '@iconify/vue';
// import 'element-plus/es/components/table/src/table/defaults';
import 'element-plus/es/components/table/style/css'
import 'element-plus/es/components/pagination/style/css'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const props = defineProps({ pesertas: Array})

const defaultImage = (e) => {
    e.target.src = '/img/avatar.png'
}

const search = ref(null);

const current = ref(1)
const perPage = ref(4)
const  changePage = (e) => {
    alert(e)
}
const displayPesertas = computed(() => {
    // if(search.value == null) return props.pesertas;
    // return props.pesertas.slice(current.value, perPage.value)
    let items = (search.value == null) ? props.pesertas : props.pesertas.filter(item => item.nama.toLowerCase().includes(search.value.toLowerCase())) 
    return {
        datas: items.slice(current.value - 1, perPage.value),
        pageLength: Math.ceil(props.pesertas.length / perPage.value)
    }
})

// const pageLength = computed(() => {
//     return props.pesertas.length / perPage.value
// })
</script>

<template>
    <AuthenticatedLayout pageTitle="Data Peserta">
        <template #page-title>
            <div class="title flex gap-2">
                <Icon icon="mdi:human-queue" class="text-slate-500 text-xl" />
                Data Peserta Kegiatan
            </div>
            
            <div class="page-items">
                <el-input v-model="search" placeholder="Cari"></el-input>
            </div>
        </template>
        <el-table :data="displayPesertas.datas" stripe border>
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
        <el-pagination
            small
            background
            layout="prev, pager, next"
            :page-count="displayPesertas.pageLength"
            class="mt-4"
            v-model:current-page="current"
        />

        <!-- <p>{{pesertas.length}} - {{ Math.ceil(pageLength) }}</p> -->
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