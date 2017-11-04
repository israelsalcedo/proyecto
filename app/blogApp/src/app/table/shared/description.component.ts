import {Component,Input,OnChanges} from '@angular/core'

@Component({
    selector: 'cat-description',
    templateUrl: '/description.component.html'
})

export class DescriptionComponent implements OnChanges{
    @Input() cat: {name:'', description: ''};
    ngOnChanges(){
        console.log(this.cat)
       
    }}