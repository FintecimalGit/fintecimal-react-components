import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';

function loadStories() {
  require('../src/stories');
}

addDecorator(themeDecorator);
configure(loadStories, module);
