export class PeriodicElement {
  orderName: string = "";
  position: number = 0;
  weight: number = 0;
  symbol: string = "";
  packages: any[] = [];
  selected: boolean = false;
}

export class orderDate {
 orders : orderOfPackages[] = [];
 allOrdersAreSelected: boolean = false
//  allPackagesAreSelected: boolean = false
//  allProductAreSelected: boolean = false
}

export class orderOfPackages{
  orderId: string = ""
  orderName: string = "";
  orderCost: number = 0;
  packages: packageOfProducts[] = [];
  selected: boolean = false;
  allPackagesAreSelected: boolean = false
}
export class packageOfProducts{
  packageId: string = ""
  packageName: string = "";
  packageCost: number = 0;
  products: product[] = [];
  selected: boolean = false;
  allProductAreSelected: boolean = false
}

export class product{
  productId: string = ""
  productName: string = "";
  productCost: number = 0;
  selected: boolean = false;
}