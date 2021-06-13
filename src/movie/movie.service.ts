import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entitiy';

@Injectable()
export class MovieService {
    private movies: Movie[] = [];

    getAll(): Movie[]{
        return this.movies;
    } 

    getOne(id: string): Movie {
        const movie = this.movies.find(movie => movie.id === +id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return movie;
    }

    create(movieData: CreateMovieDto){
        this.movies.push({
            id : this.movies.length + 1,
            ...movieData})
    }

    deleteOne(id: string){
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
    }

    update(id: string, updateData: UpdateMovieDto){
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({...movie, ...updateData});
    }
}
