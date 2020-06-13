import { AbstractControl } form '@angular/forms'
export class MyValidators {


  static isPriceValid (control: AbstractControl){
    const value = control.value
    console.log(value)
    if(value > 10000){
      return price_invalid: true
    }
    return null
  }
}

//se importa esta clase donde se vaya a usar como mY vALIDATPR
