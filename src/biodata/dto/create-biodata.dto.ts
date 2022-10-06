import { BiodataGender } from "../biodata.model"
import { IsEnum, IsNotEmpty } from "class-validator";

export class CreateBiodataDto {
    @IsNotEmpty()
    fullname: string

    @IsNotEmpty()
    moto: string

    @IsNotEmpty()
    cv: string

    @IsEnum(BiodataGender)
    gender: BiodataGender
}