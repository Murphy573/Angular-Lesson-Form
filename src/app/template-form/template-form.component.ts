import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateFormComponent implements OnInit {

  model: FormModel;

  constructor() { }

  ngOnInit() {
    this.model = new FormModel('username', 123, '123', '123', 123)
  }

  onSubmit() {
    console.log(this.model);
  }

}

export class FormModel {
  constructor(
    public userName: string,
    public mobile: number,
    public pwd: string,
    public confirmPwd: string,
    public postCode: number
  ){}
}
