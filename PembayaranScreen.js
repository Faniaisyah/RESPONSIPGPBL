import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button, ScrollView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Dummy data e-wallet options with images
const eWalletOptions = [
  { name: 'ZippyPay', image: require('./assets/images/zippyPay.png') },
  { name: 'GoPay', image: require('./assets/images/goPay.png') },
  { name: 'OVO', image: require('./assets/images/ovo.png') },
  { name: 'DANA', image: require('./assets/images/dana.png') },
];

function PembayaranScreen({ route, navigation }) {
  const { vehicle } = route.params;  // Get vehicle data passed from previous screen

  const [selectedWallet, setSelectedWallet] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [usePayLater, setUsePayLater] = useState(false);

  const handlePayment = () => {
    if (selectedWallet || cardNumber || usePayLater) {
      // Show success alert and navigate to the next screen after payment
      Alert.alert('Payment Successful', 'Your payment was successful!', [
        {
          text: 'OK',
          onPress: () => {
            if (navigation) {
              // Send vehicle data and price to the next screen
              navigation.navigate('Activity', { vehicle, price: vehicle.price });
            }
          },
        },
      ]);
    } else {
      alert('Please select a payment method!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment for {vehicle.name}</Text>
      <Text>Location: {vehicle.location}</Text>

      {/* Displaying Price directly */}
      <Text style={styles.price}>Price: {vehicle.price} (Price for 1 hour)</Text>

      {/* E-Wallet Selection */}
      <Text style={styles.label}>Select Payment Method:</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {eWalletOptions.map((wallet, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.walletOption,
              selectedWallet === wallet.name && styles.selectedOption,
            ]}
            onPress={() => setSelectedWallet(wallet.name)}
          >
            <Image source={wallet.image} style={styles.walletImage} />
            <Text style={styles.walletText}>{wallet.name}</Text>
            <Icon name={wallet.icon} size={30} color="#fff" style={styles.icon} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Debit Card Input */}
      <Text style={styles.label}>Or Add Debit Card:</Text>
      <TextInput
        style={styles.input}
        placeholder="Debit Card Number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TouchableOpacity style={styles.button} onPress={() => alert('Card added successfully!')}>
        <Text style={styles.buttonText}>Add Card</Text>
      </TouchableOpacity>

      {/* PayLater Option */}
      <View style={styles.payLaterContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: usePayLater ? '#ff7043' : '#43a047' }]}
          onPress={() => setUsePayLater(!usePayLater)}
        >
          <Text style={styles.buttonText}>
            {usePayLater ? 'Cancel PayLater' : 'Use Zippy PayLater'}
          </Text>
        </TouchableOpacity>
        {usePayLater && (
          <Text style={styles.payLaterText}>Payment can be made later.</Text>
        )}
      </View>

      {/* Payment Button */}
      <Button title="Proceed to Payment" onPress={handlePayment} color="#43a047" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#43a047',
    marginBottom: 20,
  },
  walletOption: {
    width: 120,
    height: 120,
    marginRight: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
  selectedOption: {
    backgroundColor: '#43a047',
  },
  walletText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  icon: {
    marginTop: 10,
  },
  walletImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#43a047',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  payLaterContainer: {
    marginBottom: 20,
  },
  payLaterText: {
    fontSize: 16,
    color: '#333',
  },
});

export default PembayaranScreen;
