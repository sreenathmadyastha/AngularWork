import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../hero-service';

import { Hero } from '../hero';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
 templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],

  // template: `<div *ngIf="hero">
  //     <h2>{{hero.name}} details!</h2>
  //     <div><label>id: </label>{{hero.id}}</div>
  //     <div>
  //       <label>name: </label>
  //       <input [(ngModel)]="hero.name" placeholder="name"/>
  //     </div>
  //   </div>`


})
export class HeroDetailComponent implements OnInit {

  constructor(private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location)
   {

    }
@Input()
 hero: Hero;

  ngOnInit(): void {
        this.route.paramMap
             .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
              .subscribe(hero => this.hero = hero);
    }
  goBack(): void {
    this.location.back();
  }

  save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
}

}
