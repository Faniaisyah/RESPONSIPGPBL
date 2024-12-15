import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBell, faCreditCard, faInbox, faUser, faMap } from '@fortawesome/free-solid-svg-icons';
import { TouchableOpacity } from 'react-native';

// Impor layar yang digunakan dalam tab
import BerandaScreen from './BerandaScreen'; // Halaman Beranda
import AktivitasScreen from './AktivitasScreen'; // Halaman Aktivitas
import PembayaranScreen from './PembayaranScreen'; // Halaman Pembayaran
import KotakMasukScreen from './KotakMasukScreen'; // Halaman Kotak Masuk
import AkunScreen from './AkunScreen'; // Halaman Akun
import MapScreen from './MapScreen'; // Halaman Map

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home Page"
        screenOptions={{
          tabBarStyle: { backgroundColor: '#43a047' }, // Warna tab bar
          tabBarActiveTintColor: '#fff', // Ikon tab yang aktif
          tabBarInactiveTintColor: '#555', // Ikon tab yang tidak aktif
        }}
      >
        {/* Tab Beranda */}
        <Tab.Screen
          name="Home Page"
          component={BerandaScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faHome} size={24} color={color} />
            ),
          }}
        />
        
        {/* Tab Aktivitas */}
        <Tab.Screen
          name="Activity"
          component={AktivitasScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faBell} size={24} color={color} />
            ),
          }}
        />
        
        {/* Tab Pembayaran */}
        <Tab.Screen
          name="Payment"
          component={PembayaranScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faCreditCard} size={24} color={color} />
            ),
          }}
        />

        {/* Tab Kotak Masuk */}
        <Tab.Screen
          name="Inbox"
          component={KotakMasukScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faInbox} size={24} color={color} />
            ),
          }}
        />

        {/* Tab Akun */}
        <Tab.Screen
          name="Account"
          component={AkunScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUser} size={24} color={color} />
            ),
          }}
        />

        {/* Tab Map */}
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faMap} size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
