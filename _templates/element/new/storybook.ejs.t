---
to: src/elements/<%= h.changeCase.lower(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.ts
---
import type { Meta, StoryObj } from '@storybook/react';
import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof <%= h.changeCase.pascalCase(name) %>> = {
  component: <%= h.changeCase.pascalCase(name) %>,
};

export default meta;
type Story = StoryObj<typeof <%= h.changeCase.pascalCase(name) %>>;

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