<template>
  <div>
    <!-- component values exceeding min-max -->
    <whppt-text-input
      id="split-content-width"
      :value="selectedComponent.value.width"
      info="Sets the first column's width. Calculated in 12ths, e.g. 2 = 2/12, 5 = 5/12"
      placeholder="12"
      type="number"
      min="0"
      max="10"
      label="First column width"
      @input="clampInput($event, 'width', 0, 10)"
    />
    <whppt-text-input
      id="split-content-gap"
      :value="selectedComponent.value.gap"
      info="Sets the width of the gap between the columns. Calculated in 12ths, e.g. 2 = 2/12, 5 = 5/12"
      placeholder="5"
      type="number"
      min="0"
      max="5"
      label="Gap width"
      @input="clampInput($event, 'gap', 0, 5)"
    />
  </div>
</template>

<script>
import { clamp } from 'lodash';
import { mapActions, mapState } from 'vuex';

import WhpptTextInput from '@whppt/nuxt/lib/components/ui/Input.vue';

export default {
  name: 'SplitContentGapEditor',
  components: { WhpptTextInput },
  computed: {
    ...mapState('whppt-nuxt/editor', ['selectedComponent']),
  },
  methods: {
    ...mapActions('whppt-nuxt/editor', ['setSelectedComponentState']),
    clampInput(input, property, min, max) {
      if (input) this.setSelectedComponentState({ value: clamp(input, min, max), path: property });
    },
  },
};
</script>
