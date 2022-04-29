import Vue from 'vue';

import EditorComponent from './components/SplitContent/Editor';
import SplitContent from './components/SplitContent';

Vue.component(`SplitContent`, SplitContent);

export default async function ({ $whppt }) {
  const splitContent = {
    name: 'SplitContent',
    editors: [
      {
        name: 'split-content',
        label: 'Split Content',
        component: EditorComponent,
      },
    ],
  };

  await $whppt.addPlugin(splitContent);
}
