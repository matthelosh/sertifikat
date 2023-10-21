<script setup>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { Head } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const selectedKegiatan = ref(null)
const background = ref('/img/sert/hijau-pgri.jpg')
defineProps({
    kegiatans: Array,
});
</script>

<template>
    <Head>
        <title>Buat Sertifikat</title>
    </Head>
    <AuthenticatedLayout>
        <template #page-title>
            <Icon icon="mdi:certificate" class="text-slate-500 text-xl" />
            Sertifikat
        </template>
        <div class="toolbar w-full h-10 flex items-center justify-between gap-2 border-b pb-4">
            <h1>Buat Sertifikat</h1>
            <div class="toobar-items flex items-center gap-3">
                <p>Pilih Kegiatan</p>
                <select 
                   class="rounded py-1" 
                    v-model="selectedKegiatan">
                    <option 
                        v-for="keg in kegiatans"
                        :value="keg.kode">
                        {{ keg.nama }}
                    </option>
                </select>
                <button>
                    <Icon icon="mdi:printer" class="text-xl text-slate-600" />
                </button>
            </div>
        </div>
        <div class="content w-full h-full relative text-center p-3" >
            <div :style="`margin: 10px auto; background: url(${background}); background-size:cover;background-position: bottom center; height:793.700787402px; width:1247.244094488px; position: absolute;box-shadow:  2px 3px 5px rgba(0,0,0,0.5);`">
                
            </div>
        </div>
        
    </AuthenticatedLayout>
</template>