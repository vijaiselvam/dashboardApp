import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AggridComponent } from './aggrid/aggrid.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(AggridComponent) agGridComponent: AggridComponent;

  rangeFormGroup = new FormGroup({
    start: new FormControl(null, null),
    end: new FormControl(null, null)
  })

  constructor() { }

  ngOnInit(): void {
  }

  reset() {
    this.rangeFormGroup.reset();
    this.agGridComponent.externalFilterChanged('everyone');
  }

  update() {
    console.log('value', this.rangeFormGroup.value);
    this.agGridComponent.externalFilterChanged(this.rangeFormGroup.value);
  }

}
