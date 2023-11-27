import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdownstyle',
  templateUrl: './dropdownstyle.component.html',
  styleUrls: ['./dropdownstyle.component.scss']
})
export class DropdownstyleComponent implements OnInit {
  countries: any[] | undefined;

  selectedCountry: string | undefined;

  ngOnInit() {
      this.countries = [
          { name: 'Australia', code: 'AU' },
          { name: 'Brazil', code: 'BR' },
          { name: 'China', code: 'CN' },
          { name: 'Egypt', code: 'EG' },
          { name: 'France', code: 'FR' },
          { name: 'Germany', code: 'DE' },
          { name: 'India', code: 'IN' },
          { name: 'Japan', code: 'JP' },
          { name: 'Spain', code: 'ES' },
          { name: 'United States', code: 'US' }
      ];
  }
}
