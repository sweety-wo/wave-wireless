import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DropdownOptions} from '../../constant/dropdown-options';
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, AfterViewInit {
    @ViewChild('searchInput', {static: false}) searchInput: ElementRef;
    @Output() searchChangeEvent = new EventEmitter<any>();

    selectedSearchOption: string;
    searchOptions: any;

    constructor() {
        this.searchOptions = DropdownOptions.searchOptions;
        this.selectedSearchOption = DropdownOptions.searchOptions[0].name;
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.fnBindKeyUpEventForSearchInput();
    }

    fnSearchChange(text) {
        const obj = {
            searchOption: this.selectedSearchOption,
            searchText: text
        };
        this.searchChangeEvent.next(obj);
    }


    fnBindKeyUpEventForSearchInput() {
        fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
            // get value
            map((event: any) => {
                if (event.keyCode === 13) { // search on enter
                    if (event.target.value) {
                        const searchText = event.target.value;

                    }
                } else {
                    return event.target.value;
                }
            })
            // Time in milliseconds between key events
            , debounceTime(500)
            // If previous query is diffent from current
            , distinctUntilChanged()
            // subscription for response
        ).subscribe((text: string) => {
            this.fnSearchChange(text);
        });
    }

    fnSetSearchOption(option) {
        this.selectedSearchOption = option;
    }


}
