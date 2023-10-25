import { Component, OnInit } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Evenement } from 'src/app/entities/evenement';


@Component({
  selector: 'app-eventuser',
  templateUrl: './eventuser.component.html',
  styleUrls: ['./eventuser.component.css']
})
export class EventuserComponent implements OnInit{

        events1: any[] = []; 
        form : boolean = false;
        event!: Evenement;
        closeResult! : string;
        isAddingEvent: boolean = false;
        successMessage: string | null = null; // Declare the successMessage property


  
      
        constructor(private eventService: EventService ) {}
      
        ngOnInit() {
          this.loadEvents();
        }


          loadEvents() {
            this.eventService.getAllEvents().subscribe((data: Evenement[]) => {
              this.events1 = data;
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

          participateInEvent(eventId: number) {
            const event = this.events1.find((event) => event.idEvents === eventId);
            if (event) {
              event.participated = true;
              this.successMessage = `You have successfully participated in the event: ${event.name}`;
            } else {
              this.successMessage = 'Event not found.';
            }
          }
          

}
