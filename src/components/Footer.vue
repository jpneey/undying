<script setup>
    import Circle from './Circle.vue';
</script>

<template>
    <div class="bg-black text-light border-top border-dark position-relative overflow-hidden p-4">
        <div class="footer-wrap maybe-rounded bg-dark opacity-75 p-3 px-4 px-md-5 position-relative overflow-hidden">
            <div class="position-absolute top-0 end-0 circle-wrap" style="--i: 1;"><Circle></Circle></div>
            <div class="position-absolute top-0 end-0 circle-wrap" style="--i: 1.4;"><Circle></Circle></div>
            <div class="position-relative">
                <div class="row">
                    <div class="col col-7 col-md-4 mb-2 mb-md-0">
                        <span class="subtitle"><small>Undying. by JP Burato</small></span>
                    </div>
                    <div class="col col-7 col-md-4 text-md-center">
                        <span class="subtitle"><small>Made with 🤍 and Vue.js</small></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>