import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie.service';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-movie';
  
  // Propriedades para busca
  searchTerm: string = '';
  lastSearchTerm: string = '';
  movies: Movie[] = [];
  selectedMovie: Movie | null = null;
  
  // Estados da aplicação
  isLoading: boolean = false;
  searchPerformed: boolean = false;
  errorMessage: string = '';
  hideApiConfig: boolean = false;
  
  constructor(private movieService: MovieService) {
    // Testando conectividade da API ao inicializar
    this.testApiOnInit();
  }
  
  // Verifica se a API está configurada
  get isApiConfigured(): boolean {
    return this.movieService.isApiConfigured();
  }

  // Método para testar a API ao inicializar
  private testApiOnInit(): void {
    console.log('🚀 Iniciando teste de conectividade da API...');
    console.log('📋 Informações da API:', this.movieService.getApiInfo());
    
    if (this.isApiConfigured) {
      this.movieService.testApiConnection().subscribe({
        next: (testMovie) => {
          console.log('✅ API conectada com sucesso!');
          console.log('🎬 Filme de teste recebido:', testMovie);
          this.hideApiConfig = true;
        },
        error: (error) => {
          console.error('❌ Erro ao conectar com a API:', error);
          this.errorMessage = 'Erro de conectividade com a API. Verifique sua conexão.';
        }
      });
    }
  }
  
  // Método para buscar filmes
  searchMovies(): void {
    if (!this.searchTerm.trim()) {
      return;
    }
    
    if (!this.isApiConfigured) {
      this.errorMessage = 'API não configurada. Por favor, configure a chave da API primeiro.';
      return;
    }
    
    this.isLoading = true;
    this.errorMessage = '';
    this.lastSearchTerm = this.searchTerm.trim();
    this.movies = [];
    this.selectedMovie = null;
    
    this.movieService.searchMovies(this.lastSearchTerm).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.searchPerformed = true;
        
        if (response.Response === 'True' && response.Search) {
          this.movies = response.Search;
        } else if (response.Error) {
          this.errorMessage = response.Error;
        } else {
          this.movies = [];
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.searchPerformed = true;
        console.error('Erro ao buscar filmes:', error);
        
        if (error.status === 0) {
          this.errorMessage = 'Erro de conexão. Verifique sua internet e tente novamente.';
        } else if (error.status === 401) {
          this.errorMessage = 'Chave da API inválida. Verifique a configuração.';
        } else {
          this.errorMessage = 'Erro ao buscar filmes. Tente novamente.';
        }
      }
    });
  }
  
  // Método para selecionar um filme e buscar detalhes
  selectMovie(movie: Movie): void {
    if (!this.isApiConfigured) {
      this.errorMessage = 'API não configurada.';
      return;
    }
    
    this.movieService.getMovieDetails(movie.imdbID).subscribe({
      next: (movieDetails) => {
        this.selectedMovie = movieDetails;
      },
      error: (error) => {
        console.error('Erro ao buscar detalhes do filme:', error);
        this.selectedMovie = movie; // Mostra pelo menos as informações básicas
      }
    });
  }
  
  // Método para fechar detalhes do filme
  closeDetails(): void {
    this.selectedMovie = null;
  }
  
  // Método para testar a conexão da API manualmente
  testApiConnection(): void {
    console.log('🧪 Testando conexão com API manualmente...');
    this.isLoading = true;
    this.errorMessage = '';
    
    this.movieService.testApiConnection().subscribe({
      next: (testMovie) => {
        this.isLoading = false;
        console.log('✅ Teste de API bem-sucedido!', testMovie);
        alert(`✅ API funcionando!\nFilme de teste: ${testMovie.Title} (${testMovie.Year})`);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('❌ Erro no teste da API:', error);
        this.errorMessage = `Erro no teste da API: ${error.message || 'Conexão falhou'}`;
      }
    });
  }

  // Método para limpar erros
  clearError(): void {
    this.errorMessage = '';
  }
  
  // Método para lidar com erro de imagem
  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/300x400/cccccc/666666?text=Sem+Poster';
  }
  
  // Método para configurar a API (será chamado quando você fornecer a chave)
  configureApi(apiKey: string): void {
    this.movieService.setApiKey(apiKey);
    this.hideApiConfig = true;
    this.clearError();
    console.log('API configurada com sucesso!');
  }
}