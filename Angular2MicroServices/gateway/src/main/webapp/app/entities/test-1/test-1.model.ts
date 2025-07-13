
const enum Y {
    'one',
    'two',
    'tree'

};
export class Test1 {
    constructor(
        public id?: number,
        public test?: string,
        public value?: number,
        public date?: any,
        public enums?: Y,
    ) {
    }
}
