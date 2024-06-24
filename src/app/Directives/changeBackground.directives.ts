import { Directive, ElementRef, HostBinding, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[changeBg]',
    standalone:true
})

export class ChangeBackgroundDirective implements OnInit{
    @HostBinding('style.backgroundColor') backgroundColor= ''

    constructor(private elementRef: ElementRef,private renderer :Renderer2){}
//change background of an element
    // ngOnInit(): void {
    //     this.elementRef.nativeElement.style.backgroundColor= 'red'
    // }

   // not every code has dome at the beginning

   ngOnInit(): void {
    //    this.renderer.setStyle(this.elementRef,'background-color','blue')
    this.backgroundColor= 'red'
   }
   
} 