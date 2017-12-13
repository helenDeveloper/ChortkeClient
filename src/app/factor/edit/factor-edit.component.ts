import {Component, EventEmitter, Input, OnInit, Output,OnChanges } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import {Factor} from "../base/factor";
import * as moment from 'jalali-moment';
import {StuffTypeService} from "../../stufftype/stuffType.service";
import {StuffType} from "../../stufftype/base/stufftype";



@Component({
  selector : 'app-factor-edit',
  templateUrl : './factor-edit.component.html',
  providers : [StuffTypeService]

})


export class FactorEditComponent implements OnInit,OnChanges
{

  stuffTypeList : StuffType[] =[];


  datePickerConfig = {
    drops: 'down',
    format: 'jYYYY/jMM/jD',
    calendarSystem : 'ECalendarSystem.jalali'
  };

  factorForm: FormGroup;

  @Input() aFactor : Factor;
  @Output() saveOrUpdate = new EventEmitter<any>();


  private sub= new Subject<any>();

  constructor(private fb : FormBuilder, private stuffTypeService :StuffTypeService)
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
      selectedDate : [''],
      stuffType: ['', Validators.required]

    });

  }

  ngOnChanges() {

    let jmoment = moment(this.aFactor.purchaseDate);

    this.factorForm.reset({

      title: this.aFactor.title,
      price: this.aFactor.price,
      selectedDate : jmoment.format("jYYYY/jMM/jDD"),
      stuffType : this.aFactor.StuffTypes
    });

  }

  ngOnInit()
  {

this.stuffTypeService.getStuffTypes().subs


  }
  revert() {

    // this.ngOnChanges();
    this.factorForm.reset();

  }
  onSubmit() {



    const  formModel =this.factorForm.value;

    // alert(formModel.selectedDate);
    let jDate = moment(formModel.selectedDate, 'jYYYY/jMM/jDD').locale('en').format('YYYY/MM/DD'); // 1989/01/24
    // alert(jDate);
    let mDate= new Date(jDate);
    // alert(mDate.toString());

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
