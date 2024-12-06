import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<Window>('Universal Window object to use instead of accessing directly the window (Angular way)');
