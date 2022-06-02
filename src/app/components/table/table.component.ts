// angular 
import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
// angular Material
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  MatTable
} from '@angular/material/table';
import {
  MatTableDataSource
} from '@angular/material/table';
import {
  MatSort
} from '@angular/material/sort';
import {
  MatPaginator
} from '@angular/material/paginator';
import {
  CdkDragDrop,
  moveItemInArray
} from '@angular/cdk/drag-drop';

// Data Model
import {
  PeriodicElement,
  orderDate,
  orderOfPackages,
  packageOfProducts,
  product
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
export class TableComponent {
  @ViewChild(MatTable) table!: MatTable < PeriodicElement > ;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('input') input!: ElementRef;
  data: orderDate = {
    orders: [{
        orderId: '#1',
        orderName: 'orderName #1',
        orderCost: 45,
        selected: false,
        allPackagesAreSelected:false,
        packages: [{
            packageId: "#1.1",
            packageName: 'PackageName #1.1',
            packageCost: 15,
            selected: false,
            allProductAreSelected:false,
            products: [{
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
              }
            ],
          },
          {
            packageId: "#1.2",
            packageName: 'PackageName #1.2',
            packageCost: 30,
            selected: false,
            allProductAreSelected:false,
            products: [{
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
              }
            ],
          }

        ],
      },
      {
        orderId: '#2',
        orderName: 'orderName #2',
        orderCost: 25,
        selected: false,
        allPackagesAreSelected:false,
        packages: [{
            packageId: "#2.1",
            packageName: 'PackageName #2.1',
            packageCost: 10,
            selected: false,
            allProductAreSelected:false,
            products: [{
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
              }
            ],
          },
          {
            packageId: "#2.2",
            packageName: 'PackageName #2.2',
            packageCost: 15,
            selected: false,
            allProductAreSelected:false,
            products: [{
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
              }
            ],
          }

        ],
      },
      {
        orderId: '#3',
        orderName: 'orderName #3',
        orderCost: 105,
        selected: false,
        allPackagesAreSelected:false,
        packages: [{
            packageId: "#3.1",
            packageName: 'PackageName #3.1',
            packageCost: 30,
            selected: false,
            allProductAreSelected:false,
            products: [{
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
              }
            ],
          },
          {
            packageId: "#3.2",
            packageName: 'PackageName #3.2',
            packageCost: 75,
            selected: false,
            allProductAreSelected:false,
            products: [{
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
              }
            ],
          }

        ],
      },
    ],
    allOrdersAreSelected: false,
  }
  orders = new MatTableDataSource(this.data.orders);
  orderColumnsToDisplay = [
    'selected',
    'orderId',
    'orderName',
    'orderCost',
  ];
  expandedOrder: orderOfPackages | null = new orderOfPackages();
  PackageColumnsToDisplay = [
    'selected',
    'packageId',
    'packageName',
    'packageCost'
  ];
  expandedPackage: packageOfProducts | null = new packageOfProducts();
  ProductColumnsToDisplay = [
    'selected',
    'productId',
    'productName',
    'productCost'
  ];
  clickedOrders = new Set<orderOfPackages>(); 
  clickedPackages = new Set<packageOfProducts>();
  /**
   * Methods
   */
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.orders.paginator = this.paginator;
    this.orders.sort = this.sort;
  }
  addData() {
    let order = {
      orderId: 'new',
      orderName: 'orderName new',
      orderCost: 5,
      selected: false,
      allPackagesAreSelected:false,
      packages: [{
          packageId: "new",
          packageName: 'PackageName new',
          packageCost: 5,
          selected: false,
          allProductAreSelected:false,
          products: [{
            productId: 'new',
            productName: 'productName new',
            productCost: 5,
            selected: true,
          }],
        }

      ],
    };
    this.data.orders = [...this.data.orders, order];
    this.input.nativeElement.value = '';
    console.log(this.input);
    this.orders = new MatTableDataSource(this.data.orders);
  }
  removeData() {
    this.data.orders.pop();
    this.orders = new MatTableDataSource(this.data.orders);
    this.input.nativeElement.value = '';
    console.log(this.input);

    this.table.renderRows();
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
  drop(event: CdkDragDrop < string[] > ) {
    moveItemInArray(
      this.orderColumnsToDisplay,
      event.previousIndex,
      event.currentIndex
    );
  }

  allOrdersAreSelectedChanged(e: any) {
    this.data.orders.forEach(order => order.selected = e);
  }
  allPackagesAreSelectedChanged(order:orderOfPackages, e: any){
    order.packages.forEach(orderPackage=>orderPackage.selected = e)
  }

  updateExpandedOrder(order:orderOfPackages){
    this.expandedOrder = this.expandedOrder === order ? null : order;
    this.expandedPackage = null;
    this.updateClickedOrders(order)
  }

  updateClickedOrders(order:orderOfPackages){
    this.clickedOrders.clear();
    if(this.expandedOrder === order){
      this.clickedOrders.add(order)
    }
  }

  updateExpandedPackage(packageOfProducts:packageOfProducts){
    this.expandedPackage = this.expandedPackage === packageOfProducts ? null : packageOfProducts
    this.updateClickedPackages(packageOfProducts)
  }

  updateClickedPackages(packageOfProducts:packageOfProducts){
    this.clickedPackages.clear();
    if(this.expandedPackage === packageOfProducts){
      this.clickedPackages.add(packageOfProducts)
    }
  }
}
