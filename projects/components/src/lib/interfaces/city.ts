import Person from "./persone";

export default interface City {
  id: number,
  name: string;
  population: Person[];
}
