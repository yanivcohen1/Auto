import { Component, OnInit, EventEmitter } from '@angular/core';
import { DesktopService } from './services/desktop.service';
import { LaptopService } from './services/laptop.service';

@Component({
 selector: 'jhi-computer-provider',
 providers: [
    // LaptopService,
    { provide: DesktopService, useExisting: LaptopService }
 ],
 template: `
	   <h3> I work on {{computerName}} </h3>
        `
})
export class ComputerProviderComponent implements OnInit {
  computerName: string;
  emit =  new EventEmitter<string>();
  constructor(private computerService: DesktopService) { }
  ngOnInit() {
    this.update();
    this.emit = this.computerService.getEmit();
    this.emit.subscribe(
      // Successful responses call the first callback.
      (data) => {this.computerName =  data },
      // Errors will call this callback instead:
      (err) => {
        console.log('Something went wrong!');
      }
    );
  }
  update() {
    this.computerName = this.computerService.getComputerName();
  }
}
