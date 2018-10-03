import { Component, OnInit } from '@angular/core';
import {BiodataService} from '../biodata.service'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public data;
  public showdata=[];
  constructor(private biodataservice:BiodataService) { }

  ngOnInit() {
this.data = this.biodataservice.howservicesWorks();
this.showdata = this.biodataservice.biodata();

  }









}
