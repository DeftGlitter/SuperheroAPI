import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-header',
  templateUrl: './button-header.component.html',
  styleUrls: ['./button-header.component.css'],
})
export class ButtonHeaderComponent implements OnInit {
  @Input() label: string = '';
  @Input() route: string = ''; //Me viene la ruta del header desde el HeaderComponent
  constructor() {}

  ngOnInit(): void {}
}
