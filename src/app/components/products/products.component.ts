import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetProductsService } from '../get-products.service';
import { IProduct } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [GetProductsService],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];

  sub!: Subscription;

  constructor(private productService: GetProductsService) {}

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => console.log(err),
    });
    console.log(this.products);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
