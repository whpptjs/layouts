<template>
  <div>
    <div v-split-content="content">
      <span v-if="activeMenuItem" class="whppt-layouts__settings">Split Content Settings</span>
      <div class="whppt-layouts__split-content">
        <w-content
          class="whppt-layouts__content whppt-layouts__content--left"
          :class="`sm:w-${content.width}/12`"
          :content-items="content.left"
        />
        <div v-if="content.gap" class="whppt-layouts__gap" :class="`w-${content.gap}/12`">&nbsp;</div>
        <w-content
          class="whppt-layouts__content whppt-layouts__content--right"
          :class="`sm:w-${12 - content.width - content.gap}/12`"
          :content-items="content.right"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SplitContent',
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('whppt-nuxt/editor', ['activeMenuItem']),
  },
};
</script>

<style lang="scss" scoped>
$gray-500: #a0aec0;

.whppt-layouts__split-content {
  display: flex;
}

.whppt-layouts__settings {
  cursor: pointer;
  font-size: 0.75rem;
  font-style: italic;
  color: $gray-500;
}
</style>
