import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Feature {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="min-h-screen flex flex-col">
      <section class="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div class="max-w-3xl">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ hero().title }}</h1>
            <p class="text-xl md:text-2xl mb-8 text-blue-100">{{ hero().subtitle }}</p>
            <div class="flex flex-wrap gap-4">
              <a routerLink="/about" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">{{ hero().ctaPrimary }}</a>
              <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">{{ hero().ctaSecondary }}</button>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 bg-black opacity-10 pattern-dots"></div>
      </section>

      <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">{{ featuresTitle() }}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            @for (feature of features(); track feature.title) {
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
    </div>
  `
})
export class HomeComponent {
  hero = signal({
    title: 'Build Something Amazing',
    subtitle: 'Create beautiful, modern web experiences with Angular and Tailwind CSS.',
    ctaPrimary: 'Learn More',
    ctaSecondary: 'Get Started'
  });

  featuresTitle = signal('Features');

  features = signal<Feature[]>([
    {
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>',
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency with modern tooling.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>',
      title: 'Modern Design',
      description: 'Clean and responsive UI built with Tailwind CSS.',
      bgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600'
    },
    {
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>',
      title: 'Type Safe',
      description: 'Built with TypeScript for better developer experience.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ]);
}
