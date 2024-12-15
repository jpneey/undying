<script setup>

  import data from '@/assets/dat.movies.json';
  import { ref, onMounted } from 'vue';
  import Crumbs from '@/components/Crumbs.vue';

  const a2z = () => {
    return data.sort( function( a, b) {
      return a.title < b.title ? -1 : 1;
    })
  }

  const media = ref( a2z() );

  const defImage = ref( data[0].poster );

  function swapImage( image ) {
    defImage.value = image;
  }

  function animate() {
    const floatingImage = document.querySelector("div.floating");
    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;
    let speed = 0.05;
    function animate(){
      let distX = mouseX - ballX;
      let distY = mouseY - ballY;
      ballX = ballX + (distX * speed);
      ballY = ballY + (distY * speed);
      
      floatingImage.style.left = ballX + "px";
      floatingImage.style.top = ballY + "px";
      requestAnimationFrame(animate);
      
    }
    animate();
    document.addEventListener("mousemove", function(event){
      mouseX = event.clientX;
      mouseY = event.clientY;
    })
  }

  onMounted(() => {
    animate();
  });

  const crumbs = [
    {
      "url"   : "/",
      "title" : "Home"
    },
    {
      "url"   : "/directory",
      "title" : "Directory"
    }
  ]
</script>

<template>
  <div class="page directory d-block bg-black text-white h-100">
    <div class="container position-relative">
      <div class="row">
        <div class="col col-12">
          <div class="px-4 text-center text-md-start">
            <!-- <Crumbs :links="crumbs"></Crumbs> -->
            <h1>Almanac</h1>
          </div>
        </div>
        <div class="col col-12">
          <ul class="ps-5 pt-5 directory-list position-relative overflow-hidden">
            <div class="poster floating" :style="{ backgroundImage: 'url(./poster/' + defImage + ')' }"></div>
            <template v-for="item in media">
              <li class="mb-4 pb-4 border-bottom border-dark" @mouseover="swapImage( item.poster )" >
                <h3 class="directory-title">{{ item.title }}</h3>
                <p class="mb-0 d-flex align-items-center">{{ item.year }} <small class="ps-2 opacity-75">{{ item.meta.type }}</small></p>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>