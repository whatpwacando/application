import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';

import { SharedRoutingModule } from './shared-routing.module';
// import { ModalComponent } from './modal/modal.component';
// import { BarChartComponent } from './bar-chart/bar-chart.component';
// import { LineChartComponent } from './line-chart/line-chart.component';
// import { PieChartComponent } from './pie-chart/pie-chart.component';
// import { InputTableComponent } from './input-table/input-table.component';
// import { CurveComponent } from './curve/curve.component';
// import { RecentListComponent } from './recent-list/recent-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NzIconModule,
    NzTableModule,
    NzInputModule,
    NzListModule,
    NzButtonModule,
    NzMessageModule,
  ],
  exports: [],
})
export class SharedModule {}
