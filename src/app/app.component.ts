import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  showScrollIcon!: boolean

  constructor(private elementRef: ElementRef,) {
  }
  scrollToTop() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }



  ngOnInit() {
    this.onScroll()
  }


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (window.scrollY >= 300) {
      this.showScrollIcon = true
    } else {
      this.showScrollIcon = false
    }
  }


}
