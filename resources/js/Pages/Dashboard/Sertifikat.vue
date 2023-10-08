<script setup>
import { ref, defineAsyncComponent } from 'vue';
import { Head } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const background = ref('/img/sert/hijau-pgri.jpg')
</script>

<template>
    <Head>
        <title>Buat Sertifikat</title>
    </Head>
    <AuthenticatedLayout>
        <template #page-title>
            <Icon icon="mdi:certificate" class="text-slate-500 text-xl" />
            Sertfikat
        </template>
        <div class="toolbar w-full h-10 flex items-center gap-2 bg-pink-200">
            <h1>Buat Sertifikat</h1>
        </div>
        <div class="content w-full h-full relative text-center" >
            <div :style="`margin: 10px auto; background: url(${background}); background-size:cover;background-position: bottom center; height:793.700787402px; width:1247.244094488px; position: absolute;box-shadow:  2px 3px 5px rgba(0,0,0,0.5);`">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugiat velit asperiores temporibus quam dolore et sint blanditiis assumenda sequi facilis ipsum, expedita, odit ipsam? Magni tempore ipsum quaerat mollitia.
            </div>
        </div>
        
    </AuthenticatedLayout>
</template>