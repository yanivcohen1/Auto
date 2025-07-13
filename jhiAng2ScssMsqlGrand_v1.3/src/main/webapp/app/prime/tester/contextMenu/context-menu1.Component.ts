import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu/lib/contextMenu.component';
import { ContextMenuService, IContextMenuClickEvent } from 'ngx-contextmenu/lib/contextMenu.service';

@Component({
  selector: 'jhi-context-menu',
  templateUrl: './context-menu1.component.html',
styleUrls: [
    'context-menu1.component.scss'
],
encapsulation: ViewEncapsulation.None
})
export class ContextMenu1Component {
  public items = [
    { name: 'John', otherProperty: 'Foo', type: 'type1' },
    { name: 'Joe', otherProperty: 'Bar', type: 'type2' }
];
// @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
@ViewChild('mySubContextMenu') mySubContextMenu

public contextMenuActions = [
      {
        html: (item) => `Say hi! ${item.name}`,
        click: (item) => alert('Hi, ' + item.name),
        enabled: (item) => true,
        visible: (item) => item.type === 'type1',
        subMenu: ''
      },
      {
        divider: true,
        visible: true,
      },
      {
        html: (item) => `Something else1`,
        click: (item) => alert('Or not...'),
        enabled: (item) => true,
        visible: (item) => item.type === 'type2',
        subMenu: 'sub1'
      },
    ];

    public subContextMenuActions = [
      {
        html: (item) => `Say hi! ${item.name}`,
        click: (item) => alert('Hi, ' + item.name),
        enabled: (item) => true,
        visible: (item) => item.type === 'type2',
      },
      {
        divider: true,
        visible: true,
      },
      {
        html: (item) => `Something else2`,
        click: (item) => alert('Or not...'),
        enabled: (item) => true,
        visible: (item) => item.type === 'type1',
      },
    ];

  showMessage(msg) {
    alert(msg);
  }

  update(subMenu) {
    if (subMenu === 'sub1') {
      return this.mySubContextMenu;
    }
    return '';
  }

  click(event: MouseEvent) {
    
    const x = event.screenX;
    const y = event.screenY;
    const xc = event.clientX;
    const yc = event.clientY;
    const evt = document.createEvent('MouseEvents');
    event.stopPropagation();
    const RIGHT_CLICK_BUTTON_CODE = 2; // the same for FF and IE

    evt.initMouseEvent('contextmenu', true, true,
         document.defaultView, 1, x, y, xc, yc, false,
         false, false, false, RIGHT_CLICK_BUTTON_CODE, null);
    event.target.dispatchEvent(evt);
  }
  
}
