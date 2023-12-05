export class Culture {
    public nom: string;
    public methode: string;
    public datePlantation: Date;
    public dateRecolte: Date;
    public rendement: number;
    public cout: number;

    constructor(
      nom: string,
      methode: string,
      datePlantation: Date,
      dateRecolte: Date,
      rendement: number,
      cout: number
    ) {
      this.nom = nom;
      this.methode = methode;
      this.datePlantation = datePlantation;
      this.dateRecolte = dateRecolte;
      this.rendement = rendement;
      this.cout = cout;
    }
}
