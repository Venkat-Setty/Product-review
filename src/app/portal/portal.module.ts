import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { ProductLookupComponent } from './product-lookup/product-lookup.component';
import { ReviewProductComponent } from './review-product/review-product.component';
import { RouterModule } from '@angular/router';
import { PortalRoutingModule } from './portal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PortalRoutingModule,
  ],
  declarations: [
    PortalComponent,
    ProductLookupComponent,
    ReviewProductComponent,
  ],
})
export class PortalModule { }
