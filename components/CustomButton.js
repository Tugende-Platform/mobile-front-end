import React from 'react';
import {
    View,
    Image,
  } from 'react-native';
  import { TouchableOpacity, StyleSheet, Text } from 'react-native';
  import customStyle from '../assets/style';
class CustomButton extends React.Component {
    render() {
        const { title = 'Button', style = {}, textStyle = {}, onPress } = this.props;
      return (
        <TouchableOpacity onPress={onPress} style={{...customStyle.customButton, ...style}}>
            <Text style={{...customStyle.customButtonText , ...textStyle}}>{title}</Text>
        </TouchableOpacity>
      );
    }
  }

  export default CustomButton;