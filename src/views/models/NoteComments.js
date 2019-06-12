export default class Comment {
    constructor(data){
        this.content = data.content
        this.bug = data.bug
        this.creator = data.creator
        this.user = data.user
        this.flagged = data.flagged
    }
}
