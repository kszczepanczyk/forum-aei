import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivesSectionComponent } from './archives-section/archives-section.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { EditorComponent } from './post/editor/editor.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostSectionComponent } from './post/post-section/post-section.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
     component: LoginComponent
 },
  { 
    path: 'home',
     component: HomeComponent,
     canActivate: [AuthGuard] 
  },
  {
    path: 'dyskusje',
    component: PostSectionComponent,
    // children: [{
    //    path: ':id', component: PostDetailsComponent
    //    }],
  },
  {
    path: 'dyskusje/:id',
    component: PostDetailsComponent
  },
  {
     path: 'archiwa', component: ArchivesSectionComponent 
  },
  {
     path: 'edytuj', component: EditorComponent 
  },
  {
    path: 'not-found', component: NotFoundComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
