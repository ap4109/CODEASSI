import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import {getDetail} from "../../../redux/actions/getData"
import Carousel from "../../component/Carousel"

 class First extends Component {

  componentDidMount(){
    this.props.getDetail()
    console.log(this.props.new)
   

  }
  render() {
    return (
      <SafeAreaView>
      <Carousel data={this.props.new} />
  </SafeAreaView>  
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getDetail: () => dispatch(getDetail())
  }
}
const mapStateToProps = (state) => {   
  return {
      isLoading:state.AppState.isLoading,
      new:state.AppState.new
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(First)
