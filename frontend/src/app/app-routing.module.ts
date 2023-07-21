import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'mainpage',component:MainpageComponent},



  // {path:'',component:DashboardComponent},
  
  // {
  //   path: 'payments',
  //   loadChildren: () =>
  //     import('./payments/payments.module').then((m) => m.PaymentsModule),
  // },
  // {
  //   path: 'loans',
  //   loadChildren: () =>
  //     import('./loans/loans.module').then((m) => m.LoansModule),
  // },
  // {
  //   path: 'invoices',
  //   loadChildren: () =>
  //     import('./invoices/invoices.module').then((m) => m.InvoicesModule),
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('./settings/settings.module').then((m) => m.SettingsModule),
  // },
  // { path: 'loan-types', loadChildren: () =>
  //  import('./loan-types/loan-types.module').then(m => m.LoanTypesModule) },
  // { path: 'reports', loadChildren: () =>
  // import('./reports/reports.module').then(m => m.ReportsModule) },
  // { path: 'activity', loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule) },
  // {path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
