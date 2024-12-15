import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';

function AktivitasScreen({ route, navigation }) {
  const { vehicle, price, location } = route.params || {};  // Retrieve vehicle, price, and location data passed

  // Make sure to use the location passed from the previous screen, if available
  const vehicleLat = location?.lat ?? vehicle?.location?.lat ?? -6.1754;  // Default lat (Jakarta)
  const vehicleLon = location?.lon ?? vehicle?.location?.lon ?? 106.8272;  // Default lon (Jakarta)

  // HTML string for Leaflet map with one basemap and marker
  const leafletMapHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Leaflet Map</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <style>
          body, html, #map {
            height: 100%;
            margin: 0;
            padding: 0;
          }
          .leaflet-container {
            height: 100%;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView([${vehicleLat}, ${vehicleLon}], 13); // Default location or vehicle location

          // OpenStreetMap Basemap
          var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          });

          // Add basemap to the map
          osmLayer.addTo(map);

          // Add marker at vehicle location
          var marker = L.marker([${vehicleLat}, ${vehicleLon}]).addTo(map);
          marker.bindPopup("<b>${vehicle?.name || 'Unknown Vehicle'}</b><br>Location: ${vehicleLat}, ${vehicleLon}");
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity</Text>
      <Text style={styles.message}>The payment for the following vehicle has been successfully processed:</Text>

      {/* Display vehicle details */}
      <View style={styles.vehicleInfo}>
        <Text style={styles.vehicleText}>Vehicle: {vehicle?.name}</Text>
        
        {/* Display location in lat, lon format or "Unknown" if not available */}
        <Text style={styles.vehicleText}>
          Location: {vehicle?.location ? `${vehicle.location.lat}, ${vehicle.location.lon}` : 'Unknown'}
        </Text>
        
        <Text style={styles.vehicleText}>Price: {price}</Text>  {/* Display price */}
      </View>

      {/* WebView to display the Leaflet map */}
      <View style={{ flex: 1, width: '100%', marginTop: 20 }}>
        <WebView
          originWhitelist={['*']}
          source={{ html: leafletMapHtml }} // Display map with basemap and marker
          style={{ flex: 1 }}
          javaScriptEnabled={true} // Ensure JavaScript is enabled
          domStorageEnabled={true} // Allow DOM storage
        />
      </View>

      {/* Button to view activity */}
      <Button
        title="View Activity"
        onPress={() => 
          navigation.navigate('Inbox', { vehicleData: { ...vehicle, price } })
        }  // Send vehicle data and price
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
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  vehicleInfo: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  vehicleText: {
    fontSize: 16,
    color: '#333',
  },
});

export default AktivitasScreen;
