import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameEditComponent } from './name-edit/name-edit.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

const routes: Routes = [
  {path:'simpleForm', component:NameEditComponent},
  {path:'groupForm', component:ProfileEditorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
