<script setup>
import { ref, defineAsyncComponent, computed, onMounted } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue';
import {groupBy, map} from 'lodash-es';

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
                categories: xaxis
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

        <div class="content ">
            <apexchart width="500" type="bar" :options="peserta.options" :series="peserta.series"></apexchart>
            {{ peserta.options }}
        </div>

    </GuestLayout>
</template>