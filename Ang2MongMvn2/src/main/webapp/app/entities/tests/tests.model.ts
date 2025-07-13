import { BaseEntity } from './../../shared';

const enum Enm {
    'yaniv',
    'tamir',
    'yaron'
}

export class Tests implements BaseEntity {
    constructor(
        public id?: string,
        public num?: number,
        public str?: string,
        public enm?: Enm,
        public time?: any,
    ) {
    }
}
