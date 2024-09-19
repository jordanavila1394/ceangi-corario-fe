import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderLayoutComponent } from './layout/components/header-layout/header-layout.component';
import { FooterLayoutComponent } from './layout/components/footer-layout/footer-layout.component';
import { SidebarComponent } from './layout/components/sidebar/sidebar.component';
import * as ComponentsList from '../components/index';
import * as ModalsList from '../modals/index';

@NgModule({
  declarations: [...ComponentsList.genericComponentsList, ...ModalsList.genericModalsList,
    LayoutComponent, SidebarComponent, HeaderLayoutComponent, FooterLayoutComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [...ComponentsList.genericComponentsList, ...ModalsList.genericModalsList, LayoutComponent],
})
export class SharedModule { }
