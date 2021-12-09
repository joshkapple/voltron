import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AcademicProgram } from '../models/academic-program';
import {Observable, catchError, map, tap, of, mergeMap, filter} from "rxjs";
import {FinderParams} from '../models/finder-params';

@Injectable({
  providedIn: 'root'
})
export class AcademicProgramService {
  private programsUrl = 'api/programs';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  private findProgramsByProperty<ValueType>(key?: string, value?: ValueType): Observable<AcademicProgram[]> {
    const url = (key && value) ? `${this.programsUrl}/?${key}=${String(value)}` : this.programsUrl
    return this.http.get<AcademicProgram[]>(url).pipe(
      tap(_ => console.log('API request')),
      catchError(this.handleError<any>((key) ? `findByProperty: ${key}` : 'allPrograms'))
    );
  }

  allPrograms(): Observable<AcademicProgram[]> {
    return this.findProgramsByProperty();
  }

  allInterests(): Observable<string[]> {
    return this.http.get<AcademicProgram[]>(this.programsUrl).pipe(
      map(aps => aps.map(ap => ap.interests)),
      map(iss => iss.reduce((cum: string[], nxt: string[]) => {
        nxt.forEach(i => {
          if (!cum.includes(i)) cum.push(i);
        });
        return cum;
      }, []))
    );
  }

  allDegrees(): Observable<string[]> {
    return this.http.get<AcademicProgram[]>(this.programsUrl).pipe(
      map(aps => Array.from(new Set(aps.map(ap => ap.degree))))
    );
  }

  byFinderParams(params: FinderParams): Observable<AcademicProgram[]> {
    return this.http.get<AcademicProgram[]>(this.programsUrl).pipe(
      map(aps => (params.maxDuration !== 0) ? aps.filter(ap => ap.duration <= params.maxDuration) : aps),
      map(aps => (params.maxTuition !== 0) ? aps.filter(ap => ap.tuition <= params.maxTuition) : aps),
      map(aps => (params.interests.length) ? aps.filter(ap => params.interests.some(pi => ap.interests.some(ai => pi === ai))) : aps),
      map(aps => (params.degrees.length) ? aps.filter(ap => params.degrees.some(pi => pi === ap.degree)) : aps)
    );
  }

  getProgramById(id: number): Observable<AcademicProgram> {
    const url = `${this.programsUrl}/${id}`;
    return this.http.get<AcademicProgram>(url).pipe(
      catchError(this.handleError<any>('findById'))
    )
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
