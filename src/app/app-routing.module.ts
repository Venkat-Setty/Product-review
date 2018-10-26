import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicGuard } from './guards/public.guard';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './public/public.module#PublicModule',
    canActivate: [PublicGuard]
  },
  {
    path: '',
    loadChildren: './portal/portal.module#PortalModule',
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'product-lookup', pathMatch: 'full' },
  { path: '**', redirectTo: 'product-lookup' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
