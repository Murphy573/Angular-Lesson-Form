import { Component, OnInit } from '@angular/core';
import {FormModel} from '../template-form/template-form.component';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rebuild-reactive-form',
  templateUrl: './rebuild-reactive-form.component.html',
  styleUrls: ['./rebuild-reactive-form.component.css']
})
export class RebuildReactiveFormComponent implements OnInit {
  eduOptions: Array<{value: string, display: string}> = [
    {value: 'xiaoxue', display: '小学'},
    {value: 'chuzhong', display: '初中'},
    {value: 'gaozhong', display: '高中'},
    {value: 'daxue', display: '大学'},
    {value: 'yanjiusheng', display: '研究生'},
  ];

  model: FormModel;
  formModel: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.model = new FormModel('username', 123, '123', '123', 123, 'male', 'chuzhong')
    this.initFormGroup();
  }
  initFormGroup() {
    this.formModel = this.fb.group({
      userName: [this.model.userName, [
          Validators.required,
          Validators.minLength(4)
        ]
      ],
      mobile: [this.model.mobile],
      userPwd: this.fb.group({
        pwd: [this.model.pwd],
        confirmPwd: [this.model.confirmPwd]
      }),
      sex: [this.model.sex],
      education: [this.model.education],
      addresses: this.fb.array([
        ['地址一'],
        ['地址二'],
      ])
    });
  }

  selectChange() {
    console.log(`下拉框选择的值==>${this.formModel.get('education').value}`);
  }

  onSubmit() {
    console.log(this.formModel.value);
    //console.log(this.model);
  }

  addAddress() {
    (<FormArray>this.formModel.get('addresses')).push(this.fb.control(666))
  }
}
