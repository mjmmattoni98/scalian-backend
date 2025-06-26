import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CandidatesService } from './candidates.service';
import { CreateCandidateDto } from './dto';

@Controller('candidates')
export class CandidatesController {
  constructor(private readonly candidatesService: CandidatesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCandidate(
    @Body() body: CreateCandidateDto,
    @UploadedFile() file: any,
  ) {
    const excelData = this.candidatesService.parseExcel(file.buffer);
    return {
      name: body.name.toUpperCase(),
      surname: body.surname.toUpperCase(),
      ...excelData,
    };
  }
}
