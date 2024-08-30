import { Music } from './../../models/music';
import { MusicService } from './../../services/music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  musics: Music[] = []

  constructor(private musicService: MusicService) {

  }
  
  ngOnInit() {
    this.loadMusics()
  }
  loadMusics() {
    this.musicService.getMusics().subscribe({
      next: musics => this.musics = musics
    })
  }

}
