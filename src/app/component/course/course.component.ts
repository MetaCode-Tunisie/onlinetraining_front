import {Component, OnInit} from '@angular/core';
import {Course} from "../../entity/course";
import {ExamService} from "../../services/exam.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Exam} from "../../entity/exam";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
  id! :  Number;
  courses : Course[]=[];

  constructor(private examService : ExamService, private router: Router,    private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.getCourse();

  }

  private getCourse(){
    this.examService.getCoursebyExam(this.id).subscribe (datas =>{
      this.courses = datas as Course [];
    } )
  }


  gotoedit(id: number) {
    this.router.navigate(['edit-course',id]);

  }

  gotoaddCourse(id: Number) {
    this.router.navigate(['add-course',id]);

  }


  deleteCourse  (id : Number){
    if(confirm('are you sure to delete this exam ?'))

      this.examService.deleteCourse(id).subscribe(data => {
        alert("Succefully delete")
        this.getCourse();
      })
  }
}
