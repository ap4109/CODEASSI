// import * as React from 'react';
// import { useEffect, useState, useRef } from 'react';
// import { Text, View, StyleSheet, Button, Animated } from 'react-native';

// function App() {
//   const [collapsed, setCollapsed] = useState(true);
//   const [maxLines, setMaxLines] = useState(2);
//   const animationHeight = useRef(new Animated.Value(50)).current;

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   const collapseView = () => {
//       Animated.timing(animationHeight, {
//         duration: 1000,
//         toValue: 80,
//         useNativeDriver: false
//       }).start();
//   }

//   const expandView = () => {
//       setMaxLines(null)
//       Animated.timing(animationHeight, {
//         duration: 1000,
//         toValue: 1000,
//         useNativeDriver: false
//       }).start();
//   }

//   useEffect(() => {
//     if (collapsed) {
//       collapseView()
//     } else {
//       expandView()
//     }
//   }, [collapsed]);

//   return (
//     <View style={{overflow:'hidden',justifyContent:'center',flex:1,height:400,width:"95%"}}>
//       <Animated.View style={{maxHeight: animationHeight, backgroundColor:"red",overflow:"hidden",}}>
//         <Text style={styles.paragraph} numberOfLines={maxLines}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.

//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//         </Text>
//       </Animated.View>
//       <Button title="Toggle Collapsed" onPress={toggleCollapsed} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   paragraph: {
//     margin: 24,
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default App;
import React, { Component } from 'react';
import { Animated, StyleSheet, View, Button, Text } from 'react-native';

export default class App1 extends Component {

    constructor() {
        super();
        this.state = {
            animationValue: new Animated.Value(200),
            viewState: true
        }
    }

    toggleAnimation = () => {
        console.log(this.state.viewState)

        if (this.state.viewState == true) {
            Animated.timing(this.state.animationValue, {
                toValue: 300,
                timing: 1500,
                useNativeDriver: false
            }).start(() => {
                this.setState({ viewState: false })
            });
        }
        else {
            Animated.timing(this.state.animationValue, {
                toValue: 250,
                timing: 1500,
                useNativeDriver: false
            }).start(this.setState({ viewState: true })
            );
        }
    }

    render() {

        const animatedStyle = {

            height: this.state.animationValue
        }

        return (

            <View style={[styles.MainContainer]}>


                <Animated.View style={[styles.animatedBox, animatedStyle]}>

                    <Text>ioguigiuguyg</Text>
                    <View style={{ position: 'absolute', bottom: 0, alignContent: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                        <Button
                            title="press"
                            onPress={this.toggleAnimation}
                            style={{ width: 300 }}
                        />
                    </View>


                </Animated.View>






                {/* <Animated.View style={[styles.animatedBox, animatedStyle]} >

   <Text style={styles.text}>
     Hello Guys, This is some sample Text.
     Hello Guys, This is some sample Text.
     Hello Guys, This is some sample Text.
     Hello Guys, This is some sample Text.
   </Text>

 </Animated.View>
 <TouchableWithoutFeedback onPress={this.toggleAnimation}>
 <Text>yh8oiyiuyjiiiyuhni</Text>
</TouchableWithoutFeedback>   */}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',





    },
    animatedBox:
    {
        width: 380,
    
        backgroundColor: 'khaki',

        //  alignItems:'center'
    },

    text: {
        color: '#FFFFFF'
    }

});