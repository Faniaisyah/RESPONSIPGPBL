import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';

const data = {
  scooter: [
    { id: '1', name: 'Scooter Lightning', location: 'Monas Station', price: 'Rp 15.000' },
    { id: '2', name: 'Scooter Blaze', location: 'Kemang Hub', price: 'Rp 20.000' },
    { id: '3', name: 'Scooter Falcon', location: 'Kuningan Central', price: 'Rp 18.000' },
    { id: '4', name: 'Scooter Breeze', location: 'Sudirman Plaza', price: 'Rp 17.000' },
    { id: '5', name: 'Scooter Thunder', location: 'Ancol Pier', price: 'Rp 19.000' },
    { id: '6', name: 'Scooter Nova', location: 'Senayan Park', price: 'Rp 16.000' },
    { id: '7', name: 'Scooter Comet', location: 'Menteng Square', price: 'Rp 18.000' },
    { id: '8', name: 'Scooter Spark', location: 'Jakarta Kota Station', price: 'Rp 14.000' },
    { id: '9', name: 'Scooter Horizon', location: 'Pondok Indah Mall', price: 'Rp 20.000' },
    { id: '10', name: 'Scooter Eclipse', location: 'Pantai Indah Kapuk', price: 'Rp 21.000' },
  ],
  sepeda: [
    { id: '11', name: 'E-Bike Voyager', location: 'Monas Station', price: 'Rp 25.000' },
    { id: '12', name: 'E-Bike Charger', location: 'Kemang Hub', price: 'Rp 30.000' },
    { id: '13', name: 'E-Bike Striker', location: 'Kuningan Central', price: 'Rp 28.000' },
    { id: '14', name: 'E-Bike Zenith', location: 'Sudirman Plaza', price: 'Rp 27.000' },
    { id: '15', name: 'E-Bike Cyclone', location: 'Ancol Pier', price: 'Rp 26.000' },
    { id: '16', name: 'E-Bike Glide', location: 'Senayan Park', price: 'Rp 29.000' },
    { id: '17', name: 'E-Bike Nimbus', location: 'Menteng Square', price: 'Rp 24.000' },
    { id: '18', name: 'E-Bike Orbit', location: 'Jakarta Kota Station', price: 'Rp 27.000' },
    { id: '19', name: 'E-Bike Swift', location: 'Pondok Indah Mall', price: 'Rp 26.000' },
    { id: '20', name: 'E-Bike Pulse', location: 'Pantai Indah Kapuk', price: 'Rp 28.000' },
  ],
};

function BerandaScreen({ navigation }) {
  const [selectedType, setSelectedType] = useState('scooter');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const renderVehicleItem = ({ item }) => (
    <View style={styles.vehicleItem}>
      <Text style={styles.vehicleName}>{item.name}</Text>
      <Text style={styles.vehicleLocation}>Location: {item.location}</Text>
      <Text style={styles.vehiclePrice}>
        {item.price} (Price for 1 hour) {/* Menambahkan durasi penyewaan */}
      </Text>
      <View style={styles.buttonContainer}>
        {/* Button untuk Maps */}
        <TouchableOpacity
          style={styles.mapsButton}
          onPress={() => navigation.navigate('Map', { vehicle: item })}
        >
          <Text style={styles.mapsButtonText}>View on Map</Text>
        </TouchableOpacity>

        {/* Button untuk Rent */}
        <TouchableOpacity
          style={styles.rentButton}
          onPress={() => navigation.navigate('Payment', { vehicle: item })}
        >
          <Text style={styles.rentButtonText}>Rent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Zippy!</Text>
      
      {/* Display current time */}
      <Text style={styles.time}>{currentTime}</Text>

      <View style={styles.tabContainer}>
        <View style={styles.tabWrapper}>
          {/* Tab Scooter */}
          <TouchableOpacity
            style={[styles.tab, selectedType === 'scooter' ? styles.activeTab : null]}
            onPress={() => setSelectedType('scooter')}
          >
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/130/130059.png' }}
              style={[styles.icon, { tintColor: selectedType === 'scooter' ? '#fff' : '#555' }]}
            />
            <Text style={styles.tabText}>Scooter</Text>
          </TouchableOpacity>

          {/* Tab Electric Bike */}
          <TouchableOpacity
            style={[styles.tab, selectedType === 'sepeda' ? styles.activeTab : null]}
            onPress={() => setSelectedType('sepeda')}
          >
            <FontAwesomeIcon
              icon={faBicycle}
              size={20}
              color={selectedType === 'sepeda' ? '#fff' : '#555'}
              style={{ marginRight: 8 }}
            />
            <Text style={styles.tabText}>Electric Bike</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={data[selectedType]}
        keyExtractor={(item) => item.id}
        renderItem={renderVehicleItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e8f5e9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2e7d32',
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  tabContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#43a047',
  },
  tabText: {
    marginLeft: 8,
    color: '#555',
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  vehicleItem: {
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  vehicleLocation: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
  },
  vehiclePrice: {
    fontSize: 16,
    marginBottom: 16,
    color: '#2e7d32',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapsButton: {
    backgroundColor: '#388e3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  rentButton: {
    backgroundColor: '#43a047',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  mapsButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rentButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default BerandaScreen;

