import { Component } from '@angular/core';
import { ReusableFromComponent } from '../../reusable-from/reusable-from.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ApiService, Company } from '../../services/api.service';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-add-company',
    imports: [HeaderComponent, ReactiveFormsModule, ReusableFromComponent],
    templateUrl: './add-company.component.html',
    styleUrl: './add-company.component.css'
})
export class AddCompanyComponent {
  companyForm: FormGroup;

  companyFields = [
    {
      name: 'symbol',
      type: 'text',
      label: 'Symbol',
      required: true,
      placeholder: 'Enter Symbol',
    },
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
      placeholder: 'Enter Company Name',
    },
    {
      name: 'marketCap',
      type: 'number',
      label: 'Market Cap',
      placeholder: 'Enter Market Cap',
    },
    {
      name: 'sector',
      type: 'text',
      label: 'Sector',
      placeholder: 'Enter Sector',
    },
    {
      name: 'industry',
      type: 'text',
      label: 'Industry',
      placeholder: 'Enter Industry',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      placeholder: 'Enter Description',
    },
  ];

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.companyForm = this.fb.group({
      symbol: ['', Validators.required],
      name: ['', Validators.required],
      marketCap: [null],
      sector: [''],
      industry: [''],
      description: [''],
    });
  }

  submitForm(formData: Company) {
    this.apiService.addCompany(formData).subscribe({
      next: (res) => {
        alert('Company added successfully');
      },
      error: (err) => {
        alert('Error adding company');
      },
    });
  }
}
