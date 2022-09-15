import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../app-config';
import { Member } from '../Models/Member';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dataSource : Member[]=GLOBAL.DB.members;
  displayedColumns: string[] = ['id', 'cin', 'name', 'createdDate','cv','type','icon'];
}
