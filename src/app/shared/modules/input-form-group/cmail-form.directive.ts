import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cmailInputForm]'
})
export class CmailInputFormDirective {
    constructor(private el: ElementRef) {}
    
    ngOnInit() {
      const element = this.el.nativeElement
      const name = element.getAttribute('name')
      
      element.setAttribute('id', name)
      element.setAttribute('placeholder', ' ')
      element.classList.add('mdl-textfield__input')
      
    }


}