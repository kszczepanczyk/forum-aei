import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';
import { ArchiveComponent } from './archive/archive.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReportComponent } from './report/report.component';
import { NewestPostsComponent } from './newest-posts/newest-posts.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { PostSectionComponent } from './post-section/post-section.component';
import { ArchivesSectionComponent } from './archives-section/archives-section.component';
import { EditorComponent } from './editor/editor.component';
import { PostItemComponent } from './post-item/post-item.component';
import { DropdownDirective } from './dropdown.directive';
import { PostService } from './post-section/post.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CalendarComponent,
    ProfileComponent,
    ArchiveComponent,
    ProfileEditorComponent,
    ReportComponent,
    NewestPostsComponent,
    CategorySectionComponent,
    PostSectionComponent,
    ArchivesSectionComponent,
    EditorComponent,
    PostItemComponent,
    DropdownDirective,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
