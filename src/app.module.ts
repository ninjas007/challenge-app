import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BiodataModule } from './biodata/biodata.module';

@Module({
  imports: [BiodataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
