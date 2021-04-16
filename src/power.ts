import {Device} from './device/general'

export	interface SitePowerTimeseries {
		siteId: string;
		p_ac: number;
		p_dc: number;
		time: string;
		interval: number;
}


export	interface PowerTimeseries {
	deviceId: string;
	p_ac: number;
	p_dc: number;
	time: string;
	interval: number;
	device?: Device;

}

