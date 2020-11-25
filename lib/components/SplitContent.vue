<template>
  <div>
    <!-- This comment is in place in the case that you are using purgecss to optimise bundle size in production environments.
      See: https://tailwindcss.com/docs/optimizing-for-production
      PURGE CLASSES to be included for dynamic width:
      md:w-1/12 md:w-2/12 md:w-3/12 md:w-4/12 md:w-5/12 md:w-6/12 md:w-7/12 md:w-8/12 md:w-9/12 md:w-10/12 md:w-11/12 md:w-12/12
      w-1/12 w-2/12 w-3/12 w-4/12 w-5/12 w-6/12 w-7/12 w-8/12 w-9/12 w-10/12 w-11/12 w-12/12
    -->
    <div v-split-content="content">
      <span v-if="activeMenuItem" class="whppt-layouts__settings">Split Content Settings</span>
      <div class="whppt-layouts__split-content">
        <w-content
          class="whppt-layouts__content whppt-layouts__content--left"
          :class="`md:w-${content.width}/12`"
          :content-items="content.left"
          :container="false"
          :whitelist="whitelist"
        />
        <div v-if="content.gap" class="whppt-layouts__gap" :class="`w-${content.gap}/12`">&nbsp;</div>
        <w-content
          class="whppt-layouts__content whppt-layouts__content--right"
          :class="`md:w-${12 - content.width - content.gap}/12`"
          :content-items="content.right"
          :container="false"
          :whitelist="whitelist"
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
    whitelist: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    ...mapState('whppt-nuxt/editor', ['activeMenuItem']),
  },
};
</script>

<style lang="scss" scoped>
$gray-500: #a0aec0;

.whppt-layouts__settings {
  cursor: pointer;
  font-size: 0.75rem;
  font-style: italic;
  color: $gray-500;
}

@media (min-width: 768px) {
  .whppt-layouts__split-content {
    display: flex;
  }
}
</style>
