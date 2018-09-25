import { User } from "../models/User";
import { Logable } from "../interfaces/Logable";

export class LogableUser implements Logable {
    private user: User

    constructor() {
        this.user = new User()
    }

    get email() { return this.user.email }
    set email(email) { this.user.email = email }

    get password() { return this.user.password }
    set password(password: string) { this.user.password = password }

    isValid() {
        if(this.email && this.password) {
            return true
        } else {
            return false
        }
    }
}