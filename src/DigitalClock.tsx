import * as React from 'react';
import DigitalClockLayout from './DigitalClockLayout';
import DigitalDigit, { DigitalDigitProps } from 'digital-digit';
import DisplayAmPm from './DisplayAmPm';

const styles: { [key: string]: Theme } = {
  darkTheme: {
    backgroundColor: '#222222',
    digitColor: '#00ff7f'
  },
  lightTheme: {
    backgroundColor: '#ffffff',
    digitColor: '#444444'
  }
};

interface Theme extends React.CSSProperties {
  digitColor: string;
}

const DigitalClock = ({
  height,
  hours,
  minutes,
  seconds,
  useDarkTheme,
  use24h,
  width
}: RenderDigitalClockProps): JSX.Element => {
  const theme: Theme = useDarkTheme ? styles.darkTheme : styles.lightTheme;
  const { digitColor, ...style } = theme;

  const isAm: boolean = hours < 12;

  if (use24h === false) {
    hours = getHourInAmPm(hours);
  }
  const hu = Math.floor(hours / 10);
  const hl = hours % 10;
  const mu = Math.floor(minutes / 10);
  const ml = minutes % 10;
  const su = Math.floor(seconds / 10);
  const sl = seconds % 10;

  return (
    <DigitalClockLayout
      hu={renderDigit(hu, theme.digitColor)}
      hl={renderDigit(hl, theme.digitColor)}
      mu={renderDigit(mu, theme.digitColor)}
      ml={renderDigit(ml, theme.digitColor)}
      su={renderDigit(su, theme.digitColor)}
      sl={renderDigit(sl, theme.digitColor)}
      amPm={use24h ? undefined : <DisplayAmPm displayAm={isAm} color={theme.digitColor} />}
      style={{ ...style, width, height }}
    />
  );
};

const getHourInAmPm = (hours: number) => {
  const newHours = hours % 12;
  return newHours === 0 ? 12 : newHours;
};

const renderDigit = (digit: number, color: string) => (
  <DigitalDigit digit={digit as Digit} color={color} opacitySegment={0.1} />
);

type Digit = DigitalDigitProps['digit'];

interface RenderDigitalClockProps {
  height?: number | string;
  hours: number;
  minutes: number;
  seconds: number;
  useDarkTheme: boolean;
  use24h: boolean;
  width?: number | string;
}

export default DigitalClock;
