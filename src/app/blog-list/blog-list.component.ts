import { Component, OnInit, Input, QueryList, ViewChildren } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[][];
  currentPage: number;
  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;
  expFlag?: boolean;
  favFlag?: boolean;
  expText: string;
  favText: string;

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPost = this.blogDataService.getBlogData();
    this.expText = 'Expand All';
    this.favText = 'Favorite All';
  }

  onUpdatePage(page: number) {
    this.currentPage = page;
    this.expFlag = false;
    this.favFlag = false;
    this.expText = 'Expand All';
    this.favText = 'Favorite All';
    this.onFavAll(false);
    window.scrollTo(0, 0);
  }

  onExpandAll() {
    this.expFlag = !this.expFlag;
    if (this.expFlag) {
      this.blogPostTileComponents.forEach(e => e.onReadBtn(true));
      this.expText = 'Close All';
    } else {
      this.blogPostTileComponents.forEach(e => e.onReadBtn(false));
      this.expText =  'Expand All';
    }
  }

  onFavAll(disable?: boolean) {
    if (typeof disable === 'undefined') {
      this.favFlag = !this.favFlag;
    }
    if (this.favFlag) {
      this.blogPostTileComponents.forEach(e => e.onFavBtn(true));
      this.favText = 'Remove All Favories';
    } else {
      this.blogPostTileComponents.forEach(e => e.onFavBtn(false));
      this.favText =  'Favorite All';
    }
  }

}
