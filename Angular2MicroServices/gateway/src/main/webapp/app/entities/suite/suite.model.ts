import { Tests } from '../tests';
export class Suite {
    constructor(
        public id?: number,
        public suite_name?: string,
        public xml_file_location?: string,
        public jenkins_url?: string,
        public tests?: Tests,
    ) {
    }
}
