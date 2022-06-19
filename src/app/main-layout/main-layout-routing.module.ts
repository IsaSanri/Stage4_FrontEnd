import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteGuard } from '../personal.guard';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path:"",
    component:MainLayoutComponent,
    children:[
      {
        path:"",
        pathMatch:"full",
        redirectTo:"home",
      },
      {
        path:"home",
        pathMatch:"full",
        loadChildren:()=>
        import("../modules/dashboard/dashboard.module").then(
          (m)=>m.DashboardModule
        )
      },
      {
        path:"personal",
        pathMatch:"full",
        loadChildren:()=>
        import("../modules/components/personal/personal.module").then(
          (m)=>m.PersonalModule
        )
      },
      {
        path:"adress",
        pathMatch:"full",
        loadChildren:()=>
        import("../modules/components/adress/adress.module").then(
          (m)=>m.AdressModule
        ),
        canActivate:[VigilanteGuard]
      },

      {
        path:"resume",
        pathMatch:"full",
        loadChildren:()=>
        import("../modules/components/resume/resume.module").then(
          (m)=>m.ResumeModule
        ),
        canActivate:[VigilanteGuard]
      },
    ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
