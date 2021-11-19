<template>
  <div>
    <div class="flex py-2">
      <whppt-button
        :pressed="!usePixelGap"
        style="border-top-right-radius: 0px; border-bottom-right-radius: 0px"
        @click="setSelectedComponentState({ value: false, path: 'usePixelGap' })"
      >
        <columns />
      </whppt-button>
      <whppt-button
        :pressed="usePixelGap"
        style="border-top-left-radius: 0px; border-bottom-left-radius: 0px"
        @click="setSelectedComponentState({ value: true, path: 'usePixelGap' })"
      >
        <padding />
      </whppt-button>
    </div>
    <whppt-number-input
      v-if="!usePixelGap"
      :id="`${$options._scopeId}-split-content-width`"
      :value="selectedComponent.value.width"
      label="First column width"
      placeholder="12"
      min="0"
      max="10"
      info="Sets the first column's width. Calculated in 12ths, e.g. 2 = 2/12, 5 = 5/12"
      @input="setSelectedComponentState({ value: $event, path: 'width' })"
    />
    <whppt-number-input
      :id="`${$options._scopeId}-split-content-gap`"
      :value="selectedComponent.value.gap"
      :label="`Gap ${usePixelGap ? '' : 'column'} width`"
      placeholder="5"
      min="0"
      max="5"
      :info="`Sets the width of the gap between the columns. 
      ${usePixelGap ? '' : 'Calculated in 12ths, e.g. 2 = 2/12, 5 = 5/12'}`"
      @input="setSelectedComponentState({ value: $event, path: 'gap' })"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import WhpptNumberInput from '@whppt/nuxt/lib/components/ui/components/NumberInput.vue';
import WhpptButton from '@whppt/nuxt/lib/components/ui/components/Button.vue';

import Columns from '../icons/Columns';
import Padding from '../icons/Padding';

export default {
  name: 'SplitContentGapEditor',
  components: { WhpptNumberInput, WhpptButton, Columns, Padding },
  computed: {
    ...mapState('whppt/editor', ['selectedComponent']),
    usePixelGap() {
      return this.selectedComponent.value.usePixelGap;
    },
  },
  methods: {
    ...mapActions('whppt/editor', ['setSelectedComponentState']),
  },
};
</script>
