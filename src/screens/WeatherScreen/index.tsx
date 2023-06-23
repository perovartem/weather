import React from 'react';
import styles from './styles';

import {
  View,
  ImageBackground,
  Text,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useFetchWeatherQuery} from '../../store/apiSlice';
import store from '../../store';
import Informaition from './componets/information';
import {round} from '../../helpers';

const backgroundImage =
  'https://img.freepik.com/free-photo/abstract-gradient-neon-lights_23-2149279137.jpg?size=626&ext=jpg&ga=GA1.1.1498298977.1682518943&semt=sph';

const WeatherSkreen = ({route}: {route: any}) => {
  const navigation = useNavigation();
  const getCity = route?.params?.value;
  const {getState} = store;
  const units = getState().weather?.units;

  const {
    data: weatherData,
    refetch,
    isError,
  } = useFetchWeatherQuery({
    city: getCity,
    units,
  });

  const getTodayDate = (): string => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${day}-${month}-${year}`;
  };

  React.useEffect(() => {
    refetch();
    const fetchData = async () => {
      await refetch();
    };
    fetchData();
  }, [getCity, refetch, weatherData]);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        source={{uri: backgroundImage}}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <View style={styles.header}>
          <Pressable onPress={goBack}>
            <Text style={styles.headerText}>Cancel</Text>
          </Pressable>
        </View>
        {!isError ? (
          <View style={styles.main}>
            <Text style={styles.title}>{weatherData?.name}</Text>
            <Text style={styles.text}>{getTodayDate()}</Text>
            <Text style={styles.number}>
              {Math.round(weatherData?.main?.temp || 0)}&#176;
            </Text>
            <View style={styles.weatherImgBox}>
              <Image
                style={styles.weatherImg}
                source={{
                  uri: `https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}.png`,
                }}
              />
            </View>
            <Text style={styles.text}>{weatherData?.weather[0]?.main}</Text>
            <Text style={styles.text}>
              {weatherData?.weather[0]?.description}
            </Text>
            <Text style={styles.text}>
              {`Max: ${round(weatherData?.main?.temp_max)}`}&#176;{'   '}
              {`Min: ${round(weatherData?.main?.temp_min)}`}&#176;
            </Text>
          </View>
        ) : (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../IMG/boy.png')} />
            <Text style={[styles.text, styles.textMarginTop]}>
              There is no such city
            </Text>
            <Text style={styles.text}>Try again</Text>
          </View>
        )}
        <Informaition weatherData={weatherData} />
      </ImageBackground>
    </ScrollView>
  );
};

export default WeatherSkreen;
