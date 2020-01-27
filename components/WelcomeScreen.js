import React from 'react';
import {
    View,
    Image,
  } from 'react-native';
  import GestureRecognizer from 'react-native-swipe-gestures';
  import style from '../assets/style';
class WelcomeScreen extends React.Component {
    static navigationOptions = {
      header: null
    };
     onSwipeLeft = (gestureState) => {
      const {navigate} = this.props.navigation;
      navigate('SignUp', {name: 'Jane'})
    }
    render() {
      return (
        <GestureRecognizer
         onSwipeLeft={this.onSwipeLeft}
        >
          <View style={style.container}>
            <View style={style.logo}>
              <Image source={require("../tugende_logo.png")} />
            </View>
            <View style={style.name}>
              <Image source={require("../tugende_name.png")} />
            </View>
          </View>
        </GestureRecognizer>
      );
    }
  }

  export default WelcomeScreen;