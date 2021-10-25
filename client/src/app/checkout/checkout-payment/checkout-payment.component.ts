import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IOrder } from 'src/app/shared/models/order';
import { CheckoutService } from '../checkout.service';

declare var Stripe;
@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements AfterViewInit, OnDestroy {
  @Input() checkoutForm: FormGroup;
  @ViewChild('cardNumber', {static: true}) cardNumberElement: ElementRef;
  @ViewChild('cardExpiry', {static: true}) cardExpiryElement: ElementRef;
  @ViewChild('cardCvc', {static: true}) cardCvcElement: ElementRef;
  stripe: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  cardErrors: any;
  cardhandler = this.onChange.bind(this);


  constructor(private basketService: BasketService, private checkoutService: CheckoutService,
  private toastr: ToastrService, private router: Router) { }

  

   ngAfterViewInit() {
     this.stripe = Stripe('pk_test_51JnK5zGElFKEwnLmQDStdnE6Y6agO3v3c3TJ5Sk5cgrP7IWaX4LsVFwpit5BXxsu5fbfel0GgN0HpKSH8aXoMRlF00TSyIeV3D')
     const element = this.stripe.elements();

     this.cardNumber = element.create('cardNumber');
     this.cardNumber.mount(this.cardNumberElement.nativeElement);
     this.cardNumber.addEventListener('change', this.cardhandler);

     this.cardExpiry = element.create('cardExpiry');
     this.cardExpiry.mount(this.cardExpiryElement.nativeElement);
     this.cardExpiry.addEventListener('change', this.cardhandler);

     this.cardCvc = element.create('cardCvc');
     this.cardCvc.mount(this.cardCvcElement.nativeElement);
     this.cardCvc.addEventListener('change', this.cardhandler);
  }

  ngOnDestroy(): void {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  }

  onChange({error}) {
    if (error) {
      this.cardErrors = error.message;
    } else {
      this.cardErrors = null;
    }
  }

  submitOrder() {
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    this.checkoutService.creatOrder(orderToCreate).subscribe((order: IOrder) => {
      this.toastr.success('Order created successfully');
      this.stripe.confirmCardPayment(basket.clientSecret, {
        payment_method: {
          card: this.cardNumber,
          billing_details: {
            name: this.checkoutForm.get('paymentForm').get('nameOnCard').value
          }
        }
      }).then(result => {
        console.log(result);
        if (result.paymentIntent) {
         this.basketService.deleteLocalBasket(basket.id);
         const navigationExtras: NavigationExtras = {state: order};
         this.router.navigate(['checkout/success'], navigationExtras);

        } else {
          this.toastr.error('Payment error');

        }
      })
   
    }, error => {
      this.toastr.error(error.message);
      console.log(error);
    })
  }


 private getOrderToCreate(basket: IBasket) {
  return {
    basketId: basket.id,
    deliveryMethodId: +this.checkoutForm.get('deliveryForm').get('deliveryMethod').value,
    shipToAddress: this.checkoutForm.get('addressForm').value
  };
  }

 

}
