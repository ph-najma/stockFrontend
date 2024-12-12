import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-stop-orders',
    imports: [HeaderComponent, RouterModule],
    templateUrl: './stop-orders.component.html',
    styleUrl: './stop-orders.component.css'
})
export class StopOrdersComponent {}
