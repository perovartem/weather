import SearchScreen from '../screens/SearchScreen';
import WeatherSkreen from '../screens/WeatherScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="searchSckreen"
      screenOptions={{headerShown: false, presentation: 'modal'}}>
      <Stack.Screen
        name="weatherScreen"
        component={WeatherSkreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <Stack.Screen
        name="searchSckreen"
        options={{
          animation: 'slide_from_bottom',
          presentation: 'modal',
        }}
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
