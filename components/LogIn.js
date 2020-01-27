import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { View, TextInput, Image } from 'react-native';
import style from '../assets/style';
import CustomButton from './CustomButton';
import NavBar from './NavBar';
class LogIn extends React.Component {
    static navigationOptions = {
      title: 'Log In',
    };
    onSwipeLeft = (gestureState) => {
      const {navigate} = this.props.navigation;
      navigate('PayTicket');
    }
    onSwipeRight = (gestureState) => {
      const {navigate} = this.props.navigation;
      navigate('SignUp');
    }
    render() {
      return (
        <GestureRecognizer
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
        >
          <View style={{...style.container, ...style.SpaceArround }}>
            <View style={style.logo}>
              <Image
                source={require("../tugende_logo.png")}
                style={style.logoMedium}
              />
            </View>
            <View style={style.textInputGroup}>
              <TextInput
                style={style.textInput}
                placeholder="Username"
                placeholderTextColor="#9D9D9D"
              />
              <TextInput
                style={style.textInput}
                placeholder="Password"
                placeholderTextColor="#9D9D9D"
              />
            </View>
            <CustomButton title="Sign In"/>
          </View>
        </GestureRecognizer>
      );
    }
  }

  export default LogIn;