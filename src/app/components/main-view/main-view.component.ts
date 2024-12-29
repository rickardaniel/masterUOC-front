import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ServiceService } from '../../service/service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [HeaderComponent,CommonModule, HttpClientModule],
  providers:[],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent implements OnInit {
  news:any=[];
  text: string = '';
  maxLength: number = 150;
  isExpanded: boolean = false;
  expandedNewsIds: Set<number> = new Set(); // o string si tus IDs son strings

  constructor
  ( 
    private service: ServiceService,
    private router: Router,
  )
  {

  }
  ngOnInit(): void {
    this. getAllNews();
    
  }


  getAllNews(){
    this.service.getGeneral('news/findAll').subscribe({
      next: (resp: any) => {
        this.news=resp;
        console.log('resp', this.news);
        
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
      },
    })
}
getByID(id:number){
  // this.router.navigateByUrl('/news?id=' + encodeURIComponent(id+' AND 1=1'));
  this.router.navigateByUrl('/news?id=' + encodeURIComponent(id));

}
// this.router.navigateByUrl('/news?id=' + encodeURIComponent(id+' AND SUBSTRING(@@version,1,1)=8'));
// this.router.navigateByUrl('/news?id=' + encodeURIComponent(id+' AND LENGTH(title)5'));

  isTextExpanded(newsId: number): boolean {
    return this.expandedNewsIds.has(newsId);
  }

  toggleText(newsId: number): void {
    if (this.expandedNewsIds.has(newsId)) {
      this.expandedNewsIds.delete(newsId);
    } else {
      this.expandedNewsIds.add(newsId);
    }
  }

  truncateText(text: string): string {
    return text.length > this.maxLength ? text.slice(0, this.maxLength) : text;
  }

  shouldShowButton(text: string): boolean {
    return text.length > this.maxLength;
  }
}
