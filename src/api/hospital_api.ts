import {HospitalResponse, Hospital, HospitalEntry } from "../types";
import axios from "axios";

export const getHospitals = async (): Promise < HospitalResponse[] > => {
    const response = await axios.get(import.meta.env.VITE_API_URL +"/hospitals");
    return response.data._embedded.hospitals;
}


export const deleteHospital = async (link: string): Promise<HospitalResponse> => {
    const response = await axios.delete(link);
    return response.data
}

// import { HospitalResponse, Hospital} from '../types';
// Add a new hospital
export const addHospital = async (hospital: Hospital): Promise<HospitalResponse> => {
    const response = await axios.post(import.meta.env.VITE_API_URL + '/api/hospitals/add', hospital, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}



// Add updateHospital function
export const updateHospital = async(hospitalEntry: HospitalEntry): Promise<HospitalResponse> => {
    const response = await axios.put(hospitalEntry.url, hospitalEntry.hospital,{
        headers:{
            'Content-Type': 'application/json',
        },
    });
    return response.data;
}

