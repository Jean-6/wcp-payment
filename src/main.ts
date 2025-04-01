import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideNgxStripe} from 'ngx-stripe';
import {provideHttpClient} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideNgxStripe('pk_live_51Lgb1fFC4qwBoSWo85KiVZ7uPM6FRIATADdNPKt06wN1F2Qp5KW5KfeJ0lBeTeuG3Gom1Au2aHgNMqpu3OKe1v2z00B1olQlsX')
  ],
}).then(() => console.log('Application started with success') )
  .catch(err => console.log('Error during launching ',err));
