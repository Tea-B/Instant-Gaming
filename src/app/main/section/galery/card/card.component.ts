import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() game =  {
    imgUrl: "https://cdn2.unrealengine.com/Unreal+Engine%2Findustry%2Fgames%2FNews_UEWeb_Games_blog_share_img3-1200x630-1fbacc68fcbff51163d2ecf620015252ad841aee.jpg",
    name: "Lorem ipsum dolor sit.",
    price: "20€"
  };

}
