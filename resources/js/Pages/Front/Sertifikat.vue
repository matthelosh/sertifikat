<script setup>
import { ref, defineAsyncComponent } from 'vue';
import { Link, Head } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
defineProps({ 
    sertifikats: Array,
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
</script>

<template>
<Head title="Lihat Sertifikat" />
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

<div class="content w-full p-2 sm:p-6">
    <div class="relative w-full bg-white rounded-md shadow-lg p-8">
        <h1 class="my-2 font-bold text-slate-500">Cari Sertifikat Anda</h1>
        <el-input placeholder="Masukkan No. ID / NIP / NISN" class="my-2" />
        <el-button primary class="mx-auto">
            <Icon icon="mdi:magnify" />
            Cari
        </el-button>
    </div>
</div>
    
</GuestLayout>
    
</template>