import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GithubUsers } from '../../providers/github-users';
import { User } from '../../models/user';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  user: User;
  login: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public githubUsers: GithubUsers) {
    this.login = navParams.get('login');

    githubUsers.loadDetails(this.login).subscribe(user => {
      this.user = user;
      console.log(user)
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
