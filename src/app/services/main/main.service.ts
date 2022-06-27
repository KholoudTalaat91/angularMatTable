import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';
import { orderData } from '../../dataModels/table-models';

@Injectable()
export class MainService {
  orders: BehaviorSubject<orderData> = new BehaviorSubject<orderData>(new orderData);
  constructor(private http: HttpClient) {}
  /********** GETTING **********/
  getOrders(): Observable<orderData> {
    return this.orders.asObservable();
  }
  /********** UPDATING **********/
  updateOrders(orders: orderData) {
    this.orders.next(orders);
  }
  /********** API **********/
  loadOrders(): Observable<orderData> {
    let ordersRes = {
      orders: [
        {
          orderId: '#1',
          orderName: 'orderName #1',
          orderCost: 45,
          selected: false,
          allPackagesAreSelected: false,
          packages: [
            {
              packageId: '#1.1',
              packageName: 'PackageName #1.1',
              packageCost: 15,
              selected: false,
              allProductAreSelected: false,
              products: [
                {
                  productId: '#1.1.1',
                  productName: 'productName #1.1.1',
                  productCost: 5,
                  selected: false,
                },
                {
                  productId: '#1.1.2',
                  productName: 'productName #1.1.2',
                  productCost: 2,
                  selected: false,
                },
                {
                  productId: '#1.1.3',
                  productName: 'productName #1.1.3',
                  productCost: 8,
                  selected: false,
                },
              ],
            },
            {
              packageId: '#1.2',
              packageName: 'PackageName #1.2',
              packageCost: 30,
              selected: false,
              allProductAreSelected: false,
              products: [
                {
                  productId: '#1.2.1',
                  productName: 'productName #1.2.1',
                  productCost: 10,
                  selected: false,
                },
                {
                  productId: '#1.2.2',
                  productName: 'productName #1.1.2',
                  productCost: 12,
                  selected: false,
                },
                {
                  productId: '#1.1.3',
                  productName: 'productName #1.2.3',
                  productCost: 8,
                  selected: false,
                },
              ],
            },
          ],
        },
        {
          orderId: '#2',
          orderName: 'orderName #2',
          orderCost: 25,
          selected: false,
          allPackagesAreSelected: false,
          packages: [
            {
              packageId: '#2.1',
              packageName: 'PackageName #2.1',
              packageCost: 10,
              selected: false,
              allProductAreSelected: false,
              products: [
                {
                  productId: '#2.1.1',
                  productName: 'productName #2.1.1',
                  productCost: 5,
                  selected: false,
                },
                {
                  productId: '#2.1.2',
                  productName: 'productName #2.1.2',
                  productCost: 3,
                  selected: false,
                },
                {
                  productId: '#2.1.3',
                  productName: 'productName #2.1.3',
                  productCost: 2,
                  selected: false,
                },
              ],
            },
            {
              packageId: '#2.2',
              packageName: 'PackageName #2.2',
              packageCost: 15,
              selected: false,
              allProductAreSelected: false,
              products: [
                {
                  productId: '#2.2.1',
                  productName: 'productName #2.2.1',
                  productCost: 5,
                  selected: false,
                },
                {
                  productId: '#2.2.2',
                  productName: 'productName #2.2.2',
                  productCost: 5,
                  selected: false,
                },
                {
                  productId: '#2.2.3',
                  productName: 'productName #2.2.3',
                  productCost: 5,
                  selected: false,
                },
              ],
            },
          ],
        },
        {
          orderId: '#3',
          orderName: 'orderName #3',
          orderCost: 105,
          selected: false,
          allPackagesAreSelected: false,
          packages: [
            {
              packageId: '#3.1',
              packageName: 'PackageName #3.1',
              packageCost: 30,
              selected: false,
              allProductAreSelected: false,
              products: [
                {
                  productId: '#3.1.1',
                  productName: 'productName #3.1.1',
                  productCost: 15,
                  selected: false,
                },
                {
                  productId: '#3.1.2',
                  productName: 'productName #3.1.2',
                  productCost: 10,
                  selected: false,
                },
                {
                  productId: '#3.1.3',
                  productName: 'productName #3.1.3',
                  productCost: 5,
                  selected: false,
                },
              ],
            },
            {
              packageId: '#3.2',
              packageName: 'PackageName #3.2',
              packageCost: 75,
              selected: false,
              allProductAreSelected: false,
              products: [
                {
                  productId: '#3.2.1',
                  productName: 'productName #3.2.1',
                  productCost: 30,
                  selected: false,
                },
                {
                  productId: '#3.2.2',
                  productName: 'productName #3.2.2',
                  productCost: 25,
                  selected: false,
                },
                {
                  productId: '#3.2.3',
                  productName: 'productName #3.2.3',
                  productCost: 20,
                  selected: false,
                },
              ],
            },
          ],
        },
      ],
      allOrdersAreSelected: false,
    };
    let ordersResObs = of(ordersRes).pipe(delay(5000));
    return ordersResObs;
  }
}
