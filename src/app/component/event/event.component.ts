import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Evenement } from 'src/app/entities/evenement';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})


    export class EventComponent implements OnInit {

        events: any[] = [];
        
        form : boolean = false;
        event!: Evenement;
        closeResult! : string;
        isAddingEvent: boolean = false;
        searchTerm: string = '';
        filteredEvents: Evenement[] = []; // Declare filteredEvents here



      
      
        constructor(private eventService: EventService ) {}
      
        ngOnInit() {
          this.loadEvents();
        }



      /*
        loadEvents() {
            this.eventService.getAllEvents().subscribe((data: any[] | Object) => {
              this.events = data as any[]; // Ensure it's of type array
            });
          }*/
          


          loadEvents() {
            this.eventService.getAllEvents().subscribe((data: Evenement[]) => {
              this.events = data;
            });
          }
        
          addEvent() {
            this.eventService.saveEvent(this.event).subscribe(() => {
              this.loadEvents();
              this.event = new Evenement();
              this.isAddingEvent = false;
            });
          }
        
          deleteEvent(id: number) {
            this.eventService.deleteEvent(id).subscribe(() => {
              this.loadEvents();
            });
          }
          onSearch() {
            this.filteredEvents = this.events.filter((event) =>
              event.name.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
          }
          
      
       
    
}

