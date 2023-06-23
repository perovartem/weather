import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CheckSVG(props: any) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0V0z" />
      <Path
        fill="#868591"
        d="M9 16.17L5.53 12.7a.996.996 0 10-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 10-1.41-1.41L9 16.17z"
      />
    </Svg>
  );
}

export default CheckSVG;
