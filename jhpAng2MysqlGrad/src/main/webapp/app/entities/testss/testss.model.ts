import { BaseEntity } from './../../shared';

export const enum Enums {
    'one',
    'two',
    'three'
}

export class Testss implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public val?: number,
        public enums?: Enums,
        public dates?: any,
    ) {
    }
}
