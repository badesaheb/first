import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  userName:string = '';

  userlist:any = []
  
  onclick(prouser:any){
    if(prouser.value.length > 0)
    this.userlist.push(prouser.value);
    prouser.value = "";
  }
  ondelete(deleteme:any){
    this.userlist.splice(deleteme,1)
  }

}
