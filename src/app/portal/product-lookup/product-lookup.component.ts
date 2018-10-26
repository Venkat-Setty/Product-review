import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {IUser} from '../../entities/user';
import {Rate} from '../../entities/rate';
import {AngularFirestore} from '@angular/fire/firestore';
import * as _ from 'lodash';

@Component({
  selector: 'app-product-lookup',
  templateUrl: './product-lookup.component.html',
  styleUrls: ['./product-lookup.component.css']
})
export class ProductLookupComponent implements OnInit {

  shops: any;
  trademarks: any;
  products: any;
  ratings: any;

  currentShop: any;
  currentTrademark: any;
  currentProduct: any;

  user: IUser;
  newRate: Rate;

  ratingTotal: number;
  ratingAverage: number;
  star1Percent: number;
  star2Percent: number;
  star3Percent: number;
  star4Percent: number;
  star5Percent: number;

  constructor(private auth: AuthenticationService, private db: AngularFirestore) {

  }

  ngOnInit() {
    this.newRate = new Rate();

    this.db.collection('/shops')
      .valueChanges()
      .subscribe(data => {
        this.shops = data;
        this.currentShop = this.shops[0];
      });

    this.db.collection('/trademarks')
      .valueChanges()
      .subscribe(data => {
        this.trademarks = data;
        this.currentTrademark = this.trademarks[0];
      });

    const __this = this;
    const time = setInterval(function () {
      if (__this.currentShop && __this.currentTrademark) {
        __this.filterProducts();
        clearInterval(time);
      }
    });
  }

  changeShop(shop) {
    this.currentShop = shop;
    this.filterProducts();
  }

  changeCategory(trademark) {
    this.currentTrademark = trademark;
    this.filterProducts();
  }

  changeProduct(product) {
    this.currentProduct = product;
  }

  go() {
    console.log(this.currentProduct);
    const cRatings = this.db.collection('/rating', ref => {
      return ref.where('product_id', '==', this.currentProduct.id);
    });
    cRatings.valueChanges().subscribe(data => {
      this.ratings = data;
      if (this.ratings && this.ratings.length > 0) {
        this.ratingTotal = this.ratings.length;
        this.ratingAverage = _.meanBy(this.ratings, (rating) => rating.rate);
      } else {
        this.ratingTotal = 0;
        this.ratingAverage = 0;
      }
      this.star1Percent = this.ratings.filter(rating => {
        return rating.rate === 1;
      }).length * 100 / this.ratingTotal;

      this.star2Percent = this.ratings.filter(rating => {
        return rating.rate === 2;
      }).length * 100 / this.ratingTotal;

      this.star3Percent = this.ratings.filter(rating => {
        return rating.rate === 3;
      }).length * 100 / this.ratingTotal;

      this.star4Percent = this.ratings.filter(rating => {
        return rating.rate === 4;
      }).length * 100 / this.ratingTotal;

      this.star5Percent = this.ratings.filter(rating => {
        return rating.rate === 5;
      }).length * 100 / this.ratingTotal;
    });
  }

  rating() {
    console.log(this.newRate);
  }

  filterProducts() {
    const cProducts = this.db.collection('/products', ref => {
      return ref.where('shop_id', '==', this.currentShop.id).where('trademark_id', '==', this.currentTrademark.id);
    });
    cProducts.valueChanges().subscribe(data => {
      this.products = data;
      this.currentProduct = this.products[0];
    });
  }
}
