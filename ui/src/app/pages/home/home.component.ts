import { Component, OnInit } from '@angular/core';
import { productService } from '../../services/product.service';
@Component({
  selector: 'app-productServicehome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private products:productService) { }

  ngOnInit(): void {
  }

  listproducts() {
    this.products.getAll().subscribe(data => { 
      console.log(data);
    });
  }
}
