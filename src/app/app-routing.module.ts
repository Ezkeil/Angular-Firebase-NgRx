import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./domain/domain.module').then((m) => m.DomainModule),
  },
  {
    path: 'routed-module',
    loadChildren: () =>
      import('./domain-routed/domain-routed.module').then(
        (m) => m.DomainModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
