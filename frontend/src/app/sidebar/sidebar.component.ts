import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() sideNavStatus:boolean = false;

  constructor() { }
  list=[
    {
      id:1,
      name:'Dashboard',
      icon:'bx bxs-dashboard',
      link:'/g'
    },
    {
      id:2,
      name:'Loans',
      icon:'bx bx-money-withdraw',
      link:'/loans'
    },
    {
      id:3,
      name:'Customers',
      icon:'bx bx-user',
      link:'/customers'
    },
    {
      id:4,
      name:'Payments',
      icon:'bx bx-wallet-alt',
      link:'/payments'
    },
    {
      id:5,
      name:'Invoices',
      icon:'bx bx-receipt',
      link:'/invoices'
    },
    {
      id:6,
      name:'Loan Plans',
      icon:'bx bx-briefcase-alt-2',
      link:'/loan-types'
    },
    {
      id:7,
      name:'Reports',
      icon:'bx bx-trending-up',
      link:'/reports'
    },
    {
      id:8,
      name:'Settings',
      icon:'bx bx-cog',
      link:'/settings'
    },
  ]

  ngOnInit(): void {
  }

}
