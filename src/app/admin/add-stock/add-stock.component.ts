import { Component, importProvidersFrom } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ReusableFromComponent } from '../../reusable-from/reusable-from.component';
import { ApiService, Stock } from '../../services/api.service';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-add-stock',
    imports: [
        HeaderComponent,
        ReusableFromComponent,
        ReactiveFormsModule,
        FormsModule,
    ],
    templateUrl: './add-stock.component.html',
    styleUrl: './add-stock.component.css'
})
export class AddStockComponent {
  stockForm: FormGroup;
  stockFields = [
    {
      name: 'symbol',
      type: 'text',
      label: 'Symbol',
      placeholder: 'Enter stock symbol',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price',
      placeholder: 'Enter stock price',
      required: true,
    },
    {
      name: 'volume',
      type: 'number',
      label: 'Volume',
      placeholder: 'Enter stock volume',
      required: true,
    },
    {
      name: 'changePercent',
      type: 'number',
      label: 'Change Percent',
      placeholder: 'Enter change percent',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company ID',
      placeholder: 'Enter associated company ID',
      required: false,
    },
  ];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.stockForm = this.fb.group({
      symbol: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      volume: ['', [Validators.required, Validators.min(0)]],
      changePercent: [
        '',
        [Validators.required, Validators.min(-100), Validators.max(100)],
      ],
      company: [''],
    });
  }

  onSubmit(stockData: Stock) {
    console.log('stoc data', stockData);
    this.apiService.addStock(stockData).subscribe({
      next: (res) => alert('New Stoc added successfully'),
      error: (error) => alert('Cant add new stock'),
    });
  }
}
