import { Suite } from '../suite';
export class Tests {
    constructor(
        public id?: number,
        public test_name?: string,
        public class_name?: string,
        public method_name?: string,
        public parameter_name?: string,
        public parameter_value?: string,
        public suite?: Suite,
    ) { }
}
