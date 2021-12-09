import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ProgramDetailComponent } from './program-detail.component';

export default {
  title: 'ProgramDetailComponent',
  component: ProgramDetailComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ProgramDetailComponent>;

const Template: Story<ProgramDetailComponent> = (args: ProgramDetailComponent) => ({
  component: ProgramDetailComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}