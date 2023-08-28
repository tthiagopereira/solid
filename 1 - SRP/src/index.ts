import Client from "./Client";
import Notify from "./Notify";

console.log("SRP")

 const client = new Client();
const notify = new Notify(client)

notify.sendEmail()