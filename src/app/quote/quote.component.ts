import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title='Life Quotes'
  quotes:Quote[]=[
    new Quote(1,'Melonie','Lifestyle',' Learn as if you will live forever, live like you will die tomorrow. ','Mahatma Gandhi ', new Date(1996/2/24),0,0),
    new Quote(2,'Ayidiana','Motivation',' When you change your thoughts, remember to also change your world ','Norman Vincent Peale ',new Date(2017,8,8),0,0)
  ];
  get sortQuotes(){
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id=arraysize+1;
    quote.completeDate=new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isReady:any, index:any){
    if (isReady){
      let toDelete= confirm("Please confirm You want to delete!")
      if(toDelete){
        this.quotes.splice(index,1);
      }
    }
  }
  displayInfo(index:number){
    this.quotes[index].showInfo=!this.quotes[index].showInfo;
  }
  

  constructor() {}

  ngOnInit(): void {
  }

}
