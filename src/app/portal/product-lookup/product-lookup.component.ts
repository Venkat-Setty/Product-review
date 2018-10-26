import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {IUser} from '../../entities/user';
import {Rate} from '../../entities/rate';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
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
  ratings: Rate[];
  justRatings: Rate[];
  currentShop: any;
  currentTrademark: any;
  currentProduct: any;
  currentProductTemp: any;
  user: IUser;
  newRate: Rate;
  ratingTotal = 0;
  ratingAverage = 0;
  star1Percent = 0;
  star2Percent = 0;
  star3Percent = 0;
  star4Percent = 0;
  star5Percent = 0;
  isProductDetail = false;

  private ratingsCollection: AngularFirestoreCollection<Rate>;

  constructor(private auth: AuthenticationService, private db: AngularFirestore) {

  }

  ngOnInit() {
    this.auth.user().subscribe(
      (user) => this.user = user
    );
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
    this.currentProductTemp = product ? product : null;
  }

  go() {
    this.currentProduct = this.currentProductTemp;
    if (this.currentProduct) {
      this.ratingsCollection = this.db.collection('/rating', ref => {
        return ref.where('product_id', '==', this.currentProduct.id);
      });
      this.ratingsCollection.valueChanges().subscribe((data: Rate[]) => {
        this.ratings = data;
        if (this.ratings && this.ratings.length > 0) {
          this.justRatings = this.ratings.filter(rating => {
            return rating.rate * rating.rate > 0;
          });
          this.ratingTotal = this.justRatings.length;
          this.ratingAverage = _.ceil(_.meanBy(this.ratings, (rating) => rating.rate), 1);
        } else {
          this.ratingTotal = 0;
          this.ratingAverage = 0;
        }
        this.star1Percent = _.ceil( this.ratings.filter(rating => {
          return rating.rate === 1;
        }).length * 100 / this.ratingTotal);
        this.star1Percent = !this.star1Percent ? 0 : this.star1Percent;

        this.star2Percent = _.ceil(this.ratings.filter(rating => {
          return rating.rate === 2;
        }).length * 100 / this.ratingTotal);
        this.star2Percent = !this.star2Percent ? 0 : this.star2Percent;

        this.star3Percent = _.ceil(this.ratings.filter(rating => {
          return rating.rate === 3;
        }).length * 100 / this.ratingTotal);
        this.star3Percent = !this.star3Percent ? 0 : this.star3Percent;

        this.star4Percent = _.ceil(this.ratings.filter(rating => {
          return rating.rate === 4;
        }).length * 100 / this.ratingTotal);
        this.star4Percent = !this.star4Percent ? 0 : this.star4Percent;

        this.star5Percent = _.ceil(this.ratings.filter(rating => {
          return rating.rate === 5;
        }).length * 100 / this.ratingTotal);
        this.star5Percent = !this.star5Percent ? 0 : this.star5Percent;
      });
    }
    this.isProductDetail = true;
  }

  saveRating() {
    this.newRate.user = this.user;
    const id = this.db.createId();
    this.ratingsCollection.doc(id).set({
      'product_id': this.currentProduct.id,
      'rate': this.newRate.rate,
      'comment': this.newRate.comment,
      'user': {
        'username': this.user.username,
      }
    }).then().catch();
  }

  filterProducts() {
    const cProducts = this.db.collection('/products', ref => {
      return ref.where('shop_id', '==', this.currentShop.id).where('trademark_id', '==', this.currentTrademark.id);
    });
    cProducts.valueChanges().subscribe(data => {
      this.products = data;
      this.currentProductTemp = this.products[0];
    });
  }
}
