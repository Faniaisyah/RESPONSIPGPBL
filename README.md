# ZIPPY - Mobilitas Cepat dan Efisien

ZIPPY adalah aplikasi mobile yang dirancang untuk memberikan solusi mobilitas cepat dan efisien. Aplikasi ini memungkinkan pengguna untuk menyewa kendaraan roda dua seperti scooter dan sepeda listrik untuk perjalanan mereka, terutama untuk pengguna yang membutuhkan transportasi tambahan setelah menggunakan transportasi umum seperti kereta. Dengan antarmuka yang sederhana dan proses transaksi yang mudah, ZIPPY mempermudah mobilitas di kota. Pengguna dapat menyewa scooter atau sepeda listrik untuk perjalanan jarak dekat, menyewa kendaraan hanya dengan beberapa ketukan, dan membayar menggunakan berbagai metode pembayaran.

## Fitur Utama

- **Penyewaan Scooter dan Sepeda Listrik**: Menyewa scooter atau sepeda listrik untuk perjalanan cepat dan ramah lingkungan.
- **Peta Interaktif**: Melihat lokasi dan rute penyewaan kendaraan terdekat.
- **Pembayaran**: Mendukung pembayaran melalui e-wallet, kartu debit, dan paylater.
- **Riwayat Aktivitas & Manajemen Akun**: Melihat riwayat penyewaan dan mengelola akun pengguna.


 Fitur Aplikasi
1. Home Page
Jam: Menampilkan waktu saat ini untuk membantu pengguna menentukan waktu yang tepat untuk berangkat, terutama bagi pengguna yang bepergian ke kantor setelah menggunakan transportasi umum seperti kereta.
Button Scooter: Menampilkan pilihan scooter yang tersedia untuk disewa.
Button Electric Bike: Menampilkan pilihan sepeda listrik untuk disewa.
Button View on Map: Mengarahkan pengguna ke halaman peta untuk melihat lokasi dan rute.
Button Rent: Memungkinkan pengguna untuk menyewa scooter atau sepeda listrik yang dipilih, dan mengarahkan mereka ke halaman pembayaran.
2. Activity
Deskripsi: Halaman ini menampilkan hasil dari aktivitas navigasi yang dilakukan setelah pengguna menyelesaikan pembayaran.
Button View Activity: Pengguna dapat melihat rincian aktivitas mereka, termasuk kota tujuan.
3. Payment
Deskripsi: Halaman untuk melakukan pembayaran sewa scooter atau sepeda listrik.
Pilihan Pembayaran: Pengguna dapat memilih metode pembayaran seperti e-wallet, kartu debit, atau paylater dari aplikasi ZIPPY.
Button Proceed to Payment: Pengguna mengklik tombol ini untuk menyelesaikan pembayaran. Setelah pembayaran berhasil, aplikasi akan mengarahkan pengguna ke halaman Activity.
4. Inbox
Deskripsi: Halaman untuk menyimpan semua aktivitas yang telah dilakukan oleh pengguna.
Tombol Remove: Pengguna dapat menghapus aktivitas yang telah selesai dari inbox untuk menjaga kebersihan aplikasi.
5. Account
Deskripsi: Halaman untuk mengelola akun pengguna, termasuk profil pengguna, riwayat perjalanan, dan pengaturan lainnya.
6. Map
Deskripsi: Halaman peta untuk melihat lokasi, rute, dan titik perjalanan, memungkinkan pengguna untuk menentukan rute terbaik.
Komponen Pembangun Produk
Aplikasi ZIPPY dibangun menggunakan berbagai teknologi untuk memastikan pengalaman pengguna yang lancar dan responsif. Beberapa komponen utama yang digunakan dalam pengembangan aplikasi ini adalah:

React Native: Framework utama untuk membangun aplikasi mobile yang dapat berjalan di platform iOS dan Android.
React Navigation: Digunakan untuk mengelola navigasi antara halaman-halaman di dalam aplikasi.
React Native Map: Untuk menampilkan peta dan lokasi pengguna serta rute perjalanan.
Axios: Untuk mengelola permintaan HTTP jika aplikasi perlu berinteraksi dengan server eksternal.
React Native Image Picker: Untuk memungkinkan pengguna mengambil foto untuk profil mereka.
Redux: Untuk manajemen state global aplikasi, seperti status login dan riwayat aktivitas.
React Native Payments: Untuk memudahkan integrasi pembayaran melalui e-wallet, kartu debit, atau paylater.
AsyncStorage: Untuk menyimpan data lokal seperti riwayat aktivitas dan preferensi pengguna.
Sumber Data
Aplikasi ZIPPY mengandalkan beberapa sumber data berikut:

Data Lokasi: Data tentang lokasi pengguna dan titik perjalanan, yang digunakan untuk menampilkan peta dan rute perjalanan.
Data Pembayaran: Metode pembayaran yang dipilih pengguna disimpan untuk memproses transaksi dengan penyedia pembayaran.
Data Aktivitas: Riwayat aktivitas perjalanan yang disimpan dan dapat dilihat oleh pengguna.
Tangkapan Layar Komponen Penting Produk
Tampilan Halaman Utama (Home Page)

Deskripsi: Menampilkan waktu saat ini, pilihan transportasi (scooter atau sepeda listrik), serta tombol untuk melihat lokasi dan memulai proses sewa.

Tampilan Pembayaran (Payment)

Deskripsi: Pengguna dapat memilih metode pembayaran dan menyelesaikan transaksi sewa kendaraan.

Tampilan Aktivitas (Activity)

Deskripsi: Menampilkan aktivitas perjalanan pengguna setelah pembayaran selesai.

Tampilan Peta (Map)

Deskripsi: Peta interaktif yang menunjukkan lokasi pengguna dan rute perjalanan.

Cara Menjalankan Aplikasi
Persyaratan Sistem
Node.js versi 14.x atau lebih tinggi
npm versi 6.x atau lebih tinggi
Android Studio atau Xcode (untuk pengembangan aplikasi seluler)
Instalasi
Clone repositori ini ke mesin lokal Anda:

bash
Copy code
git clone https://github.com/username/repository-name.git
Instal dependensi:

bash
Copy code
cd repository-name
npm install
Jalankan aplikasi:

Untuk Android:
bash
Copy code
react-native run-android
Untuk iOS:
bash
Copy code
react-native run-ios
Kontribusi
Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request atau buka issue untuk berdiskusi tentang perubahan yang ingin Anda buat. Sebelum melakukan perubahan besar, harap lakukan fork dari repositori ini dan buat branch baru.

Lisensi
Produk ini dilisensikan di bawah MIT License.




