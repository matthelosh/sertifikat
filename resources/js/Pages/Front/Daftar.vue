<script setup>
import { h, ref, computed } from 'vue';
import { router, Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { ElNotification } from 'element-plus';
import 'element-plus/es/components/base/style/css';
import 'element-plus/theme-chalk/el-notification.css';


defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

// defineProps({ error: Object})

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
</script>

<template>
<Head title="Daftar Peserta" />
<GuestLayout>
    <div v-if="canLogin" class="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
        <Link
            v-if="$page.props.auth.user"
            :href="route('dashboard')"
            class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            >Dashboard</Link
        >

        <template v-else>
            <Link
                :href="route('login')"
                class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >Log in</Link
            >

            <Link
                v-if="canRegister"
                :href="route('front.daftar')"
                class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >Register</Link
            >
        </template>
    </div>
    <div class="w-full flex justify-center p-6">
        <div class="flex items-center gap-2 mx-auto">
            <Link :href="route('guest')">
                <img src="/img/logo.png" alt="Logo" class="w-12">
            </Link>
            <div>
                <h1 class="text-xl font-bold text-blue-800 leading-5">Alsya</h1>
                <small class="text-slate-500  leading-4">Sertifikat</small>
            </div>
        </div>
    </div>
    <div class="w-full bg-white p-4 rounded-lg shadow-lg">
        <h1 class="mb-2 border-b border-dashed pb-3 text-slate-600 font-bold tracking-wide">Formulir Pendaftaran</h1>
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
</GuestLayout>
</template>