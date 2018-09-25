import { Component, ElementRef, Input } from "@angular/core";

@Component({
    selector: 'cmail-form-group',
    styleUrls: ['./cmail-form-component.component.css'],
    templateUrl: './cmail-form-group.component.html'
})
export class CmailFormGroupComponent {
    @Input() formField: any;
    
    inputElement: any = {};
    placeholder: string

    constructor( private el: ElementRef) {}

    ngOnInit() {
        this.inputElement = this.el.nativeElement.querySelector('input,textarea')
        this.placeholder = this.inputElement.placeholder
    }
}