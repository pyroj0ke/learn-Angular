import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [`
    h1 {
      color: lightseagreen;
    }
  `]
})
export class AppComponent {
  title = "Angular course";

  buttonToggle = false;
  logArray:string[] = [];

  isButtonClicked() {
    this.buttonToggle = !this.buttonToggle;
    this.logArray.push('button clicked');
  }
}
