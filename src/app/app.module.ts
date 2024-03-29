import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SkillCreateModalComponent } from './modals/creators/skill-creator-modal/skill-creator-modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesContainerComponent } from './portfolio-page/containers/categories-container/categories-container.component';
import { EducationSectionComponent } from './portfolio-page/containers/education-section/education-section.component';
import { PageContainerComponent } from './portfolio-page/containers/page-container/page-container.component';
import { ProjectsContainerComponent } from './portfolio-page/containers/projects-container/projects-container.component';
import { SkillsContainerComponent } from './portfolio-page/containers/skills-container/skills-container.component';
import { WorkExperienceContainerComponent } from './portfolio-page/containers/work-experience-container/work-experience-container.component';
import { AboutMeComponent } from './portfolio-page/entity-views/about-me/about-me.component';
import { EducationComponent } from './portfolio-page/entity-views/education/education.component';
import { HeroComponent } from './portfolio-page/entity-views/hero/hero.component';
import { ProjectComponent } from './portfolio-page/entity-views/project/project.component';
import { SkillComponent } from './portfolio-page/entity-views/skill/skill.component';
import { WorkExperienceComponent } from './portfolio-page/entity-views/work-experience/work-experience.component';
import { PortfolioComponent } from './portfolio-page/portfolio/portfolio.component';
import { ModalContainerComponent } from './portfolio-page/containers/modal-container/modal-container.component';
import { SkillEditorModalComponent } from './modals/editors/skill-editor-modal/skill-editor-modal.component';
import { ProjectCreatorModalComponent } from './modals/creators/project-creator-modal/project-creator-modal.component';
import { ProjectEditorModalComponent } from './modals/editors/project-editor-modal/project-editor-modal.component';
import { PersonEditorModalComponent } from './modals/editors/person-editor-modal/person-editor-modal.component';
import { InstitutionComponent } from './portfolio-page/entity-views/institution/institution.component';
import { InstitutionContainerComponent } from './portfolio-page/containers/institution-container/institution-container.component';
import { InstitutionCreatorModalComponent } from './modals/creators/institution-creator-modal/institution-creator-modal.component';
import { InstitutionEditorModalComponent } from './modals/editors/institution-editor-modal/institution-editor-modal.component';
import { WorkExperienceCreatorModalComponent } from './modals/creators/work-experience-creator-modal/work-experience-creator-modal.component';
import { WorkExperienceEditorModalComponent } from './modals/editors/work-experience-editor-modal/work-experience-editor-modal.component';
import { EducationCreatorModalComponent } from './modals/creators/education-creator-modal/education-creator-modal.component';
import { EducationEditorModalComponent } from './modals/editors/education-editor-modal/education-editor-modal.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { ErrorDeleteModalComponent } from './modals/error-delete-modal/error-delete-modal.component';
import { WorkExperienceLinkModalComponent } from './modals/linkers/work-experience-link-modal/work-experience-link-modal.component';
import { EducationLinkModalComponent } from './modals/linkers/education-link-modal/education-link-modal.component';
import { LicensesComponent } from './licenses/licenses.component';
import { LicensesSectionComponent } from './licenses-section/licenses-section.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PortfolioComponent,
    LoginComponent,
    PageContainerComponent,
    HeroComponent,
    AboutMeComponent,
    CategoriesContainerComponent,
    WorkExperienceComponent,
    EducationComponent,
    EducationSectionComponent,
    WorkExperienceContainerComponent,
    ProjectsContainerComponent,
    ProjectComponent,
    SkillComponent,
    SkillsContainerComponent,
    SkillCreateModalComponent,
    ModalContainerComponent,
    SkillEditorModalComponent,
    ProjectCreatorModalComponent,
    ProjectEditorModalComponent,
    PersonEditorModalComponent,
    InstitutionComponent,
    InstitutionContainerComponent,
    InstitutionCreatorModalComponent,
    InstitutionEditorModalComponent,
    WorkExperienceCreatorModalComponent,
    WorkExperienceEditorModalComponent,
    EducationCreatorModalComponent,
    EducationEditorModalComponent,
    LegalNoticeComponent,
    ErrorDeleteModalComponent,
    WorkExperienceLinkModalComponent,
    EducationLinkModalComponent,
    LicensesComponent,
    LicensesSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
