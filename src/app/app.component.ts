import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  languages = [
  { code: 'en', label: 'English'},
  { code: 'de', label: 'Deutsch'},
  { code: 'es', label: 'Español'}
  ];

  test = 'hola amigos';

  plurals = [
  { value: 0, viewValue:'0'},
  { value: 1, viewValue:'1'},
  { value: 2, viewValue: '2'},
  { value: 10, viewValue: '10'}
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) {}
}
