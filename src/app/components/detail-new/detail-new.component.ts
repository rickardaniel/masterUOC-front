import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-detail-new',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './detail-new.component.html',
  styleUrl: './detail-new.component.scss'
})
export class DetailNewComponent {
  newsId:any;
 notice:any;
  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceService
  )
  {
  }

  ngOnInit(){
    console.log('ENTRA');
    
      this.configurarParametros();
  }

  async configurarParametros() {
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        //  this.getByID(params['id'])
         this.getByID(params['id'])
      }
    });
  }

  getByID(id:any){
    this.service.getNewsById( `${id}`).subscribe({
      next: (resp: any) => {
        this.notice=resp;
        console.log('resp', this.notice);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
      },
    })
  }
}
