import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faBell, faCreditCard, faInbox, faUser } from '@fortawesome/free-solid-svg-icons';
import { StyleSheet, Text, View } from 'react-native';

// Mengimpor layar
import BerandaScreen from './BerandaScreen';
import AktivitasScreen from './KotakMasukScreen';
import PembayaranScreen from './PembayaranScreen';
import KotakMasukScreen from './KotakMasukScreen';
import AkunScreen from './AkunScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: '#4CAF50', // Warna aktif tab
          tabBarInactiveTintColor: 'gray',  // Warna tab tidak aktif
          headerShown: false,               // Menyembunyikan header default
        }}
      >
        <Tab.Screen
          name="Beranda"
          component={BerandaScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faHome} color={color} size={24} />,
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Kotak Masuk"
          component={KotakMasukScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faInbox} color={color} size={24} />,
            tabBarLabel: 'Kotak Masuk',
          }}
        />
        <Tab.Screen
          name="Pembayaran"
          component={PembayaranScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faCreditCard} color={color} size={24} />,
            tabBarLabel: 'Pembayaran',
          }}
        />
        <Tab.Screen
          name="Aktivitas"
          component={AktivitasScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faBell} color={color} size={24} />,
            tabBarLabel: 'Activitas',
          }}
        />
        <Tab.Screen
          name="Akun"
          component={AkunScreen}
          options={{
            tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faUser} color={color} size={24} />,
            tabBarLabel: 'Akun',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#ffffff', // Warna latar belakang tab
    height: 70,                 // Menyesuaikan tinggi tab
    borderTopWidth: 0,          // Menghapus garis pemisah tab
    shadowColor: '#000',        // Menambahkan efek bayangan
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,               // Efek bayangan untuk Android
  },
});
