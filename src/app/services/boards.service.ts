import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, async, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardsService implements OnInit {



  private BoardsUrl="http://localhost:3000/boards"

   constructor(private httpc:HttpClient) { 
    this.getallboards().subscribe(res=>{
      
    })
  }
  
  ngOnInit(): void {
  }

  getallboards():Observable<[]>{
     
    return this.httpc.get<[]>(this.BoardsUrl)
  }

  updateboarddata(id:any,data:any){
    console.log("data inserted");
    
    return this.httpc.put(`${this.BoardsUrl}/${id}`,data)
  }

  getoneboard(id:any){
    return this.httpc.get(`${this.BoardsUrl}/${id}`)
  }

}
