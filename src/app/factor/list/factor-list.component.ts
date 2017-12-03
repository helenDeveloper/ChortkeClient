import {Component, OnInit} from "@angular/core";
import {FactorService} from "../factor.service";
import {Factor} from "../base/factor";

@Component({

  templateUrl : './factor-list.component.html',
  providers: [FactorService]
})

export class FactorListComponent implements  OnInit{

  factors : Factor[];
  selectedItem: Factor;

  constructor(private  factorServoice : FactorService)
  {

this.selectedItem= new Factor();

  }
  onSelect(fa :Factor) :void {

    this.selectedItem=fa;

  }
  ngOnInit()
  {

    this.factorServoice.getFactors().subscribe(facts => {this.showMess(facts)});


  }


  showMess(facts : Factor[]) : void
  {

    alert(facts);
    const test = facts;

  }

  onSaveOrUpdate(event)
  {



    this.factorServoice.saveOrUpdateFactor(event.item as Factor).subscribe(res => { this.addToList(res,event)});

  }
  private  addToList(res: number,event)
  {
    // this.factors.push(event);
    // event.abev.next();


  }






}
