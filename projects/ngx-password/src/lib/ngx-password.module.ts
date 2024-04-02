import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPasswordComponent } from './ngx-password.component';
@NgModule({
  declarations: [NgxPasswordComponent],
  imports: [FormsModule],
  exports: [NgxPasswordComponent, FormsModule],
})
export class NgxPasswordModule {}
