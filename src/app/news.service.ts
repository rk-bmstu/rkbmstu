import { Injectable } from '@angular/core';

export class Novelty {
  script : string;
  title : string;
  time : number;
  image : string;
  id : number;

  constructor(obj : Object) {
    for (let key in obj) {
      this[key] = obj[key];
    }
  }
}

@Injectable()
export class NewsService {

  constructor() { }

  getNews() {
    return [
      new Novelty({
        script: "Несколько слов из новости",
        title : "Название новости",
        image : "/assets/img/logo.png",
        id : 1,
        time : 1501268412000
      }),
      new Novelty({
        script: "Несколько слов из новости 3",
        title : "Название новости 3",
        image : "/assets/img/robot.png",
        id : 3,
        time : 1500126842000
      }),
      new Novelty({
        script: "Несколько слов из новости 2",
        title : "Название новости 2",
        image : "https://pp.userapi.com/c637820/v637820922/9d59/3hdPaJrd-Eo.jpg",
        id : 2,
        time : 1500164112000
      })
    ].sort((a,b) => b.time - a.time);
  }

}
