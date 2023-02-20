<template>
  <div :class="{ container }">
    <div
      :class="{
        'reverse-desktop': content.reverse.desktop,
        'reverse-mobile': content.reverse.mobile,
      }"
    >
      <!-- This comment is in place in the case that you are using purgecss to optimise bundle size in production environments.
      See: https://tailwindcss.com/docs/optimizing-for-production
      PURGE CLASSES to be included for dynamic width:
      md:w-1/12 md:w-2/12 md:w-3/12 md:w-4/12 md:w-5/12 md:w-6/12 md:w-7/12 md:w-8/12 md:w-9/12 md:w-10/12 md:w-11/12 md:w-12/12
      w-1/12 w-2/12 w-3/12 w-4/12 w-5/12 w-6/12 w-7/12 w-8/12 w-9/12 w-10/12 w-11/12 w-12/12
    -->
      <div v-split-content="content">
        <span v-if="activeMenuItem" class="whppt-layouts__settings">Split Content Settings</span>
        <div
          class="whppt-layouts__split-content"
          :class="{ 'whppt-layouts__split-content--match-heights': content.matchHeight }"
        >
          <w-content
            class="whppt-layouts__content whppt-layouts__content--left"
            :class="`md:${leftColumnWidth}`"
            :content-items="content.left"
            :in-split-content="true"
            :container="false"
            :whitelist="whitelist"
          />
          <div v-if="content.gap && content.gap !== '0'" class="whppt-layouts__gap" :class="gapWidth">&nbsp;</div>
          <w-content
            class="whppt-layouts__content whppt-layouts__content--right"
            :class="`md:${rightColumnWidth}`"
            :content-items="content.right"
            :in-split-content="true"
            :container="false"
            :whitelist="whitelist"
          />
        </div>
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
      default: () => [],
    },
    container: { type: Boolean, default: false },
  },
  data: () => ({
    paddingSizes: {
      1: 4,
      2: 16,
      3: 24,
      4: 32,
      5: 48,
      6: 64,
    },
  }),
  computed: {
    ...mapState('whppt/editor', ['activeMenuItem']),
    leftColumnWidth() {
      if (this.content.usePixelGap) return 'w-full';
      return `w-${this.content.width}/12`;
    },
    rightColumnWidth() {
      if (this.content.usePixelGap) return 'w-full';
      return `w-${12 - this.content.width - this.content.gap}/12`;
    },
    gapWidth() {
      if (this.content.usePixelGap) return `px-${this.paddingSizes[this.content.gap] || 0}`;
      return `w-${this.content.gap}/12`;
    },
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

.whppt-layouts__split-content {
  display: flex;
  flex-direction: column;
}
.reverse-mobile {
  .whppt-layouts__split-content {
    flex-direction: column-reverse;
  }
}
@media (min-width: 768px) {
  .whppt-layouts__split-content {
    display: flex;
    flex-direction: row;
  }
  .reverse-mobile .whppt-layouts__split-content {
    flex-direction: row;
  }
  .reverse-desktop {
    .whppt-layouts__split-content {
      flex-direction: row-reverse;
    }
  }
}
</style>
