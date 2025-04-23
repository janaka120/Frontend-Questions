import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideStore, MetaReducer } from '@ngrx/store';
import { localStorageMetaReducer } from './app/local-storage';

const metaReducers: MetaReducer[] = [localStorageMetaReducer];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideStore({}, { metaReducers })],
});
