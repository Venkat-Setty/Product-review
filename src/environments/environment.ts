// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyApw21-ICztqAt8yw5uhkHcehjVzVjLK88',
    authDomain: 'product-review-phani.firebaseapp.com',
    databaseURL: 'https://product-review-phani.firebaseio.com',
    projectId: 'product-review-phani',
    storageBucket: 'product-review-phani.appspot.com',
    messagingSenderId: '1067863481253',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
