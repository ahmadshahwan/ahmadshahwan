<template>
  <div class="head">
    <h3>{{ props.title }}</h3>
    <img v-if="props.image" :src="props.image" :alt="props.alt ?? props.title" />
  </div>
  <slot></slot>
</template>

<script setup lang="ts">
type Props = {
  title: string;
  image?: string;
  alt?: string;
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>

.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;

  img {
    width: 32px;
    height: 32px;
  }
}

</style>
