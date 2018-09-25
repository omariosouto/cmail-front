import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor() {

    } // Chamar o AuthService [vem de app.module] e pegar o valor que estiver setado dentro dele
    // Pegar o router e mandar um router.navigate(['/login'])

    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true
    }
}


// {   
//     path: '',
//     canActivaed: [AuthGuard] 
// }