import {ProviderResponse, Provider, ProviderEntry,Policy} from "../types";
import axios from "axios";

export const getProviders = async (): Promise < ProviderResponse[] > => {
    const response = await axios.get("http://localhost:2600/policyProviders");
    return response.data._embedded.policyProviders;
}





export const deleteProvider = async (link: string): Promise<ProviderResponse> => {
    const response = await axios.delete(link);
    return response.data
}

// Add a new provider
export const addProvider = async (provider: Provider): Promise<ProviderResponse> => {
    const response = await axios.post("http://localhost:2600/api/providers/add-provider", provider, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}


export type ProviderEntry = {
    provider: Provider;
    url: string;
}


// Add updateProvider function
export const updateProvider = async(providerEntry: ProviderEntry): Promise<ProviderResponse> => {
    const response = await axios.put(providerEntry.url, providerEntry.provider,{
        headers:{
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}

