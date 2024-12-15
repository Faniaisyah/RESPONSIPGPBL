import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function KotakMasukScreen({ route, navigation }) {
  const [vehicleList, setVehicleList] = useState([]);

  // Retrieve vehicle data passed from the previous screen
  const { vehicleData } = route.params || {};

  // Update vehicle list only if vehicle data is available and not already in the list
  useEffect(() => {
    const loadVehicles = async () => {
      try {
        // Retrieve vehicles from AsyncStorage
        const storedVehicles = await AsyncStorage.getItem('vehicleList');
        if (storedVehicles) {
          setVehicleList(JSON.parse(storedVehicles));  // Parse to array
        }
      } catch (error) {
        console.error('Error loading vehicles from AsyncStorage:', error);
      }
    };

    loadVehicles();
  }, []);

  useEffect(() => {
    if (vehicleData) {
      // Add current date when the vehicle is added
      const vehicleWithDate = { 
        ...vehicleData, 
        date: new Date().toLocaleDateString()  // Add the date
      };

      // Check if the vehicle data is not already in the list
      setVehicleList(prevList => {
        const updatedList = [...prevList, vehicleWithDate];
        AsyncStorage.setItem('vehicleList', JSON.stringify(updatedList));  // Save to AsyncStorage
        return updatedList;
      });
    }
  }, [vehicleData]);

  const removeVehicle = (index) => {
    const updatedList = vehicleList.filter((_, idx) => idx !== index);
    setVehicleList(updatedList);
    AsyncStorage.setItem('vehicleList', JSON.stringify(updatedList));  // Update AsyncStorage
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Activity</Text>

      {/* Display the list of vehicles that have been paid for */}
      <FlatList
        data={vehicleList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.vehicleInfo}>
            <Text style={styles.vehicleText}>Vehicle: {item.name}</Text>
            <Text style={styles.vehicleText}>Location: {item.location}</Text>
            <Text style={styles.vehicleText}>Price: {item.price}</Text>
            <Text style={styles.vehicleText}>Date: {item.date}</Text>  {/* Display the date */}
            
            {/* Remove button with Grab's green color */}
            <TouchableOpacity onPress={() => removeVehicle(index)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Button to go back to the previous screen */}
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
        color="#43a047"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#43a047',
  },
  vehicleInfo: {
    marginTop: 20,
    padding: 20,  // Increase padding to make the box larger
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'flex-start',  // Align text to the left
    width: '100%',  // Use full width
  },
  vehicleText: {
    fontSize: 18,  // Increase text size
    color: '#333',
    marginBottom: 8,  // Add space between texts
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#00b140',  // Grab's green color
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default KotakMasukScreen;
