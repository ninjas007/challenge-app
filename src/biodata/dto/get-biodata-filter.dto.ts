import { IsString, IsOptional, IsEnum } from "class-validator";
import { BiodataGender } from "../biodata.model";

export class GetBiodataFilterDto {
    @IsOptional()
    @IsEnum(BiodataGender)
    gender?: BiodataGender

    @IsOptional()
    @IsString()
    search?: string;
}
