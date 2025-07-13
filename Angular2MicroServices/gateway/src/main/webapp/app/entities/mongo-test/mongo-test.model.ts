
const enum Enums {
    'one',
    'two',
    'tree'

};
export class MongoTest {
    constructor(
        public id?: number,
        public name?: string,
        public val?: number,
        public date?: any,
        public enums?: Enums,
    ) {
    }
}
