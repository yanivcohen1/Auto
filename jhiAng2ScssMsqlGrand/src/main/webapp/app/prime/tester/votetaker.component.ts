import { Component, OnInit, animate, style, state, transition, trigger, AfterContentInit } from '@angular/core';
import { CsvService, ModalService, MessageSevirtyEnum } from '../../shared';
import { Guid } from './utils/Guid';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { Message, MenuItem } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/primeng';
import { UIChart } from 'primeng/primeng';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { LaptopService } from './provider/services/laptop.service';
// import { ObserverCrudService, Hero } from './observer/observer-crud.service';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { map, tileLayer, marker } from 'leaflet';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';
import { forEach } from '@angular/router/src/utils/collection';
import {TreeNode} from 'primeng/primeng';
import { forkJoin } from 'rxjs/observable/forkJoin';

declare var L: any;

@Component({
    selector: 'jhi-vote-taker',
    templateUrl: 'votertaker.component.html',
    providers: [ConfirmationService],
    styleUrls: [
        'votetaker.component.scss'
    ],
    animations: [
        trigger('fadeInOut', [
            state('open', style({ opacity: 1 })),
            state('closed', style({ opacity: 0 })),
            transition('open <=> closed', animate('3000ms')),
        ]),
        trigger('visibilityChanged',
            [
                state('visible', style({ left: '0' })),
                state('hidden', style({ left: '-400px' })),
                state('void', style({ left: '-400px' })),
                transition('visible => hidden', animate(300)),
                transition('hidden => visible', animate(300)),
                transition('void => visible', animate(300))
            ])
    ],
})
export class VoteTakerComponent implements OnInit, AfterContentInit {
    state = 'open';
    state1 = 'visible';
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
    msgs2: Message[] = [];
    items: MenuItem[];
    items2: TreeNode[];
    items3: MenuItem[];
    activeItem: MenuItem;
    data: any;
    data2: any;
    isCollapsed = false;
    selectedTab;
    states = [];
    model: any;
    closeResult: string;
    date3: Date;
    nameValidate: string;
    model1 = 1;
    selectedFile: TreeNode;

    _success = new Subject<string>();
    staticAlertClosed = false;
    successMessage: string;
    breadcrumb_items: MenuItem[];

    constructor(
        private csvService: CsvService,
        public modalService: ModalService,
        private ngModalService: NgbModal,
        private confirmationService: ConfirmationService,
        private slimLoadingBarService: SlimLoadingBarService,
        private laptopService: LaptopService,
        private http: HttpClient,
    ) { }

