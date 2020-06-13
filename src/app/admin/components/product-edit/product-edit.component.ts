import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductsService } from './../../../core/services/products/products.service'
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup
  id: string
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router, //para poder cambiar de ruta mas abajo
    private activeRoute: ActivatedRoute, //para saber la ruta actual
  ) {
    this.buildForm()//para crear un formulario
  }

  onSubmit() {
    alert('Thanks!');
  }

  ngOnInit() {
    this.activeRoute.params.subscribe( params => {
      this.id = params.id
      this.productsService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product)//aqui pongo los valores de product en el formulario
      })
    })
  }
  saveProduct(event: Event){
    event.preventDefault()
    if(this.form.valid){
      const product = this.form.value
      this.productsService.updateProduct(this.id, product).subscribe( newProduct => {
      this.router.navigate(['./admin/products']) //para redirecionar a products
      })
    }
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required], //validadores
      title: ['', Validators.required],
      price: [0, Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

}
