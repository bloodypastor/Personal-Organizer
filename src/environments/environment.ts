// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDdH_V33YZHxHlTKQslOin7kJNUDML8nn0",
    authDomain: "todolist-2bb0d.firebaseapp.com",
    databaseURL: "https://todolist-2bb0d.firebaseio.com",
    projectId: "todolist-2bb0d",
    storageBucket: "todolist-2bb0d.appspot.com",
    messagingSenderId: "879447727390"
  }
};
