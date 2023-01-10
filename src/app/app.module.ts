import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { ReportComponent } from './report/report.component';
import { NewestPostsComponent } from './newest-posts/newest-posts.component';
import { CategorySectionComponent } from './category-section/category-section.component';
import { PostSectionComponent } from './post/post-section/post-section.component';
import { ArchivesSectionComponent } from './archives-section/archives-section.component';
import { EditorComponent } from './post/editor/editor.component';
import { PostItemComponent } from './post/post-item/post-item.component';

import { PostDetailsComponent } from './post/post-details/post-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { PostService } from './post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CalendarComponent,
    ProfileComponent,
    ProfileEditorComponent,
    ReportComponent,
    NewestPostsComponent,
    CategorySectionComponent,
    PostSectionComponent,
    ArchivesSectionComponent,
    EditorComponent,
    PostItemComponent,
    PostDetailsComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [PostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
