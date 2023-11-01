<template>
  <div class="degree">
    <div>
      <div class="year">
        <slot name="year"></slot>
      </div>
      <div class="academic-title">
        <slot name="academic-title"></slot>
      </div>
    </div>
    <div>
      <div>&nbsp;</div>
      <div class="institution">
        <slot name="institution"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.degree {
  display: flex;
  flex-direction: column;
  padding-bottom: .75em;

  > div {
    display: flex;
    flex-direction: row;

    > div:first-child {
      width: 15em;
    }

    .academic-title {
      font-weight: bold;

    }
  }
}
</style>
