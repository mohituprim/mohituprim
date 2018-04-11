import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImagedlgComponent } from "../../img-dialog/imagedlg.component";

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

    openImageDialog() {
    this.dialog.open(ImagedlgComponent, {
      data: {imageData:this.imageData}
    });
  }
  imageData = [
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg',
      imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua'
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg02.jpg',
      imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua'
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg03.jpg',
      imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua'
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg04.jpg',
      imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua'
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg05.jpg',
      imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua'
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg06.jpg',
      imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua'
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg07.jpg',
      imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua'
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg08.jpg',
      imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua'
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg09.jpg',
      imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua'
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg10.jpg',
      imageDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua'
    },
  ]
}
