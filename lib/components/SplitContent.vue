<template>
  <div>
    <div v-split-content="content" :data-property="content.property">
      HELLO
      <!--      <SplitColumn></SplitColumn>-->
      <!--      <split-column-->
      <!--        :class="`sm:w-${content.width}/12`"-->
      <!--        :content="content.contents.left"-->
      <!--        :whitelist="whitelistLeftSplit"-->
      <!--      ></split-column>-->
      <!--      <div :class="`w-${content.gap}/12`">&nbsp;</div>-->
      <!--      <split-column-->
      <!--        :class="`sm:w-${12 - content.width - content.gap}/12`"-->
      <!--        :content="content.contents.right"-->
      <!--        :whitelist="whitelistRightSplit"-->
      <!--      ></split-column>-->
    </div>
  </div>
</template>

<script>
// import SplitColumn from './SplitContent/Column';

export default {
  name: 'SplitContent',
  // components: { SplitColumn },
  props: {
    content: {
      type: Object,
      default: () => ({
        left: [],
        right: [],
        inContainer: false,
        width: 5,
        gap: 0,
      }),
    },
    whitelistLeftSplit: {
      type: String,
      default: '',
    },
    whitelistRightSplit: {
      type: String,
      default: '',
    },
  },
};
</script>
