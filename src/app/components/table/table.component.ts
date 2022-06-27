// angular
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// services
import { MainService } from '../../services/main/main.service';
// angular Material
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

// Data Model
import {
  PeriodicElement,
  orderData,
  orderOfPackages,
  packageOfProducts,
  product,
} from '../../dataModels/table-models';

/**
 * Table with expandable rows
 */

@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.scss'],
  templateUrl: './table.component.html',
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({
          height: '0px',
          minHeight: '0',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
        })
      ),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableComponent implements OnInit  {
  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('input') input!: ElementRef;
  data: orderData = new orderData;
  orders = new MatTableDataSource(this.data.orders);
  orderColumnsToDisplay = ['selected', 'orderId', 'orderName', 'orderCost'];
  expandedOrder: orderOfPackages | null = new orderOfPackages();
  PackageColumnsToDisplay = [
    'selected',
    'packageId',
    'packageName',
    'packageCost',
  ];
  expandedPackage: packageOfProducts | null = new packageOfProducts();
  ProductColumnsToDisplay = [
    'selected',
    'productId',
    'productName',
    'productCost',
  ];
  clickedOrders = new Set<orderOfPackages>();
  clickedPackages = new Set<packageOfProducts>();
  pageSize: number = 3;
  /**
   * Methods
   */
  constructor(private mainService: MainService) {}
  ngOnInit(): void {
    this.loadOrdersData();
    this.getOrdersData();
  }
  ngAfterViewInit(): void {}
  	
  loadOrdersData() {
    this.mainService.loadOrders().subscribe((res) => {
      this.mainService.updateOrders(res);
    });
  }
  getOrdersData() {
    this.mainService.getOrders().subscribe((res) => {
      this.data = res;
      this.initiateMatTable();
    });
  }
  initiateMatTable() {
    this.orders = new MatTableDataSource(this.data.orders);
    this.table ? this.table.renderRows() : '';
    this.orders.paginator = this.paginator;
    this.orders.sort = this.sort;
  }
  addData() {
    let order = {
      orderId: 'new',
      orderName: 'orderName new',
      orderCost: 5,
      selected: false,
      allPackagesAreSelected: false,
      packages: [
        {
          packageId: 'new',
          packageName: 'PackageName new',
          packageCost: 5,
          selected: false,
          allProductAreSelected: false,
          products: [
            {
              productId: 'new',
              productName: 'productName new',
              productCost: 5,
              selected: true,
            },
          ],
        },
      ],
    };
    this.data.orders = [...this.data.orders, order];
    this.mainService.updateOrders(this.data);
    this.input.nativeElement.value = '';
  }

  removeData() {
    this.data.orders.pop();
    this.mainService.updateOrders(this.data);
    this.input.nativeElement.value = '';
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.orders.filter = filterValue.trim().toLowerCase();
    if (this.orders.paginator) {
      this.orders.paginator.firstPage();
    }
  }
  onPageChanged(e: any) {
    console.log(e);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.orderColumnsToDisplay,
      event.previousIndex,
      event.currentIndex
    );
  }

  allOrdersAreSelectedChanged(e: any) {
    this.data.orders.forEach((order) => (order.selected = e));
  }
  allPackagesAreSelectedChanged(order: orderOfPackages, e: any) {
    order.packages.forEach((orderPackage) => (orderPackage.selected = e));
  }

  updateExpandedOrder(order: orderOfPackages) {
    this.expandedOrder = this.expandedOrder === order ? null : order;
    this.expandedPackage = null;
    this.updateClickedOrders(order);
  }

  updateClickedOrders(order: orderOfPackages) {
    this.clickedOrders.clear();
    if (this.expandedOrder === order) {
      this.clickedOrders.add(order);
    }
  }

  updateExpandedPackage(packageOfProducts: packageOfProducts) {
    this.expandedPackage =
      this.expandedPackage === packageOfProducts ? null : packageOfProducts;
    this.updateClickedPackages(packageOfProducts);
  }

  updateClickedPackages(packageOfProducts: packageOfProducts) {
    this.clickedPackages.clear();
    if (this.expandedPackage === packageOfProducts) {
      this.clickedPackages.add(packageOfProducts);
    }
  }
}
