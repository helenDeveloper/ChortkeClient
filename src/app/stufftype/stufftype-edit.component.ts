import {Component, EventEmitter, Input, OnInit, Output,OnChanges } from "@angular/core";
import {StuffType} from "./base/stufftype";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StuffTypeEnum} from "../eums/stufftypeemum";
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Component({
  selector : 'app-stufftype-edit',
  templateUrl : './stufftype-edit.component.html'

})

export class StuffTypeEditComponent implements OnInit,OnChanges
{

  stuffTypeForm: FormGroup;

  @Input() aStuffType : StuffType;
  @Output() saveOrUpdate = new EventEmitter<StuffType>();


  private sub= new Subject<any>();

  types = StuffTypeEnum;
  keys:any[];
  constructor(private fb : FormBuilder)
  {

    var allkeys = Object.keys(this.types);
    this.keys =allkeys.slice(allkeys.length / 2);
    this.createForm();
this.sub.subscribe(mess => {this.stuffTypeForm.reset()});

  }
  createForm() : void {

    this.stuffTypeForm = this.fb.group({

      label: ['', Validators.required],
      key: ['', Validators.required],
      contentType: ['', Validators.required]


    });

  }

  ngOnChanges() {

    this.stuffTypeForm.reset({

      label: this.aStuffType.label,
      key: this.aStuffType.key,
      contentType: this.aStuffType.contentType

    });

  }

  ngOnInit()
  {}



  revert() {

    // this.ngOnChanges();
this.stuffTypeForm.reset();

  }


  onSubmit() {


    const  formModel =this.stuffTypeForm.value;
    const saveStuffType : StuffType ={label : formModel.label as string,
      key : formModel.key as string,
      contentType: formModel.contentType as string
      };

    this.saveOrUpdate.emit({item :saveStuffType, abev : this.sub});

  }




  /*
   onSaveStuffType() : void {



   this.saveOrUpdate.emit({item : this.stuffTypeModel,su : this.subject});



   }*/




  /*
   @Input() aStuffType : StuffType;

   @Output() saveOrUpdate = new EventEmitter<StuffType>();
   */

  /*
   private subject = new Subject<any>();
   selected = 'string';
   types = StuffTypeEnum;
   keys:any[];

   public stuffTypeModel=new StuffType();

   */
  /*

   this.subject.subscribe(mess => {

   alert('hi buddy!!!!');
   stuffTypeModel.

   });
   */




}
