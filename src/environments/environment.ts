// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config : {
      apiKey: "AIzaSyA4S_iwsmWprLDrLLXWXCZDbXVtCHu3P8g",
      authDomain: "ecommerce-f2b7d.firebaseapp.com",
      projectId: "ecommerce-f2b7d",
      storageBucket: "ecommerce-f2b7d.appspot.com",
      messagingSenderId: "338461922624",
      appId: "1:338461922624:web:1ecf6bd9d722d4085f56a5"
    }
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
