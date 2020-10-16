<template>
  <div>
    <whppt-text-input
      :id="`${$options._scopeId}-split-content-width`"
      :value="selectedComponent.value.width"
      label="First column width"
      placeholder="12"
      type="number"
      min="0"
      max="10"
      info="Sets the first column's width. Calculated in 12ths, e.g. 2 = 2/12, 5 = 5/12"
      @input="setSelectedComponentState({ value: $event, path: 'width' })"
    />
    <whppt-text-input
      :id="`${$options._scopeId}-split-content-gap`"
      :value="selectedComponent.value.gap"
      label="Gap width"
      placeholder="5"
      type="number"
      min="0"
      max="5"
      info="Sets the width of the gap between the columns. Calculated in 12ths, e.g. 2 = 2/12, 5 = 5/12"
      @input="setSelectedComponentState({ value: $event, path: 'gap' })"
    />
  </div>
</template>

<script>
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
  },
};
</script>
