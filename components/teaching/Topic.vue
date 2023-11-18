<template>
  <h4>{{ props.title }}</h4>
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
