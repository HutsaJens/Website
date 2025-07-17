import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  icon: string;
  demoLink: string;
  demoText: string;
  codeLink: string;
  codeText: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Snake Game',
      description: 'A classic snake game built with vanilla JavaScript and HTML5 Canvas. Features smooth gameplay and score tracking.',
      icon: 'fas fa-gamepad',
      demoLink: '#',
      demoText: 'Play Game',
      codeLink: '#',
      codeText: 'View Code'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design and smooth animations.',
      icon: 'fas fa-globe',
      demoLink: '#',
      demoText: 'Live Demo',
      codeLink: '#',
      codeText: 'View Code'
    },
    {
      title: 'Web Applications',
      description: 'Various web applications built with modern frameworks and technologies, focusing on user experience and performance.',
      icon: 'fas fa-code',
      demoLink: '#',
      demoText: 'Explore',
      codeLink: '#',
      codeText: 'GitHub'
    }
  ];
}
