import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      alignItems: 'flex-end',
      zIndex: 10,
    },
    menyContainer: {
      position: 'absolute',
      backgroundColor: 'white',
      width: '70%',
      height: 100,
      top: 50,
      borderRadius: 20,
    },
    menyButton: {
      marginHorizontal: 10,
      paddingVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: '#868591',
      borderBottomWidth: 1,
      paddingLeft: 25,
    },
    check: {
      position: 'absolute',
      left: 0,
      top: 9,
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
  