import { Component, OnInit } from '@angular/core';
import { Home } from '../../interfaces/home';
import { HomeServiceService } from '../../services/home-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-homes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-homes.component.html',
  styleUrl: './all-homes.component.scss'
})
export class AllHomesComponent implements OnInit {
  homes: Home[] = []

  constructor(
    private homesService: HomeServiceService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.homesService.getAllHomes().subscribe(homes => {
      console.log(homes)
      this.homes = homes
    })
  }

  redirectToDetails(homeId: string) {
    this.router.navigate(['/home-details/' + homeId])
  }
}
