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
      placeholder="6"
      min="0"
      max="10"
      info="Sets the first column's width. Calculated in 12ths, e.g. 2 = 2/12, 5 = 5/12"
      @input="setSelectedComponentState({ value: $event, path: 'width' })"
    />
    <whppt-number-input
      :id="`${$options._scopeId}-split-content-gap`"
      :value="selectedComponent.value.gap"
      :label="`Gap ${usePixelGap ? '' : 'column'} width`"
      placeholder="1"
      min="0"
      max="5"
      :info="`Sets the width of the gap between the columns. 
      ${usePixelGap ? '' : 'Calculated in 12ths, e.g. 2 = 2/12, 5 = 5/12'}`"
      @input="setSelectedComponentState({ value: $event, path: 'gap' })"
    />
    <div>
      <whppt-checkbox
        label="Toggle Full Width"
        :value="selectedComponent.value.fullWidth"
        style="padding: 1rem 0"
        @change="setSelectedComponentState({ value: $event, path: 'fullWidth' })"
      ></whppt-checkbox>
      <whppt-checkbox
        label="Reverse Desktop Content"
        :value="selectedComponent.value.reverse.desktop"
        style="padding: 1rem 0"
        @change="setSelectedComponentState({ value: $event, path: 'reverse.desktop' })"
      ></whppt-checkbox>
      <whppt-checkbox
        label="Reverse Mobile Content"
        :value="selectedComponent.value.reverse.mobile"
        style="padding: 1rem 0"
        @change="setSelectedComponentState({ value: $event, path: 'reverser.mobile' })"
      ></whppt-checkbox>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import WhpptNumberInput from '@whppt/nuxt/lib/components/ui/components/NumberInput.vue';
import WhpptButton from '@whppt/nuxt/lib/components/ui/components/Button.vue';
import WhpptCheckbox from '@whppt/nuxt/lib/components/ui/components/Checkbox.vue';

import Columns from '../icons/Columns';
import Padding from '../icons/Padding';

export default {
  name: 'SplitContentGapEditor',
  components: { WhpptNumberInput, WhpptButton, Columns, Padding, WhpptCheckbox },
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
