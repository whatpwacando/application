import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { EventBusService } from 'src/app/core/event-bus.service';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-message',
    template: '',
    styles: [''],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComponent {
    constructor(private message: NzMessageService, private eventBus: EventBusService) {
        this.eventBus.message$
            .pipe(
                tap((msg: string) => {
                    this.message.info(msg, { nzDuration: 5000 });
                })
            )
            .subscribe();
    }
}
