import MoveToLayer from './MoveToLayer.vue';

export default {
    title: 'MoveToLayer',
    component: MoveToLayer,
  };

const Template = (args) => ({
  components: { MoveToLayer },
  setup() { return { args }; },
  template: '<MoveToLayer v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = { name: 'Move To', x: 0, y: 0 };
