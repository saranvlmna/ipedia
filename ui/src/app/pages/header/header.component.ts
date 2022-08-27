import { Component, OnInit } from '@angular/core';
import { productService } from 'src/app/services/product.service'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private products: productService,private auth:AuthService) { }

  ngOnInit(): void {
    this.products.getAll()
    this.auth.getUser().subscribe(data => {
      console.log(data);
    })
  }
}
