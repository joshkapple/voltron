import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FinderFormComponent } from './finder-form.component';

export default {
  title: 'FinderFormComponent',
  component: FinderFormComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FinderFormComponent>;

const Template: Story<FinderFormComponent> = (args: FinderFormComponent) => ({
  component: FinderFormComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}