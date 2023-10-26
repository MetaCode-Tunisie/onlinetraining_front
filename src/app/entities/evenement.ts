export class Evenement {
    idEvents!: number;
    nbrParticipant!: number;
    MaxNbrParticipant!: number;
    //Ratiing!: number; // Assurez-vous du type correct pour Ratiing
    Name!: string;
    Description!: string;
    StartDate!: Date;
    EndDate!: Date;
    location!: string;
    theme!: Theme; // Utilisez la même énumération
    Places!: Places; // Utilisez la même énumération
    Image!: string;
    participated!: boolean;

  }
  
  // Utilisez les énumérations correspondantes
  export enum Theme {
    TECHNOLOGIE = 'TECHNOLOGIE',
    SCIENCE = 'SCIENCE',
    ART = 'ART',
  }
  
  export enum Places {
    AVAILABLE = 'available',
    FULL = 'full',
  }
  