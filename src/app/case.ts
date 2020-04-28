export class Case {

  constructor(
    public id: number,
    public name: string,
    public date: string,
    public newCase: number,
    public newDeath: number,
    public totalCases: number = 0,
    public totalDeaths: number = 0

  ) { }

}
