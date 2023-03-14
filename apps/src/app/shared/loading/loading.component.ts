import { Component, OnInit } from '@angular/core';
import { EventBusService } from 'src/app/core/event-bus.service';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
    constructor(public eventBus: EventBusService) {
    }
}
