import {Component} from "@angular/core";

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {
  a: unknown = 12

  constructor() {
    console.log(this.a)
  }
}
