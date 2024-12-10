<script setup>
  
  import { ref } from 'vue';
  
  const props = defineProps(['dat']);

</script>

<template>
    <div class="preview position-fixed bottom-0 start-0 w-100 text-white">
        <div class="container py-4 py-md-5 px-4">
            <div class="row py-md-5 align-items-center">
                <div class="col col-12 col-md-5 mb-4 mb-md-0">
                    <div class="poster" :style="{ backgroundImage: 'url(./poster/' + props.dat.poster + ')' }"></div>
                </div>
                <div class="col col-12 col-md-7">
                    <div class="ps-md-4">
                        <h3>{{ props.dat.title }}</h3>
                        <p>{{ props.dat.year }}</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit excepturi aliquid, quod corrupti harum vel. Dolore, natus necessitatibus quae quaerat facere esse alias voluptatibus. Exercitationem iste possimus recusandae a ducimus.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
