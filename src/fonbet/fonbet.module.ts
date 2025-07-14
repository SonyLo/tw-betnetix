import { Module } from '@nestjs/common';
import { FonbetController } from './fonbet.controller';
import { FonbetService } from './fonbet.service';

@Module({
  controllers: [FonbetController],
  providers: [FonbetService]
})
export class FonbetModule {}
