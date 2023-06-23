import React from 'react';

import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import routes from '../../Navigation/routs';
import SVG from '../../SVG';
import Meny from './components/Meny';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [value, onChangeText] = React.useState<string>('');
  const [closeMeny, setCloseMeny] = React.useState(false);

  const goToScreen = () => {
    navigation.navigate(routes.weatherScreen as never, {value} as never);
    setCloseMeny(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setCloseMeny(false), Keyboard.dismiss();
      }}>
      <SafeAreaView style={styles.container}>
        <Meny close={closeMeny} setCloseMeny={setCloseMeny} />
        <Text style={styles.title}>Weather</Text>
        <View>
          <SVG.SearchSVG style={styles.svg} />
          <TextInput
            onFocus={() => setCloseMeny(false)}
            autoComplete="address-line1"
            onChangeText={text => onChangeText(text.toString())}
            style={styles.input}
            value={value}
            placeholder={'Search the city'}
            placeholderTextColor="#868591"
          />
        </View>
        <Pressable style={styles.button} onPress={goToScreen}>
          <Text style={styles.buttonText}>Search</Text>
        </Pressable>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;
