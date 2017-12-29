import {Component, OnInit} from '@angular/core';
import {User} from "../User";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  addNewUser=new User(null,null,null,null,null,null);

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  addNewUserClick():void {
    this.http.post('app/save/user',this.addNewUser)
      .subscribe();

console.log(this.addNewUser);

  }
}
