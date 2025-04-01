import { Component } from '@angular/core';
import {StripePaymentComponent} from './features/stripe-payment/stripe-payment.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,StripePaymentComponent],
  //templateUrl: './app.component.html',
  template: `<app-stripe-payment></app-stripe-payment>`,
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wcp-payment';
}
