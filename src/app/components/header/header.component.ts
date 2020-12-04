import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Routes, RouterModule, Router, RouterState, ActivatedRoute } from '@angular/router'; // CLI imports router
import { LoginForm } from '../login-form/login-form.component';
import * as Hammer from 'hammerjs';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header implements OnInit{
  href: string;
  id: string;

  ngOnInit(){

  }

  @ViewChild(MatSidenav)
    public sidenav: MatSidenav;
    public edited = false;

    constructor(elementRef: ElementRef, private router: Router, public route: ActivatedRoute ) {
        const hammertime = new Hammer(elementRef.nativeElement, {});
        hammertime.on('panleft', (ev) => {
            this.sidenav.open();
        });
        hammertime.on('panright', (ev) => {
            this.sidenav.close();
        });

        this.route.paramMap.subscribe(params => {
          this.id= params.get('id');
        });
        console.log("id", this.id)
        const parsedUrl = new URL(window.location.href);
        var nomepagina = parsedUrl.pathname.replace("/", "")

        console.log(nomepagina)

        if(nomepagina == "login"){
          this.edited = true;
        }
    }
}
