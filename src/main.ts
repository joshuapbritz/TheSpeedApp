import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { doIntenseTask } from './utils/tasks';

if (environment.production) {
  enableProdMode();
}

// doIntenseTask();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));

