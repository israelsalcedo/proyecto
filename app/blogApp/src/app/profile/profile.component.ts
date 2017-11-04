import { Component } from "@angular/core";

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html'
})

export class ProfileComponent{
    profiles: any[] =[
        {first_name: 'Israel', last_name:'Salcedo'},
        {first_name: 'Brenda', last_name: 'Quezada'}
    ]
}