import {MatToolbarModule,MatButtonModule,MatInputModule,MatCardModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatCardModule],
    exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatCardModule],
})
export class MaterialModule{

}