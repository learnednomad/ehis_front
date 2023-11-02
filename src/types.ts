export type ClientResponse =  {
    first_name: string;
    last_name: string;
    dateOfBirth: string;
    photo_url: string;
    created_on: string;
    modified_on: string;
    _links: {
        self: {
            href: string;
        },
        client: {
            href: string;
        },
        policy: {
            href: string;
        },
        claimses: {
            href: string;
        },
        dependents: {
            href: string;
        }
    }
}

export type Client ={
    first_name: string;
    last_name: string;
    dateOfBirth: string;
    photo_url: string;
    // "created_on": string;
    // "modified_on": string;
}


/******* Provider Response *********/


export type ProviderResponse =  {
    "provider_name": string;
    "provider_address": string;
    "contact_person": string;
    "phone_number": string;
    "date_created": string;
    "date_modified": string;
    "_links": {
        "self": {
            "href": string;
        },
        "policyProvider": {
            "href": string;
        },
        "policies": {
            "href": string;
        }
    }
}

// export type Provider ={
//     "provider_name": string;
//     "provider_address": string;
//     "contact_person": string;
//     "phone_number": string;
//     "date_created": string;
//     "date_modified": string;
//     "policies": {
//         "href": string;
//     }
// }


export type Provider = {
    provider_name: string;
    provider_address: string;
    contact_person: string;
    phone_number: string;
    // date_created: string;
    // date_modified: string;
    policies: string[]; // Add this property
}

/******
 * Hospital Exports
 *
 * **************/

export type HospitalResponse = {
    hospital_name : string;
    address : string;
    phone_number :string;
    _links: {
        self : {
            href : string;
        },
        hospital : {
            href : string;
        },
        offeredServices : {
            href : string;
        },
        claims : {
            href : string;
        }
    };
}


export type Hospital = {
    hospital_name: string;
    address: string;
    phone_number: string;
}


export type HospitalEntry = {
    hospital: Hospital;
    url: string;
}


/******
 * Claims Exports
 *
 * **************/


export type ClaimsResponse = {
    dateOfService : string;
    diagnosisCodes : string;
    procedureCodes :string;
    claimAmount:number;
    claimStatus:string;
    _links: {
        self : {
            href : string;
        },
        claims : {
            href: string
        },
        hospital : {
            href : string;
        },
        policy : {
            href : string;
        },
        client : {
            href : string;
        }
    };
}


export type Claim = {
    // policy: string;
    // hospital: string;
    // client: string;
    dateOfService : string;
    diagnosisCodes : string;
    procedureCodes :string;
    claimAmount:number;
    claimStatus:string;
}


export type ClaimEntry = {
    claim: Claim;
    url: string;
}
