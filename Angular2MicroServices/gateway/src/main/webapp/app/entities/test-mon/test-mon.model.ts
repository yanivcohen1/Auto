
const enum Enums {
    'one',
    'two',
    'three'

};
export class Test_mon {
    constructor(
        public id?: number,
        public name?: string,
        public value?: number,
        public date?: any,
        public enums?: Enums,
    ) {
    }
}
