import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {

   @Input() post: BlogPost;
   fullSummary: string;
   readflag?: boolean;
   readText: string;
   favText: string;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, ['150']);
    this.readText = 'Read';
    this.favText = 'Add To Favorite';
  }

  onReadBtn(expAll?: boolean) {
    if (typeof expAll === 'undefined') {
      this.readflag = !this.readflag;
    } else if (expAll) {
      this.readflag = true;
    } else {
       this.readflag = false;
    }

    if (this.readflag) {
      this.post.summary = this.fullSummary;
      this.readText = 'Close';
    } else {
      this.post.summary = this.truncatePipe.transform(this.post.summary, ['150']);
      this.readText = 'Read';
    }
  }

  onFavBtn(favAll?: boolean) {
    if (typeof favAll === 'undefined') {
      this.post.isFav = !this.post.isFav;
    } else if (favAll) {
      this.post.isFav = true;
    } else {
       this.post.isFav = false;
    }

    if (this.post.isFav) {
      this.favText = 'Remove Favorite';
    } else {
      this.favText = 'Add To Favorite';
    }
  }

}
