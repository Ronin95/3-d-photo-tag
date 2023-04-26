import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Viewer } from 'cesium';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit, AfterViewInit {
  @ViewChild('mapContainer')
  content!: ElementRef;
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    const viewer = new Viewer(this.content.nativeElement);
  }
}