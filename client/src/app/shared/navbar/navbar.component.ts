import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit{
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  isCollapsed = true;
  userName: string = "Veliok";

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {

  }

  isNotHomePage (): boolean{
    return this.router.url === ('/contacts' || '/login' || '/register')
  }

  search(value: string){
    this.emmitSearch.emit(value);
  }


}
