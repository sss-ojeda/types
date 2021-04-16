import {Device} from './device/general'
import {Site} from './site/general'

export interface Alert {
	id?: string;
	createdAt: string;
	description: string;
	state: string;
	plant: string;
	device?: Device;
	deviceId: string;
	site?: Site;
}

