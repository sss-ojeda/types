export type SiteConfigurationType = SiteConfigurationEnum.bluelog | SiteConfigurationEnum.solaredge | SiteConfigurationEnum.ABB;


export interface BlueLogConf {
	loggerId: string;
	siteId: string;
}
export interface SolarEdgeConf {
	apiKey: string;
	siteId: string;
	solarSiteId: string;
}
export interface ABBSiteConf {
	entityId: string;
	email: string;
	siteId: string;
}
export const enum SiteConfigurationEnum {
	bluelog = 'bluelog',
	solaredge = 'solaredge',
	ABB = 'ABB'
}
export interface SiteConfiguration {
	type: SiteConfigurationType;
	values?: BlueLogConf | SolarEdgeConf| ABBSiteConf;
}
export 	interface ABBGlobalConf {
	email: string;
	password: string;
	apiKey: string;
	organizationId: string;
}
