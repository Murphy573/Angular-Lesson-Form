/**
 * write by @pengfei.li
 */
import {FormControl} from '@angular/forms';

export function validateMobile(control: FormControl): any {
    let _reg: RegExp = /^13[0-9]{1}[0-9]{8}|^15[9]{1}[0-9]{8}/;
    let valid = _reg.test(control.value);
    return valid ? null : {mobileError: true, msg: '手机号格式不正确'}
}
