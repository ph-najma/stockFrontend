import { Routes } from '@angular/router';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { OtpComponent } from './user/otp/otp.component';
import { HomeComponent } from './user/home/home.component';
import { ForgotPassComponent } from './user/forgot-pass/forgot-pass.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { authGuard } from './auth.guard';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { nonautheticatedGuard } from './nonautheticated.guard';
import { SubAdminLoginComponent } from './admin/sub-admin-login/sub-admin-login.component';
import { SubLoginComponent } from './user/sub-login/sub-login.component';
import { AddStockComponent } from './admin/add-stock/add-stock.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { UserStockListComponent } from './user/user-stock-list/user-stock-list.component';
import { OrderManagementComponent } from './admin/order-management/order-management.component';
import { LimitOrdersComponent } from './admin/limit-orders/limit-orders.component';
import { MarketOrdersComponent } from './admin/market-orders/market-orders.component';
import { StopOrdersComponent } from './admin/stop-orders/stop-orders.component';
import { MatchedOrdersComponent } from './admin/matched-orders/matched-orders.component';
import { ViewDetailsComponent } from './admin/view-details/view-details.component';
import { ModernSerachBarComponent } from './modern-serach-bar/modern-serach-bar.component';

import { PortfolioComponent } from './user/portfolio/portfolio.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { StocklistComponent } from './admin/stocklist/stocklist.component';

export const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  {
    path: 'signup',
    component: SignUpComponent,
    canActivate: [nonautheticatedGuard],
  },
  {
    path: 'login',
    component: SubLoginComponent,
    canActivate: [nonautheticatedGuard],
  },
  {
    path: 'otp',
    component: OtpComponent,
    canActivate: [nonautheticatedGuard],
  },
  {
    path: 'forgotPassword',
    component: ForgotPassComponent,
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'adminHome',
    component: AdminDashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'userList',
    component: AdminUserListComponent,
    canActivate: [authGuard],
  },

  {
    path: 'adminLogin',
    component: SubAdminLoginComponent,
  },

  {
    path: 'userProfile',
    component: UserProfileComponent,
    canActivate: [authGuard],
  },

  {
    path: 'addCompany',
    component: AddCompanyComponent,
    canActivate: [authGuard],
  },
  { path: 'addStock', component: AddStockComponent, canActivate: [authGuard] },
  {
    path: 'stocks',
    component: UserStockListComponent,
  },
  {
    path: 'ordermanagement',
    component: OrderManagementComponent,
    canActivate: [authGuard],
  },
  {
    path: 'limitorders',
    component: LimitOrdersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'marketorders',
    component: MarketOrdersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'stoporders',
    component: StopOrdersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'matchorders',
    component: MatchedOrdersComponent,
    canActivate: [authGuard],
  },
  {
    path: 'viewdetails/:id',
    component: ViewDetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: 'searchbar',
    component: ModernSerachBarComponent,
  },

  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'transactionhistroy',
    component: TransactionHistoryComponent,
  },
  { path: 'list', component: StocklistComponent },
];
