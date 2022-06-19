import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [{
  path: "",
  loadChildren: () =>
    import("./main-layout/main-layout.module").then(
      (m) => m.MainLayoutModule
    ),
  },
  
];

export const Routing = RouterModule.forRoot(routes);
