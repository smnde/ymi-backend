### AUTH ROUTES

### #Endpoint: POST /api/login

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini
-  Enpoint ini hanya digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

```json
{
	"username": "username",
	"password": "password"
}
```

### #Endpoint: POST /api/logout

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini
-  Enpoint ini hanya digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

-  req.user.id
-  req.user didapat dari auth middleware

### USER ROUTES

### #Endpoint: GET /api/users

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini
-  Enpoint ini hanya digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}

### #Endpoint: GET /api/users/:id

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini
-  Enpoint ini hanya digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan

-  Request Headers: Authorization: {JWT Access Token}
-  Request Params: userID

### #Endpoint: POST /api/users

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini
-  Enpoint ini hanya digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}
-  Request Body:

```json
{
	"name": "user",
	"username": "username",
	"password": "password"
}
```

### #Endpoint: PATCH /api/users/:id

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini
-  Enpoint ini hanya digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}
-  Request Params: userID
-  Request Body:

```json
{
	"name": "user",
	"username": "username",
	"password": "password"
}
```

### #Endpoint: DELETE /api/users/:id

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini
-  Enpoint ini hanya digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}
-  Request Params: userID

### NEWSLETTER ROUTES

### #Endpoint: GET /api/newsletters

## Keterangan:

-  Endpoint ini digunakan di admin panel dan di client page untuk menampilkan daftar newsletter
-  Tidak perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan

-  Tidak ada

### #Endpoint: GET /api/newsletters/:id

## Keterangan:

-  Endpoint ini digunakan di admin panel dan di client page untuk menampilkan detail newsletter
-  Tidak perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

-  Request Params: newsletterID

### #Endpoint: POST /api/newsletters

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini
-  Enpoint ini hanya digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan

-  Request Headers: Authorization: {JWT Access Token}
-  Request Body :

```json
{
	"title": "title news",
	"slug": "slug-url",
	"content": "content",
	"image": "image",
	"thumbnail": "thumbnail", // optional
	"timestamps": "date"
}
```

### #Endpoint: PATCH /api/newsletters/:id

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini
-  Enpoint ini hanya digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}
-  Request Params: newsletterID
-  Request Body :

```json
{
	"title": "title news",
	"slug": "slug-url",
	"content": "content",
	"image": "image",
	"thumbnail": "thumbnail" // optional
}
```

### #Endpoint: DELETE /api/newsletters/:id

-  Request Headers: Authorization: {JWT Access Token}
-  Request Params: newsletterID

### VISI & MISI ROUTES

### #Endpoint: GET /api/visions

## Keterangan:

-  Endpoint ini digunakan di page client, untuk menampilkan visi dan misi yayasan.
-  Tidak perlu autentikasi untuk mengakses endpoint ini.
-  Agar visi dan misi bisa dinamis, jadi kalau perlu ada perubahan, admin hanya tinggal edit saja

### #Endpoint: POST /api/visions

## Keterangan:

-  Hanya admin yang bisa mengakses endpoint ini
-  Diperlukan auth middleware untuk mengecek apakah user login atau tidak
-  Endpoint ini hanya digunakan di admin panel

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}
-  Request Params: newsletterID
-  Request Body :

```json
{
	"visi": "description",
	"misi": "description"
}
```

### #Endpoint: PATCH /api/visions/:id

## Keterangan:

-  Hanya admin yang bisa mengakses endpoint ini
-  Diperlukan auth middleware untuk mengecek apakah user login atau tidak
-  Endpoint ini hanya digunakan di admin panel

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}
-  Request Params: visionID
-  Request Body :

```json
{
	"visi": "description",
	"misi": "description"
}
```

### #Endpoint: DELETE /api/visions/:id

## Keterangan:

-  Hanya admin yang bisa mengakses endpoint ini
-  Diperlukan auth middleware untuk mengecek apakah user login atau tidak
-  Endpoint ini hanya digunakan di admin panel

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}
-  Request Params: visionID

### PROGRAMS ROUTES

### #Endpoint: GET /api/programs

## Keterangan:

-  Endpoint ini digunakan di page client, untuk menampilkan program yayasan.
-  Tidak perlu autentikasi untuk mengakses endpoint ini.

### #Endpoint: POST /api/programs

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini.
-  Enpoint ini digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}
-  Request Body:

```json
{
	"name": "tahsin & tahfidz quran",
	"link": "link pendaftaran" // bisa link google form atau link wa
}
```

### #Endpoint: PATCH /api/programs/:id

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini.
-  Enpoint ini digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}
   -Request Params: programID
-  Request Body:

```json
{
	"name": "tahsin & tahfidz quran",
	"link": "link pendaftaran" // bisa link google form atau link wa
}
```

### #Endpoint: DELETE /api/programs

## Keterangan:

-  Hanya admin yang boleh mengakses endpoint ini.
-  Enpoint ini digunakan di admin panel
-  Perlu authentikasi untuk mengakses endpoint ini

## Request yang dibutuhkan:

-  Request Headers: Authorization: {JWT Access Token}
-  Request Params: programID
