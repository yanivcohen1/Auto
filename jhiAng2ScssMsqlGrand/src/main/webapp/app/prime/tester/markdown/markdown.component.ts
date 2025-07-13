import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-markdown,[Markdown]',
  templateUrl: './markdown.component.html',
})
export class MarkdownComponent implements OnInit {

  public textData = `## My Table
  | Tables   |      Are      |  Cool |
  |----------|:-------------:|------:|
  | col 1 is |  left-aligned | $1600 |
  | col 2 is |    centered   |   $12 |
  | col 3 is | right-aligned |    $1 |

  [I'm an inline-style link for google](https://www.google.com)
  `;

  constructor() { }

  ngOnInit() {
  }

}