    ngAfterContentInit() {
        this.loadScript('./js/leaflet/dist/leaflet.js').onload = () => {
            const map1 = L.map('leaflet').setView([51.505, -0.09], 13);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map1);

            L.marker([51.5, -0.09]).addTo(map1)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        }
    }

    ngOnInit() {
        console.log('module.id:' + module.id);
        console.log('Guid:' + Guid.MakeNew().ToString());
        setTimeout(() => this.staticAlertClosed = true, 20000);
        this._success.subscribe((message) => this.successMessage = message);
        debounceTime.call(this._success, 5000).subscribe(() => this.successMessage = null);

        const today = new Date();
        this.date3 = today;

        this.states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
            'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
            'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
            'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
            'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
            'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
            'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
            'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                command: (event?: any) => this.select1('File'),
                /* items: [{
                    label: 'New',
                    icon: 'fa-plus',
                    command: (event?: any) => this.select1('New')
                }] */
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                command: (event?: any) => this.select1('Edit'),
                /* items: [{
                    label: 'copy',
                    icon: 'fa-plus',
                    command: (event?: any) => this.select1('copy')
                }] */
            }
        ]

        this.items2 = [
            {
                label: 'Documents',
                data: 'Documents Folder',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder',
                children: [
                    { label: 'barcelona1.jpg', data: 'Barcelona Photo' },
                    { label: 'logo1.jpg', data: 'PrimeFaces Logo' },
                    { label: 'primeui1.png', data: 'PrimeUI Logo' },
                    {label: 'Documents2',
                    data: 'Documents Folder',
                    expandedIcon: 'fa-folder-open',
                    collapsedIcon: 'fa-folder',
                    children: [
                        { label: 'barcelona1.jpg', data: 'Barcelona Photo' },
                        { label: 'logo1.jpg', data: 'PrimeFaces Logo' }]}]
            },
            {
                label: 'Pictures',
                data: 'Pictures Folder',
                expandedIcon: 'fa-folder-open',
                collapsedIcon: 'fa-folder',
                children: [
                    { label: 'barcelona.jpg', data: 'Barcelona Photo' },
                    { label: 'logo.jpg', data: 'PrimeFaces Logo' },
                    { label: 'primeui.png', data: 'PrimeUI Logo' },
                    {label: 'Pictures2',
                    data: 'Pictures Folder',
                    expandedIcon: 'fa-folder-open',
                    collapsedIcon: 'fa-folder',
                    children: [
                        { label: 'barcelona.jpg', data: 'Barcelona Photo' }]}]
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

        this.data2 = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }

        this.breadcrumb_items = [
            {label: 'Categories', command: (event?: any) => this.select1('Categories')},
            {label: 'Sports'},
            {label: 'Football'},
            {label: 'Countries'},
            {label: 'Spain'},
            {label: 'F.C. Barcelona'},
            {label: 'Squad'},
            {label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
        ];
        
        this.items3 = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New', 
                        icon: 'fa-plus',
                        items: [
                            {label: 'Project', command: (event?: any) => this.select1('Project')},
                            {label: 'Other', command: (event?: any) => this.select1('Other')},
                        ]
                    },
                    {label: 'Open', command: (event?: any) => this.select1('open')},
                    {label: 'Quit', command: (event?: any) => this.select1('quit')}
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward', command: (event?: any) => this.select1('Undo')},
                    {label: 'Redo', icon: 'fa-mail-reply', command: (event?: any) => this.select1('Redo')}
                ]
            }];

    }

    forechBrack() {
        const array: MyMessage[] = [{name: 'yan', val: 1}, {name: 'tam', val: 2}, {name: 'yar', val: 3}];
        const ERROR = new Error('Ooops!');
        
        // with Promise
        new Promise((resolve, reject) => {
            let find: MyMessage;
            for (const element of array) {
                if (element.name === 'yan') {
                    find = element;
                    break;
                }
            }
            find ? resolve(find) : reject(ERROR);
        })
        .then(
            (data: MyMessage) => {
                console.log('mid');
                return new Promise((resolve, reject) => {
                    data ? resolve(data) : reject(ERROR);
                })
            }
        )
        .then(
            (data: MyMessage) => { print(data); },
            (err) => { console.log(err); }
        );

        // with Subject 
        const subject1 = new Subject<any>()
        subject1.map((arry1: MyMessage[]) => {
            let find: MyMessage;
            for (const element of arry1) {
                if (element.name === 'tam') {
                    find = element;
                    break;
                }
            }
            return find ? find : console.log(ERROR);
        }).map(
            (data) => {
                console.log('mid2');
                return data ? data : console.log(ERROR);
            }
        ).subscribe(
            (data: MyMessage) => { print(data); },
            (err) => { console.log(err); }
        );
        const interval = setInterval(() => { 
            subject1.next(array);
            clearInterval(interval);
         }, 2000);

        // with async await
        add().then((res) => console.log(res)); // log 7
        async function add() {
            const a = await promiseDelay(1000).then(() => 1);
            const b = a + await promiseDelay(1000).then(() => 2);
            const c = a + b + await promiseDelay(1000).then(() => 3);
            return c;

            function promiseDelay(ms) {
                return new Promise((resolve) => {
                    setTimeout(() => resolve('done'), ms);
                });
            }
        }

        // with Observable
        function getObservable() {
            return Observable.of(array);
        }
        getObservable().switchMap((array1) => {
            let find: MyMessage;
            for (const element of array1) {
                if (element.name === 'yar') {
                    find = element;
                    break;
                }
            }
            // find ? find : console.log(ERROR);
            return Observable.of(find)
        }).map((find) => {
            console.log('mid3');
            return find
        }).subscribe((data: MyMessage) => { print(data); })

        function print(element: MyMessage) {
            console.log('find:' + element.name)
        }

        /* forkJoin( // Promise.all([p1, p2, p3]).then(values => { })
        this.observerCrudService.addHero( new Hero('17', 'yaniv')),
        this.observerCrudService.updateHero( new Hero('15', 'yaniv1'))
        ).subscribe(([res1, res2]) => {
        this.heroes$ = this.observerCrudService.removeHero(16)
        }) */
    }

    public loadScript(url: string) {
        console.log('preparing to load...')
        const scriptNode = document.createElement('script');
        scriptNode.src = url;
        scriptNode.type = 'text/javascript';
        // node.async = false;
        // node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(scriptNode);
        return scriptNode;
    }

    nodeSelect(event) {
        const node1: TreeNode = event.node;
        if (node1.children !== undefined) {
            event.node.expanded = true;
            this.nodeExpand(event);
        } else {
            this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.label});
        }
    }

    nodeExpand(event) {
        this.collapseOtheres(event.node);
    }

    collapseOtheres(nodeIn: TreeNode) {
        if (nodeIn.parent === undefined) {
           // if (nodeIn.parent.parent === undefined) {
                this.items2.forEach( (node) => {
                    if (nodeIn !== node) {
                        this.expandRecursive(node, false);
                    }
                } );
            // }
        }
    }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach( (childNode) => {
                this.expandRecursive(childNode, isExpand);
            } );
        }
    }

    show() {
        this.msgs2.push({severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks'});
    }

    save() {
        this.sendGlowMsg('save', MessageSevirtyEnum.info);
    }
    public changeSuccessMessage() {
        this._success.next(`${new Date()} - Message successfully changed.`);
    }

    beginAnimFade() {
        // toggle state to kickstart animation
        this.state = this.state === 'open' ? 'closed' : 'open';
    }

    beginAnimVisability() {
        // toggle state to kickstart animation
        this.state1 = this.state1 === 'visible' ? 'hidden' : 'visible';
    }

    onVoted(agreed: boolean) {
        agreed ? this.agreed++ : this.disagreed++;
    }

    select1(event) {
        console.log(event);
        this.selectedTab = event;
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event});
    }   

    log(msg) {
        console.log(msg);
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

    openModal() {
        const modalRef = this.ngModalService.open(ModalDialogComponent as Component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.inputData = 'test';
        modalRef.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
    }

    onclick() {
        this.forechBrack();
        this.laptopService.getEmit().emit('Tablet');
        this.index++;
        this.voters[2] = this.index.toString();
        this.color = 'green';
        const json = [{ name: 'yan', last: 'con' }];
        const res = this.csvService.json2csv(json);
        const res2 = this.csvService.csv2json(res);
        console.log('original json: ');
        console.log(json);
        console.log('json2csv: ' + res);
        console.log('csv2json: ');
        console.log(res2);
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
    }

    onclickDialog(res: boolean) {
        const _res: string = res ? 'Yes' : 'No';
        this.sendGlowMsg(_res, MessageSevirtyEnum.info);
        this.modalService.close(this.modalId);
    }

    sendGlowMsg(msg: string, _severity: MessageSevirtyEnum) {
        this.glowMsgs = [];
        this.glowMsgs.push({ severity: _severity.toString(), summary: msg, detail: '' });
    }

    confirm1() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.glowMsgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
            },
            reject: () => {
                this.glowMsgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }

    confirm2() {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
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

    fileChange(event) {
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            const file: File = fileList[0];
            const formData: FormData = new FormData();
            formData.append('file', file, file.name);
            /** No need to include Content-Type in Angular 4 */
            // const headers = new Headers();
            // headers.append('Content-Type', 'multipart/form-data');
            // headers.append('Accept', 'application/json');
            this.http.post('/api/attachment/', formData, {
                params: new HttpParams().set('myData', 'my data'),
                // headers: new HttpHeaders().set('Content-Type', 'multipart/form-data'),
                // responseType: 'text'
            })
                .subscribe(
                (data) => console.log('Upload success'),
                (error) => console.log(error)
                )
        }
    }

    onHChange(event) {

    }

    onVChange(event) {

    }

    selectData(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': this.data2.datasets[event.element._datasetIndex].data[event.element._index]});
    }

    searchAuto = (text$: Observable<string>) =>
        text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map((term) => term.length < 1 ? []
                : this.states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));

}

export interface MyMessage {
    name: string;
    val?: any;
}
