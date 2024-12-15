<script setup>

  import data from '@/assets/dat.movies.json';
  import { ref } from 'vue';

  const a2z = () => {
    return data.sort( function( a, b) {
      return a.title < b.title ? -1 : 1;
    })
  }

  const media = ref( a2z() );


</script>

<template>
  <div class="directory d-block bg-black text-white h-100">
    <div class="container">
      <div class="row">
        <div class="col col-12">
          <ul>
            <template v-for="item in media">
              <li>{{ item.title }}</li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>