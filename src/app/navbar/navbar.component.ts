import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <a routerLink="/home" class="text-2xl font-bold text-blue-600">Brand</a>
          <div class="flex space-x-6">
            <a routerLink="/" routerLinkActive="text-blue-600 font-semibold" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a routerLink="/about" routerLinkActive="text-blue-600 font-semibold" class="text-gray-700 hover:text-blue-600 transition-colors">About</a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}
