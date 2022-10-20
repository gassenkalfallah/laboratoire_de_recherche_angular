import {Component, OnInit} from '@angular/core';
import {Member} from "../../Modals/Member";
import {MemberService} from "../../Services/member.service";

@Component({
  selector: 'app-affect-dialog',
  templateUrl: './affect-dialog.component.html',
  styleUrls: ['./affect-dialog.component.css']
})

export class AffectDialogComponent implements OnInit {
  public title = 'Affecter un auteur';
  cancel = 'Annuler';
  confirm = 'Valider';
  selectedValue = '';

  TabMember: Member[] = [];


  constructor(private memberService: MemberService) {
    this.TabMember = this.memberService.tab;
  }

  ngOnInit(): void {
  }

}
