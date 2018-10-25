import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-lookup',
  templateUrl: './product-lookup.component.html',
  styleUrls: ['./product-lookup.component.css']
})
export class ProductLookupComponent implements OnInit {

  shops = [
    {
      name: 'Amazon',
      categories: [
        {
          name: 'Prada',
          products: [{name: 'Handbag'}, {name: 'Shoe'}, {name: 'Hat'}, {name: 'Watch'}, {name: 'Shirt'}, {name: 'Trousers'},]
        },
        {
          name: 'Louis Vuitton',
          products: [{name: 'Handbag 2'}, {name: 'Shoe 2'}, {name: 'Hat 2'}, {name: 'Watch 2'}, {name: 'Shirt 2'}, {name: 'Trousers 2'},]
        },
        {
          name: 'CHANEL',
          products: [{name: 'Handbag 3'}, {name: 'Shoe 3'}, {name: 'Hat 3'}, {name: 'Watch 3'}, {name: 'Shirt 3'}, {name: 'Trousers 3'},]
        },
        {
          name: 'DIOR',
          products: [{name: 'Handbag 4'}, {name: 'Shoe 4'}, {name: 'Hat 4'}, {name: 'Watch 4'}, {name: 'Shirt 4'}, {name: 'Trousers 4'},]
        },
        {
          name: 'HERMÈS',
          products: [{name: 'Handbag 5'}, {name: 'Shoe 5'}, {name: 'Hat 5'}, {name: 'Watch 5'}, {name: 'Shirt 5'}, {name: 'Trousers 5'},]
        },
        {
          name: 'BURBERRY',
          products: [{name: 'Handbag 6'}, {name: 'Shoe 6'}, {name: 'Hat 6'}, {name: 'Watch 6'}, {name: 'Shirt 6'}, {name: 'Trousers 6'},]
        },
      ]
    },
    {
      name: 'Ebay',
      categories: [
        {
          name: 'Prada 2',
          products: [{name: 'Handbag'}, {name: 'Shoe'}, {name: 'Hat'}, {name: 'Watch'}, {name: 'Shirt'}, {name: 'Trousers'},]
        },
        {
          name: 'Louis Vuitton 2',
          products: [{name: 'Handbag 2'}, {name: 'Shoe 2'}, {name: 'Hat 2'}, {name: 'Watch 2'}, {name: 'Shirt 2'}, {name: 'Trousers 2'},]
        },
        {
          name: 'CHANEL 2',
          products: [{name: 'Handbag 3'}, {name: 'Shoe 3'}, {name: 'Hat 3'}, {name: 'Watch 3'}, {name: 'Shirt 3'}, {name: 'Trousers 3'},]
        },
        {
          name: 'DIOR 2',
          products: [{name: 'Handbag 4'}, {name: 'Shoe 4'}, {name: 'Hat 4'}, {name: 'Watch 4'}, {name: 'Shirt 4'}, {name: 'Trousers 4'},]
        },
        {
          name: 'HERMÈS 2',
          products: [{name: 'Handbag 5'}, {name: 'Shoe 5'}, {name: 'Hat 5'}, {name: 'Watch 5'}, {name: 'Shirt 5'}, {name: 'Trousers 5'},]
        },
        {
          name: 'BURBERRY 2',
          products: [{name: 'Handbag 6'}, {name: 'Shoe 6'}, {name: 'Hat 6'}, {name: 'Watch 6'}, {name: 'Shirt 6'}, {name: 'Trousers 6'},]
        },
      ]
    }
  ];

  currentCategoryList: any;
  currentProductList: any;

  currentShop: any;
  currentCategory: any;
  currentProduct: any;

  constructor() {
  }

  ngOnInit() {
    this.currentShop = this.shops[0];
    this.currentCategoryList = this.currentShop.categories;
    this.currentProductList =  this.currentCategoryList[0].products;
    this.currentCategory = this.currentShop.categories[0];
    this.currentProduct = this.currentCategory.products[0];
  }

  go() {
    console.log(this.currentShop);
    console.log(this.currentCategory);
    console.log(this.currentProduct);
  }

  changeShop(shop) {
    this.currentShop = shop;
    this.currentCategoryList = this.currentShop.categories;
    this.currentCategory = this.currentCategoryList[0];
    this.currentProductList = this.currentCategory.products;
    this.currentProduct = this.currentProductList[0];
  }

  changeCategory(category) {
    this.currentCategory = category;
    this.currentProductList = this.currentCategory.products;
    this.currentProduct = this.currentProductList[0];
  }

  changeProduct(product) {
    this.currentProduct = product;
  }
}
