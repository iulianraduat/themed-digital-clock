import * as React from 'react';

export interface ThemedDigitalClockProps extends React.Props<ThemedDigitalClock> {
  date?: Date;
  description?: string;
  size?: number | string;
  style?: React.CSSProperties;
  timezoneName?: string;
  useDarkTheme?: boolean;
  use24h?: boolean;
}

declare class ThemedDigitalClock extends React.Component<ThemedDigitalClockProps> {}

declare module 'themed-digital-clock' {}

export default ThemedDigitalClock;
