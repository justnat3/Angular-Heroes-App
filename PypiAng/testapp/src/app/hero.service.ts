import { Injectable } from '@angular/core';
import { Hero } from './heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(
    private http: HttpClient,
    private MessageService: MessageService) { }

  private heroesUrl = 'api/heroes';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error)

      this.log(`${operation} failed: ${error.message}`)

      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.MessageService.add('HeroService: fetched heroes')
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('you broke it'))
      );
  }

  private log(message: string) {
    this.MessageService.add(`HeroService: ${message}`)
  }


  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched here id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }

}
