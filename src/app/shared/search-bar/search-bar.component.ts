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

    filterObj: any;
    searchObj: any;
    selectedSearchOption: string;
    searchOptions: any;
    searchText: any = '';

    constructor() {
        this.searchOptions = DropdownOptions.searchOptions;
        this.selectedSearchOption = DropdownOptions.searchOptions[0].name;
        this.filterObj = {
            CRITICAL_HEALTH: true,
            ATTENTION_HEALTH: true,
            OK_HEALTH: false,
            isFromFilter: true
        };
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.fnBindKeyUpEventForSearchInput();
    }

    fnSearchChange(text) {
        if (text) {
            this.searchText = text;
            this.searchObj = {
                searchOption: this.selectedSearchOption,
                searchText: text,
                isGeoSearch: true
            };
            this.searchChangeEvent.next(this.searchObj);
        }

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

    fnResetSearch() {
        this.searchInput.nativeElement.value = this.searchText = '';
        this.searchObj = {
            searchOption: this.selectedSearchOption,
            searchText: this.searchText,
            isGeoSearch: false
        };
        this.searchChangeEvent.next(this.searchObj);
    }


    fnSetSearchOption(option) {
        this.searchInput.nativeElement.value = this.searchText = '';
        // Emit search event only when option changes from Custom to Geo-Search
        if (this.selectedSearchOption === 'Custom' && option === 'Geo-Search') {
            this.searchObj = {
                isDropdownChanged: true
            };
            this.searchChangeEvent.next(this.searchObj);
        }
        this.selectedSearchOption = option;

    }

    fnToggleSearchFilter(option) {
        this.filterObj[option] = !this.filterObj[option];
        this.searchChangeEvent.next(this.filterObj);
    }
}
