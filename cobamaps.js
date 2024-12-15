import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView

const cobamaps = () => {
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

  // HTML string untuk peta Leaflet dengan fitur pencarian dan rute
  const leafletMapHtml = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Leaflet Map with Search and Route</title>
      <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
      <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
      <script src="https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.js"></script>
      <style>
        body { margin: 0; padding: 0; }
        html, body, #map { height: 100%; margin: 0; padding: 0; }
        .leaflet-popup-content { font-size: 18px; line-height: 1.5; }
        .station-label { font-size: 18px; font-weight: bold; }
        .leaflet-popup-tip { display: none; }
        #map { width: 100%; height: 100%; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        var stations = ${JSON.stringify(stations)};
        
        // Membuat peta dan mengatur titik awalnya ke Monas Station
        var map = L.map('map', {
          center: [stations['Monas Station'].lat, stations['Monas Station'].lon],
          zoom: 13
        });

        // Menambahkan tile layer OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Menambahkan marker untuk setiap stasiun
        Object.keys(stations).forEach(function(station) {
          L.marker([stations[station].lat, stations[station].lon])
            .addTo(map)
            .bindPopup('<b class="station-label">' + station + '</b><br>Location: ' + stations[station].lat + ', ' + stations[station].lon);
        });

        // Menambahkan rute antar stasiun dengan Leaflet Routing Machine
        var routeControl = L.Routing.control({
          waypoints: [
            L.latLng(stations['Monas Station'].lat, stations['Monas Station'].lon),
            L.latLng(stations['Kemang Hub'].lat, stations['Kemang Hub'].lon),
            L.latLng(stations['Kuningan Central'].lat, stations['Kuningan Central'].lon),
            L.latLng(stations['Sudirman Plaza'].lat, stations['Sudirman Plaza'].lon),
            // Tambahkan stasiun lainnya sesuai keinginan
          ],
          routeWhileDragging: true,
          lineOptions: {
            styles: [{ color: 'blue', weight: 6, opacity: 0.8 }] // Warna biru, garis lebih tebal
          }
        }).addTo(map);

        // Menambahkan kontrol pencarian untuk stasiun
        function searchStation(query) {
          const station = stations[query];
          if (station) {
            map.setView([station.lat, station.lon], 15);
            L.marker([station.lat, station.lon]).addTo(map)
              .bindPopup('<b class="station-label">' + query + '</b><br>Location: ' + station.lat + ', ' + station.lon).openPopup();
          } else {
            alert("Stasiun tidak ditemukan.");
          }
        }

        // Menambahkan input pencarian untuk stasiun
        document.addEventListener('DOMContentLoaded', function() {
          var searchBox = document.createElement('input');
          searchBox.type = 'text';
          searchBox.placeholder = 'Cari stasiun...';
          searchBox.style.position = 'absolute';
          searchBox.style.top = '10px';
          searchBox.style.left = '10px';
          searchBox.style.zIndex = '1000';
          document.body.appendChild(searchBox);

          searchBox.addEventListener('input', function(e) {
            searchStation(e.target.value);
          });
        });

      </script>
    </body>
  </html>`;

  return (
    <View style={{ flex: 1 }}>
      <WebView
        originWhitelist={['*']}
        source={{ html: leafletMapHtml }} // Menampilkan peta dengan fitur pencarian dan rute
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default cobamaps;
