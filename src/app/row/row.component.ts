import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../app.component';
@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  @Input() item:any;
  @Input() index!:number;
  @Output() onRemove=new EventEmitter()
  ngOnInit() {
  }

  checkedFunc(task: ITask) {
    task.check=!task.check;
  }

  deleteFunc() {
    this.onRemove.emit(this.item.key)
  }
}
