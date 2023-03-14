import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRecentItem } from 'src/app/model/shared.model';

@Component({
    selector: 'app-recent-list',
    templateUrl: './recent-list.component.html',
    styleUrls: ['./recent-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentListComponent implements OnInit {
    @Input() public data: IRecentItem[] = [];
    @Output() public checkItem: EventEmitter<string> = new EventEmitter();

    extended = false;

    constructor() {}

    ngOnInit(): void {}

    check(id: string) {
        this.checkItem.emit(id);
    }
}
