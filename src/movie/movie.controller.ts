import { Controller, Delete, Get, Param, Post, Patch, Body, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entitiy';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {

    constructor(readonly movieService: MovieService) {}

    @Get()
    getAll(): Movie[] {
        return this.movieService.getAll();
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.movieService.create(movieData);
    }

    @Get('/:id')
    getOne(@Param('id') movieId: string){
        return this.movieService.getOne(movieId);
    }

    @Delete("/:id")
    deleteOne(@Param('id') movieId: string){
        return this.movieService.deleteOne(movieId);
    }

    @Patch("/:id")
    patch(@Param('id') movieId: string, @Body() updateData: UpdateMovieDto){
        return this.movieService.update(movieId, updateData);
    }
}
