<script setup>
import { ref, defineAsyncComponent } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/vue3';
import { Icon } from '@iconify/vue';

defineProps({ pageTitle: String})

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
            <el-aside class="aside col-span-2 h-[97vh] sm:h-full z-20 sm:z-0 bg-slate-200 overflow-y-auto shadow-xl rounded-xl hover:shadow-none hidden sm:block absolute w-[200px] sm:w-full sm:relative transition">
                <div class="avatar w-full h-[150px]">
                    <img src="/img/logo.png" alt="Logo" class="w-[50%] mx-auto rounded-full my-4">
                </div>
                <SideItem class="my-2"/>
                <div class="toolbar-items flex items-center gap-1 sm:hidden p-3">
                    <Link href="/logout" method="POST" as="button" class="text-sm px-2 py-1 rounded-md shadow-lg text-white bg-red-400">Logout</Link>
                </div>
            </el-aside>
            <el-container class="grid col-span-12 sm:col-span-10  h-[89vh] sm:px-4 relative">
                <el-header class="w-full py-2 px-3 flex items-center justify-between bg-white rounded-xl shadow-lg">
                    <div class="logo flex items-center gap-1">
                        
                        <slot name="page-title" />
                    </div>
                    <div class="toolbar-items sm:flex items-center gap-1 ">
                        <Link href="/logout" as="button" method="POST" class="text-sm px-2 py-1 rounded-md shadow-lg text-white bg-red-400 hidden sm:flex">Logout</Link>
                        <button @click="toggleSide" class="sm:hidden">
                            <Icon icon="mdi:menu" class="text-xl text-sky-800" />
                        </button>
                    </div>
                </el-header>
                <el-main class="h-full overflow-y-auto my-6 bg-white rounded-xl p-3 shadow-xl ">
                    <slot />
                </el-main>
                <el-footer class=" flex justify-center fixed left-[50%] bottom-0" >
                    <p class="text-sm py-2 px-4 bg-slate-200 rounded-t-lg shadow-lg text-sltae-500">Copyright &copy; {{ new Date().getFullYear() }} <a href="https://matsoleh.my.id" class="text-purple-600 hover:underline">Matsoleh</a></p>
                </el-footer>
            </el-container>
        </el-container>
    </div>
  </template>
  
