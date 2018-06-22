import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styles: [`
            h3
            {
              color:blue;
            }
           `]
})
export class MyComponentComponent implements OnInit
 {
 name="!!Inside Sub Component!!"
  constructor() { }

  ngOnInit() {
  }

}
