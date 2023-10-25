import {Component, OnInit} from '@angular/core';
import {Exam} from "../../entity/exam";
import {ExamService} from "../../services/exam.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.css']
})
export class ListExamComponent implements OnInit{
    exams : Exam[]=[];

    constructor(private examService : ExamService, private router: Router) {
    }
    ngOnInit(): void {
        this.getExam();

    }
    private getExam(){
        this.examService.getAllExam().subscribe (datas =>{
            this.exams = datas as Exam [];
        } )
    }

    updateExam  (id : Number){
        this.router.navigate(['update-exam',id]);
    }


    deleteExam  (id : Number){
        if(confirm('are you sure to delete this exam ?'))

            this.examService.deleteExam(id).subscribe(data => {
                alert("Succefully delete")
                this.getExam();
            })
    }


  gotocourse(id: number) {
    this.router.navigate(['course',id]);
    console.log(id);
  }
}
