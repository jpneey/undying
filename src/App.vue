<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';

const menu_active = ref( false );

</script>

<template>
  <header :class="{ 'on' : menu_active }" class="position-fixed top-0 end-0 p-4 p-lg-5">
    <span class="menu d-block position-relative overflow-hidden" @click="menu_active = !menu_active">
      <i class="position-absolute w-100 top-0 start-0 one"></i>
      <i class="position-absolute w-100 top-50 start-0 translate-middle-y two"></i>
      <i class="position-absolute w-100 bottom-0 start-0 three"></i>
    </span>
    <nav class="main-nav position-fixed top-0 end-0 p-5 d-flex align-items-center flex-wrap">
      <div class="d-block text-center w-100" @click="menu_active = !menu_active">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/directory">Directory</RouterLink>
      </div>
    </nav>
  </header>
  <RouterView />
</template>


