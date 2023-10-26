<script setup>
import { h, ref, computed, onBeforeMount } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { ElNotification } from 'element-plus';
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-notification.css';
import { Icon } from '@iconify/vue';

const props = defineProps({
    selectedPeserta: Object,
});

onBeforeMount(() => {
    if (props.selectedPeserta !== null) {
        peserta.value = props.selectedPeserta
    }
})


const peserta = ref({
    no_id: '',
    nama: '',
    jk: '',
    instansi: '',
    alamat: '',
    kegiatan_id: '',
    sebagai: '',
    foto: ''
});

const onSubmit = async() => {
    let fd = new FormData();
    fd.append("peserta", JSON.stringify(peserta.value))
    if(foto.value !== null) fd.append("file_foto", foto.value)
    let url = peserta.value.id ? 'peserta.update': 'peserta.update';
    let method = peserta.value.id ? 'put' : 'post';
    await router.post(route('peserta.daftar'), fd, {
       
        onSuccess: (page) => {
            ElNotification({
                title: 'Informasi',
                message: h('i', {style: 'color: teal'}, 'Data peserta disimpan'),
                position: 'top-right'
            })
        },
        onError: (err) => {
            Object.keys(err).forEach(k => {
                ElNotification({
                    title: 'Error',
                    message: h('i', {style: 'color: red'}, err[k]),
                    position: 'top-right'
                })
            })
        }
    })

}

const fileFoto = ref(null)
const foto = ref(null)

const onFotoPicked = (e) => {
    let file = e.target.files[0]
    peserta.value.foto = URL.createObjectURL(file)
    foto.value = file
}

const defaultFoto = (e) => {
    e.target.src = '/img/avatar.png'
}

const emit = defineEmits(['close'])
</script>

<template>
<div class="overlay fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-slate-500 bg-opacity-50 backdrop-blur-sm z-50">
    <div class="w-full sm:w-[500px] bg-white p-4 rounded-lg shadow-lg card mx-auto">
        <div class="toolbar flex items-center justify-between mb-2 border-b border-dashed pb-3">
            <h1 class=" text-slate-600 font-bold tracking-wide">Formulir Pendaftaran</h1>
            <button @click="emit('close')">
                <Icon icon="mdi:close-circle" class="text-2xl text-red-400 hover:text-red-600 active:text-red-500" />
            </button>
        </div>
        <img :src="peserta.foto" alt="Avatar" class="w-24 mx-auto mb-2 rounded-full hover:cursor-pointer hover:shadow-lg" @error="defaultFoto" @click="fileFoto.click()" />
        <input type="file" ref="fileFoto" class="hidden" @change="onFotoPicked" accept=".jpg, .png">
        <el-form :model="peserta" label-width="120px" label-position="left">
            <el-form-item label="No. Identitas">
                <el-input v-model="peserta.no_id" placeholder="Isikan NIK / NIP / NISN" />
            </el-form-item>
            <el-form-item label="Nama Lengkap">
                <el-input v-model="peserta.nama" placeholder="Isikan Nama Lengkap" />
            </el-form-item>
            <el-form-item label="Jenis Kelamin">
                <el-select v-model="peserta.jk">
                    <el-option label="Laki-laki" value="Laki-laki" />    
                    <el-option label="Perempuan" value="Perempuan" />    
                </el-select>
            </el-form-item>
            <el-form-item label="Asal Instansi">
                <el-input v-model="peserta.instansi" placeholder="Isikan Asalah Instansi" />
            </el-form-item>
            
            <el-form-item label="Asal Instansi (Opsional)">
                <el-input v-model="peserta.alamat" type="textarea" placeholder="Isikan Alamat" />
            </el-form-item>
            <el-form-item label="Status Kepesertaan">
                <el-input v-model="peserta.sebagai" type="textarea" placeholder="Contoh: Peserta Tari Saman / Pemenang" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Daftar</el-button>
            </el-form-item>
        </el-form>
    </div>
</div>
</template>