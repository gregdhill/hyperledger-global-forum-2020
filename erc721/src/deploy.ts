import { Mintable } from "./contracts/ERC721";
import { Client } from "./client";
import { CallTx } from "@hyperledger/burrow/proto/payload_pb";

export async function Deploy(account: string): Promise<Mintable.Contract<CallTx>> {
    const client = new Client('localhost:10997', account);
    const address = await Mintable.Deploy(client);
    return new Mintable.Contract(client, address);
}