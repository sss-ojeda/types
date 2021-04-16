import {  Device } from './device/general'

export interface MeteoTimestamp {
	type?: 'meteo';
	time: string;
	interval: number;
	deviceId: string;
	device?: Device;
	data?: MeteoData;
}
export 	interface MeteoData {
	SRAD: number;
	E_AH_REL1: number;
	E_AP_REL1: number;
	E_W_D: number;
	E_PRECIPITATION: number;
	T: number;
	E_W_S: number;
	E_W_S_MAX: number;
	E_RF_DIF: number;
	E_RF_I1: number;
	E_AH_ABS1: number;
	E_AP_ABS1: number;
	PANEL_TEMPERATURE: number;
	AMBIENT_TEMPERATURE: number;
}

export interface SoilTimestamp {
	type?: 'soil';
	time: string;
	interval: number;
	deviceId: string;
	device?: Device;
	data?: MeteoData;
}

export interface SoilData {
	SLI1: number;
	SLI2: number;
	E_AP_REL1: number;
	SR1: number;
	SR2: number;
	T: number;
}
export interface SoilTimeserie {
	SLI1: number;
	SLI2: number;
	E_AP_REL1: number;
	SR1: number;
	SR2: number;
	T: number;
	deviceId: string;
	time: string;
	interval: string;
}
