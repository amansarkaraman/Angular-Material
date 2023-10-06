import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

const MaterialComponent = [MatButtonModule,MatToolbarModule];

@NgModule({
  imports: [MaterialComponent],
  exports: [MaterialComponent],
})
export class AngularMaterialModule {}
