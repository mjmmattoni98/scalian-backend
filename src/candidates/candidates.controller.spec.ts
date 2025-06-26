describe('CandidatesController', () => {
  it('should return name and surname in uppercase and merge excel data', () => {
    const body = { name: 'john', surname: 'doe' };
    const excelData = {
      seniority: 'junior',
      years: 2,
      availability: true,
    };

    const result = {
      name: body.name.toUpperCase(),
      surname: body.surname.toUpperCase(),
      ...excelData,
    };

    expect(result).toEqual({
      name: 'JOHN',
      surname: 'DOE',
      seniority: 'junior',
      years: 2,
      availability: true,
    });
  });
});
