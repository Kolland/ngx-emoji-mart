/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { EmojiService } from './emoji.service';
/**
 * @record
 */
export function Emoji() { }
function Emoji_tsickle_Closure_declarations() {
    /** @type {?} */
    Emoji.prototype.native;
    /** @type {?} */
    Emoji.prototype.forceSize;
    /** @type {?} */
    Emoji.prototype.tooltip;
    /** @type {?} */
    Emoji.prototype.skin;
    /** @type {?} */
    Emoji.prototype.sheetSize;
    /** @type {?} */
    Emoji.prototype.set;
    /** @type {?} */
    Emoji.prototype.size;
    /** @type {?} */
    Emoji.prototype.emoji;
    /** @type {?} */
    Emoji.prototype.backgroundImageFn;
    /** @type {?|undefined} */
    Emoji.prototype.fallback;
    /** @type {?} */
    Emoji.prototype.emojiOver;
    /** @type {?} */
    Emoji.prototype.emojiLeave;
    /** @type {?} */
    Emoji.prototype.emojiClick;
}
/**
 * @record
 */
export function EmojiEvent() { }
function EmojiEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    EmojiEvent.prototype.emoji;
    /** @type {?} */
    EmojiEvent.prototype.$event;
}
var EmojiComponent = /** @class */ (function () {
    function EmojiComponent(emojiService) {
        var _this = this;
        this.emojiService = emojiService;
        this.skin = 1;
        this.set = 'apple';
        this.sheetSize = 64;
        this.native = false;
        this.forceSize = false;
        this.tooltip = false;
        this.size = 24;
        this.emoji = '';
        this.hideObsolete = false;
        this.emojiOver = new EventEmitter();
        this.emojiLeave = new EventEmitter();
        this.emojiClick = new EventEmitter();
        this.title = '';
        this.custom = false;
        this.SHEET_COLUMNS = 52;
        this.isVisible = true;
        // TODO: replace 4.0.3 w/ dynamic get verison from emoji-datasource in package.json
        this.backgroundImageFn = function (set, sheetSize) {
            return "https://unpkg.com/emoji-datasource-" + _this.set + "@4.0.4/img/" + _this.set + "/sheets-256/" + _this.sheetSize + ".png";
        };
    }
    /**
     * @return {?}
     */
    EmojiComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.emoji) {
            return this.isVisible = false;
        }
        var /** @type {?} */ data = this.getData();
        if (!data) {
            return this.isVisible = false;
        }
        // const children = this.children;
        this.unified = data.native || null;
        if (data.custom) {
            this.custom = data.custom;
        }
        if (!data.unified && !data.custom) {
            return this.isVisible = false;
        }
        if (this.tooltip) {
            this.title = data.short_names[0];
        }
        if (data.obsoleted_by && this.hideObsolete) {
            return this.isVisible = false;
        }
        if (this.native && data.unified && data.native) {
            // hide older emoji before the split into gendered emoji
            this.style = { fontSize: this.size + "px" };
            if (this.forceSize) {
                this.style.display = 'inline-block';
                this.style.width = this.size + "px";
                this.style.height = this.size + "px";
            }
        }
        else if (data.custom) {
            this.style = {
                width: this.size + "px",
                height: this.size + "px",
                display: 'inline-block',
                backgroundImage: "url(" + data.imageUrl + ")",
                backgroundSize: 'contain',
            };
        }
        else {
            var /** @type {?} */ setHasEmoji = true;
            if (data.hidden && data.hidden.includes(this.set)) {
                setHasEmoji = true;
            }
            if (!setHasEmoji) {
                if (this.fallback) {
                    this.style = { fontSize: this.size + "px" };
                    this.unified = this.fallback(data);
                }
                else {
                    return this.isVisible = false;
                }
            }
            else {
                this.style = {
                    width: this.size + "px",
                    height: this.size + "px",
                    display: 'inline-block',
                    backgroundImage: "url(" + this.backgroundImageFn(this.set, this.sheetSize) + ")",
                    backgroundSize: 100 * this.SHEET_COLUMNS + "%",
                    backgroundPosition: this.getPosition(),
                };
            }
        }
        return this.isVisible = true;
    };
    /**
     * @return {?}
     */
    EmojiComponent.prototype.getPosition = /**
     * @return {?}
     */
    function () {
        var _a = tslib_1.__read(/** @type {?} */ ((this.getData())).sheet, 2), sheet_x = _a[0], sheet_y = _a[1];
        var /** @type {?} */ multiply = 100 / (this.SHEET_COLUMNS - 1);
        return multiply * sheet_x + "% " + multiply * sheet_y + "%";
    };
    /**
     * @return {?}
     */
    EmojiComponent.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.emojiService.getData(this.emoji, this.skin, this.set);
    };
    /**
     * @return {?}
     */
    EmojiComponent.prototype.getSanitizedData = /**
     * @return {?}
     */
    function () {
        return this.emojiService.getSanitizedData(this.emoji, this.skin, this.set);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EmojiComponent.prototype.handleClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var /** @type {?} */ emoji = /** @type {?} */ ((this.getSanitizedData()));
        this.emojiClick.emit({ emoji: emoji, $event: $event });
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EmojiComponent.prototype.handleOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var /** @type {?} */ emoji = /** @type {?} */ ((this.getSanitizedData()));
        this.emojiOver.emit({ emoji: emoji, $event: $event });
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    EmojiComponent.prototype.handleLeave = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var /** @type {?} */ emoji = /** @type {?} */ ((this.getSanitizedData()));
        this.emojiLeave.emit({ emoji: emoji, $event: $event });
    };
    EmojiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoji',
                    template: "\n  <span *ngIf=\"isVisible\"\n    (click)=\"handleClick($event)\"\n    (mouseenter)=\"handleOver($event)\"\n    (mouseleave)=\"handleLeave($event)\"\n    [title]=\"title\"\n    class=\"emoji-mart-emoji\"\n    [class.emoji-mart-emoji-native]=\"native\"\n    [class.emoji-mart-emoji-custom]=\"custom\">\n    <span [ngStyle]=\"style\">\n      {{ unified }}\n      <ng-content></ng-content>\n    </span>\n  </span>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    EmojiComponent.ctorParameters = function () { return [
        { type: EmojiService }
    ]; };
    EmojiComponent.propDecorators = {
        skin: [{ type: Input }],
        set: [{ type: Input }],
        sheetSize: [{ type: Input }],
        native: [{ type: Input }],
        forceSize: [{ type: Input }],
        tooltip: [{ type: Input }],
        size: [{ type: Input }],
        emoji: [{ type: Input }],
        fallback: [{ type: Input }],
        hideObsolete: [{ type: Input }],
        emojiOver: [{ type: Output }],
        emojiLeave: [{ type: Output }],
        emojiClick: [{ type: Output }],
        backgroundImageFn: [{ type: Input }]
    };
    return EmojiComponent;
}());
export { EmojiComponent };
function EmojiComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    EmojiComponent.prototype.skin;
    /** @type {?} */
    EmojiComponent.prototype.set;
    /** @type {?} */
    EmojiComponent.prototype.sheetSize;
    /** @type {?} */
    EmojiComponent.prototype.native;
    /** @type {?} */
    EmojiComponent.prototype.forceSize;
    /** @type {?} */
    EmojiComponent.prototype.tooltip;
    /** @type {?} */
    EmojiComponent.prototype.size;
    /** @type {?} */
    EmojiComponent.prototype.emoji;
    /** @type {?} */
    EmojiComponent.prototype.fallback;
    /** @type {?} */
    EmojiComponent.prototype.hideObsolete;
    /** @type {?} */
    EmojiComponent.prototype.emojiOver;
    /** @type {?} */
    EmojiComponent.prototype.emojiLeave;
    /** @type {?} */
    EmojiComponent.prototype.emojiClick;
    /** @type {?} */
    EmojiComponent.prototype.style;
    /** @type {?} */
    EmojiComponent.prototype.title;
    /** @type {?} */
    EmojiComponent.prototype.unified;
    /** @type {?} */
    EmojiComponent.prototype.custom;
    /** @type {?} */
    EmojiComponent.prototype.SHEET_COLUMNS;
    /** @type {?} */
    EmojiComponent.prototype.isVisible;
    /** @type {?} */
    EmojiComponent.prototype.backgroundImageFn;
    /** @type {?} */
    EmojiComponent.prototype.emojiService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppLyIsInNvdXJjZXMiOlsiZW1vamkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNFN0Msd0JBQW9CLFlBQTBCO1FBQTlDLGlCQUFrRDtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBYztvQkExQmYsQ0FBQzttQkFDSCxPQUFPO3lCQUNLLEVBQUU7c0JBQ1IsS0FBSzt5QkFDQyxLQUFLO3VCQUNULEtBQUs7b0JBQ1gsRUFBRTtxQkFDQSxFQUFFOzRCQUVYLEtBQUs7eUJBQ2EsSUFBSSxZQUFZLEVBQUU7MEJBQ2hCLElBQUksWUFBWSxFQUFFOzBCQUNsQixJQUFJLFlBQVksRUFBRTtxQkFFdEQsRUFBRTtzQkFFRCxLQUFLOzZCQUNFLEVBQUU7eUJBQ04sSUFBSTs7aUNBR2dDLFVBQUMsR0FBVyxFQUFFLFNBQWlCO1lBQzdFLE9BQUEsd0NBQXNDLEtBQUksQ0FBQyxHQUFHLG1CQUM1QyxLQUFJLENBQUMsR0FBRyxvQkFDSyxLQUFJLENBQUMsU0FBUyxTQUFNO1FBRm5DLENBRW1DO0tBRWE7Ozs7SUFFbEQsb0NBQVc7OztJQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDL0I7UUFDRCxxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzVC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SUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztLQUN6Qzs7Ozs7SUFFRCxtQ0FBVTs7OztJQUFWLFVBQVcsTUFBYTtRQUN0QixxQkFBTSxLQUFLLHNCQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7S0FDeEM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE1BQWE7UUFDdkIscUJBQU0sS0FBSyxzQkFBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO0tBQ3pDOztnQkFsSkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsaWFBY1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQTFDUSxZQUFZOzs7dUJBNENsQixLQUFLO3NCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLOzRCQUNMLE1BQU07NkJBQ04sTUFBTTs2QkFDTixNQUFNO29DQVFOLEtBQUs7O3lCQTFFUjs7U0FxRGEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamlEYXRhIH0gZnJvbSAnLi9kYXRhL2RhdGEuaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBFbW9qaVNlcnZpY2UgfSBmcm9tICcuL2Vtb2ppLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtb2ppIHtcbiAgbmF0aXZlOiBib29sZWFuO1xuICBmb3JjZVNpemU6IGJvb2xlYW47XG4gIHRvb2x0aXA6IGJvb2xlYW47XG4gIHNraW46IDEgfCAyIHwgMyB8IDQgfCA1IHwgNjtcbiAgc2hlZXRTaXplOiAxNiB8IDIwIHwgMzIgfCA2NDtcbiAgc2V0OiAnYXBwbGUnIHwgJ2dvb2dsZScgfCAndHdpdHRlcicgfCAnZW1vamlvbmUnIHwgJ21lc3NlbmdlcicgfCAnZmFjZWJvb2snIHwgJyc7XG4gIHNpemU6IG51bWJlcjtcbiAgZW1vamk6IHN0cmluZyB8IEVtb2ppRGF0YTtcbiAgYmFja2dyb3VuZEltYWdlRm46IChzZXQ6IHN0cmluZywgc2hlZXRTaXplOiBFbW9qaVsnc2hlZXRTaXplJ10pID0+IHN0cmluZztcbiAgZmFsbGJhY2s/OiAoZGF0YTogYW55KSA9PiBzdHJpbmc7XG4gIGVtb2ppT3ZlcjogRXZlbnRFbWl0dGVyPEVtb2ppRXZlbnQ+O1xuICBlbW9qaUxlYXZlOiBFdmVudEVtaXR0ZXI8RW1vamlFdmVudD47XG4gIGVtb2ppQ2xpY2s6IEV2ZW50RW1pdHRlcjxFbW9qaUV2ZW50Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFbW9qaUV2ZW50IHtcbiAgZW1vamk6IEVtb2ppRGF0YTtcbiAgJGV2ZW50OiBFdmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWVtb2ppJyxcbiAgdGVtcGxhdGU6IGBcbiAgPHNwYW4gKm5nSWY9XCJpc1Zpc2libGVcIlxuICAgIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCJcbiAgICAobW91c2VlbnRlcik9XCJoYW5kbGVPdmVyKCRldmVudClcIlxuICAgIChtb3VzZWxlYXZlKT1cImhhbmRsZUxlYXZlKCRldmVudClcIlxuICAgIFt0aXRsZV09XCJ0aXRsZVwiXG4gICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcbiAgICBbY2xhc3MuZW1vamktbWFydC1lbW9qaS1uYXRpdmVdPVwibmF0aXZlXCJcbiAgICBbY2xhc3MuZW1vamktbWFydC1lbW9qaS1jdXN0b21dPVwiY3VzdG9tXCI+XG4gICAgPHNwYW4gW25nU3R5bGVdPVwic3R5bGVcIj5cbiAgICAgIHt7IHVuaWZpZWQgfX1cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L3NwYW4+XG4gIDwvc3Bhbj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBFbW9qaUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgRW1vamkge1xuICBASW5wdXQoKSBza2luOiBFbW9qaVsnc2tpbiddID0gMTtcbiAgQElucHV0KCkgc2V0OiBFbW9qaVsnc2V0J10gPSAnYXBwbGUnO1xuICBASW5wdXQoKSBzaGVldFNpemU6IEVtb2ppWydzaGVldFNpemUnXSA9IDY0O1xuICBASW5wdXQoKSBuYXRpdmU6IEVtb2ppWyduYXRpdmUnXSA9IGZhbHNlO1xuICBASW5wdXQoKSBmb3JjZVNpemU6IEVtb2ppWydmb3JjZVNpemUnXSA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwOiBFbW9qaVsndG9vbHRpcCddID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNpemU6IEVtb2ppWydzaXplJ10gPSAyNDtcbiAgQElucHV0KCkgZW1vamk6IEVtb2ppWydlbW9qaSddID0gJyc7XG4gIEBJbnB1dCgpIGZhbGxiYWNrPzogRW1vamlbJ2ZhbGxiYWNrJ107XG4gIEBJbnB1dCgpIGhpZGVPYnNvbGV0ZSA9IGZhbHNlO1xuICBAT3V0cHV0KCkgZW1vamlPdmVyOiBFbW9qaVsnZW1vamlPdmVyJ10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlbW9qaUxlYXZlOiBFbW9qaVsnZW1vamlMZWF2ZSddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZW1vamlDbGljazogRW1vamlbJ2Vtb2ppQ2xpY2snXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc3R5bGU6IGFueTtcbiAgdGl0bGUgPSAnJztcbiAgdW5pZmllZD86IHN0cmluZyB8IG51bGw7XG4gIGN1c3RvbSA9IGZhbHNlO1xuICBTSEVFVF9DT0xVTU5TID0gNTI7XG4gIGlzVmlzaWJsZSA9IHRydWU7XG4gIC8vIFRPRE86IHJlcGxhY2UgNC4wLjMgdy8gZHluYW1pYyBnZXQgdmVyaXNvbiBmcm9tIGVtb2ppLWRhdGFzb3VyY2UgaW4gcGFja2FnZS5qc29uXG4gIEBJbnB1dCgpXG4gIGJhY2tncm91bmRJbWFnZUZuOiBFbW9qaVsnYmFja2dyb3VuZEltYWdlRm4nXSA9IChzZXQ6IHN0cmluZywgc2hlZXRTaXplOiBudW1iZXIpID0+XG4gICAgYGh0dHBzOi8vdW5wa2cuY29tL2Vtb2ppLWRhdGFzb3VyY2UtJHt0aGlzLnNldH1ANC4wLjQvaW1nLyR7XG4gICAgICB0aGlzLnNldFxuICAgIH0vc2hlZXRzLTI1Ni8ke3RoaXMuc2hlZXRTaXplfS5wbmdgXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbW9qaVNlcnZpY2U6IEVtb2ppU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAoIXRoaXMuZW1vamkpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gY29uc3QgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuICAgIHRoaXMudW5pZmllZCA9IGRhdGEubmF0aXZlIHx8IG51bGw7XG4gICAgaWYgKGRhdGEuY3VzdG9tKSB7XG4gICAgICB0aGlzLmN1c3RvbSA9IGRhdGEuY3VzdG9tO1xuICAgIH1cbiAgICBpZiAoIWRhdGEudW5pZmllZCAmJiAhZGF0YS5jdXN0b20pIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICB0aGlzLnRpdGxlID0gZGF0YS5zaG9ydF9uYW1lc1swXTtcbiAgICB9XG4gICAgaWYgKGRhdGEub2Jzb2xldGVkX2J5ICYmIHRoaXMuaGlkZU9ic29sZXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYXRpdmUgJiYgZGF0YS51bmlmaWVkICYmIGRhdGEubmF0aXZlKSB7XG4gICAgICAvLyBoaWRlIG9sZGVyIGVtb2ppIGJlZm9yZSB0aGUgc3BsaXQgaW50byBnZW5kZXJlZCBlbW9qaVxuICAgICAgdGhpcy5zdHlsZSA9IHsgZm9udFNpemU6IGAke3RoaXMuc2l6ZX1weGAgfTtcblxuICAgICAgaWYgKHRoaXMuZm9yY2VTaXplKSB7XG4gICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgICAgICB0aGlzLnN0eWxlLndpZHRoID0gYCR7dGhpcy5zaXplfXB4YDtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLnNpemV9cHhgO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGF0YS5jdXN0b20pIHtcbiAgICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBgJHt0aGlzLnNpemV9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAke3RoaXMuc2l6ZX1weGAsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkYXRhLmltYWdlVXJsfSlgLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHNldEhhc0Vtb2ppID0gdHJ1ZTtcbiAgICAgIGlmIChkYXRhLmhpZGRlbiAmJiBkYXRhLmhpZGRlbi5pbmNsdWRlcyh0aGlzLnNldCkpIHtcbiAgICAgICAgc2V0SGFzRW1vamkgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNldEhhc0Vtb2ppKSB7XG4gICAgICAgIGlmICh0aGlzLmZhbGxiYWNrKSB7XG4gICAgICAgICAgdGhpcy5zdHlsZSA9IHsgZm9udFNpemU6IGAke3RoaXMuc2l6ZX1weGAgfTtcbiAgICAgICAgICB0aGlzLnVuaWZpZWQgPSB0aGlzLmZhbGxiYWNrKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLnNpemV9cHhgLFxuICAgICAgICAgIGhlaWdodDogYCR7dGhpcy5zaXplfXB4YCxcbiAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt0aGlzLmJhY2tncm91bmRJbWFnZUZuKFxuICAgICAgICAgICAgdGhpcy5zZXQsXG4gICAgICAgICAgICB0aGlzLnNoZWV0U2l6ZSxcbiAgICAgICAgICApfSlgLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBgJHsxMDAgKiB0aGlzLlNIRUVUX0NPTFVNTlN9JWAsXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICBjb25zdCBbc2hlZXRfeCwgc2hlZXRfeV0gPSB0aGlzLmdldERhdGEoKSEuc2hlZXQ7XG4gICAgY29uc3QgbXVsdGlwbHkgPSAxMDAgLyAodGhpcy5TSEVFVF9DT0xVTU5TIC0gMSk7XG4gICAgcmV0dXJuIGAke211bHRpcGx5ICogc2hlZXRfeH0lICR7bXVsdGlwbHkgKiBzaGVldF95fSVgO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5lbW9qaVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmVtb2ppLCB0aGlzLnNraW4sIHRoaXMuc2V0KTtcbiAgfVxuXG4gIGdldFNhbml0aXplZERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1vamlTZXJ2aWNlLmdldFNhbml0aXplZERhdGEodGhpcy5lbW9qaSwgdGhpcy5za2luLCB0aGlzLnNldCk7XG4gIH1cblxuICBoYW5kbGVDbGljaygkZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgZW1vamkgPSB0aGlzLmdldFNhbml0aXplZERhdGEoKSE7XG4gICAgdGhpcy5lbW9qaUNsaWNrLmVtaXQoeyBlbW9qaSwgJGV2ZW50IH0pO1xuICB9XG5cbiAgaGFuZGxlT3ZlcigkZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgZW1vamkgPSB0aGlzLmdldFNhbml0aXplZERhdGEoKSE7XG4gICAgdGhpcy5lbW9qaU92ZXIuZW1pdCh7IGVtb2ppLCAkZXZlbnQgfSk7XG4gIH1cblxuICBoYW5kbGVMZWF2ZSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgZW1vamkgPSB0aGlzLmdldFNhbml0aXplZERhdGEoKSE7XG4gICAgdGhpcy5lbW9qaUxlYXZlLmVtaXQoeyBlbW9qaSwgJGV2ZW50IH0pO1xuICB9XG59XG4iXX0=