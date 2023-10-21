<script setup>
import { ref, defineAsyncComponent, computed, onMounted } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue';
import {groupBy, map, uniq} from 'lodash-es';

const props = defineProps({
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
    pesertas: Array
});


const GuestLayout = defineAsyncComponent(() => import('@/Layouts/GuestLayout.vue'));

const peserta = computed(() => {
    let xaxis =  map(props.pesertas, 'instansi');
    let groups = groupBy(props.pesertas, "instansi")
    let data = []
    Object.keys(groups, "instansi").forEach(key => {
        data.push(groups[key].length)
    })

    return { 
        options: {
            chart: { id: 'data-peserta'},
            xaxis: {
                categories: uniq(xaxis)
            }
        }, series: [{
            name: "Jumlah Peserta",
            data: data
        }]}
})
</script>

<template>
    <GuestLayout can-login="canLogin" can-register="canRegister" laravel-version="laravelVersion" php-version="phpVersion">
        <template #toolbar-title >
            <h1 class="flex items-center gap-2">
                <Icon icon="mdi:account-multiple" />
                Data Peserta
            </h1>
        </template>

        <div class="content flex items-center justify-center w-full h-screen">
            <div class="card w-[90vh] sm:w-[30%] sm:max-w-[60%] bg-white p-3 rounded-lg shadow-lg">
                <h1 class="text-slate-500 font-bold mb-6 border-b pb-4 text-center">Data Peserta Gebyar Seni Hari Santri Nasional dan Sumpah Pemuda 2023</h1>
                <apexchart width="100%" type="bar" :options="peserta.options" :series="peserta.series"></apexchart>
            </div>
        </div>

    </GuestLayout>
</template>