import React, { useState } from 'react';
import { Animated, StyleSheet, View, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Separator from "./Separator"
const CarouselItem =(props)=> {
  const [value,setValue] = useState(new Animated.Value(250))
  const [animationView,setAnimationView] = useState(false)
  var str = props.item.status;
  str = str.substring(0, 1).toLowerCase() + str.substring(1);

const  toggleAnimation = () => {
    if (animationView == true) {
      Animated.timing(value, {
        toValue: 200,
        timing: 1500,
        useNativeDriver: false
      }).start(() => {
     setAnimationView(false)
      });
    }
    else {
      Animated.timing(value, {
        toValue: 250,
        timing: 1500,
        useNativeDriver: false
      }).start(
  
        setAnimationView(true)
      );
    }
  }


    const animatedStyle = {height: value }
    return (

      <View style={[styles.MainContainer]}>
        <Animated.View style={[styles.animatedBox, animatedStyle]}>
            <View style={{ flexDirection: "row", padding: 5 }}>
                 <View style={{ height: 70, width: 70, backgroundColor: str, borderRadius: 35, justifyContent: "center", alignItems: "center", elevation: 2, }}>
                     <Text style={{ color: "white", fontSize: 30 }}>W</Text>
                </View>
               <View style={{ flexDirection: "column", justifyContent: 'center', padding: 10 }}>
                    <Text>{props.item.title}</Text>
                    <Text>{props.item.subtitle}</Text>
                </View>
           </View>
           <Separator />
            <View style={{
                flexDirection: "row", alignItems: 'center'
            }} >
                <Icon name="calendar-alt" size={20} color="gray" style={{ padding: 10 }} />
                <Text style={{ color: "gray" }}>Created: <Text style={{ color: "black" }}>{props.item.created}</Text></Text>
            </View>
            <Separator />

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="list-ul" color="gray" size={20} style={{ padding: 10 }} />
                <Text>{props.item.short_desc}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="clipboard-list" color="gray" size={20} style={{ padding: 10 }} />
                <Text>{props.item.long_desc}</Text>
            </View>
          <View style={{ position: 'absolute', alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
            <Button
              title="press"
              onPress={toggleAnimation}
              style={{ width: 300 }}
            />
          </View>
        </Animated.View>
      </View>
    );
 
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    overflow:'hidden',
    
  },
  animatedBox:
  {
    flex:1,
    width: 380,
    elevation:1,overflow:'hidden'
   
  },

  text: {
    color: '#FFFFFF',
  
  }

});
 export default CarouselItem