import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MessageDeleteComponent } from '../message-delete/message-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GridService } from 'src/app/service/gridService';
import { GridModel } from '../model/grid-model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  displayedColumns: string[] = [
    'date',
    'title',
    'description',
    'legislation',
    'type',
    'starttime',
    'endtime',
    'variable',
    'update',
    'delete'
  ];
  exibirSpinner?:boolean;
  dataSource = new MatTableDataSource<GridModel>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog, private router: Router,private _gridService: GridService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.exibirSpinner = true;
    this._gridService.getList().subscribe((gridModel: GridModel[]) => {
      if(gridModel.length > 0){
        this.exibirSpinner = false;
        this.dataSource.data = gridModel;
        console.log(this.dataSource.data)
      }
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getList();
    }, 400);
    this.dataSource.paginator = this.paginator;
  }

  openDialog(ip:string){

  }

  update(dashboard:GridModel){

  }

  openConfirmDialog(id: string): void {
    const dialogRef = this.dialog.open(MessageDeleteComponent, {
      width: '450px',
      data: { id: id, }
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger
      window.location.reload();

    });
  }

}

