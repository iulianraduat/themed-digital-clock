import * as React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'inline-flex',
    height: '100%',
    justifyContent: 'center'
  },
  halfLower: {
    height: '50%',
    whiteSpace: 'nowrap'
  },
  halfUpper: {
    height: '45%',
    whiteSpace: 'nowrap'
  },
  rightSide: {
    marginLeft: '1%'
  },
  space: {
    width: '5%'
  }
};

const DigitalClockLayout: React.FC<DigitalClockLayoutProps> = React.memo(({ amPm, hl, hu, ml, mu, sl, style, su }) => (
  <div style={{ ...style, ...styles.container }}>
    {hu}
    {hl}
    <div style={styles.space} />
    {mu}
    {ml}
    <div style={styles.rightSide}>
      <div style={styles.halfUpper}>{amPm || <div />}</div>
      <div style={styles.halfLower}>
        {su}
        {sl}
      </div>
    </div>
  </div>
));

interface DigitalClockLayoutProps {
  amPm?: JSX.Element;
  hl: JSX.Element;
  hu: JSX.Element;
  ml: JSX.Element;
  mu: JSX.Element;
  sl: JSX.Element;
  style: React.CSSProperties;
  su: JSX.Element;
}

export default DigitalClockLayout;
