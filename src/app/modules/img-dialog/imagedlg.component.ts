import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-imagedlg',
  templateUrl: './imagedlg.component.html',
  styleUrls: ['./imagedlg.component.css']
})
export class ImagedlgComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ImagedlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
     items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ]

  addSlide() {
    this.items.push({
      title: `Slide 4`
    });
  }
}
