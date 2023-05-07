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

  data = `PopcornMovies is a website that serves millions of users worldwide. With a wide selection of movies from various categories, it is one of the most highly rated sites on the market and offers extremely high-quality content, all in FullHD. From classic films to the latest releases, PopcornMovies offers an amazing entertainment experience for its users. With an easy-to-use interface and intuitive navigation, users can easily find their favorite movies and watch them in high definition. Additionally, the site also offers additional features such as trailers, synopses, and user ratings to help users make an informed decision about what to watch. PopcornMovies is always adding new movies to keep its users up to date with the latest releases and cult classics. Moreover, the site's curation team is always vigilant to ensure that all movies have exceptional image and sound quality.`;

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
