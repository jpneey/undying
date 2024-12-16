<script setup>
  
  import data from '@/assets/dat.movies.json';
  import { ref, onMounted, onUpdated } from 'vue';
  import { useRoute } from 'vue-router';
  
  const sauce   = ref( data[0] );
  const route   = useRoute();

  const prepareProject = () => {
    sauce.value = data.find( item => {
      return item.slug == route.params.slug;
    })
  }
  
  onMounted(()=> {
    prepareProject();
  })

  onUpdated(() => {
    prepareProject();
  });

</script>

<template>
  <div class="spacing pt-0 position-relative overflow-hidden">
    <div class="page-small sauce d-block bg-black text-white position-relative">
      <div class="position-absolute top-0 start-0 w-100 h-100">
        <div class="bg w-100 position-relative h-100" :style="{ backgroundImage: 'url(./poster/' + sauce.poster + ')' }"></div>
        <div class="sauce-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      </div>
      <div class="container px-0 position-relative">
        <div class="row">
          <div class="col col-12">
            <div class="text-center text-md-start">
              <div class="bg w-100 poster-offset position-relative h-100" :style="{ backgroundImage: 'url(./poster/' + sauce.poster + ')' }">
                <div class="content position-absolute bottom-0 start-0 w-100">
                  <div class="container">
                    <div class="row">
                      <div class="col col-12 col-md-6 offset-md-4 pt-5">
                        <p class="mb-0 subtitle">{{ sauce.year }} &mdash; {{ sauce.meta.type }}</p>
                        <h2 class="mb-0">{{ sauce.title }}</h2>
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
  </div>
  <div class="spacing pt-0 container">
    <div class="row">
      <div class="col col-12 col-md-4 order-2 text-md-end mt-4 mt-md-0">
        <div class="pe-md-4">
          <p class="subtitle mb-3"><small class="d-block opacity-75">Type</small>{{ sauce.meta.type }}</p>
          <p class="subtitle mb-3"><small class="d-block opacity-75">Released</small>{{ sauce.year }}</p>
          <p class="subtitle mb-3"><small class="d-block opacity-75">Director</small>{{ sauce.meta.director }}</p>
          <p class="subtitle mb-0"><small class="d-block opacity-75">Country</small>{{ sauce.meta.country }}</p>
        </div>
      </div>
      <div class="col col-12 col-md-6 order-md-2 mt-md-0">
        {{ sauce.content }}
      </div>
    </div>
  </div>

  <div class="position-relative overflow-hidden">
    <!-- <Carousel :dat="prepareRelated()"></Carousel> -->
  </div>
  
</template>
