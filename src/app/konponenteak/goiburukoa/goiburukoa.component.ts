import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-goiburukoa',
  templateUrl: './goiburukoa.component.html',
  styleUrls: ['./goiburukoa.component.scss'],
  standalone: false
})
export class GoiburukoaComponent  implements OnInit {

  @Input() titulo: string = '';
  
  constructor() { }

  ngOnInit() {}

}
