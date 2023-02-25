import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app/app.module";

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err): void => {
      // Exceptionally allow a console call
      // eslint-disable-next-line no-restricted-globals
      console.error(err);
    });
