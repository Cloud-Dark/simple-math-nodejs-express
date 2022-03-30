const express = require('express');
const {
    body,
    validationResult
} = require('express-validator');
const bodyParser = require('body-parser');
const multer = require('multer');


const jsonParser = bodyParser.json();
const app = express();
const port = 3000;
const upload = multer();
app.use(bodyParser.json());

app.post('/luaspersegipanjang', upload.none(), jsonParser, [
    body('panjang').notEmpty(),
    body('lebar').notEmpty(),
], async (req, res) => {
    const errors = validationResult(req).formatWith(({
        msg
    }) => {
        return msg;
    });

    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.mapped()
        });
    }
    const panjang = req.body.panjang;
    const lebar = req.body.lebar;
    const hasil = panjang * lebar;
    res.send({
        'panjang': panjang,
        'lebar': lebar,
        'luas Persegi Panjang adalah': hasil
    });
});
app.post('/luassegitiga', upload.none(), jsonParser, [
    body('alas').notEmpty(),
    body('tinggi').notEmpty(),
], async (req, res) => {
    const errors = validationResult(req).formatWith(({
        msg
    }) => {
        return msg;
    });

    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.mapped()
        });
    }
    const alas = req.body.alas;
    const tinggi = req.body.tinggi;
    const hasil = alas * tinggi * 0.5;
    res.send({
        'alas': alas,
        'tinggi': tinggi,
        'luas segitiga adalah': hasil
    });
});
app.post('/luaslingkaran', upload.none(), jsonParser, [
    body('jarijari').notEmpty(),
], async (req, res) => {
    const errors = validationResult(req).formatWith(({
        msg
    }) => {
        return msg;
    });

    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.mapped()
        });
    }
    const jarijari = req.body.jarijari;
    const hasil = jarijari * 22 / 7;
    res.send({
        'jarijari': jarijari,
        'luas lingkaran adalah': hasil
    });
});
app.post('/hitungall', upload.none(), jsonParser, [
    body('panjang').notEmpty(),
    body('lebar').notEmpty(),
    body('alas').notEmpty(),
    body('tinggi').notEmpty(),
    body('jarijari').notEmpty(),
], async (req, res) => {
    const errors = validationResult(req).formatWith(({
        msg
    }) => {
        return msg;
    });

    if (!errors.isEmpty()) {
        return res.status(422).json({
            status: false,
            message: errors.mapped()
        });
    }
    const alas = req.body.alas;
    const tinggi = req.body.tinggi;
    const panjang = req.body.panjang;
    const lebar = req.body.lebar;
    const jarijari = req.body.jarijari;
    const hasilsegitiga = alas * tinggi * 0.5;
    const hasillingkaran = jarijari * 22 / 7;
    const hasilpersegipanjang = panjang * lebar;
    const inputangka = {
        alas: parseInt(req.body.alas),
        tinggi: parseInt(req.body.tinggi),
        tinggi: parseInt(req.body.tinggi),
        panjang: parseInt(req.body.panjang),
        lebar: parseInt(req.body.lebar),
        jarijari: parseInt(req.body.jarijari),
    };
    const hasilhitung = {
        hasilsegitiga: parseInt(hasilsegitiga),
        hasillingkaran: parseInt(hasillingkaran),
        hasilpersegipanjang: parseInt(hasilpersegipanjang),
    };
    const cetakjson = '{ "Input Angka": ' + JSON.stringify(inputangka) + ', "Hasil Perhitungan": ' + JSON.stringify(hasilhitung) + ' }';
    const object = JSON.parse(cetakjson)

    console.dir(object, {
        depth: 4,
        colors: true
    });

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        'Input Angka': inputangka,
        'Hasil Perhitungan': hasilhitung,
    }));
});
app.listen(port, () => {
    console.log(`matematika sederhana dengan node js siap di gunakan pada url berikut http://localhost:${port}`)
    console.log(`made with love from Syahdan.js`)
    console.log(`https://apipedia.id/`)
});
