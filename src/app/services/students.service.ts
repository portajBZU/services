import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {Students} from '../interface/Students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http : HttpClient) { }

  addStudents(data){
    return this.http.post<Students>('http://localhost:3500/students', data).subscribe(res => {
      console.log(data);
    })
  }
  getStudents() {
    return this.http.get<Students>('http://localhost:3500/students');
  }
}
