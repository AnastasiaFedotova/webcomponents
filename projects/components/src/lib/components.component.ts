import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main-components',
  template: `
    <p>
      components works!
    </p>
  `,
  styles: [
  ]
})
export class ComponentsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
