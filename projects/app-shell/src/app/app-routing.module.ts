import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginAllRoutesWithRoleGuard, microFrontEndRoute, NotFoundComponent, UnauthorisedComponent } from 'lib-micro-front-end';

export const moduleByPath: Map<string,string> = new Map<string,string>([
  ['retail', 'app-app1'],
  ['business', 'app-app2']
]);

export const pathByModule: Map<string,string> = new Map<string,string>([
  ['app-app1', 'retail'],
  ['app-app2', 'business']
]);

export type Menu = { title: string, name: string, prefix: string, items: MenuItem[] }
export type MenuItem = { title: string, link: string, fullMatch: boolean }

export const navBar: Menu[] = [
  {title: 'Retail', name: 'app-app1', prefix: 'retail', items: []},
  {title: 'Business', name: 'app-app2', prefix: 'business', items: []},
];

const routes: Routes = [
  { path: '', redirectTo: 'retail', pathMatch: 'full' },
  { path: 'unauthorized', component: UnauthorisedComponent },
  microFrontEndRoute({ path: 'retail', name: 'app-app1', guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN', 'USER'] }),
  microFrontEndRoute({ path: 'business', name: 'app-app2', guards: [AutoLoginAllRoutesWithRoleGuard], roles: ['ADMIN', 'USER'] }),
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
