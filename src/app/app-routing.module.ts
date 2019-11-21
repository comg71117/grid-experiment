import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GridTestComponent} from './grid-test-one/grid-test/grid-test.component';

const routes: Routes = [
    {
        path: 'grid-test',
        component: GridTestComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
