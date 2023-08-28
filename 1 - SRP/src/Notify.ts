import Client from "./Client";

export default class Notify {

    constructor(private client: Client) {
    }

    sendEmail(): boolean {
        console.log('Send email success')
        this.client.email
        console.log(this.client.email)

        return true
    }
}