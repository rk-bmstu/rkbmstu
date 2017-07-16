import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public isDevMode = isDevMode;
  
  prefooterHeight() {
    let prefooter = document.getElementById('prefooter');
    return prefooter ? (-prefooter.offsetHeight) + "px" : "50%";
  }
}
