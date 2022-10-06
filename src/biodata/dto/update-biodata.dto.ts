import { BiodataGender } from "../biodata.model"
import { IsEnum, IsNotEmpty } from "class-validator";

export class UpdateBiodataDto {
    @IsNotEmpty()
    fullname: string

    @IsNotEmpty()
    moto: string

    @IsNotEmpty()
    cv: string

    @IsEnum(BiodataGender)
    gender: BiodataGender
}