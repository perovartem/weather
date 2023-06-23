import React from 'react';

import {View, Text, Pressable} from 'react-native';
import SVG from '../../../SVG';
import store from '../../../store';
import {changeUnits} from '../../../store/apiSlice';
import styles from './styles';

const units = {
  Celsius: 'metric',
  Fahrenheit: 'imperial',
};
interface IProps {
  close: boolean;
  setCloseMeny: (item: boolean) => void;
}

const Meny = ({close, setCloseMeny}: IProps) => {
  const {dispatch, getState} = store;
  const unitsState = getState().weather.units;

  const onPressUnits = (units: string) => {
    dispatch(changeUnits(units));
    setCloseMeny?.(!close);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setCloseMeny?.(!close)}>
        <SVG.MenySVG />
      </Pressable>
      {close ? (
        <View style={styles.menyContainer}>
          <Pressable
            style={styles.menyButton}
            onPress={() => onPressUnits(units.Celsius)}>
            {unitsState === units.Celsius ? (
              <View style={styles.check}>
                <SVG.CheckSVG />
              </View>
            ) : null}
            <Text style={styles.buttonText}>Celsius</Text>
            <Text style={styles.buttonText}>&#8451;</Text>
          </Pressable>
          <Pressable
            style={styles.menyButton}
            onPress={() => onPressUnits(units.Fahrenheit)}>
            {unitsState === units.Fahrenheit ? (
              <View style={styles.check}>
                <SVG.CheckSVG />
              </View>
            ) : null}
            <Text style={styles.buttonText}>Fahrenheit</Text>
            <Text style={styles.buttonText}>&#8457;</Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export default Meny;
