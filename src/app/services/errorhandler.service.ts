import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService extends ErrorHandler {

  constructor() {
    super();
  }

  handleError(error: { message: any; zone: any; task: any; }) {
    let date = new Date();

    console.error('There was an error...', {
        timestamp: date.toISOString(),
        message: error.message,
        zone: error.zone,
        task: error.task
    });
}
}
