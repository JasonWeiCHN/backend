import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { TenantInterceptor } from './shared/interceptors/tenant.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(), // ✅ 确保 HttpClient 可用（如果使用 standalone 模式）
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TenantInterceptor,
      multi: true,
    },
  ],
};
