import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MovieSearchResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/';
  private apiKey = 'ce285916'; // Chave configurada para OMDB API

  constructor(private http: HttpClient) { }

  setApiKey(key: string): void {
    this.apiKey = key;
  }

  searchMovies(title: string): Observable<MovieSearchResponse> {
    // Construindo URL de busca com parâmetros corretos da OMDB API
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(title)}&type=movie`;
    console.log('🔍 Buscando filmes na URL:', url);
    return this.http.get<MovieSearchResponse>(url);
  }

  getMovieDetails(imdbID: string): Observable<Movie> {
    // Construindo URL para detalhes do filme com plot completo
    const url = `${this.apiUrl}?apikey=${this.apiKey}&i=${imdbID}&plot=full`;
    console.log('📋 Buscando detalhes do filme na URL:', url);
    return this.http.get<Movie>(url);
  }

  // Método para testar se a API está configurada
  isApiConfigured(): boolean {
    return this.apiKey !== '';
  }

  // Método para testar conectividade com a API usando o exemplo fornecido
  testApiConnection(): Observable<Movie> {
    // Testando com o ID de exemplo fornecido: tt3896198
    const testUrl = `${this.apiUrl}?i=tt3896198&apikey=${this.apiKey}`;
    console.log('🧪 Testando conexão com API na URL:', testUrl);
    return this.http.get<Movie>(testUrl);
  }

  // Método para obter informações da API
  getApiInfo(): any {
    return {
      apiUrl: this.apiUrl,
      apiKey: this.apiKey ? '***configurada***' : 'não configurada',
      isConfigured: this.isApiConfigured()
    };
  }
}