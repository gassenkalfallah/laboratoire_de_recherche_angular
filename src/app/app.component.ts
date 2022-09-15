import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  Agenda = [
    { Date: '17/2', Message: 'BA' },
    { Date: '18/2', Message: 'AB' },
  ];
  title = 'First';
  name = 'Ghassen';
}
