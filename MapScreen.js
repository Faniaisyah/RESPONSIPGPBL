// MapScreen.js
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView

const MapScreen = ({ route }) => {
  // Dapatkan data kendaraan dari props
  const { vehicle } = route.params;

  // Data stasiun dengan koordinatnya
  const stations = {
    'Monas Station': { lat: -6.1754, lon: 106.8272 },
    'Kemang Hub': { lat: -6.2921, lon: 106.7940 },
    'Kuningan Central': { lat: -6.2310, lon: 106.8250 },
    'Sudirman Plaza': { lat: -6.2146, lon: 106.8184 },
    'Ancol Pier': { lat: -6.1269, lon: 106.8131 },
    'Senayan Park': { lat: -6.2295, lon: 106.8013 },
    'Menteng Square': { lat: -6.1962, lon: 106.8444 },
    'Jakarta Kota Station': { lat: -6.1474, lon: 106.8197 },
    'Pondok Indah Mall': { lat: -6.2684, lon: 106.7990 },
    'Pantai Indah Kapuk': { lat: -6.1269, lon: 106.7182 },
  };

  const station = stations[vehicle.location]; // Menentukan koordinat berdasarkan lokasi kendaraan

  // Tentukan tujuan rute (misalnya Monas Station)
  const destination = stations['Monas Station']; // Ganti dengan tujuan yang diinginkan

  // HTML string untuk peta Leaflet dengan rute dan semua marker
  const leafletMapHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Leaflet Map with Route</title>
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
        <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
        <style>
          body { margin: 0; padding: 0; }
          html, body, #map { height: 100%; margin: 0; padding: 0; }
          
          /* Custom popup style */
          .leaflet-popup-content {
            font-size: 30px; /* Increase font size */
            padding: 20px;  /* Add padding */
            min-width: 200px; /* Set minimum width */
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map').setView([${station.lat}, ${station.lon}], 13); // Set koordinat stasiun

          // Layer lain untuk pilihan
          var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          });

          var cartoLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://carto.com/">CartoDB</a>'
          });

          // Menambahkan layer yang dipilih pada peta (menggunakan OpenStreetMap dan CartoDB Positron)
          osmLayer.addTo(map);

          // Menambahkan kontrol untuk mengganti basemap
          L.control.layers({
            "OpenStreetMap": osmLayer,
            "CartoDB Positron": cartoLayer
          }).addTo(map);

          // Menambahkan marker untuk semua stasiun
          ${Object.keys(stations).map((key) => ` 
            L.marker([${stations[key].lat}, ${stations[key].lon}]).addTo(map)
              .bindPopup('<b>${key}</b><br>Location: ${key}'); 
          `).join('')}

          // Menambahkan marker untuk kendaraan (warna atau ikon berbeda)
          L.marker([${station.lat}, ${station.lon}], {
            icon: L.icon({
              iconUrl: 'https://example.com/vehicle-icon.png', // Ganti dengan URL ikon kendaraan
              iconSize: [32, 32],
              iconAnchor: [16, 32]
            })
          }).addTo(map)
            .bindPopup('<b>${vehicle.name}</b><br>Location: ${vehicle.location}')
            .openPopup();

          // Menambahkan rute dari kendaraan ke tujuan dengan garis biru dan tebal
          L.Routing.control({
            waypoints: [
              L.latLng(${station.lat}, ${station.lon}),
              L.latLng(${destination.lat}, ${destination.lon})
            ],
            routeWhileDragging: true,
            lineOptions: {
              styles: [{ color: 'blue', weight: 5 }] // Warna biru dan ketebalan garis 5px
            }
          }).addTo(map);
        </script>
      </body>
    </html>
  `;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={{ html: leafletMapHtml }} // Menampilkan peta dengan rute dan semua marker
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default MapScreen;
