import { Component, HostBinding } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import emailList from "../../../../shared/mocks/EmailList";
import { Email } from "../../../../shared/models/Email";

@Component({
    selector: 'interno',
    templateUrl: './interno.page.html',
    styleUrls: [
        './interno.page.css'
    ]
})
export class InternoPage {
    emailId: string
    email: Email

    // @HostBinding('class') classes = 'mdl-layout__content';


    constructor(private activeRoute: ActivatedRoute) {
        this.activeRoute.params.subscribe(params => {
            this.emailId = params.id
        })
    }
    ngOnInit() {
        const currentEmail = emailList.find((email) => {
            console.log(this.emailId, email.id)
            return email.id === this.emailId
        })

        if(currentEmail instanceof Object) {
            this.email = currentEmail as Email
        }
    }
}