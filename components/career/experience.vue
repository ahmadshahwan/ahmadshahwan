<template>
  <div class="experience">
    <img class="thumbnail" :src="imageUrl" :alt="props.name"/>
    <div class="details">
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
  </div>
</template>

<script setup lang="ts">

type Props = {
  name: string;
  image?: string;
};

const props = defineProps<Props>();
const imageUrl = props.image ?? '/images/career/digamma.png';
</script>

<style scoped>
.experience {
  display: flex;
  flex-direction: row;

  .thumbnail {
    height: 32px;
    width: 32px;
    padding: 1px 10px 1px 1px;
  }

  .details {

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
        padding-bottom: 2px;
      }

      .client {
        order: 2;
      }
    }
  }

  .description {
    padding-bottom: .75em;
  }
}
</style>
