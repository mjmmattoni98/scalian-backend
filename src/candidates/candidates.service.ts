import { Injectable } from '@nestjs/common';
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

    return {
      seniority: String(raw_data[0][0]),
      years: Number(raw_data[0][1]),
      availability: raw_data[0][2] === 'true' || raw_data[0][2] === true,
    };
  }
}
