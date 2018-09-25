import { Component, Input } from "@angular/core";


@Component({
    selector: 'email-list-item',
    templateUrl: './email-list-item.component.html',
    styleUrls: ['./email-list-item.component.css']
})
export class EmailListItemComponent {
    @Input() id
}