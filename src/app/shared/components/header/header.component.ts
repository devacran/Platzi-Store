import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../../core/services/cart-service/cart-service.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>

  constructor(
    private cartService: CartServiceService
  ) {

    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length) //aqui la transformar
    )

  }

  ngOnInit() {
  }

}
