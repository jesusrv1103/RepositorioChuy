import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Transaction } from '../../database';
/**
 * Generated class for the Adding page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-adding',
  templateUrl: 'adding.html',
})
export class Adding {
  model : Transaction = new Transaction(null,"");

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
  	this.model = new Transaction(null,"");
  }
  save(){
  	this.model.save();
  }
}
