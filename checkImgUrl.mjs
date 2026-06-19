import https from 'https';

https.get('https://raw.githubusercontent.com/djaceplace-coder/Mazakuta-Original/main/public/Test1before.jpg', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
});
