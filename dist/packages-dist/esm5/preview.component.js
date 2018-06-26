/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, } from '@angular/core';
import { EmojiService } from '@ctrl/ngx-emoji-mart/ngx-emoji';
var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(ref, emojiService) {
        this.ref = ref;
        this.emojiService = emojiService;
        this.skinChange = new EventEmitter();
        this.emojiData = {};
    }
    /**
     * @return {?}
     */
    PreviewComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.emoji) {
            return;
        }
        this.emojiData = /** @type {?} */ ((this.emojiService.getData(this.emoji, this.emojiSkin, this.emojiSet)));
        var /** @type {?} */ knownEmoticons = [];
        var /** @type {?} */ listedEmoticons = [];
        var /** @type {?} */ emoitcons = this.emojiData.emoticons || [];
        emoitcons.forEach(function (emoticon) {
            if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
                return;
            }
            knownEmoticons.push(emoticon.toLowerCase());
            listedEmoticons.push(emoticon);
        });
        this.listedEmoticons = listedEmoticons;
    };
    PreviewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-preview',
                    template: "\n  <div class=\"emoji-mart-preview\" *ngIf=\"emoji && emojiData\">\n    <div class=\"emoji-mart-preview-emoji\">\n      <ngx-emoji [emoji]=\"emoji\" [size]=\"38\"\n        [native]=\"emojiNative\"\n        [skin]=\"emojiSkin\"\n        [size]=\"emojiSize\"\n        [set]=\"emojiSet\"\n        [sheetSize]=\"emojiSheetSize\"\n        [backgroundImageFn]=\"emojiBackgroundImageFn\">\n      </ngx-emoji>\n    </div>\n\n    <div class=\"emoji-mart-preview-data\">\n      <div class=\"emoji-mart-preview-name\">{{ emojiData.name }}</div>\n      <div class=\"emoji-mart-preview-shortnames\">\n        <span class=\"emoji-mart-preview-shortname\" *ngFor=\"let short_name of emojiData.short_names\">\n          :{{ short_name }}:\n        </span>\n      </div>\n      <div class=\"emoji-mart-preview-emoticons\">\n        <span class=\"emoji-mart-preview-emoticon\" *ngFor=\"let emoticon of listedEmoticons\">\n          {{ emoticon }}\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"emoji-mart-preview\" *ngIf=\"!emoji\">\n    <div class=\"emoji-mart-preview-emoji\">\n      <ngx-emoji *ngIf=\"idleEmoji && idleEmoji.length\"\n        [native]=\"emojiNative\"\n        [skin]=\"emojiSkin\"\n        [set]=\"emojiSet\"\n        [emoji]=\"idleEmoji\"\n        [backgroundImageFn]=\"emojiBackgroundImageFn\"\n        [size]=\"38\">\n      </ngx-emoji>\n    </div>\n\n    <div class=\"emoji-mart-preview-data\">\n      <span class=\"emoji-mart-title-label\">{{ title }}</span>\n    </div>\n\n    <div class=\"emoji-mart-preview-skins\">\n      <emoji-skins [skin]=\"emojiSkin\" (change)=\"skinChange.emit($event)\">\n      </emoji-skins>\n    </div>\n  </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    PreviewComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: EmojiService }
    ]; };
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
    return PreviewComponent;
}());
export { PreviewComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC8iLCJzb3VyY2VzIjpbInByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFhLFlBQVksRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztJQXVFdkUsMEJBQ1MsS0FDQztRQURELFFBQUcsR0FBSCxHQUFHO1FBQ0YsaUJBQVksR0FBWixZQUFZOzBCQU5DLElBQUksWUFBWSxFQUFVO3lCQUNqQixFQUFFO0tBTTlCOzs7O0lBRUosc0NBQVc7OztJQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUM7U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLHNCQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQztRQUN2RixxQkFBTSxjQUFjLEdBQWEsRUFBRSxDQUFDO1FBQ3BDLHFCQUFNLGVBQWUsR0FBYSxFQUFFLENBQUM7UUFDckMscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztRQUNqRCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBZ0I7WUFDakMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxNQUFNLENBQUM7YUFDUjtZQUVELGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDNUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztLQUN4Qzs7Z0JBM0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLCtvREFpRFQ7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7aUJBQzNCOzs7O2dCQWhFQyxpQkFBaUI7Z0JBUUMsWUFBWTs7O3dCQTBEN0IsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLO3lDQUNMLEtBQUs7NkJBQ0wsTUFBTTs7MkJBN0VUOztTQW1FYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbW9qaURhdGEsIEVtb2ppU2VydmljZSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3XCIgKm5nSWY9XCJlbW9qaSAmJiBlbW9qaURhdGFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICA8bmd4LWVtb2ppIFtlbW9qaV09XCJlbW9qaVwiIFtzaXplXT1cIjM4XCJcbiAgICAgICAgW25hdGl2ZV09XCJlbW9qaU5hdGl2ZVwiXG4gICAgICAgIFtza2luXT1cImVtb2ppU2tpblwiXG4gICAgICAgIFtzaXplXT1cImVtb2ppU2l6ZVwiXG4gICAgICAgIFtzZXRdPVwiZW1vamlTZXRcIlxuICAgICAgICBbc2hlZXRTaXplXT1cImVtb2ppU2hlZXRTaXplXCJcbiAgICAgICAgW2JhY2tncm91bmRJbWFnZUZuXT1cImVtb2ppQmFja2dyb3VuZEltYWdlRm5cIj5cbiAgICAgIDwvbmd4LWVtb2ppPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LW5hbWVcIj57eyBlbW9qaURhdGEubmFtZSB9fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiICpuZ0Zvcj1cImxldCBzaG9ydF9uYW1lIG9mIGVtb2ppRGF0YS5zaG9ydF9uYW1lc1wiPlxuICAgICAgICAgIDp7eyBzaG9ydF9uYW1lIH19OlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCIgKm5nRm9yPVwibGV0IGVtb3RpY29uIG9mIGxpc3RlZEVtb3RpY29uc1wiPlxuICAgICAgICAgIHt7IGVtb3RpY29uIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3XCIgKm5nSWY9XCIhZW1vamlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICA8bmd4LWVtb2ppICpuZ0lmPVwiaWRsZUVtb2ppICYmIGlkbGVFbW9qaS5sZW5ndGhcIlxuICAgICAgICBbbmF0aXZlXT1cImVtb2ppTmF0aXZlXCJcbiAgICAgICAgW3NraW5dPVwiZW1vamlTa2luXCJcbiAgICAgICAgW3NldF09XCJlbW9qaVNldFwiXG4gICAgICAgIFtlbW9qaV09XCJpZGxlRW1vamlcIlxuICAgICAgICBbYmFja2dyb3VuZEltYWdlRm5dPVwiZW1vamlCYWNrZ3JvdW5kSW1hZ2VGblwiXG4gICAgICAgIFtzaXplXT1cIjM4XCI+XG4gICAgICA8L25neC1lbW9qaT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LXRpdGxlLWxhYmVsXCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCI+XG4gICAgICA8ZW1vamktc2tpbnMgW3NraW5dPVwiZW1vamlTa2luXCIgKGNoYW5nZSk9XCJza2luQ2hhbmdlLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgPC9lbW9qaS1za2lucz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHRpdGxlOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppOiBhbnk7XG4gIEBJbnB1dCgpIGlkbGVFbW9qaTogYW55O1xuICBASW5wdXQoKSBlbW9qaU5hdGl2ZTogYW55O1xuICBASW5wdXQoKSBlbW9qaVNpemU6IGFueTtcbiAgQElucHV0KCkgZW1vamlTa2luOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppU2V0OiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppU2hlZXRTaXplOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppQmFja2dyb3VuZEltYWdlRm46IGFueTtcbiAgQE91dHB1dCgpIHNraW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgZW1vamlEYXRhOiBQYXJ0aWFsPEVtb2ppRGF0YT4gPSB7fTtcbiAgbGlzdGVkRW1vdGljb25zPzogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbW9qaVNlcnZpY2U6IEVtb2ppU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5lbW9qaSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtb2ppRGF0YSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldERhdGEodGhpcy5lbW9qaSwgdGhpcy5lbW9qaVNraW4sIHRoaXMuZW1vamlTZXQpITtcbiAgICBjb25zdCBrbm93bkVtb3RpY29uczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBsaXN0ZWRFbW90aWNvbnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZW1vaXRjb25zID0gdGhpcy5lbW9qaURhdGEuZW1vdGljb25zIHx8IFtdO1xuICAgIGVtb2l0Y29ucy5mb3JFYWNoKChlbW90aWNvbjogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoa25vd25FbW90aWNvbnMuaW5kZXhPZihlbW90aWNvbi50b0xvd2VyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAga25vd25FbW90aWNvbnMucHVzaChlbW90aWNvbi50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGxpc3RlZEVtb3RpY29ucy5wdXNoKGVtb3RpY29uKTtcbiAgICB9KTtcbiAgICB0aGlzLmxpc3RlZEVtb3RpY29ucyA9IGxpc3RlZEVtb3RpY29ucztcbiAgfVxufVxuIl19