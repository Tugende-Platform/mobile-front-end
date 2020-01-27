import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import style from '../assets/style';
import NavBar from './NavBar';
import CustomButton from './CustomButton';
import GestureRecognizer from 'react-native-swipe-gestures';
class PayTicket extends React.Component {
  static navigationOptions = {
    header: null
  };
  onSwipeRight = (gestureState) => {
    const {navigate} = this.props.navigation;
    navigate('LogIn')
  }
    render() {
      return (
        <GestureRecognizer
        onSwipeRight={this.onSwipeRight}
        >
          <View style={style.blankPage}>
            <NavBar />
            <View
              style={{ ...style.SpaceArround, ...style.fullRemainingWidthContainer }}
            >
              <Text>Pay Ticket</Text>
              <View style={style.textInputGroup}>
                <TextInput
                  placeholder="Amount"
                  style={style.ovalTextInput}
                  placeholderTextColor="#9D9D9D"
                />
                <TextInput
                  placeholder="Account Number"
                  style={style.ovalTextInput}
                  placeholderTextColor="#9D9D9D"
                />
                <TextInput
                  placeholder="Pin"
                  style={style.ovalTextInput}
                  placeholderTextColor="#9D9D9D"
                />
              </View>
              <CustomButton
                title="Pay"
                style={style.primaryButton}
                textStyle={style.primaryButtonText}
              />
            </View>
          </View>
        </GestureRecognizer>
      );
    }
  }

  export default PayTicket;