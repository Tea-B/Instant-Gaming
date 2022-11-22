import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() titulo: string = "Tendencias";

  game1 =  {
    imgUrl: "https://i.guim.co.uk/img/media/c6f7b43fa821d06fe1ab4311e558686529931492/28_0_1200_720/master/1200.jpg?width=700&quality=85&auto=format&fit=max&s=b882423fecb5747ca60dd560cdf2f04e",
    name: "Lorem.",
    price: "100€"
  };

  game2 =  {
    imgUrl: "https://virtualzone.mx/wp-content/uploads/2020/06/brawlhalla-logo.jpg",
    name: "Lorem ipsum dolor sit.",
    price: "55€"
  };

  game3 =  {
    imgUrl: "https://images.cgames.de/images/gamestar/226/gs-free2play_6166034.jpg",
    name: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    price: "79,99€"
  };

}
