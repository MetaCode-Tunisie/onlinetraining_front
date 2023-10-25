export class Exam {
  idExam!: number;
  note!: number;
  description!: string;
  title!: string;
  duration!: number;
  link!: string;
  // Autres propriétés spécifiques à la classe Exam

  constructor() {
    this.link="";
    this.duration=0;
    this.title="";
    this.description="";
    this.note=0;
    this.idExam=0;

  }

/*
  constructor(idExam: number, note: number, description: string,title: string ,duration: number, link: string) {
    this.idExam = idExam;
    this.note = note;
    this.description = description;
    this.title = title;
    this.duration = duration;
    this.link = link;
  }
*/

}
