import { NgModule } from "@angular/core";
import { CadastroPageComponent } from "./cadastro-page.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CadastroRoutingModule } from "./cadastro-routing.module";

@NgModule({
    imports: [ CommonModule, RouterModule, CadastroRoutingModule ],
    declarations: [ CadastroPageComponent ]
})
export class CadastroModule {}