// Angular modules
import { Injectable, NgModule } from '@angular/core';
import {CognitoUserPool} from 'amazon-cognito-identity-js';
// Consts
import { CognitoConst }  from './cognito';
var Pooldata: any =  {
  UserPoolId: 'eu-central-1_jbMQ1riKQ', // e.g. us-east-2_uXboG5pAb
  ClientId: '62ph2ssebhss88so4c4bajgfu3' // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
  //Region: 'eu-central-1' // e.g. us-east-2
};
class CognitoHelper
{
  // Services

  public static userPool:CognitoUserPool = new CognitoUserPool(Pooldata);

  // Consts
  public cognitoConst= CognitoConst;


  public static getcurrent(resolve, reject){
    var cognitoUser = CognitoHelper.userPool.getCurrentUser();
    if (cognitoUser) {
      console.log(cognitoUser);
      console.log()
      cognitoUser.getSession(function sessionCallback(err, session) {
        console.log("session", session)
          if (err) {
            reject(null);
          } else if (!session.isValid()) {
            reject(null);
          } else {
            resolve(session.getIdToken().getJwtToken());
          }
      });
  } else {
      return null;
  }



  }

}

export { CognitoHelper }
