// source https://plnkr.co/edit/vRvnNUULmBpkbLUYk4uw?p=preview
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';
import { async } from '@angular/core/testing';

@Pipe({
    name: 'filter',
    pure: true
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        // console.log('filter' + new Date().getSeconds())
        return term
            ? items.filter((item) => item.toLowerCase().includes(term))
            : items;
    }
}

@Pipe({
    name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
    transform(items: any[], sortedBy: string, type: string): any {
        console.log('sortedBy', sortedBy);
        if (type === 'number') {
            return items.sort((left, right) => {
                return (left[sortedBy] - right[sortedBy])
            });
        } else {
            return items.sort((left, right) => {
                if (left[sortedBy] < right[sortedBy]) { return -1 }
                if (left[sortedBy] > right[sortedBy]) { return 1 }
                return 0;
            });
        }
    }
}

@Pipe({
    name: 'filterAsync',
    pure: true
})
export class FilterAsyncPipe implements PipeTransform {
    oldTerm = ''
    oldItems;
    transform(items: Observable<Array<any>>, term, key = 'n'): any {
        // console.log('filterAsync' + new Date().getSeconds())
        if (this.oldTerm !== term) {
            this.oldTerm = term;
            if (term !== '') {
                this.oldItems = items.filter((data) => {
                    return data[key].toLowerCase().includes(term)
                })
                return this.oldItems
            } else {
                this.oldItems = items
                return this.oldItems
            }
        } else {
            return this.oldItems ? this.oldItems : items;
        }
        
    }
}
