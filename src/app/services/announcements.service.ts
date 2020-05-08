import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from '../interface/announcement';
import {Students} from '../interface/Students';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsService {

  constructor(private http : HttpClient) { }

    createAnnouncement(data){
    return this.http.post<Announcement>('http://localhost:3500/announcement', data).subscribe(res => {
      console.log(data);
    })
  }
    getAnnouncement() {
    return this.http.get<Announcement>('http://localhost:3500/announcement');
  }
}
