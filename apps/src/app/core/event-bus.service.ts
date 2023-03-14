import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EventBusService {
    private simulateDataFlowSubject: ReplaySubject<any> = new ReplaySubject(1);
    private realtimeDataFlowSubject: ReplaySubject<any> = new ReplaySubject(1);
    private systemTitleSubject: ReplaySubject<string> = new ReplaySubject(1);
    private globalMessage: Subject<string> = new Subject();
    private loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
    constructor() {
    }

    get loading$() {
        return this.loading.asObservable();
    }

    get realtimeDataFlow$() {
        return this.realtimeDataFlowSubject.asObservable();
    }

    get simulateDataFlow$() {
        return this.simulateDataFlowSubject.asObservable();
    }

    get systemTitle$() {
        return this.systemTitleSubject.asObservable();
    }

    get message$(): Observable<string> {
        return this.globalMessage.asObservable();
    }

    updateSimulateDateFlow(data: any) {
        this.simulateDataFlowSubject.next(data);
    }

    updateRealtimeDateFlow(data: any) {
        this.realtimeDataFlowSubject.next(data);
    }

    updateSystemTitle(title: string) {
        this.systemTitleSubject.next(title);
    }

    setGlobalMessage(msg: string) {
        this.globalMessage.next(msg);
    }

    updateLoadingStatus(status: boolean) {
        this.loading.next(status);
    }
}
