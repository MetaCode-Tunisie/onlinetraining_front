import {Component, OnInit} from '@angular/core';
import {Exam} from "../../entity/exam";
import {ExamService} from "../../services/exam.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit{

  exam: Exam = new Exam();
  registerForm!: FormGroup;
  submitted = false;
  constructor(private examService : ExamService,
              private router: Router,private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
  }

  gotoexamList(){
    this.router.navigate(['/list-exam']);
  }

  saveExam(){

    console.log(this.exam.title + " " + this.exam.note);
    this.examService.addExam(this.exam).subscribe( data => {
        console.log(data);

        this.gotoexamList();
      },
      error => console.log(error));
  }


  onSubmit(){
    this.submitted = true;
    this.saveExam();
  }

}
