export class Parcelle {
    constructor(
        public   _id: string,
        public   nom: string,
        public superficie: number,
        public ville: string,
        public coordonner: string, // Correction : "coordonner" au lieu de "coordonner"
        public typeSol: string,   // Correction : "typeSol" au lieu de "typeSole"
        public  statue: string,    // Correction : "statue" au lieu de "staute"
        public  ressource: any[],   // Vous pouvez remplacer "any[]" par le type approprié pour vos ressources
        public culture: any[]
    ){}

}
