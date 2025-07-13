import { BaseEntity } from './../../shared';

export const enum Enums {
    'one',
    'two',
    'three'
}

export class Testss implements BaseEntity {
    constructor(
        public id?: string,
        public name?: string,
        public val?: number,
        public enums?: Enums,
        public dates?: any,
    ) {
    }
}
