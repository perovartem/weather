import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
    },
    header:{
        paddingTop: 10,
         paddingHorizontal: 10,
        alignSelf: 'flex-start',
        paddingVertical: 15,
    },
    headerText:{
      color: 'white',
    },
    main:{
        paddingTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
      },
      number:{
        fontSize: 100,
        fontWeight: '300',
        color: 'white',
      },
      text:{
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
      },
      imageContainer:{
        top: 60,
        alignItems: 'center',
        width: '100%',
        height: '100%'
      },
      image:{
        width: '100%',
        height: '50%'
      },
      textMarginTop:{
        marginTop: 50
      },
      backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
      },
      weatherImgBox:{
        width: 70,
        height: 70,
      },
      weatherImg:{
        flex: 1,
        resizeMode: 'cover'
      }
  });

  export default styles