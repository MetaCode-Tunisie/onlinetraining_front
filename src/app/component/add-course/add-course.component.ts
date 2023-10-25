import {Component, OnInit} from '@angular/core';
import {Exam} from "../../entity/exam";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ExamService} from "../../services/exam.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Course} from "../../entity/course";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit{


  id! :  Number;

  course: Course = new Course();
  registerForm!: FormGroup;
  submitted = false;
  constructor(private examService : ExamService,
              private router: Router,private formBuilder: FormBuilder ,private route:ActivatedRoute) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

  }

  gotoexamList(){
    this.router.navigate(['/list-exam']);
  }

  saveCourse(){

    console.log(this.course.lesson + " " + this.course.nbrChapter);
    this.examService.addCourse(this.course,this.id).subscribe( data => {
        console.log(data);

        this.gotoexamList();
      },
      error => console.log(error));
  }


  onSubmit(){
    this.submitted = true;
    this.saveCourse();
  }


}
