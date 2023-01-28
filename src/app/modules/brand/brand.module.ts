import {NgModule} from "@angular/core";
import {BrandComponent} from "./brand.component";
import {BrandRoutingModule} from "./brand-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [BrandComponent],
  imports: [
    BrandRoutingModule,
    ReactiveFormsModule
  ]
})
export class BrandModule {}
