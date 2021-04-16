import {Device} from './device/general'
import {Site} from './site/general'
import {Alert} from './alert'
import {UserAccount} from './user'



export 	interface Ticket {
	id?: string;
	title: string;
	description: string;
	isClosed: boolean;
	status: string;
	createdAt: string;
	siteId: string;
	site?: Site;
	alerts?: Array<Alert>;
	deviceId?: string;
	device?: Device;
}

export 	interface Ticket_tag {
	id?: string;
	name: string;
}


export interface TicketComment {
	id?: string;
	ticketId: string;
	creatorId: string;
	createdAt: string;
	content: string;
	creator?: UserAccount;
}
