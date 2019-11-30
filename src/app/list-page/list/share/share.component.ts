import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  user: String;

  constructor(public dialogRef: MatDialogRef<ShareComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
