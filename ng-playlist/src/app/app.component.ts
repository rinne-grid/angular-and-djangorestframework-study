import { Component } from '@angular/core';
import { PlaylistService } from './playlist.service';
import { PlayList} from './playlist';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private playlistService: PlaylistService) {}

  getPlayList() {
    let playList: PlayList[] = this.playlistService.getAllPlayListData();
    console.log(playList);
  }
}
