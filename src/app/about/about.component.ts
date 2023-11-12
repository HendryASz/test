import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  html = './assets/html.svg';
  css = './assets/css.svg';
  js = './assets/javascript.svg';
  bootstrap = './assets/bootstrap.svg';
  angular = './assets/angular.svg';
  api = './assets/api.svg';
  git = './assets/git.svg';
  vsc = './assets/vscode.svg';

  about = 'About me';
  skills = 'Skills';

  constructor() {
    
  }

  ngOnInit(): void {
  }



}
