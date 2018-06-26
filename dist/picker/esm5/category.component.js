/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { EmojiService } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { EmojiFrequentlyService } from './emoji-frequently.service';
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(ref, emojiService, frequently) {
        this.ref = ref;
        this.emojiService = emojiService;
        this.frequently = frequently;
        this.hasStickyPosition = true;
        this.name = '';
        this.native = true;
        this.perLine = 9;
        this.recent = [];
        this.custom = [];
        this.hideObsolete = true;
        this.emojiOver = new EventEmitter();
        this.emojiLeave = new EventEmitter();
        this.emojiClick = new EventEmitter();
        this.containerStyles = {};
        this.labelStyles = {};
        this.labelSpanStyles = {};
        this.margin = 0;
        this.minMargin = 0;
        this.maxMargin = 0;
        this.top = 0;
    }
    /**
     * @return {?}
     */
    CategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.emojis = this.getEmojis();
        if (!this.emojis) {
            this.containerStyles = { display: 'none' };
        }
        if (!this.hasStickyPosition) {
            this.labelStyles = { height: 28 };
            this.labelSpanStyles = { position: 'absolute' };
        }
    };
    /**
     * @return {?}
     */
    CategoryComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.parent = /** @type {?} */ ((this.container)).nativeElement.parentNode.parentNode;
        this.memoizeSize();
    };
    /**
     * @return {?}
     */
    CategoryComponent.prototype.memoizeSize = /**
     * @return {?}
     */
    function () {
        var _a = /** @type {?} */ ((this.container)).nativeElement.getBoundingClientRect(), top = _a.top, height = _a.height;
        var /** @type {?} */ parentTop = /** @type {?} */ ((this.parent)).getBoundingClientRect().top;
        var /** @type {?} */ labelHeight = /** @type {?} */ ((this.label)).nativeElement.getBoundingClientRect().height;
        this.top = top - parentTop + /** @type {?} */ ((this.parent)).scrollTop;
        if (height === 0) {
            this.maxMargin = 0;
        }
        else {
            this.maxMargin = height - labelHeight;
        }
    };
    /**
     * @param {?} scrollTop
     * @return {?}
     */
    CategoryComponent.prototype.handleScroll = /**
     * @param {?} scrollTop
     * @return {?}
     */
    function (scrollTop) {
        var /** @type {?} */ margin = scrollTop - this.top;
        margin = margin < this.minMargin ? this.minMargin : margin;
        margin = margin > this.maxMargin ? this.maxMargin : margin;
        if (margin === this.margin) {
            return false;
        }
        if (!this.hasStickyPosition) {
            /** @type {?} */ ((this.label)).nativeElement.style.top = margin + "px";
        }
        this.margin = margin;
        return true;
    };
    /**
     * @return {?}
     */
    CategoryComponent.prototype.getEmojis = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.name === 'Recent') {
            var /** @type {?} */ frequentlyUsed = this.recent || this.frequently.get(this.perLine);
            if (!frequentlyUsed || !frequentlyUsed.length) {
                frequentlyUsed = this.frequently.get(this.perLine);
            }
            if (frequentlyUsed.length) {
                this.emojis = frequentlyUsed
                    .map(function (id) {
                    var /** @type {?} */ emoji = _this.custom.filter(function (e) { return e.id === id; })[0];
                    if (emoji) {
                        return emoji;
                    }
                    return id;
                })
                    .filter(function (id) { return !!_this.emojiService.getData(id); });
            }
            if ((!this.emojis || this.emojis.length === 0) && frequentlyUsed.length > 0) {
                return null;
            }
        }
        if (this.emojis) {
            this.emojis = this.emojis.slice(0);
        }
        return this.emojis;
    };
    /**
     * @param {?} display
     * @return {?}
     */
    CategoryComponent.prototype.updateDisplay = /**
     * @param {?} display
     * @return {?}
     */
    function (display) {
        this.containerStyles.display = display;
        this.getEmojis();
        this.ref.detectChanges();
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    CategoryComponent.prototype.trackById = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item;
    };
    CategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: '[emoji-category]',
                    template: "\n  <div\n    #container\n    class=\"emoji-mart-category\"\n    [class.emoji-mart-no-results]=\"emojis && !emojis.length\"\n    [ngStyle]=\"containerStyles\"\n  >\n    <div\n      [ngStyle]=\"labelStyles\"\n      [attr.data-name]=\"name\"\n      class=\"emoji-mart-category-label\"\n    >\n      <span style=\"labelSpanStyles\" #label>\n        {{ i18n.categories[id] }}\n      </span>\n    </div>\n\n    <ng-template [ngIf]=\"emojis\">\n      <ngx-emoji\n        *ngFor=\"let emoji of emojis; trackBy: trackById\"\n        [emoji]=\"emoji\"\n        [size]=\"emojiSize\"\n        [skin]=\"emojiSkin\"\n        [native]=\"emojiNative\"\n        [set]=\"emojiSet\"\n        [sheetSize]=\"emojiSheetSize\"\n        [forceSize]=\"emojiForceSize\"\n        [tooltip]=\"emojiTooltip\"\n        [hideObsolete]=\"hideObsolete\"\n        (emojiOver)=\"emojiOver.emit($event)\"\n        (emojiLeave)=\"emojiLeave.emit($event)\"\n        (emojiClick)=\"emojiClick.emit($event)\"\n      >\n      </ngx-emoji>\n    </ng-template>\n\n    <div *ngIf=\"emojis && !emojis.length\">\n      <div>\n        <ngx-emoji\n          emoji=\"sleuth_or_spy\"\n          size=\"38\"\n          [skin]=\"emojiSkin\"\n          [native]=\"emojiNative\"\n          [set]=\"emojiSet\"\n          [sheetSize]=\"emojiSheetSize\"\n          [forceSize]=\"emojiForceSize\"\n          [tooltip]=\"emojiTooltip\"\n          >\n        </ngx-emoji>\n      </div>\n\n      <div className=\"emoji-mart-no-results-label\">\n        {{ i18n.notfound }}\n      </div>\n    </div>\n\n  </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    CategoryComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: EmojiService },
        { type: EmojiFrequentlyService }
    ]; };
    CategoryComponent.propDecorators = {
        emojis: [{ type: Input }],
        hasStickyPosition: [{ type: Input }],
        name: [{ type: Input }],
        native: [{ type: Input }],
        perLine: [{ type: Input }],
        recent: [{ type: Input }],
        custom: [{ type: Input }],
        i18n: [{ type: Input }],
        id: [{ type: Input }],
        hideObsolete: [{ type: Input }],
        emojiNative: [{ type: Input }],
        emojiSkin: [{ type: Input }],
        emojiSize: [{ type: Input }],
        emojiSet: [{ type: Input }],
        emojiSheetSize: [{ type: Input }],
        emojiForceSize: [{ type: Input }],
        emojiTooltip: [{ type: Input }],
        emojiOver: [{ type: Output }],
        emojiLeave: [{ type: Output }],
        emojiClick: [{ type: Output }],
        container: [{ type: ViewChild, args: ['container',] }],
        label: [{ type: ViewChild, args: ['label',] }]
    };
    return CategoryComponent;
}());
export { CategoryComponent };
function CategoryComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CategoryComponent.prototype.emojis;
    /** @type {?} */
    CategoryComponent.prototype.hasStickyPosition;
    /** @type {?} */
    CategoryComponent.prototype.name;
    /** @type {?} */
    CategoryComponent.prototype.native;
    /** @type {?} */
    CategoryComponent.prototype.perLine;
    /** @type {?} */
    CategoryComponent.prototype.recent;
    /** @type {?} */
    CategoryComponent.prototype.custom;
    /** @type {?} */
    CategoryComponent.prototype.i18n;
    /** @type {?} */
    CategoryComponent.prototype.id;
    /** @type {?} */
    CategoryComponent.prototype.hideObsolete;
    /** @type {?} */
    CategoryComponent.prototype.emojiNative;
    /** @type {?} */
    CategoryComponent.prototype.emojiSkin;
    /** @type {?} */
    CategoryComponent.prototype.emojiSize;
    /** @type {?} */
    CategoryComponent.prototype.emojiSet;
    /** @type {?} */
    CategoryComponent.prototype.emojiSheetSize;
    /** @type {?} */
    CategoryComponent.prototype.emojiForceSize;
    /** @type {?} */
    CategoryComponent.prototype.emojiTooltip;
    /** @type {?} */
    CategoryComponent.prototype.emojiOver;
    /** @type {?} */
    CategoryComponent.prototype.emojiLeave;
    /** @type {?} */
    CategoryComponent.prototype.emojiClick;
    /** @type {?} */
    CategoryComponent.prototype.container;
    /** @type {?} */
    CategoryComponent.prototype.label;
    /** @type {?} */
    CategoryComponent.prototype.containerStyles;
    /** @type {?} */
    CategoryComponent.prototype.labelStyles;
    /** @type {?} */
    CategoryComponent.prototype.labelSpanStyles;
    /** @type {?} */
    CategoryComponent.prototype.parent;
    /** @type {?} */
    CategoryComponent.prototype.margin;
    /** @type {?} */
    CategoryComponent.prototype.minMargin;
    /** @type {?} */
    CategoryComponent.prototype.maxMargin;
    /** @type {?} */
    CategoryComponent.prototype.top;
    /** @type {?} */
    CategoryComponent.prototype.ref;
    /** @type {?} */
    CategoryComponent.prototype.emojiService;
    /** @type {?} */
    CategoryComponent.prototype.frequently;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvIiwic291cmNlcyI6WyJjYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBUyxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7SUFpR2xFLDJCQUNTLEtBQ0MsY0FDQTtRQUZELFFBQUcsR0FBSCxHQUFHO1FBQ0YsaUJBQVksR0FBWixZQUFZO1FBQ1osZUFBVSxHQUFWLFVBQVU7aUNBakNTLElBQUk7b0JBQ2pCLEVBQUU7c0JBQ0EsSUFBSTt1QkFDSCxDQUFDO3NCQUNRLEVBQUU7c0JBQ0wsRUFBRTs0QkFHSCxJQUFJO3lCQVFjLElBQUksWUFBWSxFQUFFOzBCQUNoQixJQUFJLFlBQVksRUFBRTswQkFDbEIsSUFBSSxZQUFZLEVBQUU7K0JBR3ZDLEVBQUU7MkJBQ04sRUFBRTsrQkFDRSxFQUFFO3NCQUVoQixDQUFDO3lCQUNFLENBQUM7eUJBQ0QsQ0FBQzttQkFDUCxDQUFDO0tBTUg7Ozs7SUFFSixvQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUUvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDNUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO1NBQ2pEO0tBQ0Y7Ozs7SUFFRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxzQkFBRyxJQUFJLENBQUMsU0FBUyxHQUFFLGFBQWEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7OztJQUNELHVDQUFXOzs7SUFBWDtRQUNFLG9GQUNFLFlBQUcsRUFDSCxrQkFBTSxDQUNrRDtRQUMxRCxxQkFBTSxTQUFTLHNCQUFHLElBQUksQ0FBQyxNQUFNLEdBQUUscUJBQXFCLEdBQUcsR0FBRyxDQUFDO1FBQzNELHFCQUFNLFdBQVcsc0JBQUcsSUFBSSxDQUFDLEtBQUssR0FBRSxhQUFhLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDO1FBRTdFLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFNBQVMsc0JBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRSxTQUFTLENBQUM7UUFFcEQsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FDcEI7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxHQUFHLFdBQVcsQ0FBQztTQUN2QztLQUNGOzs7OztJQUNELHdDQUFZOzs7O0lBQVosVUFBYSxTQUFpQjtRQUM1QixxQkFBSSxNQUFNLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDM0QsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFM0QsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQzsrQkFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRSxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBTSxNQUFNLE9BQUk7U0FDcEQ7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7Ozs7SUFFRCxxQ0FBUzs7O0lBQVQ7UUFBQSxpQkE2QkM7UUE1QkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNCLHFCQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0RSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYztxQkFDekIsR0FBRyxDQUFDLFVBQUEsRUFBRTtvQkFDTCxxQkFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzt3QkFDVixNQUFNLENBQUMsS0FBSyxDQUFDO3FCQUNkO29CQUVELE1BQU0sQ0FBQyxFQUFFLENBQUM7aUJBQ1gsQ0FBQztxQkFDRCxNQUFNLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQzthQUNsRDtZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUUsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEI7Ozs7O0lBQ0QseUNBQWE7Ozs7SUFBYixVQUFjLE9BQTJCO1FBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMxQjs7Ozs7O0lBQ0QscUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUFhLEVBQUUsSUFBUztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7O2dCQTVMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLG9oREF5RFQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQTNFQyxpQkFBaUI7Z0JBVUgsWUFBWTtnQkFDbkIsc0JBQXNCOzs7eUJBa0U1QixLQUFLO29DQUNMLEtBQUs7dUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsTUFBTTs2QkFDTixNQUFNOzZCQUNOLE1BQU07NEJBQ04sU0FBUyxTQUFDLFdBQVc7d0JBQ3JCLFNBQVMsU0FBQyxPQUFPOzs0QkFyR3BCOztTQStFYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtb2ppLCBFbW9qaVNlcnZpY2UgfSBmcm9tICdAY3RybC9uZ3gtZW1vamktbWFydC9uZ3gtZW1vamknO1xuaW1wb3J0IHsgRW1vamlGcmVxdWVudGx5U2VydmljZSB9IGZyb20gJy4vZW1vamktZnJlcXVlbnRseS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2Vtb2ppLWNhdGVnb3J5XScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXZcbiAgICAjY29udGFpbmVyXG4gICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5XCJcbiAgICBbY2xhc3MuZW1vamktbWFydC1uby1yZXN1bHRzXT1cImVtb2ppcyAmJiAhZW1vamlzLmxlbmd0aFwiXG4gICAgW25nU3R5bGVdPVwiY29udGFpbmVyU3R5bGVzXCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIFtuZ1N0eWxlXT1cImxhYmVsU3R5bGVzXCJcbiAgICAgIFthdHRyLmRhdGEtbmFtZV09XCJuYW1lXCJcbiAgICAgIGNsYXNzPVwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiXG4gICAgPlxuICAgICAgPHNwYW4gc3R5bGU9XCJsYWJlbFNwYW5TdHlsZXNcIiAjbGFiZWw+XG4gICAgICAgIHt7IGkxOG4uY2F0ZWdvcmllc1tpZF0gfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJlbW9qaXNcIj5cbiAgICAgIDxuZ3gtZW1vamlcbiAgICAgICAgKm5nRm9yPVwibGV0IGVtb2ppIG9mIGVtb2ppczsgdHJhY2tCeTogdHJhY2tCeUlkXCJcbiAgICAgICAgW2Vtb2ppXT1cImVtb2ppXCJcbiAgICAgICAgW3NpemVdPVwiZW1vamlTaXplXCJcbiAgICAgICAgW3NraW5dPVwiZW1vamlTa2luXCJcbiAgICAgICAgW25hdGl2ZV09XCJlbW9qaU5hdGl2ZVwiXG4gICAgICAgIFtzZXRdPVwiZW1vamlTZXRcIlxuICAgICAgICBbc2hlZXRTaXplXT1cImVtb2ppU2hlZXRTaXplXCJcbiAgICAgICAgW2ZvcmNlU2l6ZV09XCJlbW9qaUZvcmNlU2l6ZVwiXG4gICAgICAgIFt0b29sdGlwXT1cImVtb2ppVG9vbHRpcFwiXG4gICAgICAgIFtoaWRlT2Jzb2xldGVdPVwiaGlkZU9ic29sZXRlXCJcbiAgICAgICAgKGVtb2ppT3Zlcik9XCJlbW9qaU92ZXIuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgKGVtb2ppTGVhdmUpPVwiZW1vamlMZWF2ZS5lbWl0KCRldmVudClcIlxuICAgICAgICAoZW1vamlDbGljayk9XCJlbW9qaUNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L25neC1lbW9qaT5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPGRpdiAqbmdJZj1cImVtb2ppcyAmJiAhZW1vamlzLmxlbmd0aFwiPlxuICAgICAgPGRpdj5cbiAgICAgICAgPG5neC1lbW9qaVxuICAgICAgICAgIGVtb2ppPVwic2xldXRoX29yX3NweVwiXG4gICAgICAgICAgc2l6ZT1cIjM4XCJcbiAgICAgICAgICBbc2tpbl09XCJlbW9qaVNraW5cIlxuICAgICAgICAgIFtuYXRpdmVdPVwiZW1vamlOYXRpdmVcIlxuICAgICAgICAgIFtzZXRdPVwiZW1vamlTZXRcIlxuICAgICAgICAgIFtzaGVldFNpemVdPVwiZW1vamlTaGVldFNpemVcIlxuICAgICAgICAgIFtmb3JjZVNpemVdPVwiZW1vamlGb3JjZVNpemVcIlxuICAgICAgICAgIFt0b29sdGlwXT1cImVtb2ppVG9vbHRpcFwiXG4gICAgICAgICAgPlxuICAgICAgICA8L25neC1lbW9qaT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtb2ppLW1hcnQtbm8tcmVzdWx0cy1sYWJlbFwiPlxuICAgICAgICB7eyBpMThuLm5vdGZvdW5kIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGVtb2ppcz86IGFueVtdIHwgbnVsbDtcbiAgQElucHV0KCkgaGFzU3RpY2t5UG9zaXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSBuYW1lID0gJyc7XG4gIEBJbnB1dCgpIG5hdGl2ZSA9IHRydWU7XG4gIEBJbnB1dCgpIHBlckxpbmUgPSA5O1xuICBASW5wdXQoKSByZWNlbnQ6IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIGN1c3RvbTogYW55W10gPSBbXTtcbiAgQElucHV0KCkgaTE4bjogYW55O1xuICBASW5wdXQoKSBpZDogYW55O1xuICBASW5wdXQoKSBoaWRlT2Jzb2xldGUgPSB0cnVlO1xuICBASW5wdXQoKSBlbW9qaU5hdGl2ZT86IEVtb2ppWyduYXRpdmUnXTtcbiAgQElucHV0KCkgZW1vamlTa2luPzogRW1vamlbJ3NraW4nXTtcbiAgQElucHV0KCkgZW1vamlTaXplPzogRW1vamlbJ3NpemUnXTtcbiAgQElucHV0KCkgZW1vamlTZXQ/OiBFbW9qaVsnc2V0J107XG4gIEBJbnB1dCgpIGVtb2ppU2hlZXRTaXplPzogRW1vamlbJ3NoZWV0U2l6ZSddO1xuICBASW5wdXQoKSBlbW9qaUZvcmNlU2l6ZT86IEVtb2ppWydmb3JjZVNpemUnXTtcbiAgQElucHV0KCkgZW1vamlUb29sdGlwPzogRW1vamlbJ3Rvb2x0aXAnXTtcbiAgQE91dHB1dCgpIGVtb2ppT3ZlcjogRW1vamlbJ2Vtb2ppT3ZlciddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZW1vamlMZWF2ZTogRW1vamlbJ2Vtb2ppTGVhdmUnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVtb2ppQ2xpY2s6IEVtb2ppWydlbW9qaUNsaWNrJ10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lcj86IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2xhYmVsJykgbGFiZWw/OiBFbGVtZW50UmVmO1xuICBjb250YWluZXJTdHlsZXM6IGFueSA9IHt9O1xuICBsYWJlbFN0eWxlczogYW55ID0ge307XG4gIGxhYmVsU3BhblN0eWxlczogYW55ID0ge307XG4gIHBhcmVudD86IEVsZW1lbnQ7XG4gIG1hcmdpbiA9IDA7XG4gIG1pbk1hcmdpbiA9IDA7XG4gIG1heE1hcmdpbiA9IDA7XG4gIHRvcCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbW9qaVNlcnZpY2U6IEVtb2ppU2VydmljZSxcbiAgICBwcml2YXRlIGZyZXF1ZW50bHk6IEVtb2ppRnJlcXVlbnRseVNlcnZpY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVtb2ppcyA9IHRoaXMuZ2V0RW1vamlzKCk7XG5cbiAgICBpZiAoIXRoaXMuZW1vamlzKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lclN0eWxlcyA9IHsgZGlzcGxheTogJ25vbmUnIH07XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmhhc1N0aWNreVBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmxhYmVsU3R5bGVzID0geyBoZWlnaHQ6IDI4IH07XG4gICAgICB0aGlzLmxhYmVsU3BhblN0eWxlcyA9IHsgcG9zaXRpb246ICdhYnNvbHV0ZScgfTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSB0aGlzLmNvbnRhaW5lciEubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgdGhpcy5tZW1vaXplU2l6ZSgpO1xuICB9XG4gIG1lbW9pemVTaXplKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRvcCxcbiAgICAgIGhlaWdodCxcbiAgICB9ID0gdGhpcy5jb250YWluZXIhLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcGFyZW50VG9wID0gdGhpcy5wYXJlbnQhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwhLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgdGhpcy50b3AgPSB0b3AgLSBwYXJlbnRUb3AgKyB0aGlzLnBhcmVudCEuc2Nyb2xsVG9wO1xuXG4gICAgaWYgKGhlaWdodCA9PT0gMCkge1xuICAgICAgdGhpcy5tYXhNYXJnaW4gPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1heE1hcmdpbiA9IGhlaWdodCAtIGxhYmVsSGVpZ2h0O1xuICAgIH1cbiAgfVxuICBoYW5kbGVTY3JvbGwoc2Nyb2xsVG9wOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBsZXQgbWFyZ2luID0gc2Nyb2xsVG9wIC0gdGhpcy50b3A7XG4gICAgbWFyZ2luID0gbWFyZ2luIDwgdGhpcy5taW5NYXJnaW4gPyB0aGlzLm1pbk1hcmdpbiA6IG1hcmdpbjtcbiAgICBtYXJnaW4gPSBtYXJnaW4gPiB0aGlzLm1heE1hcmdpbiA/IHRoaXMubWF4TWFyZ2luIDogbWFyZ2luO1xuXG4gICAgaWYgKG1hcmdpbiA9PT0gdGhpcy5tYXJnaW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGFzU3RpY2t5UG9zaXRpb24pIHtcbiAgICAgIHRoaXMubGFiZWwhLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7bWFyZ2lufXB4YDtcbiAgICB9XG5cbiAgICB0aGlzLm1hcmdpbiA9IG1hcmdpbjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldEVtb2ppcygpIHtcbiAgICBpZiAodGhpcy5uYW1lID09PSAnUmVjZW50Jykge1xuICAgICAgbGV0IGZyZXF1ZW50bHlVc2VkID0gdGhpcy5yZWNlbnQgfHwgdGhpcy5mcmVxdWVudGx5LmdldCh0aGlzLnBlckxpbmUpO1xuICAgICAgaWYgKCFmcmVxdWVudGx5VXNlZCB8fCAhZnJlcXVlbnRseVVzZWQubGVuZ3RoKSB7XG4gICAgICAgIGZyZXF1ZW50bHlVc2VkID0gdGhpcy5mcmVxdWVudGx5LmdldCh0aGlzLnBlckxpbmUpO1xuICAgICAgfVxuICAgICAgaWYgKGZyZXF1ZW50bHlVc2VkLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmVtb2ppcyA9IGZyZXF1ZW50bHlVc2VkXG4gICAgICAgICAgLm1hcChpZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbW9qaSA9IHRoaXMuY3VzdG9tLmZpbHRlcigoZTogYW55KSA9PiBlLmlkID09PSBpZClbMF07XG4gICAgICAgICAgICBpZiAoZW1vamkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGVtb2ppO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZmlsdGVyKGlkID0+ICEhdGhpcy5lbW9qaVNlcnZpY2UuZ2V0RGF0YShpZCkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoKCF0aGlzLmVtb2ppcyB8fCB0aGlzLmVtb2ppcy5sZW5ndGggPT09IDApICYmIGZyZXF1ZW50bHlVc2VkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZW1vamlzKSB7XG4gICAgICB0aGlzLmVtb2ppcyA9IHRoaXMuZW1vamlzLnNsaWNlKDApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmVtb2ppcztcbiAgfVxuICB1cGRhdGVEaXNwbGF5KGRpc3BsYXk6ICdub25lJyB8ICdpbmhlcml0Jykge1xuICAgIHRoaXMuY29udGFpbmVyU3R5bGVzLmRpc3BsYXkgPSBkaXNwbGF5O1xuICAgIHRoaXMuZ2V0RW1vamlzKCk7XG4gICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG4gIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpIHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxufVxuIl19