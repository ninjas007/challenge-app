import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBiodataDto } from './dto/create-biodata.dto';
import { Biodata, BiodataGender } from './biodata.model';
import { v4 as uuid } from 'uuid';
import { GetBiodataFilterDto } from './dto/get-biodata-filter.dto';

@Injectable()
export class BiodataService {
    private biodata : Biodata[] = []

    getBiodataWithFilter(filterDto: GetBiodataFilterDto) : Biodata[] {
        const { gender, search } = filterDto;
        let list_biodata = this.getBiodataAll();
        
        if(gender) {
            list_biodata = list_biodata.filter( (biodata) => biodata.gender === gender )
        }

        if(search) {
            list_biodata = list_biodata.filter( (biodata) => {
                if(biodata.fullname.includes(search) || biodata.moto.includes(search) || biodata.cv.includes(search)) {
                    return true;
                }

                return false;
            });
        }

        return list_biodata;
    }

    getBiodataAll() : Biodata[] {
        return this.biodata;
    }

    getBiodataById(id) : Biodata {
        const data = this.biodata.find( (biodata) => biodata.id === id );
        if(!data) {
            throw new NotFoundException("Biodata not found");
            
        }

        return data;
    }

    createData(data) : Biodata {
        const { fullname, moto, cv }  = data;
        const biodata : Biodata = {
            id: uuid(),
            fullname,
            moto,
            cv,
            gender: data.gender
        }

        this.biodata.push(biodata)

        return biodata;
    }

    updateData(id: string, data) {
        const biodata = this.getBiodataById(id);
        biodata.fullname = data.fullname;
        biodata.gender = data.gender;

        return biodata;
    }

    deleteData(id: string) : void {
        const dataFound = this.getBiodataById(id);
        this.biodata = this.biodata.filter( (data) => data.id !== dataFound.id );
    }
}
