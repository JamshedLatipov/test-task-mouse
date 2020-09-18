import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextFieldModule } from './components/text-field/text-field.module';

@NgModule({
  imports: [CommonModule, TextFieldModule],
  exports: [TextFieldModule],
})
export class SharedModule {}
