export interface Biodata {
    id: string;
    fullname: string
    moto: string
    cv: string
    gender;
}

export enum BiodataGender {
    PRIA = 'PRIA',
    WANITA = 'WANITA'
}