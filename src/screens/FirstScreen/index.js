import React, { Component } from 'react';
import {  SafeAreaView, View, Text, TouchableOpacity,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getDetail } from "../../../redux/actions/getData"
import Icon from 'react-native-vector-icons/FontAwesome5';
import Carousel from "../../component/Carousel"
import SearchBar from '../../component/SearchBar';
class First extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      text:"",
      onSearch:props.new,
    }
  }
//   static getDerivedStateFromProps(nextProps, prevState){
//     if(nextProps.onSearch!==prevState.onSearch){
//       return({onSearch:nextProps.new})
//     }
  
//     return null
  
// }

  componentDidMount() {
    this.props.getDetail()
  }
searchData(text){
  
  const newData = this.state.onSearch.filter(item=>{
      const itemData = item.title.toUpperCase();
      const textData = text.toUpperCase();
      return  itemData.indexOf(textData) > -1
    });

    this.setState({
      onSearch:newData,
      text: text
      })

}
  render() {
    if (this.props.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator  color="black" size={"large"}/>
        </View>
      );
    } else {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <SearchBar 
          term={this.state.text}
          onTermChange={(text)=>this.searchData(text)}
          />
          <TouchableOpacity style={{ margin: 15, width: 70, backgroundColor: "#ff7f50", justifyContent: "center", alignItems: 'center', borderRadius: 10, opacity: 1 }} onPress={() => console.log("ytdfy")}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: "white" }}>Filter</Text>
              <Icon name="filter" size={15} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <Carousel data={this.state.onSearch} />
      </SafeAreaView>
    );
  }
}
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetail: () => dispatch(getDetail())
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.AppState.isLoading,
    new: state.AppState.new
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(First)
