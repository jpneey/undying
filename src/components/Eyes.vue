<script setup>

    import Circle from './Circle.vue';

    const props = defineProps(['text', 'count']);
    const text  = props.text;
    const count = props.count;

</script>

<template>
    <div class="latest bg-black text-light position-relative overflow-hidden footer">
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 1;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 1.4;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 1.8;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 2.3;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 2.8;"><Circle :text :count></Circle :text :count></div>
        <!-- <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 3.4;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 4.1;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 5;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 6.2;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 7.3;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 8.5;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 9.8;"><Circle :text :count></Circle :text :count></div>
        <div class="position-absolute top-50 start-50 circle-wrap" style="--i: 12;"><Circle :text :count></Circle :text :count></div> -->
    </div>
</template>