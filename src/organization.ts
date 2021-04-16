import { ABBGlobalConf } from './configuration'

export const enum OrganizationConfigurationEnum {
	ABB = 'ABB'
}
export type OrganizationConfigurationType = OrganizationConfigurationEnum.ABB;
export interface OrganizationConfiguration {
    type: OrganizationConfigurationType;
    values?: ABBGlobalConf;
}
export interface Organization {
    id?: string;
    name: string;
    isClient: boolean;
    configurations: Array<OrganizationConfiguration>;
}
const enum RoleEnum {
    superadmin = 'SuperAdmin',
    admin = 'Admin',
    member = 'Member'
}
export type RoleType = RoleEnum.superadmin | RoleEnum.member | RoleEnum.admin;
export interface AuthorizerObject {
    all?: boolean;
    manager?: {
            admin?: boolean;
            member?: boolean;
    };
    client?: {
            admin?: boolean;
            member?: boolean;
    };
}


export interface Ownership {
    id?: string;
}
