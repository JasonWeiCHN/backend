import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TenantInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tenantId = localStorage.getItem('tenantId');

    if (tenantId) {
      // 添加租户 ID 到请求头
      const cloned = req.clone({
        setHeaders: {
          'X-Tenant-ID': tenantId,
        },
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
