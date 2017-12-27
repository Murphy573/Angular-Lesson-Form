import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormModel} from '../template-form/template-form.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  eduOptions: Array<{value: string, display: string}> = [
    {value: 'xiaoxue', display: '小学'},
    {value: 'chuzhong', display: '初中'},
    {value: 'gaozhong', display: '高中'},
    {value: 'daxue', display: '大学'},
    {value: 'yanjiusheng', display: '研究生'},
  ];

  //假如用户有多个手机号
  mobiles: FormArray = new FormArray([
    new FormControl(123),    new FormControl(456),
    new FormControl(789),
    new FormControl(236),
  ]);

  model: FormModel;
  formModel: FormGroup;

  constructor() { }

  ngOnInit() {
    this.model = new FormModel('username', 123, '123', '123', 123, 'male', 'chuzhong')
    this.initFormGroup();
  }

  initFormGroup() {
    this.formModel = new FormGroup({
      userName: new FormControl(this.model.userName, [
        Validators.required,
        Validators.minLength(4)
      ]),
      mobile: new FormControl(this.model.mobile),
      userPwd: new FormGroup({
        pwd: new FormControl(this.model.pwd),
        confirmPwd: new FormControl(this.model.confirmPwd)
      }),
      sex: new FormControl(this.model.sex),
      education: new FormControl(this.model.education),
      addresses: new FormArray([
        new FormControl('地址一'),
        new FormControl('地址二'),
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
    (<FormArray>this.formModel.get('addresses')).push(new FormControl(666))
  }
}
