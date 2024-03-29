import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { AboutComponent } from './about/about.component';
import { MenupageComponent } from './menupage/menupage.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'course' , component:CourseComponent},
  {path:'course/:id' , component:MenupageComponent},
  {path:'joinnow', component:JoinnowComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
