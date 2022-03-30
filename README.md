
# Contoh Script Simple Implementation Math In Node JS With Rest Api

![Logo](https://i.ibb.co/N3t6B9g/image.png)


## Isi file

- math.js (untuk melakukan uji coba blasting)
- package.json (file yang berisi deskripsi dari project Nodejs. NPM membutuhkan file ini untuk bisa bekerja. Informasi project berisi nama, versi, dan deskripsi.)








## Support

For support, email syahdanfilsafan58@gmail.com or [whats app](https://wa.me/628998937095/) .


## Cara Instalasi
Instalation
```bash
  npm install && npm start
```
Start
```bash
 npm start
```

## API Reference

#### Get all items

```http
  POST /hitungall
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `alas` | `number` | **Required**. type number |
| `tinggi` | `number` | **Required**. type number |
| `panjang` | `number` | **Required**. type number |
| `lebar` | `number` | **Required**. type number |
| `jarijari` | `number` | **Required**. type number |


```http
  POST /luaspersegipanjang
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `panjang` | `number` | **Required**. type number |
| `lebar` | `number` | **Required**. type number |

```http
  POST /luassegitiga
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `alas` | `number` | **Required**. type number |
| `tinggi` | `number` | **Required**. type number |

```http
  POST /luaslingkaran
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `jarijari` | `number` | **Required**. type number |
