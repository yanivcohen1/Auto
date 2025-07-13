import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-component-two',
  template: `
    <p>Component Two <b><code>ID: {{ id }}</code></b></p>
    <nav>
      <a [routerLink]="['./child-one']">Child One</a>
      <a [routerLink]="['./child-two', 321]">Child Two</a>
    </nav>

    <div style="color: red; margin-top: 1rem;">
      Component Two's router outlet:
    </div>
    <div style="border: 2px solid red; padding: 1rem;">
      <router-outlet></router-outlet>
    </div>
  `
})
export default class ComponentTwoComponent implements OnDestroy, OnInit {
  public id;
  private sub;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
