import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product; //defino la variable publica product de tipo Product

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService //Es el servicio que contiene la informacion de los productos
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // this.product = this.productsService.getProduct(id).subscribe(); //asigno a la variable que defini arriba
      // console.log(this.product);
    });
  }
}
