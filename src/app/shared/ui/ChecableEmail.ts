import { Email } from "../models/Email";
import { Checkable } from "../interfaces/Checable";


export class CheckableEmail implements Checkable {
    private email: Email
    private checked: boolean

    constructor(email) {
        this.email = email
    }

    get id () {
        return this.email.id
    }

    get assunto () {
        return this.email.assunto
    }

    isChecked() {
        return this.checked
    }

    setChecked(checked: boolean) {
        this.checked = checked
    }
    
    toggleChecked() {
        this.setChecked(!this.checked)
    }
}