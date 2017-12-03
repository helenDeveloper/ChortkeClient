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

  factorForm: FormGroup;

  @Input() aFactor : Factor;
  @Output() saveOrUpdate = new EventEmitter<any>();


  private sub= new Subject<any>();

  constructor(private fb : FormBuilder)
  {
this.aFactor= new Factor();

    this.createForm();
    this.sub.subscribe(mess => {this.factorForm.reset()});

  }
  createForm() : void {

    this.factorForm = this.fb.group({

      title: ['', Validators.required],
      price: ['', Validators.required]


    });

  }

  ngOnChanges() {

    this.factorForm.reset({

      title: this.aFactor.title,
      price: this.aFactor.price

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
      price : formModel.price as number
    };

    this.saveOrUpdate.emit({item :saveFactor, abev : this.sub});

  }

}
