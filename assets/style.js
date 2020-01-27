import { StyleSheet, Platform } from "react-native";
import colors from './colors'
console.log(colors.primary, colors.accent);

export default StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    paddingBottom: 50,
  },
  logo: {
    borderColor: "white",
    overflow: "hidden",
    borderStyle: "solid",
    borderWidth: 0.15,
    borderRadius: 20
  },
  name: {
    bottom: 0,
    position: "absolute",
    paddingBottom: 50
  },
  textInputGroup: {
    width: '80%'
  },
  textInput: {
      borderBottomWidth: 1,
      borderColor: 'white',
      width: '100%',
      paddingBottom: 5,
      marginBottom: 20,
  },
  ovalTextInput: {
    backgroundColor: '#D8D8D8',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    borderRadius: 20,
    overflow: 'hidden',
    width: 81.33,
    ...Platform.select({
      ios: {
        backgroundColor: colors.accent,
      }
    })
  },
  logoImage: {
    width: 80,
    height: 80,
  },
  logoMedium: {
    width: 60,
    height: 60
  },
  SpaceArround: {
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  customButton: {
    backgroundColor: colors.accent,
    minWidth: 81.33,
    borderRadius: 19,
  },
  customButtonText: {
    textAlign: 'center',
    padding: 10,
    color: '#000F1D'
  },
  navBar: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 2,
    alignItems: "center",
    // borderStyle: 'solid',
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'black',
    // overflow: 'hidden'
  },
  logoIcon: {
    width: 30,
    height: 30,
  },
  blankPage: {
    paddingTop: 50,
    backgroundColor: colors.accent,
    height: "100%",
    paddingBottom: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  primaryButtonText: {
    color: "white"
  },
  primaryButton: {
    backgroundColor: "#00668B", 
    minWidth: 81.33 
  },
  fullRemainingWidthContainer: {
    flex:1,
    alignItems: 'center'
  }
});
