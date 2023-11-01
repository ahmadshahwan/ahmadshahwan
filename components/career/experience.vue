<template>
  <div class="experience">
    <div class="header">
    <span class="period">
      <slot name="period"></slot>
    </span>
      <span class="job-title">
      <slot name="job-title"></slot>
    </span>
      <span class="client">
      <slot name="partner"></slot>
    </span>
    </div>
    <div class="description">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: row;

    .period {
      order: 3;
      margin-left: auto;
      font-weight: bold;
    }

    .job-title {
      order: 1;
      width: 20em;
      font-weight: bold;
    }

    .client {
      order: 2;
    }
  }

  .description {
    padding-bottom: .75em;
  }
}
</style>
