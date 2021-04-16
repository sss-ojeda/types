import {RoleType, Organization} from './organization'

export interface UserAccount {
	id?: string;
	firstName: string;
	lastName: string;
	email: string;
	role: RoleType;
	password: string;
	organizationId: string;
	organization?: Organization;
}
export 	interface User {
	id?: string;
	firstName: string;
	lastName: string;
	email: string;
	role: RoleType;
	password: string;
	organizationId: string;
}
