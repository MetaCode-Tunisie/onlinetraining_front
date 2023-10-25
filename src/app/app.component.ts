import { Component } from '@angular/core';
import { KeycloakSecurityService } from './component/user/keycloak-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlinetraining';
  constructor(public securityService: KeycloakSecurityService) { }
  username: string = '';
   userrole :string = 'user';
  ngOnInit(): void {
    
    if (this.securityService.kc && this.securityService.kc.authenticated && this.securityService.kc.tokenParsed) {
      const roles = this.securityService.kc.tokenParsed['realm_access'];
     
      if (roles && roles.roles && roles.roles.includes('admin')) {
        
        this.userrole = 'admin';

      } else {
        this.userrole ='user';
      }
    } else {
      alert("Utilisateur non authentifié");
    }
  }

  onLogout() {
    this.securityService.kc.logout();
  }

  login() {
    this.securityService.kc.login();
  }


  isAdmin(){
    return this.securityService.kc.hasResourceRole('admin')
  }
  isUser(){
    return this.securityService.kc.hasResourceRole('user')
  }

}
