<script setup>

    import { onMounted, ref } from 'vue';

    const props = defineProps(['text', 'count']);
    const text  = ref( 'Undying.Undying.Undying.Undying.Undying.Undying.' );

    const prepText = () => {
        var str = props.text || 'Undying.';
        var cnt = props.count || 6;
        return str.repeat( cnt )
    }

    onMounted(()=>{
        text.value = prepText();
    })
</script>

<template>
    <div class="textContainer" aria-hidden="true">
        <span style="--i: 0;">{{ text }}</span>
        <span style="--i: 1;">{{ text }}</span>
        <span style="--i: 2;">{{ text }}</span>
        <span style="--i: 3;">{{ text }}</span>
        <span style="--i: 4;">{{ text }}</span>
        <span style="--i: 5;">{{ text }}</span>
        <span style="--i: 6;">{{ text }}</span>
        <span style="--i: 7;">{{ text }}</span>
        <span style="--i: 8;">{{ text }}</span>
        <span style="--i: 9;">{{ text }}</span>
        <span style="--i: 10;">{{ text }}</span>
        <span style="--i: 11;">{{ text }}</span>
        <span style="--i: 12;">{{ text }}</span>
        <span style="--i: 13;">{{ text }}</span>
        <span style="--i: 14;">{{ text }}</span>
        <span style="--i: 15;">{{ text }}</span>
        <span style="--i: 16;">{{ text }}</span>
        <span style="--i: 17;">{{ text }}</span>
        <span style="--i: 18;">{{ text }}</span>
        <span style="--i: 19;">{{ text }}</span>
        <span style="--i: 20;">{{ text }}</span>
        <span style="--i: 21;">{{ text }}</span>
        <span style="--i: 22;">{{ text }}</span>
        <span style="--i: 23;">{{ text }}</span>
    </div>
</template>