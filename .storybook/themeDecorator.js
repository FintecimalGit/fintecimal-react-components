import React from 'react';
import Theme from '../src/theme';

const ThemeDecorator = storyFn => <Theme>{storyFn()}</Theme>;

export default ThemeDecorator;
