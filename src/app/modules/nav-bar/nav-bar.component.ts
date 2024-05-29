import { Component } from '@angular/core';
import { CartService } from '../../shared/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
cartItems: any []=[];

constructor(private CartService:CartService){}
ngOninit(): void{
  
}
}
