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

  constructor(@Inject(LOCALE_ID) protected localeId: string) {}
}
