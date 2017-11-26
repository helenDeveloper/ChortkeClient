export class StuffTypeBase<T>{

  value:T;
  key: string;
  label: string;
  controlType: string;

  constructor(option : {

    value?: T,
    key?: string,
    label?: string,
    controlType?: string

  } ={})
  {

    this.value = option.value;
    this.key = option.key || '';
    this.label = option.label || '';
    this.controlType = option.controlType || '';

  }
}
