import { BaseEntity } from './../../shared';

export class Tests implements BaseEntity {
    constructor(
        public id?: number,
        public testName?: string,
        public suite?: BaseEntity,
    ) {
    }
}
