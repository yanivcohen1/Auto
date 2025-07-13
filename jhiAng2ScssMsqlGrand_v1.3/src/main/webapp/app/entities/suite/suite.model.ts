import { BaseEntity } from './../../shared';

export class Suite implements BaseEntity {
    constructor(
        public id?: number,
        public suiteName?: string,
        public jenkinsUrl?: string,
        public tests?: BaseEntity[],
    ) {
    }
}
