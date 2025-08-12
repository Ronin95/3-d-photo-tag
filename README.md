I have built an angular application that can be described as a Mobile Photo Geotagging Application Using Capacitor and 3D Maps.

You need an environments folder inside src.
Inside the environments folder you need an environment.ts file
and the file has to look like this:
```
export const environment = {
  firebase: {
    projectId: '',
    appId: '',
    storageBucket: '',
    locationId: '',
    apiKey: '',
    authDomain: '',
    messagingSenderId: '',
  },
  production: false,
  cesium: {
    accessToken: ''
  },
  firebaseConfig: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
};
```

next type in `npm install` and `npm start` then you can open the web app.