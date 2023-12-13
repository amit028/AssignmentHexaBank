import { Injectable } from '@angular/core';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  ActivePageName: any = 'test';

  openModal(id:any) {
    $('#'+ id).modal('show');
  }

  closeModal(id:any) {
    $('#'+ id).modal('hide');
  }
}
