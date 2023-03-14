import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { EventBusService } from '../core/event-bus.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  public isCollapsed: boolean = false;
  public activeTab = 'cnpc';
  private sub = new Subscription();
  private readonly childUrls: string[] = ['sinopec', 'cnpc'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public eventBus: EventBusService
  ) {
    const routerSub = this.router.events
      .pipe(
        filter((e: any) => e instanceof NavigationEnd),
        tap((e: RouterEvent) => {
          const url = e.url.split('/').pop() as string;
          this.activeTab = url;

          if (!this.childUrls.includes(url)) {
            this.navigate('cnpc');
          }
        })
      )
      .subscribe();
    this.sub.add(routerSub);
  }

  ngOnInit(): void {
    console.log('33333333333');
  }

  navigate(url: string) {
    this.activeTab = url;
    this.router.navigate([`/dashboard/${url}`], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
