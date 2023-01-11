import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../products/products';
import { GetProductsService } from '../get-products.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit, OnDestroy {
  product: IProduct | undefined;

  products: IProduct[] = [];
  filteredProduct: any = [];

  sub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: GetProductsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.sub = this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProduct = this.products.filter(
          (product) => product.productId === id
        );
        this.product = this.filteredProduct[0];
      },

      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
