import EditorComponent from './components/SplitContent/Editor';

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
