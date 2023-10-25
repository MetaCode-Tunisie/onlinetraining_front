export class Course {
  idCourse: number;
  lesson: string;
  nbrChapter: number;
  nbrHours: number;
  // Autres propriétés spécifiques à la classe Course

  constructor() {
    this.idCourse=0;
    this.lesson="";
    this.nbrChapter=0;
    this.nbrHours=0;
  }
  /*
  constructor(idCourse: number, lesson: string, nbrChapter: string, nbrHours: number) {
    this.idCourse = idCourse;
    this.lesson = lesson;
    this.nbrChapter = nbrChapter;
    this.nbrHours = nbrHours;
  } */


}
