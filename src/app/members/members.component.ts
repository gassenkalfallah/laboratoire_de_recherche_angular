import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from '../Models/Member';
import {MemberService} from "../Services/member.service";
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(private memberService:MemberService) {
    this.dataSource=this.memberService.tab;
  }

  ngOnInit(): void {
  }
  dataSource : Member[]=GLOBAL.DB.members;
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate','cv','type','icon'];
}
