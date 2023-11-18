<template>
  <div class="scrollable" :style="scrollableStyle">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

type Props = {
  maxHeight?: string;
}

const props = defineProps<Props>();

const scrollableStyle = {
  maxHeight: props.maxHeight,
};

</script>

<style scoped>
.scrollable {
  max-height: 350px;
  overflow-y: scroll;
  margin-bottom: 15px;
  padding-right: 4px;
  scrollbar-width: thin;
}

::-webkit-scrollbar {
  width: 2px;
}

::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border-radius: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background: #505050;
}
</style>
