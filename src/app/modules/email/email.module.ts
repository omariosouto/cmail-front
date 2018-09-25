import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { EmailRoutingModule } from "./email-routing.module";
import { ListagemPage } from "./pages/listagem/listagem.page";
import { InternoPage } from "./pages/interno/interno.page";
import { EmailListItemComponent } from "./pages/listagem/components/email-list-item.components";


@NgModule({
    declarations: [
        ListagemPage,
        InternoPage,
        EmailListItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        EmailRoutingModule
    ],
    exports: [
        RouterModule
    ]
})
export class EmailModule {}