import { Component } from '@angular/core';

@Component({
  selector: 'app-a001-2',
  templateUrl: './a001-2.component.html',
  styleUrl: './a001-2.component.scss',
})
export class A0012Component {
  showSecret = false;
  clickLogs: Array<number> = [];

  toggleSecret() {
    this.showSecret = !this.showSecret;
    this.clickLogs.push(this.clickLogs.length + 1);
  }
}
