import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ActionIconComponent } from './components/action-icon/action-icon.component';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HeaderComponent, ActionIconComponent, CardComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    ActionIconComponent,
    CardComponent
  ],
  providers:[]
})
export class SharedModule { }
