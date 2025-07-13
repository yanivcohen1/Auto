import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jhi-child-two',
  template: `
    <p>Child Two <b><code>ID: {{ id }}</code></b></p>

    <nav>
      <a [routerLink]="['child-one']">Child One</a><br />
      <a [routerLink]="['child-two-nested']">Child Two Nested</a><br />
      <a [routerLink]="['../../child-one']">../../Child One</a><br />
      <a [routerLink]="['../../child-two', 432]">../../Child Two 432</a><br />
      <a [routerLink]="['../../../../component-two', 456]">../../../../Component Two, 456</a><br />
    </nav>

    <div style="color: orange; margin-top: 1rem;">Child Two's router outlet:</div>
    <div style="border: 2px solid orange; padding: 1rem;">
      <router-outlet></router-outlet>
    </div>
  `
})
export default class ChildTwoComponent implements OnDestroy, OnInit {
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
