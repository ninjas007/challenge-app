import { Body, Get, Controller, Post, Patch, Query, Param, Delete } from '@nestjs/common';
import { BiodataService } from './biodata.service';
import { Biodata } from './biodata.model';
import { GetBiodataFilterDto } from './dto/get-biodata-filter.dto';
import { CreateBiodataDto } from './dto/create-biodata.dto';
import { UpdateBiodataDto } from './dto/update-biodata.dto';

@Controller('biodata')
export class BiodataController {
    constructor(private biodataService: BiodataService) { }

    @Get()
    getBiodata(@Query() filterDto : GetBiodataFilterDto) : Biodata [] {
        if(Object.keys(filterDto).length) {
            return this.biodataService.getBiodataWithFilter(filterDto);
        }

        return this.biodataService.getBiodataAll();
    }

    @Get('/:id')
    getBiodataById(@Param('id') id: string) : Biodata {
        return this.biodataService.getBiodataById(id);
    }

    @Post()
    createData(@Body() createBiodataDto: CreateBiodataDto) : Biodata {
        return this.biodataService.createData(createBiodataDto)
    }

    @Patch('/:id')
    updateData(@Param('id') id: string, @Body() updateBiodataDto: UpdateBiodataDto) : Biodata {
        return this.biodataService.updateData(id, updateBiodataDto);
    }

    @Delete('/:id')
    deleteData(@Param('id') id: string) : void {
        this.biodataService.deleteData(id)
    }
}
