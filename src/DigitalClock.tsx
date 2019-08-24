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

interface Theme {
  backgroundColor: string;
  digitColor: string;
}

const DigitalClock = ({ hours, minutes, seconds, useDarkTheme, use24h }: RenderDigitalClockProps): JSX.Element => {
  const theme: Theme = useDarkTheme ? styles.darkTheme : styles.lightTheme;

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
      style={theme}
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
  hours: number;
  minutes: number;
  seconds: number;
  useDarkTheme: boolean;
  use24h: boolean;
}

export default DigitalClock;
