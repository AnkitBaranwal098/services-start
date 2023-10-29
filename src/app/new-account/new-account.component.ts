import { Component} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  

  // We add a constructor to the class to the component in this case where we want to use our service.

  // Inside this constructor we pass a property to type of the serviceClass we want to get injected which us LoggingService in this case

  // This small task informs Angular that we need an instance of LoggingService

  // Now that Angular know what we need but it do not know how to provide it so at the @Component decorator we add a property with name providers which takes an array and in that array we just provides the Service Type

  // Now we can access LoggingService in our class

  constructor(private loggingService: LoggingService, private accountsService: AccountService){
    // here I will subscribe to the statusUpdated event
    this.accountsService.statusUpdated.subscribe((status:string) => alert("New status : "+status));
  }


  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus)

  }
}
