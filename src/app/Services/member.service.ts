import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../Models/Member";
import {GLOBAL} from "../app-config";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  tab :Member[]=GLOBAL.DB.members;


  constructor(private httpClient:HttpClient) {

  }
  saveMember(member:any):Promise<any>
    {
      //return this.httpClient.post('linktorestAPI',member).toPromise()
      const memberToSave={ ...member,
        id:(Math.random()*10000).toString(),
        createdeDate:new Date().toISOString(),
      };
    }
}
