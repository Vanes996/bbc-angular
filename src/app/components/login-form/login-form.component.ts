import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import { CognitoHelper } from '../../cognito.helper';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginForm implements OnInit {
  public  isAuthenticated : boolean = false;


  constructor(
    private cognitoHelper : CognitoHelper,
    private router        : Router

  ) { }
  user  = new FormControl('');
  password = new FormControl('');
  ngOnInit(): void {
    const navigateToNewWithUser: NavigationExtras = {
      fragment: 'new',
      queryParams: {'user': this.user}
    };
    //this.isAuthenticated = this.cognitoHelper.userPool.getCurrentUser();
    CognitoHelper.getcurrent(function resolve(){
      console.log("già loggato")
      //this.router.navigate(['/something/create'], navigateToNewWithUser);
      window.location.href = "/cerca"
    },function reject(){
      console.log("non loggato")
    })

    function redirect(path):void{
      this.router.navigate([path])
    }
  }



  createNew() {
    const navigateToNewWithUser: NavigationExtras = {
        fragment: 'new',
        queryParams: {'user': this.user}
    };

    this.router.navigate(['/something/create'], navigateToNewWithUser);
}
  login(): void {
    //console.log('Ciao', this.user.value, this.password.value);
    let auth:AuthenticationDetails = new AuthenticationDetails({
      Username: "+39" + this.user.value,
      Password: this.password.value
    });
    var cognitoUser = createCognitoUser(this.user.value);
    console.log(cognitoUser)
    cognitoUser.authenticateUser(auth, {
      onSuccess: function(result) {
        console.log("success")
        this.router.navigateByUrl('/cerca')
        //var accessToken = result.getAccessToken().getJwtToken();

        /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
        //var idToken = result.idToken.jwtToken;
      },

      onFailure: function(err) {
        console.log("error", err)
          //alert(err.message || JSON.stringify(err));
      },
    });

  function createCognitoUser(email) {
    return new CognitoUser({
        Username:  "+39" + email,
        Pool: CognitoHelper.userPool
    });
  }
}

}
