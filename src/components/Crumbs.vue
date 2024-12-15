<script setup>
  
  const props = defineProps(['links']);

</script>

<template>
  <nav>
    <ol class="breadcrumb">
      <template v-for="link in props.links">
        <li class="me-2"><RouterLink :to="link.url">{{ link.title }}</RouterLink></li>
      </template>
    </ol>
  </nav>
</template>
