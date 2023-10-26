import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../../service/event.service';
import { Evenement } from 'src/app/entities/evenement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css'],
  
})
export class EventAddComponent {
  eventForm: FormGroup;
  selectedImage: File | null;
  events: Evenement[] = [];
  event: Evenement = new Evenement(); // Initialisez avec un nouvel objet Evenement

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private eventService: EventService,private router: Router) {
    this.selectedImage = null;

    this.eventForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      location: ['', Validators.required],
      theme: ['', Validators.required],
      places: ['', Validators.required],
      image: [null, Validators.required],
    });
  }

  onImageSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];
  
      if (this.selectedImage) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.event.Image = reader.result as string;
        };
        reader.readAsDataURL(this.selectedImage);
      }
    }
  }
  
  
  

  onSubmit() {
    if (this.selectedImage && this.eventForm.valid) {
      this.event = this.eventForm.value;
      this.event.Image = this.selectedImage.name;
  
      console.log('Submitting event data:', this.event);
  
      this.eventService.saveEvent(this.event).subscribe(
        (response: Evenement) => {
          console.log('Event added successfully:', response);

           // Navigate to the eventAdmin page after successful submission
        this.router.navigate(['/eventadmin']);

        this.eventForm.reset();
        },
        (error: any) => {
          console.error('Error adding event:', error);
        }
      );
    } else {
      console.error('Image is null or form is invalid');
    }
  }
  


  endDateAfterStartDateValidator(form: FormGroup) {
    const startDate = form.get('startDate')?.value;
    const endDate = form.get('endDate')?.value;

    if (startDate && endDate && startDate > endDate) {
      return { dateMisMatch: true };
    }

    return null;
  }
}
