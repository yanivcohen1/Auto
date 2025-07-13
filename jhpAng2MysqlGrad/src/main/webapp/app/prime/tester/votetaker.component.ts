import { Component, OnInit } from '@angular/core';
import { CsvService, ModalService, MessageSevirtyEnum } from '../../shared';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { Message, MenuItem } from 'primeng/components/common/api';
import { ConfirmationService} from 'primeng/primeng';
import {UIChart} from 'primeng/primeng';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'jhi-vote-taker',
  templateUrl: './votertaker.component.html',
  providers: [ConfirmationService],
  styleUrls: [
    'votetaker.component.scss'
    ]
})
export class VoteTakerComponent implements OnInit {

  modalId = 'hoplaModal';
  modalId2 = 'hoplaModal2';
  glowMsgs: Message[];
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];
  search = '';
  index = 1;
  voter = '';
  color;
  msgs: Message[] = [];
  items: MenuItem[];
  activeItem: MenuItem;
  data: any;
  isCollapsed = false;
  selectedTab;

  constructor(
    private csvService: CsvService,
    public modalService: ModalService,
    private ngModalService: NgbModal,
    private confirmationService: ConfirmationService,
    private slimLoadingBarService: SlimLoadingBarService
  ) {  }

    ngOnInit() {
      this.items = [
          {
            label: 'File',
            icon: 'fa-file-o',
            command: (event?: any) => this.select1('File')
            /* items: [{
                label: 'New',
                icon: 'fa-plus',
                command: "#{select1('edit')}"
            }] */
          },
          {
            label: 'Edit',
            icon: 'fa-edit',
            command: (event?: any) => this.select1('Edit')
          }
      ]
      this.activeItem = this.items[1];

      this.data = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };
    }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  select1(event) {
    // console.log(event);
    this.selectedTab = event;
  }

  update(chart: UIChart) {
    this.data.datasets[0].data[0] = 200;
    setTimeout(() => {
        // chart.refresh(); //doesn;t work
        // chart.ngOnDestroy(); //Works Ok
        // chart.initChart();
        chart.reinit(); // Works Ok
    }, 100);
  }

  hideClick() {
      this.isCollapsed = !this.isCollapsed;
  }

  onclick() {
    // this.ngModalService.open(ModalDialogComponent);
    this.index++;
    this.voters[2] = this.index.toString();
    this.color = 'green';
    const json = [{name: 'yan', last: 'con'}];
    const res = this.csvService.json2csv(json);
    const res2 = this.csvService.csv2json(res);
    console.log('original json: ');
    console.log(json);
    console.log('json2csv: ' + res);
    console.log('csv2json: ');
    console.log(res2);
  }

  onclickDialog(res: boolean) {
    const _res: string = res ? 'Yes' : 'No';
    this.sendGlowMsg(_res, MessageSevirtyEnum.info);
    this.modalService.close(this.modalId);
  }

  sendGlowMsg(msg: string, _severity: MessageSevirtyEnum) {
    this.glowMsgs = [];
    this.glowMsgs.push({severity: _severity.toString(), summary: msg, detail: '' });
  }

  confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.glowMsgs = [{severity: 'info', summary: 'Confirmed', detail: 'You have accepted'}];
            },
            reject: () => {
                this.glowMsgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [{severity: 'info', summary: 'Confirmed', detail: 'Record deleted'}];
            },
            reject: () => {
                this.msgs = [{severity: 'info', summary: 'Rejected', detail: 'You have rejected'}];
            }
        });
    }

    startLoading() {
        this.slimLoadingBarService.start(() => {
            console.log('Loading complete');
        });
    }

    stopLoading() {
        this.slimLoadingBarService.stop();
    }

    completeLoading() {
        this.slimLoadingBarService.complete();
    }

    onPopup(input) {
        console.log(input);
    }
}
