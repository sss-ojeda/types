export interface SiteFinancialInfo {
	installationDate: Date;
	price: number;
	siteId: string;
}
export interface SitePerformanceGuarantee {
	siteId: string;
	dailyGeneration: number;
	dailyEarnings: number;
}
export const enum FlatChargesCategoryEnum {
	environmental = 'environmental',
	marketOperator = 'marketOperator'
}
export type FlatChargeCategoryType = FlatChargesCategoryEnum.environmental | FlatChargesCategoryEnum.marketOperator;
export interface SiteFlatCharge {
	price: number;
	siteId: string;
	category: string;
	name: string;
	id?: string;
}




export interface SiteFinancialTimeserie {
	site_id: string;
	e: number;
	b: number;
	self_consumption: number;
	p_ac: number;
	price: number;
	savings: number;
	paid: number;
	time: string;
	export_revenue: number;
}


export interface SiteRate {
	siteId: string;
	startHour: string;
	endHour: string;
	price: number;
	id?: string;
	days: Array<number>;
}


export interface SiteExportRate {
	siteId: string;
	startHour: string;
	endHour: string;
	price: number;
	id?: string;
	days: Array<number>;
}
