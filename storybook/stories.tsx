import * as React from 'react';
import ThemedDigitalClock from '../src/ThemedDigitalClock';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 200
};

storiesOf('ThemedDigitalClock', module)
  .add('using the light theme', () => {
    return (
      <div style={style}>
        <ThemedDigitalClock description="light theme" useDarkTheme={false} />
      </div>
    );
  })
  .add('using the dark theme', () => {
    return (
      <div style={style}>
        <ThemedDigitalClock description="dark theme" useDarkTheme={true} />
      </div>
    );
  })
  .add('without a description', () => (
    <div style={style}>
      <ThemedDigitalClock />
    </div>
  ))
  .add('with a description using a placeholder for used timezone', () => (
    <div style={style}>
      <ThemedDigitalClock description='The time in timezone "{}"' />
    </div>
  ))
  .add("using the browser's timezone", () => (
    <div style={style}>
      <ThemedDigitalClock description="Your browser's time ({})" />
    </div>
  ))
  .add('using a specified timezone', () => {
    return (
      <div style={style}>
        <ThemedDigitalClock timezoneName={'America/New_York'} description={'The time now in New York'} />
      </div>
    );
  })
  .add('using 24h', () => (
    <div style={style}>
      <ThemedDigitalClock description="Using 0 to 23 for hours" use24h={true} />
    </div>
  ))
  .add('change AM to PM at noon', () => (
    <div style={style}>
      <ThemedDigitalClock description="Change AM to PM at noon" date={new Date(2019, 6, 1, 11, 59, 58)} />
    </div>
  ))
  .add('change PM to AM at midnight', () => (
    <div style={style}>
      <ThemedDigitalClock description="Change PM to AM at midnight" date={new Date(2019, 6, 1, 23, 59, 58)} />
    </div>
  ));
