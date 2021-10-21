import { Component, OnInit } from '@angular/core';
import { PropertiesService } from "src/app/services/properties/properties.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogged: boolean = false;
  userGoogle: any;

  constructor(
    private propertiesService: PropertiesService
  ) {}

  ngOnInit(): void {
    this.isLogged = false;
    console.log(this.isLogged);
  }

  async onLoginWithGoogle(): Promise<void> {
    try {
      this.userGoogle = await this.propertiesService.loginWithGoogle();
      this.isLogged = true;
      console.log('Usuario de google', this.userGoogle);
    } catch (error) {
      console.log('Error con google: ', error);
    }
  }
}
