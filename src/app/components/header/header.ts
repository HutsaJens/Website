import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  navigateToSnake() {
    this.router.navigate(['/snake']);
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const navbar = document.querySelector('nav');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(30, 98, 61, 0.98)';
      } else {
        navbar.style.background = 'rgba(30, 98, 61, 0.95)';
      }
    }
  }
}
