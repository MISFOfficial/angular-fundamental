import { Injectable, signal } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';

export interface HeroData {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export interface HomePageData {
  hero: HeroData;
  featuresTitle: string;
  features: Feature[];
}

@Injectable({ providedIn: 'root' })
export class HomeDataService {
  private cache = signal<HomePageData | null>(null);

  fetchHomeData(): Observable<HomePageData> {
    if (this.cache()) {
      return of(this.cache()!);
    }
    return new Observable<HomePageData>(observer => {
      axios.get<HomePageData>('/assets/dataHub/home.json')
        .then(res => {
          this.cache.set(res.data);
          observer.next(res.data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });
  }

  getCachedData() {
    return this.cache.asReadonly();
  }
}
