import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { AnkitComponent } from './ankit/ankit.component';
import { HarshitComponent } from './harshit/harshit.component';

const routes: Routes = [
{
  path:'arpit',
  component:AbcComponent,
  children:
  [
   {
     path:'harshit',
     component:HarshitComponent,
     children:
     [
      {
        path:'ankit',
        component:AnkitComponent
      }
     ]
   }
  ]
},
{
  path:'harshit',
  component:HarshitComponent
},
{
  path:'ankit',
  component:AnkitComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
