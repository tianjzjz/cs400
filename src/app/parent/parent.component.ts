import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-parent',
  template: './parent.component.html',

  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  location : FormGroup = new FormGroup({
    city: new FormControl('boston'),
    units:  new FormControl('imperial')
  }
  )

  weather:any;

  op:{};
  constructor(private wx: WeatherService, private form:FormBuilder){
  }

  getWeather(){

    this.op = {
      city: this.location.get('city').value,
      units: this.location.get('units').value

    }


    this.wx.getWeather(this.op).subscribe(
      response => {
        this.weather = response['main']['temp'];

      }
    )

  }
  ngOnInit(): void {
  }

}
