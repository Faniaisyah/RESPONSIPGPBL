import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profil from './App';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquarePollHorizontal, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import WebView from 'react-native-webview';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import Createdata from './Createdata';
import Datamahasiswa from './Listdata';


function HomeScreen() {
  return (
      <Createdata/>
  );
}

function DataMahasiswaScreen() {
  return (
    <Datamahasiswa/>
  );
}

function WebScreen() {
  return (
    <WebView
      source={{ uri: 'https://github.com/Faniaisyah' }}
    />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Profil" component={HomeScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({color}) => 
         ( <FontAwesomeIcon icon={faSquarePollHorizontal} color={color} size={24}/> ),
        }}/>
        <Tab.Screen name="Data Mahasiswa" component={DataMahasiswaScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({color}) => 
         ( <FontAwesomeIcon icon={faUserGraduate} color={color} size={24}/> ),
        }}
        />
        <Tab.Screen name="GitHub Saya" component={WebScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({color}) => 
         ( <FontAwesomeIcon icon={faGithub} color={color} size={24}/> ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}