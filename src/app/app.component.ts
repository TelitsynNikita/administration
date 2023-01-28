import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list = [
    {title: 'Brand Name', src: '/brand', icon: 'bi bi-apple'},
    {title: 'Dashboard', src: '/dashboard', icon: 'bi bi-house-door'},
    {title: 'Customers', src: '/customers', icon: 'bi bi-person'},
    {title: 'Messages', src: '/messages', icon: 'bi bi-chat'},
    {title: 'Help', src: '/help', icon: 'bi bi-question-lg'},
    {title: 'Settings', src: '/settings', icon: 'bi bi-gear'},
    {title: 'Password', src: '/password', icon: 'bi bi-lock'},
    {title: 'Sign out', src: '/sign-out', icon: 'bi bi-box-arrow-in-right'},
  ]
  data: string[] = []
  active = false

  constructor(private http: HttpClient) {
  }

  onToggle() {
    this.active = !this.active;
    this.http.get('http://localhost:8080/api/send-info').subscribe((val: any) => this.data = val['data'])
  }
}
