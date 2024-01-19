import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GridService } from 'src/app/service/gridService';
//Service
// import { DasboardService } from 'src/app/core/service/dashboard.service';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-message-delete',
  templateUrl: './message-delete.component.html',
  styleUrls: ['./message-delete.component.scss'],
})
export class MessageDeleteComponent implements OnInit {

  elementId!: string;

  constructor(
    private _gridService: GridService,
    private router: Router,
    public dialogRef: MatDialogRef<MessageDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
  ) {}

  ngOnInit(): void {
    this.elementId = this.data.id;
  }

  cancel() {
    this.dialogRef.close(false);
  }
  confirm(): void {
    if (this.elementId) {
    this._gridService.deleteId(this.elementId).subscribe((res) => {
      this.elementId      
     
    });
    this.dialogRef.close(true);
  }
  }
}
