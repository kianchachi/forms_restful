import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService){}

 

  tasks = [];
  one_task:any;
  newTask:any;
  title= 'RESTful Tasks';

  ngOnInit(){
    this.newTask = {title: "", description:""}

  }

  onSubmit(){
    console.log('In component')
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      this.newTask = {title: "", description: ""},
      console.log ("Got data from post back", data);

    })

  }


getTasksFromService(){
  this._httpService.getTasks().subscribe(data => {
    console.log(data);
    this.tasks = data['tasks'];
    }
  )};


  getTaskFromService(id){
    this._httpService.getTask(id).subscribe(data => {
      console.log(data);
      this.one_task = data['tasks'];


    })
  }

  onButtonClickParam(): void { 
    this._httpService.getTasks().subscribe(data => {
      console.log(data);
      this.tasks = data['tasks'];
})
}

  onButtonClickParams(id): void { 
    this._httpService.getTask(id).subscribe(data => {
      console.log(data);
      this.one_task = data['tasks'];

  })
}

}




