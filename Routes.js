import * as React from 'react';
import 'react-native-gesture-handler';
import First from "./src/screens/FirstScreen/index"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack  = createStackNavigator()
const Routes=()=>{
  return(
  <NavigationContainer>
    <Stack.Navigator screenOptions ={{headerStyle:{backgroundColor:'#ff7f50'}}}>
      <Stack.Screen name="First" component={First} options={{title:"Assigned To Me",headerTintColor:"white"}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default Routes