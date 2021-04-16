import {Site} from './site/general'

export const enum InverterNotificationCategoryEnum {
    difference = 'difference',
    threshold = 'threshold',
    relativeDifference = 'relativeDifference'
}
export interface SiteNotificationGroup {
    name: string;
    id: string;
    notifications: Array<CustomNotification>;
    siteId: string;
    emails: Array<string>;
    site?: Site;
}
type NotificationStatusType = 'on' | 'off';
export interface CustomNotification {
    id?: string;
    name?: string;
    deviceId: string;
    siteNotificationGroupId?: string;
    status: NotificationStatusType;
}
type InverterNotificationCategoryType = InverterNotificationCategoryEnum.difference | InverterNotificationCategoryEnum.threshold | InverterNotificationCategoryEnum.relativeDifference;
export interface InverterNotificationBase extends CustomNotification {
    category: InverterNotificationCategoryType;
}
export interface ThresholdInverterNotificationRules {
    duration: number;
    value: number;
}
export interface DifferenceInverterNotificationRules {
    percentage: number;
    meanValue: number;
    duration: number;
}
export interface RelativeDifferenceInverterNotificationRules {
    percentage: number;
    duration: number;
}
export interface DifferenceInverterNotification extends InverterNotification, DifferenceInverterNotificationRules {
}
export interface InverterNotification extends InverterNotificationBase {
    category: InverterNotificationCategoryType;
}
export interface ThresholdInverterNotification extends InverterNotification {
    rules: ThresholdInverterNotificationRules;
}
export interface DifferenceInverterNotification extends InverterNotification {
    rules: DifferenceInverterNotificationRules;
}
export interface RelativeDifferenceInverterNotification extends InverterNotification {
    rules: RelativeDifferenceInverterNotificationRules;
}

export interface SelfConsumptionTimeserie {
    p_ac: number;
    siteId?: string;
    time: string;
}
export interface DifferenceInverterNotificationRules {
    percentage: number;
    meanValue: number;
    duration: number;
}
export interface RelativeDifferenceInverterNotificationRules {
    percentage: number;
    duration: number;
}
export interface DifferenceInverterNotification extends InverterNotification, DifferenceInverterNotificationRules {
}
export interface InverterNotification extends InverterNotificationBase {
    category: InverterNotificationCategoryType;
}
export interface ThresholdInverterNotification extends InverterNotification {
    rules: ThresholdInverterNotificationRules;
}
export interface DifferenceInverterNotification extends InverterNotification {
    rules: DifferenceInverterNotificationRules;
}
export interface RelativeDifferenceInverterNotification extends InverterNotification {
    rules: RelativeDifferenceInverterNotificationRules;
}
