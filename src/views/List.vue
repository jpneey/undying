<script setup>

  import data from '@/assets/dat.movies.json';
  import { ref, onMounted } from 'vue';
  import { RouterLink } from 'vue-router';
  import { watchlistKey, getMovies, addMovie, removeMovie } from '@/assets/watchlist';

</script>

<template>
  <div class="page-wrap">
    <div class="page directory d-block bg-black text-white h-100">
      <div class="container position-relative">
        <div class="row">
          
          <div class="col col-12">
            <div class="text-center text-md-start">
              <!-- <Crumbs :links="crumbs"></Crumbs> -->
              <h1>Almanac</h1>
            </div>
          </div>
          
          <div class="col col-12">
            {{ watchlistKey }}
            <hr>
            {{ getMovies()}}
            <hr>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>