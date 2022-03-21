import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  

  constructor(public ProductService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.ProductService.getProducts().subscribe(
      res => {
        this.ProductService.juegos = res;
      },
      err => console.log(err) 
    ) 
  }

  addGame(form: NgForm){
    console.log("A");
    console.log(form.value);
  }
}
