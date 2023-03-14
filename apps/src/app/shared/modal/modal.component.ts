import { ChangeDetectionStrategy, Component, EventEmitter, Host, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
    @Input() public x: number = 0;
    @Input() public y: number = 0;
    @Input() public z: number = 0;
    @Input() public title: string = '';
    @Input() public width: number = 600;
    isPined = false;

    @Output() closeModal = new EventEmitter();

    private draging = false;
    private startX = 0;
    private startY = 0;
    // private;

    @HostListener('window:mouseup', ['$event'])
    mouseUp() {
        this.draging = false;
    }

    @HostListener('window:mousemove', ['$event'])
    onMouseMove(e: MouseEvent) {
        if (!this.draging) {
            return;
        }
        const { pageX, pageY, clientX, clientY } = e;
        console.log({ pageX, pageY }, e);

        const targetX = pageX ?? clientX;
        const targetY = pageY ?? clientY;

        this.x = targetX - this.startX;
        this.y = targetY - this.startY;
    }

    constructor() {}

    ngOnInit(): void {}

    close() {
        this.closeModal.emit();
    }

    pinModal() {
        this.isPined = !this.isPined;
    }

    onMouseDown(e: MouseEvent) {
        if (this.isPined) {
            return;
        }
        this.draging = true;
        const { pageX, pageY, clientX, clientY } = e;
        this.startX = (pageX ?? clientX) - this.x;
        this.startY = (pageY ?? clientY) - this.y;
    }
}
