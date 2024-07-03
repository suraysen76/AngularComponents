export interface IStudent {
    Name: string ;
    Branch: string ;
    Mobile: number ;
    Gender: string;
    Age: number ;
    getName: () => string;
    getAge: () => number;
    getGender: () => string;
}
