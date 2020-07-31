import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './books/components/book-add/book-add.component';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { BookDetailComponent } from './books/components/book-detail/book-detail.component';




const routes: Routes = [
  {path:'',component:BookListComponent},
  {path:'add',component:BookAddComponent},
  {path:'detail/id',component:BookDetailComponent},
  {path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
