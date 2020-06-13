import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model'
import { CartServiceService } from '../../../core/services/cart-service/cart-service.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>
  constructor(
    private cartService: CartServiceService
  ) {
    this.products$ = this.cartService.cart$
  }

  ngOnInit(): void {
  }

}
