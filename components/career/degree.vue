<template>
  <div class="degree">
    <div class="icon">
      <img class="thumbnail" :src="props.image" :alt="props.name">
    </div>
    <div class="details">
      <div class="line">
        <div class="year">
          <slot name="year"></slot>
        </div>
        <div class="academic-title">
          <slot name="academic-title"></slot>
        </div>
      </div>
      <div class="line">
        <div>&nbsp;</div>
        <div class="institution">
          <slot name="institution"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

type Props = {
  name: string;
  image: string;
};

const props = defineProps<Props>();

</script>

<style lang="scss" scoped>
.degree {
  display: flex;
  flex-direction: row;
  padding-bottom: .75em;

  .icon {
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;

    .thumbnail {
      height: 32px;
      width: 32px;
    }
  }

  .details {
    flex-direction: column;
    width: 100%;


    div.line {
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
}
</style>
