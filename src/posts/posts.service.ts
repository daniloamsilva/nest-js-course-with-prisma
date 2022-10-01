import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly respository: PostsRepository) {}

  create(createPostDto: CreatePostDto) {
    return this.respository.create(createPostDto);
  }

  findAll() {
    return this.respository.findAll();
  }

  findOne(id: number) {
    return this.respository.findOne(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.respository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.respository.remove(id);
  }
}
