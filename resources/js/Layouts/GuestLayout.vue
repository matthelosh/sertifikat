<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div class="flex items-center gap-2">
            <Link :href="route('guest')">
                <img src="/img/logo.png" alt="Logo" class="w-12">
            </Link>
            <div>
                <h1 class="text-xl font-bold text-blue-800 leading-5">Alsya</h1>
                <small class="text-slate-500  leading-4">Sertifikat</small>
            </div>
        </div>

        <div
            class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
        >
            <slot />
        </div>
    </div>
</template>
