import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { TopBarComponent } from '../../shared/components/top-bar/top-bar.component';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
@Component({
  selector: 'app-pro-training',
  standalone: true,
  imports: [
    TopBarComponent,
    NavBarComponent,
    FooterComponent,
    ImageModule,
  ],
  templateUrl: './pro-training.component.html',
  styleUrl: './pro-training.component.css',
})
export class ProTrainingComponent {} 
