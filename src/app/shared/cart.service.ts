import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export interface CartItem { 
  id: number;
  name: string;
  quantity: number;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://apimyecomerce.com';

  constructor(private http: HttpClient) {}

  getItem(): Observable<CartItem[]> {
    const url = `${this.apiUrl}/cart/items`;
    return this.http.get<CartItem[]>(url)
      .pipe(catchError(this.handleError));
  }

  addItem(item: CartItem): Observable<any> {
    const url = `${this.apiUrl}/cart/add`; 
    return this.http.post<any>(url, item)
      .pipe(catchError(this.handleError));
  }

  removeItem(itemId: number): Observable<any> {
    const url = `${this.apiUrl}/cart/delete/${itemId}`;
    return this.http.delete<void>(url)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(() => new Error(error.message || error)); 
  }
}
