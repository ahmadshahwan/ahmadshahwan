<template>
  <div class="experience">
    <div class="icon">
      <img class="thumbnail" :src="imageUrl" :alt="props.name"/>
    </div>
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
        <slot name="summary"></slot>
        <div v-show="!moreHidden"><slot name="more"></slot></div>
        <div class="more-less">
          <NuxtLink @click="toggleMore()">{{ moreHidden ? "more" : "less"}}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {Ref} from "@vue/reactivity";

type Props = {
  name: string;
  image?: string;
};

const props = defineProps<Props>();
const imageUrl = props.image ?? '/images/career/digamma.png';

const moreHidden: Ref<boolean> = ref(true);

const toggleMore = () => moreHidden.value = !moreHidden.value;
</script>

<style lang="scss" scoped>
.experience {
  display: flex;
  flex-direction: row;

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
    width: 100%;

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

    .more-less {
      text-align: right;
    }
  }
}
</style>
