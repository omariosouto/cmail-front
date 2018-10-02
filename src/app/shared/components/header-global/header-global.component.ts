import { Component } from "@angular/core";

@Component({
    selector: 'header-global',
    templateUrl: './header-global.component.html',
    styleUrls: [
        './header-global.component.css',
        './header-search.css'
    ]
})
export class HeaderGlobalComponent {
    private _isMenuOpen: boolean = false

    toggleMenu() {
        this._isMenuOpen = !this.isMenuOpen
    }

    get isMenuOpen() {
        return this._isMenuOpen
    }
}