import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { AuthGuard } from './guard/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './pages/homepage/homepage.module'
          ).then((m) => m.HomepageModule),

      },


      {
        path: '',
        loadChildren: () =>
          import(
            './pages/profile/profile.module'
          ).then((m) => m.ProfileModule),
        canActivate: [AuthGuard],
      },

      {
        path: '',
        loadChildren: () =>
          import(
            './pages/authentication/authentication.module'
          ).then((m) => m.AuthenticationModule),
      },
      {
        path: '**',
        loadChildren: () =>
          import(
            './pages/not-found/not-found.module'
          ).then((m) => m.NotFoundModule),
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],

})
export class AppRoutingModule { }
