import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

  constructor(private router: Router) {}

  playSnakeGame() {
    this.router.navigate(['/snake']);
  }
}
