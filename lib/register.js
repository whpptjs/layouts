import SplitContent from './components/SplitContent.vue';

export default function (Vue, options = {}) {
  options.prefix = options.prefix || 'layout-';
  Vue.component(`${options.prefix}split-content`, SplitContent);
}
