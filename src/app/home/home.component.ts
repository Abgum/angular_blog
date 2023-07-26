import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BlogService } from '../services/blog.service';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private blogService:BlogService, public dialog:MatDialog){}

  blogData:Array<any> = [];
  pageSize = 8
  page = 13
  
  ngOnInit():void{
    this.blogService.getPosts().subscribe((res)=>{
      this.blogData = res; 
    })
  }

  openDialog(element:any, vieworupdate:any){
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      data : {
        blog:element, isUpdate:vieworupdate
      }
    });
  }

  delete(blogId: number) {
    this.blogService.deletePost(blogId).subscribe(() => {
      this.blogData = this.blogData.filter(blog => blog.id !== blogId);
    }, (error) => {
      console.error('Error deleting blog:', error);
    });
  }
  
  

  
  

}

/*

import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BlogService } from '../services/blog.service';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( private blogService:BlogService, public dialog:MatDialog){}

  blogData:Array<any> = [];
  pageSize = 8
  page = 13
  
  ngOnInit():void{
    this.blogService.getPosts().subscribe((res)=>{
      this.blogData = res; 
    })
  }

  openDialog(element: any, vieworupdate: any) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      data: {
        blog: element,
        isUpdate: vieworupdate,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Add the new blog post to the list
        this.blogData.push(result);
        // Check if the current page contains fewer posts than the pageSize
        if (this.blogData.length <= this.pageSize) {
          // If yes, update the page to the last page to show the new post
          this.page = Math.ceil(this.blogData.length / this.pageSize);
        }
      }
    });
  }

  delete(blogId: number) {
    this.blogService.deletePost(blogId).subscribe(() => {
      this.blogData = this.blogData.filter(blog => blog.id !== blogId);
    }, (error) => {
      console.error('Error deleting blog:', error);
    });
  }

  addNewBlog() {
    const newBlogPost = {
      title: '',
      body: '',
    };

    this.openDialog(newBlogPost, false);
  }
  
  

  
  

}


*/
