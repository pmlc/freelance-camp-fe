import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list/proposal-list.component';

const routes: Routes = [
  { path: 'documents', component: DocumentsComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'proposal', component: ProposalListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
