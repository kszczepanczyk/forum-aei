import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchivesSectionComponent } from './archives-section/archives-section.component';
import { EditorComponent } from './editor/editor.component';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostSectionComponent } from './post-section/post-section.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dyskusje', component: PostSectionComponent, children: [
    {path: ':id', component: PostDetailsComponent}
  ] },
  {path: 'archiwa', component: ArchivesSectionComponent},
  {path: 'edytuj', component: EditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
