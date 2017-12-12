import {Component, EventEmitter, Input, OnInit, Output,OnChanges } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {Factor} from "../base/factor";
import * as moment from 'jalali-moment';



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

    let jDate = moment(formModel.selectedDate as Date, 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD'); // 1989/01/24
    let mDate= new Date(jDate);
    alert(mDate.toString());

    const saveFactor : Factor ={title : formModel.title as string,
      price : formModel.price as number, purchaseDate : mDate
    };

    // this.sho(saveFactor);




    this.saveOrUpdate.emit({item :saveFactor, abev : this.sub});

  }

  private  sho(it : Factor)
  {

alert(it.purchaseDate);
    let te = moment('1367/11/04', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD'); // 1989/01/24
    alert(te);
    let fin= new Date(te);
    alert(fin);
    let ite= it;




  }
}
