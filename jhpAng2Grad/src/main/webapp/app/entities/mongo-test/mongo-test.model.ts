import { BaseEntity } from './../../shared';

export const enum Enums {
    'one',
    'two',
    'tree'
}

export class MongoTest implements BaseEntity {
    constructor(
        public id?: string,
        public name?: string,
        public val?: number,
        public date?: any,
        public enums?: Enums,
    ) {
    }
}
