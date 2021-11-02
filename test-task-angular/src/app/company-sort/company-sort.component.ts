import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "company-sort",
  templateUrl: "./company-sort.component.html",
  styleUrls: ["./company-sort.component.scss"],
})
export class CompanySortComponent {
  @Output() onChanged = new EventEmitter();

  change(sortValue: string) {
    this.onChanged.emit(sortValue);
  }
}
