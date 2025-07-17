import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  skills = [
    'TypeScript',
    'HTML/CSS', 
    'Angular',
    'Node.js',
    'C# (.NET)',
    'Picobello oplossingen'
  ];
}
