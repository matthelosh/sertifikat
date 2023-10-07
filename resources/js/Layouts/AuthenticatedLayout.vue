<script setup>
import { ref, defineAsyncComponent } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue';

const showingNavigationDropdown = ref(false);

import SideItem from '@/Layouts/Dashboard/SideItem.vue'

const toggleSide = () => {
    let side = document.querySelector(".aside")
    side.classList.toggle('hidden')
}
</script>

<template>
    <div class="common-layout">
        <el-container class="grid grid-cols-12 bg-slate-50 gap-2 p-3 h-screen">
            <el-aside class="aside col-span-2 h-[97vh] sm:h-full z-20 sm:z-0 bg-slate-200 overflow-y-auto shadow-xl rounded-lg hover:shadow-none hidden sm:block absolute w-[200px] sm:relative transition">
                <div class="avatar w-full h-[150px]">
                    <img src="/img/logo.png" alt="Logo" class="w-[50%] mx-auto rounded-full my-4">
                </div>
                <SideItem class="my-2"/>
                <div class="toolbar-items flex items-center gap-1 sm:hidden p-3">
                    <Link href="/logout" method="POST" class="text-sm px-2 py-1 rounded-md shadow-lg text-white bg-red-400">Logout</Link>
                </div>
            </el-aside>
            <el-container class="grid col-span-12 sm:col-span-10  h-full">
                <el-header class="w-full h-10 p-2 flex items-center justify-between">
                    <div class="logo flex items-center gap-1">
                        <Icon icon="mdi:folder-open" class="text-slate-500 text-lg" />
                        Header
                    </div>
                    <div class="toolbar-items sm:flex items-center gap-1 ">
                        <Link href="/logout" as="button" method="POST" class="text-sm px-2 py-1 rounded-md shadow-lg text-white bg-red-400 hidden sm:flex">Logout</Link>
                        <button @click="toggleSide">
                            <Icon icon="mdi:menu" class="text-xl text-sky-800" />
                        </button>
                    </div>
                </el-header>
                <el-main class="h-[82vh] overflow-y-auto">
                    <slot />
                </el-main>
                <el-footer class=" flex justify-center" >
                    <p class="text-sm py-2 px-4 bg-slate-200 rounded-lg shadow-lg text-sltae-500">Copyright &copy; {{ new Date().getFullYear() }} <a href="https://matsoleh.my.id" class="text-purple-600 hover:underline">Matsoleh</a></p>
                </el-footer>
            </el-container>
        </el-container>
    </div>
  </template>
  
