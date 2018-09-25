import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login-page.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms"
import { CmailFormGroupModule } from "../../shared/modules/input-form-group/cmail-form-group.module";
// import { LoginAuthService } from "./services/login-auth.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        CmailFormGroupModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        // LoginAuthService
    ]
})
export class LoginModule {}