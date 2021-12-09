import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {AcademicProgram} from "../models/academic-program";

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements InMemoryDbService {
  createDb() {
    const programs = [
      {id: 1, name: 'Computer Science', duration: 4, tuition: 50, degree: 'bachelor', interests: ['technology', 'science'], contact: {dean: 'Dr. Willy Pinkencraft, Esq.', email: 'drpinkencraftesq@tcfs.edu'}, description: 'Learn how to code! Hey kid... ya like video games???'},
      {id: 2, name: 'Electrician Pre-Apprentice', duration: 1, tuition: 10, degree: 'certificate', interests: ['technology', 'trades'], contact: {dean: 'Tuck McMichigan', email: 'tuck@tcfs.edu'}, description: 'Develop all the skills you need to get an apprenticeship!'},
      {id: 3, name: 'Sculpture & Pottery', duration: 2, tuition: 15, degree: 'associate', interests: ['arts'], contact: {dean: 'Professor Emeritus Juanita Dominica Salazar Velazquez de Candelabra', email: 'pejdsvdc@tcfs.edu'}, description: 'Learn how to create stunning statues and delightful dishware!'},
      {id: 4, name: 'Comparative Literature', duration: 4, tuition: 60, degree: 'bachelor', interests: ['arts', 'language'], contact: {dean: 'Adjunct Professor Wilhelmut Schlachtschlüßel', email: 'helmut@tcfs.edu'}, description: 'Explore the wonderful world of the written word!'},
      {id: 5, name: 'Italian Conversational Skills', duration: 2, tuition: 5, degree: 'certificate', interests: ['language'], contact: {dean: 'Minnie Gagarelli, JD', email: 'missminnie@tcfs.edu'}, description: 'Learn how to chat about Italian things... in Italian!'},
      {id: 6, name: 'Heart Surgery', duration: 10, tuition: 120, degree: 'doctorate', interests: ['science', 'medicine'], contact: {dean: 'Doctor Dumpp', email: 'dumppmd@tcfs.edu'}, description: 'If you want to request scalpels, sew up stitches, and prescribe creams... well then this is the program for you!'},
      {id: 7, name: 'Feline Waterbirth', duration: 10, tuition: 2, degree: 'certificate', interests: ['science', 'medicine'], contact: {dean: 'Gloom-Witch Wanda Wyrmwood-Wortleby', email: 'realwitch@tcfs.edu'}, description: 'Learn how to help cats bring their womb-spawn into the world, the way nature intended :)'},
      {id: 8, name: 'Political Science-Fiction', duration: 2, tuition: 100, degree: 'associate', interests: ['arts', 'language', 'science', 'technology'], contact: {dean: 'Michael Jordan (the basketball player)', email: 'mj@tcfs.edu'}, description: 'Political Science is boring. Learn how to turn it into books about spaceships – from the hoopster himself!'}
    ]
    return {programs}
  }

  genId(programs: AcademicProgram[]) {
    return programs.length > 0 ? Math.max(...programs.map(ap => ap.id)) + 1 : 1
  }

  constructor() { }
}
