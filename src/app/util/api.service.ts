import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private https: HttpClient) { }

  getData(taskUrl: any) {
    return this.https
      .get<any>(taskUrl)
      .pipe(
        catchError((error) => {
          this.HandleException(error);
          throw error;
        })
      );
  }

  NotifySuccess(Message: any) {
    swal.fire({
      icon: 'success',
      title: "Success!",
      text: Message.message,
    })
  }
  NotifyError(Message: any) {
    swal.fire({
      icon: 'error',
      title: "Error!",
      text: Message.message,
    })
  }

  HandleException(Exception: HttpErrorResponse) {
      if (Exception.status == 404) {
        return
      }
      else if (Exception.error instanceof Error) {
        this.NotifyError("Sorry, error occured while connecting server:" + Exception.error.message);
      } else {
        this.NotifyError(
          Exception.error.message
        );
      }
  }
}
