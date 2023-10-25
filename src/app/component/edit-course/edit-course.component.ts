import {Component, OnInit} from '@angular/core';
import {Course} from "../../entity/course";
import {ExamService} from "../../services/exam.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit{
  id! :  Number;
  course: Course = new Course();
  constructor(private examService : ExamService, private router: Router,    private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.examService.getCoursebyid(this.id).subscribe(data => {
        this.course = data;
      }
      , error => console.log(error));
  }

  gotoExamList(){

    this.router.navigate(['/list-exam']);
  }


  onSubmit(){

    this.examService.editCourse(this.id,this.course).subscribe(data =>{
      console.log(data);
      this.course = new Course();

      this.gotoExamList();

    }, error => console.log(error));

  }


}
