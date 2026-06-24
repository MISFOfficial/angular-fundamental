import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="min-h-screen bg-gray-50">
      <section class="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p class="text-xl text-indigo-100 max-w-2xl mx-auto">We are passionate about building exceptional digital experiences.</p>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p class="text-gray-600 mb-4 text-lg">We strive to create innovative solutions that make a difference. Our team is dedicated to delivering high-quality software that meets the needs of our users.</p>
              <p class="text-gray-600 text-lg">With years of experience in web development, we understand what it takes to build scalable and maintainable applications.</p>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul class="space-y-3">
                <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-700">Quality first approach</span></li>
                <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-700">Continuous learning and improvement</span></li>
                <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-700">Collaborative team culture</span></li>
                <li class="flex items-start"><span class="text-blue-600 mr-2">✓</span><span class="text-gray-700">User-centered design thinking</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
})
export class AboutComponent {}
