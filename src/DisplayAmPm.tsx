import * as React from 'react';

const style: React.CSSProperties = {
  fontFamily: 'monospace'
};

const DisplayAmPm: React.FC<DisplayAmPmProps> = ({ color, displayAm }) => (
  <svg style={{ ...style, fill: color }} height="100%" viewBox="0 0 30 15">
    <text x="2" y="13" fontSize={13} fontWeight="bold">
      {displayAm ? 'AM' : 'PM'}
    </text>
  </svg>
);

interface DisplayAmPmProps {
  color: string;
  displayAm: boolean;
}

export default DisplayAmPm;
