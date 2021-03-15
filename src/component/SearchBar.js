import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Icon style={styles.icon} name="search" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    margin: 15,
    padding: 5,
    backgroundColor: "#F0EEEE",
    borderRadius: 5,
    height: 50,
    flexDirection: "row",elevation:2,
    width:300
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: 8
  }
});

export default SearchBar;