import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayList } from './playlist';

@Injectable()
export class PlaylistService {
    url:string = "http://localhost:8000/playlist/index/";
    playList: PlayList[] = new Array();

    constructor(private http: HttpClient) {}

    getAllPlayListData(): PlayList[] {
        this.http.get<PlayList[]>(this.url)
            .subscribe(json => {
                json.forEach(row => {
                    this.playList.push(row);
                    console.log(row);
                });
                console.log(json);
            })
        return this.playList;
    }
}