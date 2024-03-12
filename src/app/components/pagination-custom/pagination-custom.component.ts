import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pagination-custom',
  templateUrl: './pagination-custom.component.html',
  styleUrls: ['./pagination-custom.component.css']
})
export class PaginationCustomComponent implements OnInit {

  @Input() currentPage: any;
  @Input() itemsPerPage: any;
  @Input() totalItems: any;
  @Input() dataInput: any;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(page);
    }
  }

}
