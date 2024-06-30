import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class AppGameComponent implements OnInit {
  gameId: string | null = '';

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.gameId = params.get('id');
      if (this.gameId) {
        this.loadGame(this.gameId);
      }
    });
  }

  loadGame(id: string): void {
    this.loadHtml(id);
  }

  loadHtml(id: string): void {
    const iframe = this.renderer.createElement('iframe');
    iframe.src = `assets/gameofff/${id}/index.html`;
    iframe.width = '100%';
    iframe.height = '600px';
    document.getElementById('gameContainer')?.appendChild(iframe);
  }
}
