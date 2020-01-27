import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
  } from 'react-native';
  import GestureRecognizer from 'react-native-swipe-gestures';
  import style from '../assets/style';
  import NavBar from './NavBar';
  import DateNow from './DateNow';
  import CustomButton from './CustomButton'
class CheckTickets extends React.Component {
    static navigationOptions = {
      header: null
    };
     onSwipeLeft = (gestureState) => {
      const {navigate} = this.props.navigation;
      navigate('SignUp')
    }
    render() {
      return (
        <GestureRecognizer onSwipeLeft={this.onSwipeLeft}>
          <View style={style.blankPage}>
            <NavBar />
            <View
              style={{ ...style.SpaceArround, ...style.fullRemainingWidthContainer }}
            >
              <DateNow />
              <View style={style.textInputGroup}>
                <TextInput
                  placeholder="From"
                  style={style.ovalTextInput}
                  placeholderTextColor="#9D9D9D"
                />
                <TextInput
                  placeholder="To"
                  style={style.ovalTextInput}
                  placeholderTextColor="#9D9D9D"
                />
                <TextInput
                  placeholder="Date"
                  style={style.ovalTextInput}
                  placeholderTextColor="#9D9D9D"
                />
                <TextInput
                  placeholder="Hour"
                  style={style.ovalTextInput}
                  placeholderTextColor="#9D9D9D"
                />
              </View>
              <CustomButton
                title="Check Buses"
                style={style.primaryButton}
                textStyle={style.primaryButtonText}
              />
            </View>
          </View>
        </GestureRecognizer>
      );
    }
  }
  export default CheckTickets;