import {Device} from './device/general'



export interface GenerationTimeseries {
	interval: number;
	deviceId: string;
	device?: Device;
	g_ac: number;
	g_dc: number;

	time: string;
}
export interface SiteGenerationTimeseries {
	interval: number;
	siteId: string;
	g_ac: number;
	g_dc: number;
	time: string;
}
