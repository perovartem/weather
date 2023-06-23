import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: '#000000',
    },
    title: {
      paddingTop: 60,
      paddingLeft: 30,
      fontSize: 40,
      fontWeight: '600',
      color: 'white',
    },
    input: {
      color: 'white',
      fontSize: 20,
      marginTop: 10,
      height: 40,
      backgroundColor: '#403F47',
      borderRadius: 10,
      paddingLeft: 40,
    },
    button: {
      width: '50%',
      alignSelf: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 200,
      backgroundColor: '#403F47',
      borderRadius: 10,
    },
    buttonText: {
      color: '#868591',
      fontSize: 20,
    },
    svg: {
      zIndex: 1,
      top: 18,
      left: 5,
      position: 'absolute',
    },
  });

  export default styles