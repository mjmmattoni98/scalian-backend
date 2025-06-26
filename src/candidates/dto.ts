import { IsString, IsInt, IsBoolean, IsIn } from 'class-validator';

export class CreateCandidateDto {
  @IsString()
  name: string;

  @IsString()
  surname: string;
}

export class CandidateExcelDto {
  @IsIn(['junior', 'senior'])
  seniority: string;

  @IsInt()
  years: number;

  @IsBoolean()
  availability: boolean;
}
