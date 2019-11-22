import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() numOfPages: number;
  @Output() pageNumberClick = new EventEmitter<number>();
  pageList: number[];
  selected: number;
  constructor() { }

  ngOnInit() {
    this.pageList =  Array(this.numOfPages);
    this.selected = 0;
  }

  onSelect(page: number) {
    this.selected = page;
    this.pageNumberClick.emit(page);
  }

  onNext() {
    this.onSelect(this.selected + 1);
  }

  onPrevious() {
    this.onSelect(this.selected - 1);
  }

}
