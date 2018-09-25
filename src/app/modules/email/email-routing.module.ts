import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListagemPage } from "./pages/listagem/listagem.page";
import { InternoPage } from "./pages/interno/interno.page";

const routes: Routes = [
    { path: '', component: ListagemPage },
    { path: ':id', component: InternoPage }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class EmailRoutingModule {}