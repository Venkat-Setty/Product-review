import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortalComponent} from './portal.component';
import { ProductLookupComponent } from './product-lookup/product-lookup.component';
import { ReviewProductComponent } from './review-product/review-product.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: '',
        redirectTo: 'product-lookup',
      },
      {
        path: 'product-lookup',
        component: ProductLookupComponent,
      },
      {
        path: ':productId/review-product',
        component: ReviewProductComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class PortalRoutingModule {
}
