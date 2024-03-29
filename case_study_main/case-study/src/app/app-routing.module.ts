import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FacilityComponent} from "./component/facility/facility.component";
import {HomeFuramaComponent} from "./component/home-furama/home-furama.component";
import {ListCustomerComponent} from "./component/customer/list-customer/list-customer.component";
import {CreateCustomerComponent} from "./component/customer/create-customer/create-customer.component";
import {CreateComponent} from "./component/facility/create/create.component";
import {UpdateCustomerComponent} from "./component/customer/update-customer/update-customer.component";
import {UpdateComponent} from "./component/facility/update/update.component";
import {ListContractComponent} from "./component/contract/list-contract/list-contract.component";


const routes: Routes = [
  {path: 'home', component: HomeFuramaComponent},
  {path: 'facility', component: FacilityComponent},
  {path: 'listCustomer', component: ListCustomerComponent},
  {path: 'createFacility', component: CreateComponent},
  {path: 'updateFacility/:id', component: UpdateComponent},
  {path: 'createCustomer', component: CreateCustomerComponent},
  {path: 'updateCustomer/:id', component: UpdateCustomerComponent},
  {path: 'listContract', component: ListContractComponent},
  {path: '', component: HomeFuramaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
