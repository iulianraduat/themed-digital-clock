import * as moment from 'moment-timezone';
import * as React from 'react';
import DigitalClock from './DigitalClock';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: '100%',
    width: '100%',
    textAlign: 'center'
  },
  darkTheme: {
    backgroundColor: '#222222',
    color: '#7fffd4'
  },
  lightTheme: {
    backgroundColor: '#ffffff',
    color: '#000000'
  }
};

const getTheme = (useDarkTheme: boolean, style: React.CSSProperties = {}): React.CSSProperties => ({
  ...styles.container,
  ...(useDarkTheme ? styles.darkTheme : styles.lightTheme),
  ...style
});

let timeoutCall: NodeJS.Timeout | undefined = undefined;

const ThemedDigitalClock = ({
  date,
  description,
  style,
  timezoneName,
  useDarkTheme,
  use24h = false
}: ThemedDigitalClockProps): JSX.Element => {
  const [hours, setHours] = React.useState<number>(date ? date.getHours() : -1);
  const [minutes, setMinutes] = React.useState<number>(date ? date.getMinutes() : -1);
  const [seconds, setSeconds] = React.useState<number>(date ? date.getSeconds() : -1);

  const resolvedTimezoneName = timezoneName ? timezoneName : Intl.DateTimeFormat().resolvedOptions().timeZone;
  let timeoutCall: NodeJS.Timeout;

  if (date) {
    const atEachSecond = React.useCallback(
      (crtHours: number, crtMinutes: number, crtSeconds: number) => {
        const newSeconds = (crtSeconds + 1) % 60;
        const newMinutes = newSeconds == 0 ? (crtMinutes + 1) % 60 : crtMinutes;
        const newHours = newSeconds == 0 && newMinutes == 0 ? (crtHours + 1) % 24 : crtHours;
        setHours(newHours);
        setMinutes(newMinutes);
        setSeconds(newSeconds);

        if (timeoutCall) {
          clearTimeout(timeoutCall);
        }
        timeoutCall = setTimeout(() => {
          atEachSecond(newHours, newMinutes, newSeconds);
        }, 1000);
      },
      [setHours, setMinutes, setSeconds]
    );

    React.useEffect(() => {
      atEachSecond(hours, minutes, seconds);

      return () => {
        if (timeoutCall) {
          clearTimeout(timeoutCall);
        }
      };
    }, [atEachSecond]);
  } else {
    const atEachSecond = React.useCallback(() => {
      const timeInTimezone = moment().tz(resolvedTimezoneName);
      const newSeconds = timeInTimezone.get('seconds');
      const newMinutes = timeInTimezone.get('minutes');
      const newHours = timeInTimezone.get('hours');
      const hourInAm = newHours < 12;
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      const now = new Date();
      const start: Date = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        now.getHours(),
        now.getMinutes(),
        now.getSeconds() + 1,
        0
      );

      const wait = start.getTime() - now.getTime();
      if (wait <= 0) {
        /* Missed before going into the setTimeout */
        atEachSecond();
        return;
      }

      if (timeoutCall) {
        clearTimeout(timeoutCall);
      }
      timeoutCall = setTimeout(() => {
        atEachSecond();
      }, wait);
    }, [resolvedTimezoneName, setHours, setMinutes, setSeconds]);

    React.useEffect(() => {
      atEachSecond();

      return () => {
        if (timeoutCall) {
          clearTimeout(timeoutCall);
        }
      };
    }, [atEachSecond]);
  }

  useDarkTheme = useDarkTheme === true;
  description = description ? description.replace('{}', resolvedTimezoneName) : undefined;

  return (
    <div style={getTheme(useDarkTheme, style)}>
      <DigitalClock hours={hours} minutes={minutes} seconds={seconds} useDarkTheme={useDarkTheme} use24h={use24h} />
      <div>{description}</div>
    </div>
  );
};

export interface ThemedDigitalClockProps {
  date?: Date;
  description?: string;
  style?: React.CSSProperties;
  timezoneName?: string;
  useDarkTheme?: boolean;
  use24h?: boolean;
}

export default ThemedDigitalClock;
