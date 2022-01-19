import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
export interface ITask {
  title: string;
  check: boolean;
  key: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    let keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      this.rows.push(JSON.parse(localStorage.getItem(keys[i]) as string));
    }
    
  }
  rows: ITask[] = [];
  add(str: any) {
    const a: ITask = {
      title: str,
      check: true,
      key: uuidv4(),
    };
    
    if (str != '') {
      this.rows.push(a);
      localStorage.setItem(a.key, JSON.stringify(a));
    }
  }
  remove(index:string) {
    this.rows.splice(this.rows.findIndex(el => el.key==index),1);
    localStorage.removeItem(index);
  }
}
