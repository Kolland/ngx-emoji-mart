/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, } from '@angular/core';
import { EmojiService } from '@ctrl/ngx-emoji-mart/ngx-emoji';
export class PreviewComponent {
    /**
     * @param {?} ref
     * @param {?} emojiService
     */
    constructor(ref, emojiService) {
        this.ref = ref;
        this.emojiService = emojiService;
        this.skinChange = new EventEmitter();
        this.emojiData = {};
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.emoji) {
            return;
        }
        this.emojiData = /** @type {?} */ ((this.emojiService.getData(this.emoji, this.emojiSkin, this.emojiSet)));
        const /** @type {?} */ knownEmoticons = [];
        const /** @type {?} */ listedEmoticons = [];
        const /** @type {?} */ emoitcons = this.emojiData.emoticons || [];
        emoitcons.forEach((emoticon) => {
            if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
                return;
            }
            knownEmoticons.push(emoticon.toLowerCase());
            listedEmoticons.push(emoticon);
        });
        this.listedEmoticons = listedEmoticons;
    }
}
PreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-preview',
                template: `
  <div class="emoji-mart-preview" *ngIf="emoji && emojiData">
    <div class="emoji-mart-preview-emoji">
      <ngx-emoji [emoji]="emoji" [size]="38"
        [native]="emojiNative"
        [skin]="emojiSkin"
        [size]="emojiSize"
        [set]="emojiSet"
        [sheetSize]="emojiSheetSize"
        [backgroundImageFn]="emojiBackgroundImageFn">
      </ngx-emoji>
    </div>

    <div class="emoji-mart-preview-data">
      <div class="emoji-mart-preview-name">{{ emojiData.name }}</div>
      <div class="emoji-mart-preview-shortnames">
        <span class="emoji-mart-preview-shortname" *ngFor="let short_name of emojiData.short_names">
          :{{ short_name }}:
        </span>
      </div>
      <div class="emoji-mart-preview-emoticons">
        <span class="emoji-mart-preview-emoticon" *ngFor="let emoticon of listedEmoticons">
          {{ emoticon }}
        </span>
      </div>
    </div>
  </div>

  <div class="emoji-mart-preview" *ngIf="!emoji">
    <div class="emoji-mart-preview-emoji">
      <ngx-emoji *ngIf="idleEmoji && idleEmoji.length"
        [native]="emojiNative"
        [skin]="emojiSkin"
        [set]="emojiSet"
        [emoji]="idleEmoji"
        [backgroundImageFn]="emojiBackgroundImageFn"
        [size]="38">
      </ngx-emoji>
    </div>

    <div class="emoji-mart-preview-data">
      <span class="emoji-mart-title-label">{{ title }}</span>
    </div>

    <div class="emoji-mart-preview-skins">
      <emoji-skins [skin]="emojiSkin" (change)="skinChange.emit($event)">
      </emoji-skins>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
            },] },
];
/** @nocollapse */
PreviewComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: EmojiService }
];
PreviewComponent.propDecorators = {
    title: [{ type: Input }],
    emoji: [{ type: Input }],
    idleEmoji: [{ type: Input }],
    emojiNative: [{ type: Input }],
    emojiSize: [{ type: Input }],
    emojiSkin: [{ type: Input }],
    emojiSet: [{ type: Input }],
    emojiSheetSize: [{ type: Input }],
    emojiBackgroundImageFn: [{ type: Input }],
    skinChange: [{ type: Output }]
};
function PreviewComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    PreviewComponent.prototype.title;
    /** @type {?} */
    PreviewComponent.prototype.emoji;
    /** @type {?} */
    PreviewComponent.prototype.idleEmoji;
    /** @type {?} */
    PreviewComponent.prototype.emojiNative;
    /** @type {?} */
    PreviewComponent.prototype.emojiSize;
    /** @type {?} */
    PreviewComponent.prototype.emojiSkin;
    /** @type {?} */
    PreviewComponent.prototype.emojiSet;
    /** @type {?} */
    PreviewComponent.prototype.emojiSheetSize;
    /** @type {?} */
    PreviewComponent.prototype.emojiBackgroundImageFn;
    /** @type {?} */
    PreviewComponent.prototype.skinChange;
    /** @type {?} */
    PreviewComponent.prototype.emojiData;
    /** @type {?} */
    PreviewComponent.prototype.listedEmoticons;
    /** @type {?} */
    PreviewComponent.prototype.ref;
    /** @type {?} */
    PreviewComponent.prototype.emojiService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC8iLCJzb3VyY2VzIjpbInByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFhLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBeUR6RSxNQUFNOzs7OztJQWNKLFlBQ1MsS0FDQztRQURELFFBQUcsR0FBSCxHQUFHO1FBQ0YsaUJBQVksR0FBWixZQUFZOzBCQU5DLElBQUksWUFBWSxFQUFVO3lCQUNqQixFQUFFO0tBTTlCOzs7O0lBRUosV0FBVztRQUNULEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxzQkFBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUM7UUFDdkYsdUJBQU0sY0FBYyxHQUFhLEVBQUUsQ0FBQztRQUNwQyx1QkFBTSxlQUFlLEdBQWEsRUFBRSxDQUFDO1FBQ3JDLHVCQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7UUFDakQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQWdCLEVBQUUsRUFBRTtZQUNyQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELE1BQU0sQ0FBQzthQUNSO1lBRUQsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUM1QyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0tBQ3hDOzs7WUEzRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRFQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7YUFDM0I7Ozs7WUFoRUMsaUJBQWlCO1lBUUMsWUFBWTs7O29CQTBEN0IsS0FBSztvQkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3FDQUNMLEtBQUs7eUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtb2ppRGF0YSwgRW1vamlTZXJ2aWNlIH0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktcHJldmlldycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXdcIiAqbmdJZj1cImVtb2ppICYmIGVtb2ppRGF0YVwiPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgIDxuZ3gtZW1vamkgW2Vtb2ppXT1cImVtb2ppXCIgW3NpemVdPVwiMzhcIlxuICAgICAgICBbbmF0aXZlXT1cImVtb2ppTmF0aXZlXCJcbiAgICAgICAgW3NraW5dPVwiZW1vamlTa2luXCJcbiAgICAgICAgW3NpemVdPVwiZW1vamlTaXplXCJcbiAgICAgICAgW3NldF09XCJlbW9qaVNldFwiXG4gICAgICAgIFtzaGVldFNpemVdPVwiZW1vamlTaGVldFNpemVcIlxuICAgICAgICBbYmFja2dyb3VuZEltYWdlRm5dPVwiZW1vamlCYWNrZ3JvdW5kSW1hZ2VGblwiPlxuICAgICAgPC9uZ3gtZW1vamk+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiPnt7IGVtb2ppRGF0YS5uYW1lIH19PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lXCIgKm5nRm9yPVwibGV0IHNob3J0X25hbWUgb2YgZW1vamlEYXRhLnNob3J0X25hbWVzXCI+XG4gICAgICAgICAgOnt7IHNob3J0X25hbWUgfX06XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvbnNcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIiAqbmdGb3I9XCJsZXQgZW1vdGljb24gb2YgbGlzdGVkRW1vdGljb25zXCI+XG4gICAgICAgICAge3sgZW1vdGljb24gfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXdcIiAqbmdJZj1cIiFlbW9qaVwiPlxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cbiAgICAgIDxuZ3gtZW1vamkgKm5nSWY9XCJpZGxlRW1vamkgJiYgaWRsZUVtb2ppLmxlbmd0aFwiXG4gICAgICAgIFtuYXRpdmVdPVwiZW1vamlOYXRpdmVcIlxuICAgICAgICBbc2tpbl09XCJlbW9qaVNraW5cIlxuICAgICAgICBbc2V0XT1cImVtb2ppU2V0XCJcbiAgICAgICAgW2Vtb2ppXT1cImlkbGVFbW9qaVwiXG4gICAgICAgIFtiYWNrZ3JvdW5kSW1hZ2VGbl09XCJlbW9qaUJhY2tncm91bmRJbWFnZUZuXCJcbiAgICAgICAgW3NpemVdPVwiMzhcIj5cbiAgICAgIDwvbmd4LWVtb2ppPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIj57eyB0aXRsZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2tpbnNcIj5cbiAgICAgIDxlbW9qaS1za2lucyBbc2tpbl09XCJlbW9qaVNraW5cIiAoY2hhbmdlKT1cInNraW5DaGFuZ2UuZW1pdCgkZXZlbnQpXCI+XG4gICAgICA8L2Vtb2ppLXNraW5zPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdGl0bGU6IGFueTtcbiAgQElucHV0KCkgZW1vamk6IGFueTtcbiAgQElucHV0KCkgaWRsZUVtb2ppOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppTmF0aXZlOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppU2l6ZTogYW55O1xuICBASW5wdXQoKSBlbW9qaVNraW46IGFueTtcbiAgQElucHV0KCkgZW1vamlTZXQ6IGFueTtcbiAgQElucHV0KCkgZW1vamlTaGVldFNpemU6IGFueTtcbiAgQElucHV0KCkgZW1vamlCYWNrZ3JvdW5kSW1hZ2VGbjogYW55O1xuICBAT3V0cHV0KCkgc2tpbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBlbW9qaURhdGE6IFBhcnRpYWw8RW1vamlEYXRhPiA9IHt9O1xuICBsaXN0ZWRFbW90aWNvbnM/OiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVtb2ppU2VydmljZTogRW1vamlTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKCF0aGlzLmVtb2ppKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZW1vamlEYXRhID0gdGhpcy5lbW9qaVNlcnZpY2UuZ2V0RGF0YSh0aGlzLmVtb2ppLCB0aGlzLmVtb2ppU2tpbiwgdGhpcy5lbW9qaVNldCkhO1xuICAgIGNvbnN0IGtub3duRW1vdGljb25zOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGxpc3RlZEVtb3RpY29uczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBlbW9pdGNvbnMgPSB0aGlzLmVtb2ppRGF0YS5lbW90aWNvbnMgfHwgW107XG4gICAgZW1vaXRjb25zLmZvckVhY2goKGVtb3RpY29uOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChrbm93bkVtb3RpY29ucy5pbmRleE9mKGVtb3RpY29uLnRvTG93ZXJDYXNlKCkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBrbm93bkVtb3RpY29ucy5wdXNoKGVtb3RpY29uLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgbGlzdGVkRW1vdGljb25zLnB1c2goZW1vdGljb24pO1xuICAgIH0pO1xuICAgIHRoaXMubGlzdGVkRW1vdGljb25zID0gbGlzdGVkRW1vdGljb25zO1xuICB9XG59XG4iXX0=