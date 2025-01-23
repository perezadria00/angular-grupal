export interface Enfermero {
  id: number;
  username: string;
  password?: string;
  name: string;
  surname: string;
  speciality: string;
  shift: string;
  phone: string;
  profileImage?: string; 
}
