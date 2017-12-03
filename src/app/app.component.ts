import {Component} from '@angular/core';
import {sonnets} from './sonnets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Shakespeare's Sonnets";
  sonnets = sonnets;
  filteredData = sonnets;

  search(val: any) {
    let ind = false;
    console.log(val);
    if (!val) this.filteredData = this.sonnets;

    this.filteredData = this.sonnets.filter((item) => {
      return item.lines.filter((inner) => {
        return inner.indexOf(val) >=0;
      }).length > 0;
    });

    console.log('filteredData', this.filteredData);
  }
}


