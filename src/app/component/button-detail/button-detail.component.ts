import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ISuperhero } from 'src/app/models/ISuperhero.model';

@Component({
  selector: 'app-button-detail',
  templateUrl: './button-detail.component.html',
  styleUrls: ['./button-detail.component.css'],
})
export class ButtonDetailComponent implements OnInit {
  @Output() heroSelect: EventEmitter<void> = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.heroSelect.emit();
  }
}
