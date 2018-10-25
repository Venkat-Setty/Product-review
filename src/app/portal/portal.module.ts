import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { ProductLookupComponent } from './product-lookup/product-lookup.component';
import { ReviewProductComponent } from './review-product/review-product.component';
import {PortalRoutingModule} from './portal-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PortalRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PortalComponent, ProductLookupComponent, ReviewProductComponent]
})
export class PortalModule { }