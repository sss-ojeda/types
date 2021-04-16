import {Ticket} from '../ticket'

import {SiteConfiguration} from '../configuration'


export interface Site {
    id?: string;
    name: string;
    timezone: string;
    description: string;
    tickets?: Array<Ticket>;
    configurations?: Array<SiteConfiguration>;
    organizationId: string;
    isConsumer: boolean;
}
export interface Address {
	id: string;
	name: string;
	state?: string;
	administrativeArea: string;
	postcode: string;
	siteId?: string;
	country: string;
	city: string;
}
export interface SiteSystemInformation {
	siteId: string;
	size: number;
}
export interface SiteInformation {
	address: Address;
	systemInformation: SiteSystemInformation;
}

