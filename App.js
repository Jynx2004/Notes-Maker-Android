import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Input from './screens/Input';
import Displaynote from './screens/Displaynote';
import NotesContextProvider from './context/Store';
import Update from './screens/Update';
//import {Input} from './screens/Input';
//import {Displaynote} from './screens/Displaynote';




const Stack=createNativeStackNavigator();

export default function App() {
  return (
  
  <NotesContextProvider>
    <StatusBar style='auto'/>
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="input" component={Input} />
        <Stack.Screen name="display" component={Displaynote}/>
        <Stack.Screen name="update" component={Update}/>
        


      
      </Stack.Navigator>

      
      
    </NavigationContainer>

  </NotesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
