export interface Device {
	id?: string;
	name: string;
	type?: string;
	siteId: string;
	brand?: string;
	model?: string;
	latestStatus?: DeviceStatus;
}


export interface DeviceStatus {
	time: string;
	deviceId:string;
	isActive: boolean;
	description: string;
}
