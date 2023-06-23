import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    box: {
      width: 160,
      minHeight: 160,
      margin: 10,
      backgroundColor: '#000000',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
    },
    tilte: {
      color: 'white',
      fontSize: 20,
    },
    text: {
      marginTop: 20,
      color: 'white',
      fontSize: 40,
    },
    button: {
      width: '50%',
      alignSelf: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 20,
      marginTop: 20,
      backgroundColor: '#000000',
      borderRadius: 10,
    },
  });


  export default styles