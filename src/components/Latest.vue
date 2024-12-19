<script setup>
  import { RouterLink } from 'vue-router';
  import data from '@/assets/dat.spotlight.json';

</script>

<template >
  <div v-for="( item, index ) in data" :key="index" class="latest bg-black border-top border-dark text-light position-relative overflow-hidden" style="z-index: 0;">
    <div class="spacing container position-relative">
      <div class="row align-items-center">
        <div class="col col-12 col-md-5 my-4" :class="index % 2 != 0 ? 'order-md-2 offset-md-1 ' : ''">
          <p class="subtitle mb-0">Spotlight</p>
          <h2 class="mb-4">{{ item.title }}</h2>
          <p>{{ item.content }}</p>
          <RouterLink :to="'/' + item.slug" class="button d-none d-md-inline-block mt-3">Inspect</RouterLink>
        </div>
        <div class="col col-12 col-md-6" :class="index % 2 != 0 ? '' : 'offset-md-1'">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="bg poster-tall bg-dark maybe-rounded" :style="{ backgroundImage: 'url(./gallery/' + item.posters[0] + ')' }"></div>
            </div>
            <div class="col-12 col-md-6 d-flex flex-wrap">
              <div class="bg poster-small maybe-rounded bg-dark w-100" :style="{ backgroundImage: 'url(./gallery/' + item.posters[1] + ')' }"></div>
              <div class="bg poster-small maybe-rounded bg-dark w-100 mt-auto" :style="{ backgroundImage: 'url(./gallery/' + item.posters[2] + ')' }"></div>
            </div>
          </div>
          <RouterLink :to="'/' + item.slug" class="button d-md-none">Inspect</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
