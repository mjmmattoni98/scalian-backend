import * as XLSX from 'xlsx';
import { CandidatesService } from './candidates.service';

describe('CandidatesService', () => {
  let service: CandidatesService;

  beforeEach(() => {
    service = new CandidatesService();
  });

  it('should parse valid excel buffer', () => {
    const data = [['junior', '3', 'true']];
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

    const result = service.parseExcel(buffer);
    expect(result).toEqual({
      seniority: 'junior',
      years: 3,
      availability: true,
    });
  });
});
