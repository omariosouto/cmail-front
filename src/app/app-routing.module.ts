import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login-page.component';

const routes: Routes = [
    { 
        path: '',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        loadChildren: './modules/cadastro/cadastro.module#CadastroModule'
    },
    {
        path: 'email',
        loadChildren: './modules/email/email.module#EmailModule',
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}