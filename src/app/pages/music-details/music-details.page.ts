import { MusicService } from 'src/app/services/music.service';
import { Music } from './../../models/music';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.page.html',
  styleUrls: ['./music-details.page.scss'],
})
export class MusicDetailsPage implements OnInit {

  musics: Music = {} as Music;
  constructor(private musicService: MusicService, private activeRoute: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    if(id){
      this.musicService.getMusicById(id).subscribe({
        next: music => this.musics = music
      })
    }
  }



  



}
