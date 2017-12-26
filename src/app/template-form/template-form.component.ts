import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {

  model: FormModel;

  eduOptions: Array<{value: string, display: string}> = [
    {value: 'xiaoxue', display: '小学'},
    {value: 'chuzhong', display: '初中'},
    {value: 'gaozhong', display: '高中'},
    {value: 'daxue', display: '大学'},
    {value: 'yanjiusheng', display: '研究生'},
  ];

  constructor() { }

  ngOnInit() {
    this.model = new FormModel('username', 123, '123', '123', 123, '', '')
  }

  onSubmit() {
    console.log(this.model);
  }

  selectChange() {
    console.log(`下拉框选择的值==>${this.model.education}`);
  }

}

export class FormModel {
  constructor(
    public userName: string,
    public mobile: number,
    public pwd: string,
    public confirmPwd: string,
    public postCode: number,
    public sex: string,
    public education: string
  ){}
}
