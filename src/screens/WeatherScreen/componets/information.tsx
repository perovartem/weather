import React from 'react';

import {View, Text, Pressable} from 'react-native';
import {CityWeather} from '../../../interface/CityWeather';
import {round} from '../../../helpers';
import Collapsible from 'react-native-collapsible';
import styles from './styles';

interface IProps {
  weatherData: CityWeather | undefined;
}

const Informaition = ({weatherData}: IProps) => {
  const [openInformation, setOpenIformation] = React.useState(false);

  return (
    <>
      <Pressable
        style={styles.button}
        onPress={() => setOpenIformation(!openInformation)}>
        <Text style={styles.tilte}>
          {openInformation ? 'Close' : 'More information'}
        </Text>
      </Pressable>
      <Collapsible collapsed={!openInformation}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.tilte}>Feels like</Text>
            <Text style={styles.text}>
              {round(weatherData?.main?.feels_like)}&#176;
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.tilte}>Pressure</Text>
            <Text style={styles.text}>
              {round(weatherData?.main?.pressure)} &#x3371;
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.tilte}>Humidity</Text>
            <Text style={styles.text}>
              {round(weatherData?.main?.humidity)} %
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.tilte}>Visibility</Text>
            <Text style={styles.text}>
              {(weatherData?.visibility || 0) / 1000} km
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.tilte}>Wind speed</Text>
            <Text style={styles.text}>
              {round(weatherData?.wind?.speed)} m/s,
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.tilte}>Сlouds</Text>
            <Text style={styles.text}>{round(weatherData?.clouds?.all)} %</Text>
          </View>
        </View>
      </Collapsible>
    </>
  );
};

export default Informaition;
