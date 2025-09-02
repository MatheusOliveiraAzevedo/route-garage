import { Component, input } from '@angular/core';

@Component({
  selector: 'app-image-default',
  templateUrl: './image-default.component.html',
  styleUrl: './image-default.component.scss'
})
export class ImageDefaultComponent {

  urlImage = input.required<string>();
  altImage = input.required<string>();


}
