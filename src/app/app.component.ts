import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Material Design Demo';
  //check box exmample
  isChecked = true;

  // onChange($event: any) {
  //   console.log($event);
  // }

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
    { id: 4, name: 'Brown' },
    { id: 5, name: 'Yellow' }
  ]
}
