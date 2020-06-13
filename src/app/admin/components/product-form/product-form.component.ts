import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProductsService } from './../../../core/services/products/products.service'
import { Router } from '@angular/router'
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  form: FormGroup
  image$: Observable<any>
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm()
  }

  onSubmit() {
    alert('Thanks!');
  }

  upload(event) {
      const file = event.target.files[0];
      const name = 'image.png';
      const fileRef = this.storage.ref(name);
      const task = this.storage.upload(name, file);

      task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url => {
            console.log(url);
            this.form.get('image').setValue(url);
          });
        })
      )
      .subscribe();
    }
  ngOnInit() {
  }
  saveProduct(event: Event){
    event.preventDefault()
    if(this.form.valid){
      const product = this.form.value
      this.productsService.createProduct(product).subscribe( newProduct => {
      this.router.navigate(['./admin/products']) //para redirecionar a products
      })
    }
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
}
