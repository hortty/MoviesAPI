import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  faInstagram = faInstagram;
  faFacebook  = faFacebook ;
  faTwitter = faTwitter;
  faYoutube = faYoutube;

  data = `PopcornMovies é um site que atende a milhões de usuários no mundo todo. Com uma ampla seleção de filmes de diversas categorias, é um dos sites mais bem avaliados
  do mercado e possui conteúdos de extrema qualidade, todos em FullHD. Desde filmes clássicos até os mais recentes lançamentos, PopcornMovies oferece uma experiência de entretenimento
  incrível para seus usuários.

  Com uma interface fácil de usar e uma navegação intuitiva, os usuários podem facilmente encontrar seus filmes favoritos e assistir em alta definição. Além disso, o site também
  oferece recursos adicionais, como trailers, sinopses e classificações de usuários, para ajudar os usuários a tomar uma decisão informada sobre o que assistir.

  PopcornMovies está sempre adicionando novos filmes para manter seus usuários atualizados com os últimos lançamentos e clássicos cult. Além disso, a equipe de curadoria do site
  está sempre atenta para garantir que todos os filmes possuam uma qualidade de imagem e som excepcionais.`;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '850px',
      data: this.data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Perform delete action
      }
    });
  }

}
