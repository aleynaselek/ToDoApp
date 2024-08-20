import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  // selector: 'app-root',
  // selector: '.app-root',
  // selector: '#app-root',
  selector: 'app',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo Application';

  todoItem = {
    description: "kahvaltı",
    action: true
  }

  getTitle(){
    return this.title;
  }
}
