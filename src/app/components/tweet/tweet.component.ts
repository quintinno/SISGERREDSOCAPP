import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent implements OnInit {

  @Input("tweetObject") tweetObject: any;

  constructor() { }

  ngOnInit() { }

  parsetweet() {
    this.tweetObject.text = this.tweetObject.text.replace(/\#[a-zA-Z]+/g, "<span class\=\"hightlight\"\>$&<\/span\>");
    this.tweetObject.text = this.tweetObject.text.replace(/\@[a-zA-Z]+/g, "<span class\=\"hightlight\"\>$&<\/span\>");
  }

}
