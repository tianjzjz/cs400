import { Component } from '@angular/core';
import { DATAS } from './DATA-MOCK';
import { DATA } from './DATA';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  datas = DATAS;
  selectedData: DATA;

  selectData(data:DATA){
    this.selectedData = data;
  }
}
