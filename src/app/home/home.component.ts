import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HomeDataService, HomePageData } from '../dataHub/home-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen flex flex-col">
      @if (homeData(); as data) {
        <section class="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div class="max-w-3xl">
              <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ data.hero.title }}</h1>
              <p class="text-xl md:text-2xl mb-8 text-blue-100">{{ data.hero.subtitle }}</p>
              <div class="flex flex-wrap gap-4">
                <a routerLink="/about" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">{{ data.hero.ctaPrimary }}</a>
                <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">{{ data.hero.ctaSecondary }}</button>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 bg-black opacity-10 pattern-dots"></div>
        </section>

        <section class="py-16 bg-gray-50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">{{ data.featuresTitle }}</h2>
            <div class="grid md:grid-cols-3 gap-8">
              @for (feature of data.features; track feature.title) {
                <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div class="w-12 h-12 {{ feature.bgColor }} rounded-lg flex items-center justify-center mb-4">
                    <svg class="w-6 h-6 {{ feature.iconColor }}" fill="none" stroke="currentColor" viewBox="0 0 24 24" [innerHTML]="feature.icon"></svg>
                  </div>
                  <h3 class="text-xl font-bold mb-2">{{ feature.title }}</h3>
                  <p class="text-gray-600">{{ feature.description }}</p>
                </div>
              }
            </div>
          </div>
        </section>
      } @else {
        <div class="flex items-center justify-center min-h-screen">
          <p class="text-gray-500 text-lg">Loading...</p>
        </div>
      }
    </div>
  `
})
export class HomeComponent implements OnInit {
  homeData = signal<HomePageData | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  constructor(private dataService: HomeDataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.dataService.fetchHomeData().subscribe({
      next: (data) => {
        this.homeData.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Failed to load data');
        this.loading.set(false);
      }
    });
  }
}
