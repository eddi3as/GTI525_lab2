import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event  } from '@angular/router';
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    currentUrl: string = ""
    event: any
    constructor(private router: Router) {    
        this.event = this.router.events.subscribe((event: Event) => {
            if(event instanceof NavigationStart) 
                this.currentUrl = event.url
        })
    }

    ngOnInit(): void {
    }

    getClassForButtonColor(pageUrl: string): string {
        let buttonClass = "btn-light"
        console.log(pageUrl, " == ", this.currentUrl)
        if(pageUrl === this.currentUrl)
            buttonClass = "btn-primary"
        return buttonClass + " btn btn-block menu-button"
    }
}
