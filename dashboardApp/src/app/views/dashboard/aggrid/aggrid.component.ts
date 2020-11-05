import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { DetailCellRendererComponent } from './detail-cell-renderer/detail-cell-renderer.component';
import { ClientSideRowModelModule, ColumnsToolPanelModule, MasterDetailModule, MenuModule, Module } from '@ag-grid-enterprise/all-modules';

@Component({
  selector: 'app-aggrid',
  templateUrl: './aggrid.component.html',
  styleUrls: ['./aggrid.component.scss']
})
export class AggridComponent {

  @ViewChild('myGrid') myGrid: any;
  public gridApi;
  public gridColumnApi;

  public modules: Module[] = [
    ClientSideRowModelModule,
    MasterDetailModule,
    MenuModule,
    ColumnsToolPanelModule,
  ];
  public detailCellRenderer;
  public frameworkComponents;
  public columnDefs;
  public defaultColDef;
  public detailCellRendererParams;
  public rowData: any;

  constructor(private http: HttpClient) {
    this.detailCellRenderer = 'myDetailCellRenderer';
    this.frameworkComponents = { myDetailCellRenderer: DetailCellRendererComponent };
    this.columnDefs = [
      {
        field: 'athlete',
        minWidth: 150,
      },
      {
        field: 'age',
        maxWidth: 90,
      },
      {
        field: 'country',
        minWidth: 150,
      },
      {
        field: 'year',
        maxWidth: 90,
      }
    ];
    this.defaultColDef = { flex: 1 };
  }

  onRowClicked(params) { params.node.setExpanded(!params.node.expanded) }

  onRowGroupOpened(params) {
    if (params.node.expanded) {
      params.api.forEachNode(node => {
        if (node.expanded && node !== params.node)
          node.setExpanded(false);
      })
    }
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .subscribe((data: any) => {
        data.forEach((d, index) => {
          (d.detailHeight = 100)
          d.id = index
        });
        this.rowData = data;
      });
  }

  getRowHeight = params => {
    if (params.node.master) {
      return 81;
    } else {
      console.log('set Height');
      setTimeout(() => {
        params.api.ensureIndexVisible(params.node.rowIndex - 1, 'top');
      }, 0);
      return params.node.data.detailHeight;
    }
  };

}
