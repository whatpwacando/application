import { ChangeDetectionStrategy, Component } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { EventBusService } from 'src/app/core/event-bus.service';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-cnpc',
  templateUrl: './cnpc.component.html',
  styleUrls: ['./cnpc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CnpcComponent {
  private pageNo = 1;
  constructor(public eventBus: EventBusService, private http: HttpService) {
    this.eventBus.updateSystemTitle('中石油招投标历史数据抓取');
    this.getData()
  }

  getData() {
    this.http
      .getCnpcItemsByPageNo(this.pageNo)
      .pipe(
        take(1),
        tap((res) => {
          console.log(res);
        })
      )
      .subscribe();
  }
}
