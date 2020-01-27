import React from 'react';
import { View, Image } from 'react-native';
import style from '../assets/style';
class NavBar extends React.Component {
    render() {
      return (
        <View style={{ ...style.navBar, ...style.spaceBetween }}>
          <View>
            <Image
              source={require("../tugende_logo.png")}
              style={style.logoIcon}
            />
          </View>
          <View>
            <Image source={require("../tugende.png")}/>
          </View>
          <View>
            <Image source={require("../search.png")}/>
          </View>
        </View>
      );
    }
  }

  export default NavBar;
