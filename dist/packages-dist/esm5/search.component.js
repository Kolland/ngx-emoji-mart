/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { EmojiSearch } from './emoji-search.service';
var SearchComponent = /** @class */ (function () {
    function SearchComponent(emojiSearch) {
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
    SearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.autoFocus && this.inputRef) {
            this.inputRef.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.query = '';
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SearchComponent.prototype.handleEnterKey = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.enterKey.emit($event);
        $event.preventDefault();
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.handleChange = /**
     * @return {?}
     */
    function () {
        this.search.emit(this.emojiSearch.search(this.query, this.emojisToShowFilter, this.maxResults, this.include, this.exclude, this.custom));
    };
    SearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-search',
                    template: "\n  <div class=\"emoji-mart-search\">\n    <input #inputRef type=\"text\"\n      (keyup.enter)=\"handleEnterKey($event)\"\n      [placeholder]=\"i18n.search\" [autofocus]=\"autoFocus\"\n      [(ngModel)]=\"query\" (ngModelChange)=\"handleChange()\"\n    />\n  </div>\n  ",
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: EmojiSearch }
    ]; };
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
    return SearchComponent;
}());
export { SearchComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0LyIsInNvdXJjZXMiOlsic2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7SUE0Qm5ELHlCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTswQkFadEIsRUFBRTt5QkFDSCxLQUFLO3VCQUVHLEVBQUU7dUJBQ0YsRUFBRTtzQkFDTixFQUFFO3NCQUVSLElBQUksWUFBWSxFQUFPO3dCQUNyQixJQUFJLFlBQVksRUFBTztxQkFFcEMsRUFBRTtLQUVzQzs7OztJQUVoRCx5Q0FBZTs7O0lBQWY7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3JDO0tBQ0Y7Ozs7SUFDRCwrQkFBSzs7O0lBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUNqQjs7Ozs7SUFDRCx3Q0FBYzs7OztJQUFkLFVBQWUsTUFBYTtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDekI7Ozs7SUFDRCxzQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FDckIsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxNQUFNLENBQ1osQ0FDRixDQUFDO0tBQ0g7O2dCQW5ERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxnUkFRVDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7OztnQkFkUSxXQUFXOzs7NkJBZ0JqQixLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQ0FDTCxLQUFLO3lCQUNMLE1BQU07MkJBQ04sTUFBTTsyQkFDTixTQUFTLFNBQUMsVUFBVTs7MEJBbEN2Qjs7U0F3QmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1vamlTZWFyY2ggfSBmcm9tICcuL2Vtb2ppLXNlYXJjaC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktc2VhcmNoJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoXCI+XG4gICAgPGlucHV0ICNpbnB1dFJlZiB0eXBlPVwidGV4dFwiXG4gICAgICAoa2V5dXAuZW50ZXIpPVwiaGFuZGxlRW50ZXJLZXkoJGV2ZW50KVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiaTE4bi5zZWFyY2hcIiBbYXV0b2ZvY3VzXT1cImF1dG9Gb2N1c1wiXG4gICAgICBbKG5nTW9kZWwpXT1cInF1ZXJ5XCIgKG5nTW9kZWxDaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKClcIlxuICAgIC8+XG4gIDwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG1heFJlc3VsdHMgPSA3NTtcbiAgQElucHV0KCkgYXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGkxOG46IGFueTtcbiAgQElucHV0KCkgaW5jbHVkZTogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgZXhjbHVkZTogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgY3VzdG9tOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBlbW9qaXNUb1Nob3dGaWx0ZXI/OiAoeDogYW55KSA9PiBib29sZWFuO1xuICBAT3V0cHV0KCkgc2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlbnRlcktleSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKCdpbnB1dFJlZicpIHByaXZhdGUgaW5wdXRSZWY/OiBFbGVtZW50UmVmO1xuICBxdWVyeSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW1vamlTZWFyY2g6IEVtb2ppU2VhcmNoKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgJiYgdGhpcy5pbnB1dFJlZikge1xuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGNsZWFyKCkge1xuICAgIHRoaXMucXVlcnkgPSAnJztcbiAgfVxuICBoYW5kbGVFbnRlcktleSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5lbnRlcktleS5lbWl0KCRldmVudCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlKCkge1xuICAgIHRoaXMuc2VhcmNoLmVtaXQoXG4gICAgICB0aGlzLmVtb2ppU2VhcmNoLnNlYXJjaChcbiAgICAgICAgdGhpcy5xdWVyeSxcbiAgICAgICAgdGhpcy5lbW9qaXNUb1Nob3dGaWx0ZXIsXG4gICAgICAgIHRoaXMubWF4UmVzdWx0cyxcbiAgICAgICAgdGhpcy5pbmNsdWRlLFxuICAgICAgICB0aGlzLmV4Y2x1ZGUsXG4gICAgICAgIHRoaXMuY3VzdG9tLFxuICAgICAgKSxcbiAgICApO1xuICB9XG59XG4iXX0=