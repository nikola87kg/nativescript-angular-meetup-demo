export class JobModel {
    constructor(
        public id: number,
        public name: string,
        public city: string,
        public link: string,
        public created_at: string,
        public updated_at: string
    ) { }
}
