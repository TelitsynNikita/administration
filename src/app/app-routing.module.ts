import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'brand', loadChildren: () => import('./modules/brand/brand.module').then(md => md.BrandModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
