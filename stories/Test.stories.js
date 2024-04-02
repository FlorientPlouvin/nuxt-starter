import { within, userEvent, expect } from "@storybook/test";
import MyTest from "./Test.vue";

export default {
  title: "Example/Test",
  component: MyTest,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
};

export const Test = {};
