export default class Bug{
    constructor(data){
        this.closed = data.closed
        this.description = data.description
        this.title = data.title
        this.creator = data.creator
        this.user = data.user
        this.closedDate = data.closedDate
        this._id = data._id
        this.created = data.createdAt
        this.updated = data.updatedAt
    }
}