import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { View, TextInput, Button, Platform, Image } from 'react-native';
import style from '../assets/style';
import CustomButton from './CustomButton';
class SignUp extends React.Component {
    static navigationOptions = {
      title: 'Signup',
    };
    onSwipeRight = (gestureState) => {
      const {navigate} = this.props.navigation;
      navigate('Home', { name: 'Jane' });
    }
    onSwipeLeft = (gestureState) => {
      const {navigate} = this.props.navigation;
      navigate('LogIn', { name: 'Jane' });
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
                placeholder="First Name"
                placeholderTextColor="#9D9D9D"
              />
              <TextInput
                style={style.textInput}
                placeholder="Last Name"
                placeholderTextColor="#9D9D9D"
              />
              <TextInput
                style={style.textInput}
                placeholder="Email"
                placeholderTextColor="#9D9D9D"
              />
              <TextInput
                style={style.textInput}
                placeholder="Phone Number"
                placeholderTextColor="#9D9D9D"
              />
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
            <CustomButton title="Sign Up"/>
          </View>
        </GestureRecognizer>
      );
    }
  }

  export default SignUp;