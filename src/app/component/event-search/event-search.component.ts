import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent {

  searchTerm: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  searchEvents() {
    this.searchEvent.emit(this.searchTerm);
  }

}
