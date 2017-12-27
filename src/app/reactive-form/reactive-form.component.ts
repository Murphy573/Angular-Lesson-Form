import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formModel: FormGroup = new FormGroup({
      userName: new FormControl('myusername', [
        Validators.required,
        Validators.minLength(4)
      ]),
      mobile: new FormControl(123456),
      userPwd: new FormGroup({
        pwd: new FormControl(123),
        confirmPwd: new FormControl(456)
      }),
      sex: new FormControl('male'),
      education: new FormControl('chuzhong'),
      addresses: new FormArray([
        new FormControl('地址一'),
        new FormControl('地址二'),
      ])
  });

  eduOptions: Array<{value: string, display: string}> = [
    {value: 'xiaoxue', display: '小学'},
    {value: 'chuzhong', display: '初中'},
    {value: 'gaozhong', display: '高中'},
    {value: 'daxue', display: '大学'},
    {value: 'yanjiusheng', display: '研究生'},
  ];

  selectChange() {
    console.log(`下拉框选择的值==>${this.formModel.get('education').value}`);
  }

  onSubmit() {
    console.log(this.formModel.value);
  }

  //假如用户有多个手机号
  mobiles: FormArray = new FormArray([
    new FormControl(123),    new FormControl(456),
    new FormControl(789),
    new FormControl(236),
  ]);

  constructor() { }

  ngOnInit() {
  }

  addAddress() {
    (<FormArray>this.formModel.get('addresses')).push(new FormControl(666))
  }
}
