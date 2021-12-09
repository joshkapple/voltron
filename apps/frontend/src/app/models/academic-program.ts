import {ProgramContact} from "./program-contact";

export interface AcademicProgram {
  id: number;
  name: string;
  duration: number; // in years
  tuition: number; // in $1000s
  degree: string;
  interests: string[];
  contact: ProgramContact;
  description: string;
}
