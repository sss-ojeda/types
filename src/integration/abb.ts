export interface ABBRawEvent {
	plantEntityID: number;
	plantName: string;
	deviceEntityID?: number;
	deviceSerialNumber?: string;
	loggerEntityID?: number;
	loggerSerialNumber?: string;
	eventSeverity: string;
	eventType: string;
	eventStart: string;
	eventEnd: string;
}

export interface ABBRawLogger {
	loggerEntityID: string;
	loggerName: string;
	loggerDescription: string;
	loggerState: string;
	loggerMACAddress: string;
	loggerManufacturer: string;
	loggerModel: string;
}

export interface ABBLogger {
	loggerEntityID: string;
	loggerName: string;
	loggerDescription: string;
	loggerState: string;
	loggerMACAddress: string;
	loggerManufacturer: string;
	loggerModel: string;
	deviceId: string;

}

export interface ABBRawDevice {
	deviceEntityID: string;
	deviceName: string;
	deviceDescription: string;
	deviceState: string;
	deviceSerialNumber: string;
	deviceManufacturer: string;
	deviceModel: string;
	deviceFWVersion: string;
	deviceCommunicationInterface: string;
	deviceRS485Address: string;
	deviceFirstReportedDate: string;
	deviceCategory: Array<string>;
	loggerEID: string;
}
export interface ABBDevice {
	deviceId: string;
	deviceEntityID: string;
	deviceCategory: string;
	deviceName: string;
	deviceDescription: string;
	deviceState: string;
	deviceSerialNumber: string;
	deviceManufacturer: string;
	deviceModel: string;
	deviceFWVersion: string;
	deviceCommunicationInterface: string;
	deviceRS485Address: string;
	deviceFirstReportedDate: string;
	abbLoggerEntityId: string;
}

