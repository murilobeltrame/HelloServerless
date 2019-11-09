export class Party {

    private readonly repository

    constructor(repository) {
        this.repository = repository
    }

    get(id: number): Party {
        return this.repository.get(id)
    }
}