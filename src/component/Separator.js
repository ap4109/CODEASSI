import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Separator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
  <Text ellipsizeMode="clip" numberOfLines={1}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    </Text>      
    </View>
    );
  }
}
