import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // We add a constructor to the class to the component in this case where we want to use our service.

  // Inside this constructor we pass a property to type of the serviceClass we want to get injected which us LoggingService in this case

  // This small task informs Angular that we need an instance of LoggingService

  // Now that Angular know what we need but it do not know how to provide it so at the @Component decorator we add a property with name providers which takes an array and in that array we just provides the Service Type

  // Now we can access LoggingService in our class

  constructor(private loggingService: LoggingService){

  }


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });

    this.loggingService.logStatusChange(accountStatus)

  }
}
