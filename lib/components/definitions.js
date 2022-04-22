import SplitContent from './SplitContent/definition';

export default function (definitions, prefix = '') {
  const splitContent = SplitContent(definitions, prefix);
  return [splitContent];
}
