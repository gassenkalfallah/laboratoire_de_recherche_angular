import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import {MemberService} from "../Services/member.service";

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form:any;
  constructor(private memberService:MemberService)
  {

  }

  ngOnInit() {
    //initialiser le formulaire
    this.initForm();

  }
  initForm():void {
    this.form=new FormGroup({
      cin :new FormControl(null,[Validators.required]),
      name :new FormControl(null,[Validators.required]),
      cv :new FormControl(null,[Validators.required]),
      type :new FormControl(null,[Validators.required])


    });
  }
  ONSUB():void{
    //recuperation de l'element
    console.log(this.form.value);
    const member=this.form.value;
    //invocation de la methde de service qui envoie http en mode post
    this.memberService.saveMember(member).
    then(()=>{})  ///////////////
  }

}
