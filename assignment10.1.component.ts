import { Component } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
userForm= new FormGroup({
  name:new FormControl("abc"),
  email:new FormControl("abc@gmail.com"),
  cities:new FormControl( [{name:"hyderabad"},
    {name:"kolkata"},
    {name:"noida"}]), 
	password:new FormControl();
});
onSubmit(){
  console.log(this.userForm.value)
}


}
