import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule, CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  @Output() onDelete = new EventEmitter();

  delete() {
    this.onDelete.emit(true);
  }
}
