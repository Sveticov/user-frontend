import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../User";


@Component({
  selector: 'app-user-model',
  templateUrl: './user-model.component.html',
  styleUrls: ['./user-model.component.css']
})
export class UserModelComponent implements OnInit{

  showAllUsers: User[];
  modalActive=false;
  userModal:User;
  userModalPost=new User(null,null,null,null,null,null);

  constructor(private http: HttpClient) {
  }

  ngOnInit(){
    this.http.get<User[]>('/app/find/all/user')
      .subscribe(user => {
        this.showAllUsers = user;
        console.log('all user show: '+user);
      })
  }

  findAllUsers() {
    this.http.get<User[]>('/app/find/all/user')
      .subscribe(user => {
        this.showAllUsers = user;
        console.log('all user show: '+user);
      })
  }

  editUser(id:number){
    console.log(id)
    this.http.post<User>('/app/find/one/user/',id)
      .subscribe(user=>this.userModal=user);
    console.log(this.userModal)
  }

  userDelete(id:number){
    this.http.post('app/delete/user',id)
      .subscribe();

  }

  userUpdate(user:User,user2:any,id:number){


    user._id=id;
    if(user._firstNane==null){user._firstNane=user2.firstNane;}
    if(user._lastName==null){user._lastName=user2.lastName;}
    if(user._sex==null){user._sex=user2.sex;}
    if(user._age==null){user._age=user2.age;}
    if(user._mail==null){user._mail=user2.mail;}
    console.log(user)
    this.http.post('app/update/user',user)
      .subscribe()


  }


}
