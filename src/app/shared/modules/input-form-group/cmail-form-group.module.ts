import { NgModule } from "@angular/core";
import { CmailInputFormDirective } from "./cmail-form.directive";
import { CmailFormGroupComponent } from "./cmail-form-component.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        CmailInputFormDirective,
        CmailFormGroupComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CmailInputFormDirective,
        CmailFormGroupComponent        
    ]
})
export class CmailFormGroupModule {}