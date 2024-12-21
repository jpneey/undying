<script setup>
  import { RouterLink } from 'vue-router';
  import collection from '@/assets/dat.collections.json';

</script>

<template >
  <div class="latest bg-black border-top border-dark text-light position-relative overflow-hidden">
    <div class="spacing container position-relative">
      <div class="row align-items-center">
        <div class="col col-12 text-md-center">
          <p class="subtitle mb-0">Spotlight</p>
          <h2 class="mb-4">Collections</h2>
        </div>
        <div class="col col-12">
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4" v-for="media in collection">
              <div class="border border-dark maybe-rounded p-4">
                <div class="row align-items-center position-relative">
                  <div class="col col-12 col-md-4">
                    <RouterLink :to="'/'+media.slug" class="box d-block position-relative overflow-hidden maybe-rounded">
                      <div class="position-absolute top-50 start-50 translate-middle w-100 h-100 poster" :style="{ backgroundImage: 'url(./poster/' + media.poster + ')' }">
                      </div>
                      <div class="play position-absolute bottom-0 start-0 m-3"></div>
                    </RouterLink>
                  </div>
                  <div class="col col-12 col-md-8 mt-4 mt-md-0">
                    <div class="ps-md-4 text-white">
                      <h5>{{ media.title }}</h5>
                      <p class="subtitle">{{ media.content }}</p>
                      <span class="button">Coming soon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
