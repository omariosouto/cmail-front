import { Component } from "@angular/core";


@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html'
})
export class LoginComponent {
    formLoginSubmitHandler(form) {
        console.log(form.controls)
    }
}