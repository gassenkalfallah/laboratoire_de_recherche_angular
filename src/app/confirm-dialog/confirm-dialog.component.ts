import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  public title ='are you sure?';
  public message ='do you really want to delete?';
  public cancel ='cancel';
  public confirm ='confirm';
  constructor(public dialogRef :MatDialogRef<ConfirmDialogComponent> ) { }

  ngOnInit(): void {
  }

}
