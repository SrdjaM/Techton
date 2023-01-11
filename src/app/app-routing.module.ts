import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewtechComponent } from './components/newtech/newtech.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: DetailsPageComponent },
      { path: 'newtech', component: NewtechComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'home', component: HomePageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', component: NotfoundComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
