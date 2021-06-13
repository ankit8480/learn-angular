import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {

  value:number=1;
  arr:any=[1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }
test(){
  this.value+=1;
}
}
