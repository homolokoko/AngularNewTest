import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientOverviewComponent } from './client-overview/client-overview.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdminComponent},
  {path:'client',component:ClientComponent},
  {
    path:'clients/:id',component:ClientDetailComponent,
    children: [
      {path:'client-overview',component:ClientOverviewComponent},
      {path:'client-contact',component:ClientContactComponent}
    ]
  },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponent = 
[
  AdminComponent,
  ClientComponent,
  PageNotFoundComponent,
  ClientDetailComponent,
  ClientOverviewComponent,
  ClientContactComponent,
  HomeComponent,
  AboutComponent,
  ServicesComponent,
  ProductsComponent,
  ContactComponent
]
