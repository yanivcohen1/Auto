import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BddMainComponent } from './bdd-main.component';
import { BddBuildComponent } from './bdd-build.component';
import { BddFeatureComponent } from './bdd-feature.component';
import { BddSenarioComponent } from './bdd-senario.component';

const routes: Routes = [
  {
    path: 'bdd',
    component: BddMainComponent,
    data: {
        authorities: [],
        pageTitle: 'bdd.title'
    },
    children: [
    // { path: '', redirectTo: 'hero', pathMatch: 'full' },
    // { path: 'hero/:id', redirectTo: '/superhero/:id' },
    // { path: 'superheroes',  component: HeroListComponent },
    { path: 'product/:id', component: BddBuildComponent,
      children: [
        { path: 'build/:id', component: BddFeatureComponent,
        children: [    
          { path: 'senario/:id', component: BddSenarioComponent 
        }],
      }],
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BddRoutingModule { }
