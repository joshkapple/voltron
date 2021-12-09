import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ApfHeaderComponent } from './apf-header.component';

export default {
  title: 'ApfHeaderComponent',
  component: ApfHeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ApfHeaderComponent>;

const Template: Story<ApfHeaderComponent> = (args: ApfHeaderComponent) => ({
  component: ApfHeaderComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}