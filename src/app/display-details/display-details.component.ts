import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styles: [`
      .fifthItemOrHigher {
        color: white;
      }
  `]
})
export class DisplayDetailsComponent implements OnInit {
  displayDetails:boolean = false;
  shouldBeWhiteText:boolean = false;
  log:Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  onDisplayDetailsClick() {
    this.displayDetails = !this.displayDetails;
    let counter = this.log.length + 1;
    this.log.push("Button clicked " + counter + " times!");
  }
}
