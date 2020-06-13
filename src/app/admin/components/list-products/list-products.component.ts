import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListProductsDataSource, ListProductsItem } from './list-products-datasource';
import { ProductsService } from './../../../core/services/products/products.service'
import { Product } from './../../../core/models/product.model'
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ListProductsItem>;
  dataSource: ListProductsDataSource;
  products: Product[] = []
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'price', 'actions'];
  constructor(
    private productService: ProductsService
  ){}

  ngOnInit() {
    this.fetchProducts()
  }

  fetchProducts(){
    this.productService.getAllProducts().subscribe( products => {
      this.products = products
    })
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe( res => {
      if( res === 'true') {
        // this.products.splice(index, 1);
        this.products = [...this.products]; // <-- Linea clave
      }else{
        alert(res)
      }
    })
  }


}
