<script setup>
    
    import { RouterLink } from 'vue-router';
    const props = defineProps(['dat']);

</script>

<template>
    <div class="preview position-fixed bottom-0 start-0 w-100 text-white">
        <div class="container py-4 py-md-5 px-4">
            <div class="row py-md-5 align-items-center">
                <div class="col col-12 col-md-5 mb-4 mb-md-0">
                    <div class="poster" :style="{ backgroundImage: 'url(/src/assets/poster/' + props.dat.poster + ')' }"></div>
                </div>
                <div class="col col-12 col-md-7">
                    <div class="ps-md-4">
                        <h3>{{ props.dat.title }}</h3>
                        <p class="subtitle">{{ props.dat.year }} &mdash; {{ props.dat.meta.type }}</p>
                        <p>{{ props.dat.content }}</p>

                        <RouterLink :to="'/z/' + props.dat.slug + '/'" class="button d-inline-block mt-2" :title="props.dat.title">Inspect</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
