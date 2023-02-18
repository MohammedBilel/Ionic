import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ListUsersService } from '../list-users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  selectedUser;

  constructor(private activateRoute : ActivatedRoute, private userSer : ListUsersService, private alertController : AlertController, private router : Router) { }

  ngOnInit() {
    console.log(this.activateRoute.snapshot.paramMap.get('id'));
    this.selectedUser = this.userSer.getUsersById(
      this.activateRoute.snapshot.paramMap.get('id')
    );
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure to delete this user',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler : () => {
            this.userSer.deleteUser(this.selectedUser.id);
            this.router.navigateByUrl('/home');
          }
        }
      ],
    });

    await alert.present();
  }

}
