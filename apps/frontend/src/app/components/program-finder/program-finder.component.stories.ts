import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ProgramFinderComponent } from './program-finder.component';

export default {
  title: 'ProgramFinderComponent',
  component: ProgramFinderComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ProgramFinderComponent>;

const Template: Story<ProgramFinderComponent> = (args: ProgramFinderComponent) => ({
  component: ProgramFinderComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}