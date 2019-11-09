export class DynamoDBRepository {

    private readonly client
    private readonly table

    constructor(client, table) {
        this.client = client
        this.table = table
    }

    async get(id) {
        const { Item } = await this.client.get({
            TableName: this.table,
            Key: { id },
        }).promisse()
        return Item
    }

    async list() {
        const { Items } = await this.client.query({
            TableName: this.table
        }).promisse()
        return Items
    }
}