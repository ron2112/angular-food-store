import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  @Input()
  visible = false;

  @Input()
  notFoundMessage = "Nothing Found!";

  @Input()
  resetLinkText = "Reset";

  @Input()
  resetLinkRoute = "/";
}
