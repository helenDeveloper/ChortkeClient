import {Component, EventEmitter, Input, OnInit, Output,OnChanges } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {Factor} from "../base/factor";


@Component({
  selector : 'app-factor-edit',
  templateUrl : './factor-edit.component.html'

})


export class FactorEditComponent implements OnInit,OnChanges
{


  datePickerConfig = {
    drops: 'down',
    format: 'jYYYY/jMM/jD',
    calendarSystem : 'ECalendarSystem.jalali'
  };

  factorForm: FormGroup;

  @Input() aFactor : Factor;
  @Output() saveOrUpdate = new EventEmitter<any>();


  private sub= new Subject<any>();

  constructor(private fb : FormBuilder)
  {
    // dateObject = moment('1395-11-22','jYYYY,jMM,jDD');
    // dateObject.format('jYYYY/jMM/jD');
this.aFactor= new Factor();

    this.createForm();
    this.sub.subscribe(mess => {this.factorForm.reset()});

  }
  createForm() : void {

    this.factorForm = this.fb.group({

      title: ['', Validators.required],
      price: ['', Validators.required],
      selectedDate : ['']

    });

  }

  ngOnChanges() {

    this.factorForm.reset({

      title: this.aFactor.title,
      price: this.aFactor.price,
      selectedDate : this.aFactor.purchaseDate

    });

  }

  ngOnInit()
  {}
  revert() {

    // this.ngOnChanges();
    this.factorForm.reset();

  }
  onSubmit() {

    const  formModel =this.factorForm.value;
    const saveFactor : Factor ={title : formModel.title as string,
      price : formModel.price as number, purchaseDate : formModel.selectedDate as Date
    };

    this.sho(saveFactor);
    this.saveOrUpdate.emit({item :saveFactor, abev : this.sub});

  }

  private  sho(it : Factor)
  {

    debugger;
alert(it.purchaseDate);
    let ite= it;


  }
}
