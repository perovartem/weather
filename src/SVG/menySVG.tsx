import * as React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';

function MenySVG(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 29 29"
      xmlSpace="preserve"
      {...props}>
      <Path
        d="M14.5 27C7.607 27 2 21.393 2 14.5S7.607 2 14.5 2 27 7.607 27 14.5 21.393 27 14.5 27zm0-23C8.71 4 4 8.71 4 14.5S8.71 25 14.5 25 25 20.29 25 14.5 20.29 4 14.5 4z"
        fill="#ffffff"
      />
      <Circle cx={14.5} cy={14.5} r={2} fill="#ffffff" />
      <Circle cx={8.5} cy={14.5} r={2} fill="#ffffff" />
      <Circle cx={20.5} cy={14.5} r={2} fill="#ffffff" />
    </Svg>
  );
}

export default MenySVG;
