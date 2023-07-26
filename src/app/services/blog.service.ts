import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends BaseService {
  constructor(private base: BaseService) {
    super(base.http);
  }

  public getPosts() {
    return this.base.getReq('/posts');
  }
  public updatePost(id: any, data: any) {
    return this.base.putReq('/posts/' + id, data);
  }
  public deletePost(id:any){
    return this.base.deleteReq('/posts/' + id)
  }

  public addPost(data: any) {
    return this.base.postReq('/posts', data);
  }

 

  

  

  
}