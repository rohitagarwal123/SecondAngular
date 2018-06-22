import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
          `
          <div style="text-align:center">
          <h1>
          {{ title }}!
          </h1>
          <h2>
         <label for="name">Enter your name:</label>
         <input type="text" placeholder="Name Surname" id="name"/>
         </h2>
         <app-my-component></app-my-component> 
         </div>`,
  styles:   [`h1
            {
             color:red;
             background:aqua;
            }
            h2
            {
             color:green;
             background-color: bisque;
            }
            input,textarea
            {
             background-color:blue;
             }`]
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}
