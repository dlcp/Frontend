import { Component, OnInit } from '@angular/core';
import { CartService, CartItem } from '../../shared/cart.service'; 

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  cartItems: CartItem[] = []; 
  errorMessage: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadProducts(); 
    this.loadCartItems(); 
  }

  loadProducts(): void {
    
    this.products = [
      { id: 1, name: 'Product 1', price: 10, imageUrl: '...' },
      { id: 2, name: 'Product 2', price: 20, imageUrl: '...' },
      { id: 3, name: 'Product 3', price: 30, imageUrl: '...' }
    ];
  }

  loadCartItems(): void {
    this.cartService.getItem().subscribe(
      items => {
        this.cartItems = items;
        this.errorMessage = ''; 
      },
      error => {
        console.error('Error loading cart items:', error);
        this.errorMessage = 'Error loading cart items'; 
      }
    );
  }

  onClickAdd(product: Product): void {
    const itemToAdd: CartItem = { 
      id: product.id,
      name: product.name,
      quantity: 1 
    };
  
    this.cartService.addItem(itemToAdd)
      .subscribe(
        () => {
          console.log(`${product.name} added to cart`);
          this.loadCartItems(); 
        },
        error => {
          console.error('Error adding product to cart:', error);
          this.errorMessage = 'Error adding product to cart'; 
        }
      );
  }

  onClickDelete(itemId: number): void {
    this.cartService.removeItem(itemId)
      .subscribe(
        () => {
          console.log('Product removed from cart successfully');
          this.cartItems = this.cartItems.filter(item => item.id !== itemId);
        },
        error => {
          console.error('Error removing product from cart:', error);
          this.errorMessage = 'Error removing product from cart'; 
        }
      );
  }
}
