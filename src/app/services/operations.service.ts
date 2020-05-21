import { Injectable } from '@angular/core';
import {Templates} from '../interface/Templates';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  constructor(private http : HttpClient) { }

  uploadArchive(e){
    let formData = new FormData();
    let file = <File>e;
    formData.append('graduationDocument',file)
    return this.http.post<any>('http://localhost:3500/uploadArchive', formData).subscribe(res => {
      console.log(res);
    })
  }

  uploadDocument(e){
    let formData = new FormData();
    let file = <File>e;
    formData.append('document',file)
    return this.http.post<any>('http://localhost:3500/uploadDocument', formData).subscribe(res => {
      console.log(res);
    })
  }

  uploadTemplate(e){
    let formData = new FormData();
    let file = <File>e;
    formData.append('templateDocument',file)
    return this.http.post<any>('http://localhost:3500/uploadTemplate', formData).subscribe(res => {
      console.log(res);
    })
  }
}
