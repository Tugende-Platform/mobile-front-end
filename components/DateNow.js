import React from 'react';
import {
    View,
    Text
  } from 'react-native';
class CheckTickets extends React.Component {
    static navigationOptions = {
      header: null
    };
     onSwipeLeft = (gestureState) => {
      const {navigate} = this.props.navigation;
      navigate('SignUp')
    }
    render() {
        const date = new Date();
      return (
          <View>
            <Text>{date.toLocaleString()}</Text>
          </View>
      );
    }
  }

  export default CheckTickets;