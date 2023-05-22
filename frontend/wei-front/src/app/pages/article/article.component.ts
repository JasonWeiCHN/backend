import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor, Toolbar, Validators } from 'ngx-editor';
import jsonDoc from './doc';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'wei-front-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  // editordoc = jsonDoc;

  public editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl({ value: jsonDoc, disabled: false }, Validators.required()),
  });

  // get doc(): AbstractControl {
  //   return this.form.get('editorContent');
  // }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
