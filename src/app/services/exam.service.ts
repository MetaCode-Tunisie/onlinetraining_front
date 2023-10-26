import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exam} from "../entity/exam";
import {Course} from "../entity/course";

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private API_URL ='EXAM-SERVICE'


  constructor(private httpClient: HttpClient) { }

  getAllExam(): Observable<Exam[]> {
    return this.httpClient.get<Exam[]>(`${this.API_URL}/user/listExams`);
  }


  getCoursebyExam(id:any): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.API_URL}/listCourses/${id}`);
  }


  addExam(exam : Exam):Observable<Object> {

    return this.httpClient.post(`${this.API_URL}/admin/addExam`, exam);
  }


  addCourse(course : Course,id: Number):Observable<Object> {

    return this.httpClient.post(`${this.API_URL}/admin/addCourse/${id}`, course);
  }




  editExam(id:Number, exam : any):Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/admin/updateExam/${id}`, exam);
  }

  editCourse(id:Number, course : any):Observable<Object>{
    return this.httpClient.put(`${this.API_URL}/admin/updateCourse/${id}`, course);
  }

  getCoursebyid(id : Number):Observable<Course>{
    return this.httpClient.get<Course>(this.API_URL+"/user/coursebyid/"+id);
  }

  deleteExam(id : Number):Observable<Object>{
    return  this.httpClient.delete(`${this.API_URL}/admin/deleteExam/${id}`);
  }

  deleteCourse(id : Number):Observable<Object>{
    return  this.httpClient.delete(`${this.API_URL}/admin/deleteCourse/${id}`);
  }

}
