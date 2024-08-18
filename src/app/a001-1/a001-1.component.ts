import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-a001-1',
  templateUrl: './a001-1.component.html',
  styleUrl: './a001-1.component.scss',
})
export class A0011Component {
  userName!: string;

  resetUserName(): void {
    this.userName = '';
  }
}
