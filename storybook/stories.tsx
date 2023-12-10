import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ThemedDigitalClock from '../src/ThemedDigitalClock';

const style: React.CSSProperties = {
  height: 200,
};

const meta: Meta<typeof ThemedDigitalClock> = {
  title: 'ThemedDigitalClock',
  component: ThemedDigitalClock,
} as Meta<typeof ThemedDigitalClock>;
export default meta;
type Story = StoryObj<typeof ThemedDigitalClock>;

export const UsingTheLightTheme = () => (
  <div style={style}>
    <ThemedDigitalClock description="light theme" useDarkTheme={false} />
  </div>
);

export const UsingTheDarkTheme = () => (
  <div style={style}>
    <ThemedDigitalClock description="dark theme" useDarkTheme={true} />
  </div>
);

export const WithoutADescription = () => (
  <div style={style}>
    <ThemedDigitalClock />
  </div>
);

export const WithADescriptionUsingAPlaceholderForUsedTimezone = () => (
  <div style={style}>
    <ThemedDigitalClock description='The time in timezone "{}"' />
  </div>
);

export const UsingTheBrowserTimezone = () => (
  <div style={style}>
    <ThemedDigitalClock description="Your browser's time ({})" />
  </div>
);

export const UsingASpecifiedTimezone = () => (
  <div style={style}>
    <ThemedDigitalClock
      timezoneName={'America/New_York'}
      description={'The time now in New York'}
    />
  </div>
);

export const Using24h = () => (
  <div style={style}>
    <ThemedDigitalClock description="Using 0 to 23 for hours" use24h={true} />
  </div>
);
Using24h.storyName = 'Using 24h';

export const ChangeAmToPmAtNoon = () => (
  <div style={style}>
    <ThemedDigitalClock
      description="Change AM to PM at noon"
      date={new Date(2019, 6, 1, 11, 59, 58)}
    />
  </div>
);
ChangeAmToPmAtNoon.storyName = 'Change AM to PM at noon';

export const ChangePmToAmAtMidnight = () => (
  <div style={style}>
    <ThemedDigitalClock
      description="Change PM to AM at midnight"
      date={new Date(2019, 6, 1, 23, 59, 58)}
    />
  </div>
);
ChangePmToAmAtMidnight.storyName = 'Change PM to AM at midnight';
