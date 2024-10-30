const express = require('express');
const app = express();
const port = 3000;

// Data contoh
let kosts = [
    { id: 1, name: 'Kost A', price: 1500000, distance: 1.5 },
    { id: 2, name: 'Kost B', price: 2000000, distance: 2.0 },
];

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint untuk mendapatkan semua kost
app.get('/kosts', (req, res) => {
    res.json(kosts);
});

// Endpoint untuk mendapatkan kost berdasarkan ID
app.get('/kosts/:id', (req, res) => {
    const kost = kosts.find(k => k.id === parseInt(req.params.id));
    if (!kost) return res.status(404).send('Kost tidak ditemukan');
    res.json(kost);
});

// Endpoint untuk menambahkan kost baru
app.post('/kosts', (req, res) => {
    const { name, price, distance } = req.body;
    const newKost = { id: kosts.length + 1, name, price, distance };
    kosts.push(newKost);
    res.status(201).json(newKost);
});

// Menjalankan server
app.listen(port, () => {
    console.log(`API berjalan di http://localhost:${port}`);
});
