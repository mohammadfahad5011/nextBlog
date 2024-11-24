import type { Meta, StoryObj } from '@storybook/react';
import CompanyListing from './CompanyListing';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CompanyListing> = {
  component: CompanyListing,
};

export default meta;
type Story = StoryObj<typeof CompanyListing>;

export const Primary: Story = {
  args: {
    //variant: 'primary',
  },
  parameters: {
       design: {
          type: 'figma',
          url: 'https://www.figma.com/file/hnikXBi0wGJVBI4eieHOoI/New-website-2023?type=design&node-id=308-16&mode=design&t=P0HcU6C65TzRpSD4-0'
       }
    }
};