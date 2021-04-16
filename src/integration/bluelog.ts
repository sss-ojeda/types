import { PowerTimeseries } from 'power'
import { Device } from 'device/general'
import {InverterData} from 'generalData'
import { MeteoData } from 'meteo'
export interface BluelogDevice {
    deviceId: string;
    blId: string;
    name: string;
		model: string;
		driver: string;
		address: string;
		interfaceType: string;
		interfaceAddress: string;
		vendor: string;
		type: string;
		firmware: string;
		serial: string;
		loggerId: string;
}

export interface BluelogPowerTimeseries extends PowerTimeseries {
	blDevice: BluelogDevice;
	deviceId: string;
	p_ac: number;
	p_dc: number;
	time: string;
	interval: number;
	device?: Device;
}

export interface BluelogTimeseries  {
	blDevice: BluelogDevice;
	deviceId: string;
	p_ac: number;
	p_dc: number;
	time: string;
	interval: number;
	// device?: Device;
	data: InverterData | MeteoData;
}


export interface BluelogMeteoTimeseries  {
	blDevice: BluelogDevice;
	deviceId: string;

	time: string;
	interval: number;
	// device?: Device;
	data: InverterData;
}

export interface BlueLogMeteoTimeseries  {
	blDevice: BluelogDevice;
	deviceId: string;

	time: string;
	interval: number;
	// device?: Device;
	data: MeteoData;
}
