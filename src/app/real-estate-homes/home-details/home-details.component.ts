import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from '../../interfaces/home';
import { HomeServiceService } from '../../services/home-service.service';

@Component({
  selector: 'app-home-details',
  standalone: true,
  imports: [],
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.scss'
})
export class HomeDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeServiceService
  ){}

  home: Home = {
    id: "",
    city: "",
    description: "",
    address: "",
    owner_id: "",
    latitude: "",
    longitude: "",
    neighborhood: "",
    photo_url: "",
    price: "",
    size: "",
    title: "",
    year: ""
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const homeId = params["homeId"]

      this.homeService.getHomeDetails(homeId).subscribe(home => {
        this.home = home
        console.log(home)
      })

    })
  }

}
