import { Routes } from '@angular/router';
import {StripePaymentComponent} from './features/stripe-payment/stripe-payment.component';

export const routes: Routes = [


  { path: 'stripe-payment', component: StripePaymentComponent },
  { path: '**', redirectTo: 'stripe-payment'},

];
