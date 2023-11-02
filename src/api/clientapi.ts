import {ClientResponse, Client, ClientEntry } from "../types";
import axios from "axios";

export const getClients = async (): Promise < ClientResponse[] > => {
    const response = await axios.get("http://localhost:2600/clients");
    return response.data._embedded.clients;
}

export const deleteClient = async (link: string): Promise<ClientResponse> => {
    const response = await axios.delete(link);
    return response.data
}

// import { ClientResponse, Client} from '../types';
// Add a new client
export const addClient = async (client: Client): Promise<ClientResponse> => {
    const response = await axios.post("http://localhost:2600/api/clients/add-client", client, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return response.data;
}

export type ClientEntry = {
    client: Client;
    url: string;
}


// Add updateClient function
export const updateClient = async(clientEntry: ClientEntry): Promise<ClientResponse> => {
    const response = await axios.put(clientEntry.url, clientEntry.client,{
        headers:{
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}

