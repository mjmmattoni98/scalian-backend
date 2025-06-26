import { Injectable, BadRequestException } from '@nestjs/common';
import * as XLSX from 'xlsx';
import { CandidateExcelDto } from './dto';

@Injectable()
export class CandidatesService {
  parseExcel(buffer: Buffer): CandidateExcelDto {
    const workbook = XLSX.read(buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const raw_data = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as (
      | string
      | number
      | boolean
    )[][];

    const seniority = String(raw_data[0][0]).toLowerCase();
    const years = Number(raw_data[0][1]);
    const availabilityRaw = raw_data[0][2];
    const availability = availabilityRaw === 'true';

    if (seniority !== 'junior' && seniority !== 'senior') {
      throw new BadRequestException('Seniority must be "junior" or "senior"');
    }
    if (isNaN(years) || years < 0) {
      throw new BadRequestException(
        'Years must be a number greater or equal than 0',
      );
    }
    if (
      typeof availabilityRaw !== 'boolean' &&
      availabilityRaw !== 'true' &&
      availabilityRaw !== 'false'
    ) {
      throw new BadRequestException('Availability must be a boolean');
    }

    return {
      seniority,
      years,
      availability,
    };
  }
}
