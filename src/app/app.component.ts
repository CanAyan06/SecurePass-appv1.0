import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatIconModule,MatButtonModule,MatToolbarModule,MatCheckboxModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  length:number=0;
  password='';
includeLetters:boolean = false;
includeNumbers:boolean = false;
includeSymbols:boolean = false;
  modifyLetters(){

    this.includeLetters = !this.includeLetters;
    
  }

  modifyNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  modifySymbol(){
    this.includeSymbols=!this.includeSymbols;
  }
  modifLength(value:string){
    const parsedValue =parseInt(value);
    if(!isNaN(parsedValue))
      { this.length=parsedValue;
          
        }
     

  }
  buttonClick(){
    const numbers='01234567890';
    const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols='!@#$%^&*()_+-=[]{}|;:",.<>?';
let validChars='';
if(this.includeLetters)
  {
    validChars+=letters;
  }
    if(this.includeNumbers){
      validChars+=numbers;
    }
    if(this.includeSymbols){
          validChars+=symbols;
        }
        let generatedPassword='';
        for(let i = 0; i < this.length; i++) {
          const index = Math.floor(Math.random()*validChars.length); 
          generatedPassword += validChars[index];

        }
       

     
        this.password=generatedPassword;
        console.log(generatedPassword);
      console.log(this.password);
        
  }
  
}
