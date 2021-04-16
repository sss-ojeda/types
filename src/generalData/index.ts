export interface InverterData {
    P_AC?: number;
    P_DC?: number;
    E_TOTAL?: number;
    E_DAY?: number;
    U_DC1?: number;
    I_DC1?: number;
    U_DC2?: number;
    I_DC2?: number;
    U_DC3?: number;
    I_DC3?: number;
    U_DC4?: number;
    I_DC4?: number;
    U_AC_L1L2?: number;
    U_AC_L2L3?: number;
    U_AC_L3L1?: number;
    I_AC1?: number;
    I_AC2?: number;
    I_AC3?: number;
    F_AC?: number;
    Q_AC?: number;
    S_AC?: number;
    COS_PHI?: number;
    R_ISO?: number;
    U_DC?: number;
    I_DC?: number;
    I_DC2_1?: number;
    I_DC3_1?: number;
    I_DC4_1?: number;
}
export interface InverterDataTimeseries extends InverterData {
    time: string;
}
export type InverterDataTypes =
    'P_AC' |
    'P_DC' |
    'E_TOTAL' |
    'E_DAY' |
    'U_DC1' |
    'I_DC1' |
    'U_DC2' |
    'I_DC2' |
    'U_DC3' |
    'I_DC3' |
    'U_DC4' |
    'I_DC4' |
    'U_AC_L1L2' |
    'U_AC_L2L3' |
    'U_AC_L3L1' |
    'I_AC1' |
    'I_AC2' |
    'I_AC3' |
    'F_AC' |
    'Q_AC' |
    'S_AC' |
    'COS_PHI' |
    'R_ISO' |
    'U_DC' |
    'I_DC' |
    'I_DC2_1' |
    'I_DC3_1' |
    'I_DC4_1'
    ;

export type BlueLogInverterDataTypes =
    'P_AC' |
    'P_DC' |
    'E_TOTAL' |
    'E_DAY' |
    'U_DC1' |
    'I_DC1' |
    'U_DC2' |
    'I_DC2' |
    'U_DC3' |
    'I_DC3' |
    'U_DC4' |
    'I_DC4' |
    'U_AC_L1L2' |
    'U_AC_L2L3' |
    'U_AC_L3L1' |
    'I_AC1' |
    'I_AC2' |
    'I_AC3' |
    'F_AC' |
    'Q_AC' |
    'S_AC' |
    'COS_PHI' |
    'R_ISO' |
    'U_DC' |
    'I_DC' |
    'I_DC2_1' |
    'I_DC3_1' |
    'I_DC4_1'
    ;

export const enum BlueLogInverterDataEnum {
    P_AC = 'P_AC',
    P_DC = 'P_DC',
    E_TOTAL = 'E_TOTAL',
    E_DAY = 'E_DAY',
    U_DC1 = 'U_DC1',
    I_DC1 = 'I_DC1',
    U_DC2 = 'U_DC2',
    I_DC2 = 'I_DC2',
    U_DC3 = 'U_DC3',
    I_DC3 = 'I_DC3',
    U_DC4 = 'U_DC4',
    I_DC4 = 'I_DC4',
    U_AC_L1L2 = 'U_AC_L1L2',
    U_AC_L2L3 = 'U_AC_L2L3',
    U_AC_L3L1 = 'U_AC_L3L1',
    I_AC1 = 'I_AC1',
    I_AC2 = 'I_AC2',
    I_AC3 = 'I_AC3',
    F_AC = 'F_AC',
    Q_AC = 'Q_AC',
    S_AC = 'S_AC',
    COS_PHI = 'COS_PHI',
    R_ISO = 'R_ISO',
    U_DC = 'U_DC',
    I_DC = 'I_DC',
    I_DC2_1 = 'I_DC2_1',
    I_DC3_1 = 'I_DC3_1',
    I_DC4_1 = 'I_DC4_1',
}
