import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  title: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  socialLinks: SocialLink[] = [
    {
      title: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/HutsaJens'
    },
    {
      title: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      title: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      title: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ];
}
