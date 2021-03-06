/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { EmojiSearch } from './emoji-search.service';
export class SearchComponent {
    /**
     * @param {?} emojiSearch
     */
    constructor(emojiSearch) {
        this.emojiSearch = emojiSearch;
        this.maxResults = 75;
        this.autoFocus = false;
        this.include = [];
        this.exclude = [];
        this.custom = [];
        this.search = new EventEmitter();
        this.enterKey = new EventEmitter();
        this.query = '';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autoFocus && this.inputRef) {
            this.inputRef.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.query = '';
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleEnterKey($event) {
        this.enterKey.emit($event);
        $event.preventDefault();
    }
    /**
     * @return {?}
     */
    handleChange() {
        this.search.emit(this.emojiSearch.search(this.query, this.emojisToShowFilter, this.maxResults, this.include, this.exclude, this.custom));
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-search',
                template: `
  <div class="emoji-mart-search">
    <input #inputRef type="text"
      (keyup.enter)="handleEnterKey($event)"
      [placeholder]="i18n.search" [autofocus]="autoFocus"
      [(ngModel)]="query" (ngModelChange)="handleChange()"
    />
  </div>
  `,
                preserveWhitespaces: false,
            },] },
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: EmojiSearch }
];
SearchComponent.propDecorators = {
    maxResults: [{ type: Input }],
    autoFocus: [{ type: Input }],
    i18n: [{ type: Input }],
    include: [{ type: Input }],
    exclude: [{ type: Input }],
    custom: [{ type: Input }],
    emojisToShowFilter: [{ type: Input }],
    search: [{ type: Output }],
    enterKey: [{ type: Output }],
    inputRef: [{ type: ViewChild, args: ['inputRef',] }]
};
function SearchComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SearchComponent.prototype.maxResults;
    /** @type {?} */
    SearchComponent.prototype.autoFocus;
    /** @type {?} */
    SearchComponent.prototype.i18n;
    /** @type {?} */
    SearchComponent.prototype.include;
    /** @type {?} */
    SearchComponent.prototype.exclude;
    /** @type {?} */
    SearchComponent.prototype.custom;
    /** @type {?} */
    SearchComponent.prototype.emojisToShowFilter;
    /** @type {?} */
    SearchComponent.prototype.search;
    /** @type {?} */
    SearchComponent.prototype.enterKey;
    /** @type {?} */
    SearchComponent.prototype.inputRef;
    /** @type {?} */
    SearchComponent.prototype.query;
    /** @type {?} */
    SearchComponent.prototype.emojiSearch;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0LyIsInNvdXJjZXMiOlsic2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQWVyRCxNQUFNOzs7O0lBYUosWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7MEJBWnRCLEVBQUU7eUJBQ0gsS0FBSzt1QkFFRyxFQUFFO3VCQUNGLEVBQUU7c0JBQ04sRUFBRTtzQkFFUixJQUFJLFlBQVksRUFBTzt3QkFDckIsSUFBSSxZQUFZLEVBQU87cUJBRXBDLEVBQUU7S0FFc0M7Ozs7SUFFaEQsZUFBZTtRQUNiLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDckM7S0FDRjs7OztJQUNELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUNqQjs7Ozs7SUFDRCxjQUFjLENBQUMsTUFBYTtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDekI7Ozs7SUFDRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLGtCQUFrQixFQUN2QixJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsTUFBTSxDQUNaLENBQ0YsQ0FBQztLQUNIOzs7WUFuREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsbUJBQW1CLEVBQUUsS0FBSzthQUMzQjs7OztZQWRRLFdBQVc7Ozt5QkFnQmpCLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLO3NCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO2lDQUNMLEtBQUs7cUJBQ0wsTUFBTTt1QkFDTixNQUFNO3VCQUNOLFNBQVMsU0FBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbW9qaVNlYXJjaCB9IGZyb20gJy4vZW1vamktc2VhcmNoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1zZWFyY2gnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1zZWFyY2hcIj5cbiAgICA8aW5wdXQgI2lucHV0UmVmIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIChrZXl1cC5lbnRlcik9XCJoYW5kbGVFbnRlcktleSgkZXZlbnQpXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJpMThuLnNlYXJjaFwiIFthdXRvZm9jdXNdPVwiYXV0b0ZvY3VzXCJcbiAgICAgIFsobmdNb2RlbCldPVwicXVlcnlcIiAobmdNb2RlbENoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoKVwiXG4gICAgLz5cbiAgPC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbWF4UmVzdWx0cyA9IDc1O1xuICBASW5wdXQoKSBhdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgaTE4bjogYW55O1xuICBASW5wdXQoKSBpbmNsdWRlOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBleGNsdWRlOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBjdXN0b206IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGVtb2ppc1RvU2hvd0ZpbHRlcj86ICh4OiBhbnkpID0+IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBzZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVudGVyS2V5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0UmVmJykgcHJpdmF0ZSBpbnB1dFJlZj86IEVsZW1lbnRSZWY7XG4gIHF1ZXJ5ID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbW9qaVNlYXJjaDogRW1vamlTZWFyY2gpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyAmJiB0aGlzLmlucHV0UmVmKSB7XG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5xdWVyeSA9ICcnO1xuICB9XG4gIGhhbmRsZUVudGVyS2V5KCRldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmVudGVyS2V5LmVtaXQoJGV2ZW50KTtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgdGhpcy5zZWFyY2guZW1pdChcbiAgICAgIHRoaXMuZW1vamlTZWFyY2guc2VhcmNoKFxuICAgICAgICB0aGlzLnF1ZXJ5LFxuICAgICAgICB0aGlzLmVtb2ppc1RvU2hvd0ZpbHRlcixcbiAgICAgICAgdGhpcy5tYXhSZXN1bHRzLFxuICAgICAgICB0aGlzLmluY2x1ZGUsXG4gICAgICAgIHRoaXMuZXhjbHVkZSxcbiAgICAgICAgdGhpcy5jdXN0b20sXG4gICAgICApLFxuICAgICk7XG4gIH1cbn1cbiJdfQ==