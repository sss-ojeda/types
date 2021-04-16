export interface SiteMeterTimeseries {
	siteId: string;
	E?: number;
	B?: number;
	K?: number;
	Q?: number;
	selfConsumption?: number;
	time: string;
	interval: number;
}
export interface NMIMeterTimeseries {
	nmi: string;
	E?: number;
	B?: number;
	K?: number;
	Q?: number;
	time: string;
	interval: number;
}

export type MeterType = 'nmi';

export interface Meter {
	id: string;
	type: string;
	siteId: string;
	data?: any;
	name: string;
}

export interface NMIMeter {
	meterId: string;
	number: string;
}


export interface FakeMeter {
	meterId: string;
	number: string;
	bob: string;
}

export interface MeterTimeseries {
	meterId: string;
	E?: number;
	B?: number;
	K?: number;
	Q?: number;
	time: string;
	interval: number;
}
