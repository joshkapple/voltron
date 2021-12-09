import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { MilesTestComponent } from './miles-test.component';

export default {
  title: 'MilesTestComponent',
  component: MilesTestComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<MilesTestComponent>;

const Template: Story<MilesTestComponent> = (args: MilesTestComponent) => ({
  component: MilesTestComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}