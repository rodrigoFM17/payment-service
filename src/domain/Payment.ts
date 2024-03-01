
export default class Payment {

    constructor(
        readonly id: string,
        readonly amount: number,
        readonly payConcept: Object
    ){}
}