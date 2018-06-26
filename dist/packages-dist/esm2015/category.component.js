/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { EmojiService } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { EmojiFrequentlyService } from './emoji-frequently.service';
export class CategoryComponent {
    /**
     * @param {?} ref
     * @param {?} emojiService
     * @param {?} frequently
     */
    constructor(ref, emojiService, frequently) {
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
    ngOnInit() {
        this.emojis = this.getEmojis();
        if (!this.emojis) {
            this.containerStyles = { display: 'none' };
        }
        if (!this.hasStickyPosition) {
            this.labelStyles = { height: 28 };
            this.labelSpanStyles = { position: 'absolute' };
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.parent = /** @type {?} */ ((this.container)).nativeElement.parentNode.parentNode;
        this.memoizeSize();
    }
    /**
     * @return {?}
     */
    memoizeSize() {
        const { top, height, } = /** @type {?} */ ((this.container)).nativeElement.getBoundingClientRect();
        const /** @type {?} */ parentTop = /** @type {?} */ ((this.parent)).getBoundingClientRect().top;
        const /** @type {?} */ labelHeight = /** @type {?} */ ((this.label)).nativeElement.getBoundingClientRect().height;
        this.top = top - parentTop + /** @type {?} */ ((this.parent)).scrollTop;
        if (height === 0) {
            this.maxMargin = 0;
        }
        else {
            this.maxMargin = height - labelHeight;
        }
    }
    /**
     * @param {?} scrollTop
     * @return {?}
     */
    handleScroll(scrollTop) {
        let /** @type {?} */ margin = scrollTop - this.top;
        margin = margin < this.minMargin ? this.minMargin : margin;
        margin = margin > this.maxMargin ? this.maxMargin : margin;
        if (margin === this.margin) {
            return false;
        }
        if (!this.hasStickyPosition) {
            /** @type {?} */ ((this.label)).nativeElement.style.top = `${margin}px`;
        }
        this.margin = margin;
        return true;
    }
    /**
     * @return {?}
     */
    getEmojis() {
        if (this.name === 'Recent') {
            let /** @type {?} */ frequentlyUsed = this.recent || this.frequently.get(this.perLine);
            if (!frequentlyUsed || !frequentlyUsed.length) {
                frequentlyUsed = this.frequently.get(this.perLine);
            }
            if (frequentlyUsed.length) {
                this.emojis = frequentlyUsed
                    .map(id => {
                    const /** @type {?} */ emoji = this.custom.filter((e) => e.id === id)[0];
                    if (emoji) {
                        return emoji;
                    }
                    return id;
                })
                    .filter(id => !!this.emojiService.getData(id));
            }
            if ((!this.emojis || this.emojis.length === 0) && frequentlyUsed.length > 0) {
                return null;
            }
        }
        if (this.emojis) {
            this.emojis = this.emojis.slice(0);
        }
        return this.emojis;
    }
    /**
     * @param {?} display
     * @return {?}
     */
    updateDisplay(display) {
        this.containerStyles.display = display;
        this.getEmojis();
        this.ref.detectChanges();
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackById(index, item) {
        return item;
    }
}
CategoryComponent.decorators = [
    { type: Component, args: [{
                selector: '[emoji-category]',
                template: `
  <div
    #container
    class="emoji-mart-category"
    [class.emoji-mart-no-results]="emojis && !emojis.length"
    [ngStyle]="containerStyles"
  >
    <div
      [ngStyle]="labelStyles"
      [attr.data-name]="name"
      class="emoji-mart-category-label"
    >
      <span style="labelSpanStyles" #label>
        {{ i18n.categories[id] }}
      </span>
    </div>

    <ng-template [ngIf]="emojis">
      <ngx-emoji
        *ngFor="let emoji of emojis; trackBy: trackById"
        [emoji]="emoji"
        [size]="emojiSize"
        [skin]="emojiSkin"
        [native]="emojiNative"
        [set]="emojiSet"
        [sheetSize]="emojiSheetSize"
        [forceSize]="emojiForceSize"
        [tooltip]="emojiTooltip"
        [hideObsolete]="hideObsolete"
        (emojiOver)="emojiOver.emit($event)"
        (emojiLeave)="emojiLeave.emit($event)"
        (emojiClick)="emojiClick.emit($event)"
      >
      </ngx-emoji>
    </ng-template>

    <div *ngIf="emojis && !emojis.length">
      <div>
        <ngx-emoji
          emoji="sleuth_or_spy"
          size="38"
          [skin]="emojiSkin"
          [native]="emojiNative"
          [set]="emojiSet"
          [sheetSize]="emojiSheetSize"
          [forceSize]="emojiForceSize"
          [tooltip]="emojiTooltip"
          >
        </ngx-emoji>
      </div>

      <div className="emoji-mart-no-results-label">
        {{ i18n.notfound }}
      </div>
    </div>

  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
            },] },
];
/** @nocollapse */
CategoryComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: EmojiService },
    { type: EmojiFrequentlyService }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvIiwic291cmNlcyI6WyJjYXRlZ29yeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBUyxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWlFcEUsTUFBTTs7Ozs7O0lBZ0NKLFlBQ1MsS0FDQyxjQUNBO1FBRkQsUUFBRyxHQUFILEdBQUc7UUFDRixpQkFBWSxHQUFaLFlBQVk7UUFDWixlQUFVLEdBQVYsVUFBVTtpQ0FqQ1MsSUFBSTtvQkFDakIsRUFBRTtzQkFDQSxJQUFJO3VCQUNILENBQUM7c0JBQ1EsRUFBRTtzQkFDTCxFQUFFOzRCQUdILElBQUk7eUJBUWMsSUFBSSxZQUFZLEVBQUU7MEJBQ2hCLElBQUksWUFBWSxFQUFFOzBCQUNsQixJQUFJLFlBQVksRUFBRTsrQkFHdkMsRUFBRTsyQkFDTixFQUFFOytCQUNFLEVBQUU7c0JBRWhCLENBQUM7eUJBQ0UsQ0FBQzt5QkFDRCxDQUFDO21CQUNQLENBQUM7S0FNSDs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUUvQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDNUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFB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RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeURUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7O1lBM0VDLGlCQUFpQjtZQVVILFlBQVk7WUFDbkIsc0JBQXNCOzs7cUJBa0U1QixLQUFLO2dDQUNMLEtBQUs7bUJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7aUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsTUFBTTt5QkFDTixNQUFNO3lCQUNOLE1BQU07d0JBQ04sU0FBUyxTQUFDLFdBQVc7b0JBQ3JCLFNBQVMsU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbW9qaSwgRW1vamlTZXJ2aWNlIH0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCB7IEVtb2ppRnJlcXVlbnRseVNlcnZpY2UgfSBmcm9tICcuL2Vtb2ppLWZyZXF1ZW50bHkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tlbW9qaS1jYXRlZ29yeV0nLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2XG4gICAgI2NvbnRhaW5lclxuICAgIGNsYXNzPVwiZW1vamktbWFydC1jYXRlZ29yeVwiXG4gICAgW2NsYXNzLmVtb2ppLW1hcnQtbm8tcmVzdWx0c109XCJlbW9qaXMgJiYgIWVtb2ppcy5sZW5ndGhcIlxuICAgIFtuZ1N0eWxlXT1cImNvbnRhaW5lclN0eWxlc1wiXG4gID5cbiAgICA8ZGl2XG4gICAgICBbbmdTdHlsZV09XCJsYWJlbFN0eWxlc1wiXG4gICAgICBbYXR0ci5kYXRhLW5hbWVdPVwibmFtZVwiXG4gICAgICBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIlxuICAgID5cbiAgICAgIDxzcGFuIHN0eWxlPVwibGFiZWxTcGFuU3R5bGVzXCIgI2xhYmVsPlxuICAgICAgICB7eyBpMThuLmNhdGVnb3JpZXNbaWRdIH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8bmctdGVtcGxhdGUgW25nSWZdPVwiZW1vamlzXCI+XG4gICAgICA8bmd4LWVtb2ppXG4gICAgICAgICpuZ0Zvcj1cImxldCBlbW9qaSBvZiBlbW9qaXM7IHRyYWNrQnk6IHRyYWNrQnlJZFwiXG4gICAgICAgIFtlbW9qaV09XCJlbW9qaVwiXG4gICAgICAgIFtzaXplXT1cImVtb2ppU2l6ZVwiXG4gICAgICAgIFtza2luXT1cImVtb2ppU2tpblwiXG4gICAgICAgIFtuYXRpdmVdPVwiZW1vamlOYXRpdmVcIlxuICAgICAgICBbc2V0XT1cImVtb2ppU2V0XCJcbiAgICAgICAgW3NoZWV0U2l6ZV09XCJlbW9qaVNoZWV0U2l6ZVwiXG4gICAgICAgIFtmb3JjZVNpemVdPVwiZW1vamlGb3JjZVNpemVcIlxuICAgICAgICBbdG9vbHRpcF09XCJlbW9qaVRvb2x0aXBcIlxuICAgICAgICBbaGlkZU9ic29sZXRlXT1cImhpZGVPYnNvbGV0ZVwiXG4gICAgICAgIChlbW9qaU92ZXIpPVwiZW1vamlPdmVyLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChlbW9qaUxlYXZlKT1cImVtb2ppTGVhdmUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgKGVtb2ppQ2xpY2spPVwiZW1vamlDbGljay5lbWl0KCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC9uZ3gtZW1vamk+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxkaXYgKm5nSWY9XCJlbW9qaXMgJiYgIWVtb2ppcy5sZW5ndGhcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxuZ3gtZW1vamlcbiAgICAgICAgICBlbW9qaT1cInNsZXV0aF9vcl9zcHlcIlxuICAgICAgICAgIHNpemU9XCIzOFwiXG4gICAgICAgICAgW3NraW5dPVwiZW1vamlTa2luXCJcbiAgICAgICAgICBbbmF0aXZlXT1cImVtb2ppTmF0aXZlXCJcbiAgICAgICAgICBbc2V0XT1cImVtb2ppU2V0XCJcbiAgICAgICAgICBbc2hlZXRTaXplXT1cImVtb2ppU2hlZXRTaXplXCJcbiAgICAgICAgICBbZm9yY2VTaXplXT1cImVtb2ppRm9yY2VTaXplXCJcbiAgICAgICAgICBbdG9vbHRpcF09XCJlbW9qaVRvb2x0aXBcIlxuICAgICAgICAgID5cbiAgICAgICAgPC9uZ3gtZW1vamk+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbW9qaS1tYXJ0LW5vLXJlc3VsdHMtbGFiZWxcIj5cbiAgICAgICAge3sgaTE4bi5ub3Rmb3VuZCB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBlbW9qaXM/OiBhbnlbXSB8IG51bGw7XG4gIEBJbnB1dCgpIGhhc1N0aWNreVBvc2l0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xuICBASW5wdXQoKSBuYXRpdmUgPSB0cnVlO1xuICBASW5wdXQoKSBwZXJMaW5lID0gOTtcbiAgQElucHV0KCkgcmVjZW50OiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBjdXN0b206IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGkxOG46IGFueTtcbiAgQElucHV0KCkgaWQ6IGFueTtcbiAgQElucHV0KCkgaGlkZU9ic29sZXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgZW1vamlOYXRpdmU/OiBFbW9qaVsnbmF0aXZlJ107XG4gIEBJbnB1dCgpIGVtb2ppU2tpbj86IEVtb2ppWydza2luJ107XG4gIEBJbnB1dCgpIGVtb2ppU2l6ZT86IEVtb2ppWydzaXplJ107XG4gIEBJbnB1dCgpIGVtb2ppU2V0PzogRW1vamlbJ3NldCddO1xuICBASW5wdXQoKSBlbW9qaVNoZWV0U2l6ZT86IEVtb2ppWydzaGVldFNpemUnXTtcbiAgQElucHV0KCkgZW1vamlGb3JjZVNpemU/OiBFbW9qaVsnZm9yY2VTaXplJ107XG4gIEBJbnB1dCgpIGVtb2ppVG9vbHRpcD86IEVtb2ppWyd0b29sdGlwJ107XG4gIEBPdXRwdXQoKSBlbW9qaU92ZXI6IEVtb2ppWydlbW9qaU92ZXInXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVtb2ppTGVhdmU6IEVtb2ppWydlbW9qaUxlYXZlJ10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlbW9qaUNsaWNrOiBFbW9qaVsnZW1vamlDbGljayddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXI/OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdsYWJlbCcpIGxhYmVsPzogRWxlbWVudFJlZjtcbiAgY29udGFpbmVyU3R5bGVzOiBhbnkgPSB7fTtcbiAgbGFiZWxTdHlsZXM6IGFueSA9IHt9O1xuICBsYWJlbFNwYW5TdHlsZXM6IGFueSA9IHt9O1xuICBwYXJlbnQ/OiBFbGVtZW50O1xuICBtYXJnaW4gPSAwO1xuICBtaW5NYXJnaW4gPSAwO1xuICBtYXhNYXJnaW4gPSAwO1xuICB0b3AgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZW1vamlTZXJ2aWNlOiBFbW9qaVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmcmVxdWVudGx5OiBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbW9qaXMgPSB0aGlzLmdldEVtb2ppcygpO1xuXG4gICAgaWYgKCF0aGlzLmVtb2ppcykge1xuICAgICAgdGhpcy5jb250YWluZXJTdHlsZXMgPSB7IGRpc3BsYXk6ICdub25lJyB9O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5oYXNTdGlja3lQb3NpdGlvbikge1xuICAgICAgdGhpcy5sYWJlbFN0eWxlcyA9IHsgaGVpZ2h0OiAyOCB9O1xuICAgICAgdGhpcy5sYWJlbFNwYW5TdHlsZXMgPSB7IHBvc2l0aW9uOiAnYWJzb2x1dGUnIH07XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucGFyZW50ID0gdGhpcy5jb250YWluZXIhLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIHRoaXMubWVtb2l6ZVNpemUoKTtcbiAgfVxuICBtZW1vaXplU2l6ZSgpIHtcbiAgICBjb25zdCB7XG4gICAgICB0b3AsXG4gICAgICBoZWlnaHQsXG4gICAgfSA9IHRoaXMuY29udGFpbmVyIS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHBhcmVudFRvcCA9IHRoaXMucGFyZW50IS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgY29uc3QgbGFiZWxIZWlnaHQgPSB0aGlzLmxhYmVsIS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgIHRoaXMudG9wID0gdG9wIC0gcGFyZW50VG9wICsgdGhpcy5wYXJlbnQhLnNjcm9sbFRvcDtcblxuICAgIGlmIChoZWlnaHQgPT09IDApIHtcbiAgICAgIHRoaXMubWF4TWFyZ2luID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tYXhNYXJnaW4gPSBoZWlnaHQgLSBsYWJlbEhlaWdodDtcbiAgICB9XG4gIH1cbiAgaGFuZGxlU2Nyb2xsKHNjcm9sbFRvcDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgbGV0IG1hcmdpbiA9IHNjcm9sbFRvcCAtIHRoaXMudG9wO1xuICAgIG1hcmdpbiA9IG1hcmdpbiA8IHRoaXMubWluTWFyZ2luID8gdGhpcy5taW5NYXJnaW4gOiBtYXJnaW47XG4gICAgbWFyZ2luID0gbWFyZ2luID4gdGhpcy5tYXhNYXJnaW4gPyB0aGlzLm1heE1hcmdpbiA6IG1hcmdpbjtcblxuICAgIGlmIChtYXJnaW4gPT09IHRoaXMubWFyZ2luKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmhhc1N0aWNreVBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmxhYmVsIS5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IGAke21hcmdpbn1weGA7XG4gICAgfVxuXG4gICAgdGhpcy5tYXJnaW4gPSBtYXJnaW47XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnZXRFbW9qaXMoKSB7XG4gICAgaWYgKHRoaXMubmFtZSA9PT0gJ1JlY2VudCcpIHtcbiAgICAgIGxldCBmcmVxdWVudGx5VXNlZCA9IHRoaXMucmVjZW50IHx8IHRoaXMuZnJlcXVlbnRseS5nZXQodGhpcy5wZXJMaW5lKTtcbiAgICAgIGlmICghZnJlcXVlbnRseVVzZWQgfHwgIWZyZXF1ZW50bHlVc2VkLmxlbmd0aCkge1xuICAgICAgICBmcmVxdWVudGx5VXNlZCA9IHRoaXMuZnJlcXVlbnRseS5nZXQodGhpcy5wZXJMaW5lKTtcbiAgICAgIH1cbiAgICAgIGlmIChmcmVxdWVudGx5VXNlZC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5lbW9qaXMgPSBmcmVxdWVudGx5VXNlZFxuICAgICAgICAgIC5tYXAoaWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZW1vamkgPSB0aGlzLmN1c3RvbS5maWx0ZXIoKGU6IGFueSkgPT4gZS5pZCA9PT0gaWQpWzBdO1xuICAgICAgICAgICAgaWYgKGVtb2ppKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlbW9qaTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmZpbHRlcihpZCA9PiAhIXRoaXMuZW1vamlTZXJ2aWNlLmdldERhdGEoaWQpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCghdGhpcy5lbW9qaXMgfHwgdGhpcy5lbW9qaXMubGVuZ3RoID09PSAwKSAmJiBmcmVxdWVudGx5VXNlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmVtb2ppcykge1xuICAgICAgdGhpcy5lbW9qaXMgPSB0aGlzLmVtb2ppcy5zbGljZSgwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lbW9qaXM7XG4gIH1cbiAgdXBkYXRlRGlzcGxheShkaXNwbGF5OiAnbm9uZScgfCAnaW5oZXJpdCcpIHtcbiAgICB0aGlzLmNvbnRhaW5lclN0eWxlcy5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICB0aGlzLmdldEVtb2ppcygpO1xuICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuICB0cmFja0J5SWQoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cbn1cbiJdfQ==