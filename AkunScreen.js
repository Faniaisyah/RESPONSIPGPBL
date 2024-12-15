import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

function AkunScreen({ navigation }) {
  const [photo, setPhoto] = useState(null); // State untuk menyimpan foto

  // Simulated user data
  const user = {
    name: 'Fani Aisyah',
    email: 'fani.aisyah@ugm.ac.id.com',
  };

  // Logout function
  const handleLogout = () => {
    Alert.alert('Info', 'You have successfully logged out.');
    navigation.navigate('Login');
  };

  // Open camera
  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        saveToPhotos: true,
      },
      (response) => {
        if (response.didCancel) {
          Alert.alert('Info', 'Camera cancelled.');
        } else if (response.errorMessage) {
          Alert.alert('Error', response.errorMessage);
        } else if (response.assets) {
          setPhoto(response.assets[0].uri); // Simpan URI foto
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with Grab style */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text>
      </View>

      {/* User Profile */}
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: photo || 'https://static-00.iconduck.com/assets.00/person-icon-512x483-d7q8hqj4.png',
          }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => Alert.alert('Info', 'History feature')}>
          <Text style={styles.actionText}>History</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={() => Alert.alert('Info', 'Help feature')}>
          <Text style={styles.actionText}>Help</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={openCamera}>
          <Text style={styles.actionText}>Take Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, styles.logoutButton]} onPress={handleLogout}>
          <Text style={[styles.actionText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#43a047', // Grab's green color
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#43a047',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  actionContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
  },
  actionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#43a047', // Grab's green color
    borderWidth: 0, // Remove default border
  },
  logoutText: {
    color: '#fff', // White text for contrast
  },
});

export default AkunScreen;
