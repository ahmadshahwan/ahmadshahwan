<template>
  <h3>{{ props.title }}</h3>
  <slot></slot>
</template>

<script setup lang="ts">
type Props = {
  title: string;
}

const props = defineProps<Props>();
</script>

<style scoped>

</style>
