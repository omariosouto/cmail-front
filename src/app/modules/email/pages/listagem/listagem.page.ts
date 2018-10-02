import { Component, HostBinding } from "@angular/core";
import emailList from "../../../../shared/mocks/EmailList";
import { CheckableEmail } from "../../../../shared/ui/ChecableEmail";
import { Checkable } from "../../../../shared/interfaces/Checable";

@Component({
    selector: 'listagem',
    templateUrl: './listagem.page.html',
    styleUrls: [
        './assets/css/new-email.css'
    ]
})
export class ListagemPage {
    isEmailsChecked: boolean = false
    isNewEmailFormOpen: boolean = false
    emails: Array<CheckableEmail>

    ngOnInit() {
        console.log('ngOnInit')
        this.emails = emailList.map((email) => {
            return new CheckableEmail(email)
        })
    }

    toggleCheckedEmails() {
        this.isEmailsChecked = !this.isEmailsChecked
        this.emails.map((email: CheckableEmail) => {
            email.setChecked(this.isEmailsChecked)
        })
    }

    toggleNewEmailForm() {
        this.isNewEmailFormOpen = !this.isNewEmailFormOpen
    }
}
