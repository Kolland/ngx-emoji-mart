/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
var SkinComponent = /** @class */ (function () {
    function SkinComponent() {
        this.change = new EventEmitter();
        this.opened = false;
        this.skinTones = [1, 2, 3, 4, 5, 6];
    }
    /**
     * @return {?}
     */
    SkinComponent.prototype.toggleOpen = /**
     * @return {?}
     */
    function () {
        this.opened = !this.opened;
    };
    /**
     * @param {?} skin
     * @return {?}
     */
    SkinComponent.prototype.handleClick = /**
     * @param {?} skin
     * @return {?}
     */
    function (skin) {
        if (!this.opened) {
            this.opened = true;
            return;
        }
        this.opened = false;
        if (skin !== this.skin) {
            this.change.emit(skin);
        }
    };
    SkinComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-skins',
                    template: "\n  <div class=\"emoji-mart-skin-swatches\" [class.emoji-mart-skin-swatches-opened]=\"opened\">\n    <span *ngFor=\"let skinTone of skinTones\" class=\"emoji-mart-skin-swatch\"\n      [class.emoji-mart-skin-swatch-selected]=\"skinTone === skin\">\n        <span (click)=\"this.handleClick(skinTone)\"\n          class=\"emoji-mart-skin emoji-mart-skin-tone-{{ skinTone }}\"\n        ></span>\n      </span>\n  </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                },] },
    ];
    SkinComponent.propDecorators = {
        skin: [{ type: Input }],
        change: [{ type: Output }]
    };
    return SkinComponent;
}());
export { SkinComponent };
function SkinComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SkinComponent.prototype.skin;
    /** @type {?} */
    SkinComponent.prototype.change;
    /** @type {?} */
    SkinComponent.prototype.opened;
    /** @type {?} */
    SkinComponent.prototype.skinTones;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvIiwic291cmNlcyI6WyJza2lucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDOzs7c0JBcUJGLElBQUksWUFBWSxFQUFVO3NCQUNwQyxLQUFLO3lCQUNGLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Ozs7O0lBRTlCLGtDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQzVCOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxJQUFZO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsTUFBTSxDQUFDO1NBQ1I7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7S0FDRjs7Z0JBbENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHNhQVNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2lCQUMzQjs7O3VCQUVFLEtBQUs7eUJBQ0wsTUFBTTs7d0JBM0JUOztTQXlCYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamkgfSBmcm9tICdAY3RybC9uZ3gtZW1vamktbWFydC9uZ3gtZW1vamknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1za2lucycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXNcIiBbY2xhc3MuZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZF09XCJvcGVuZWRcIj5cbiAgICA8c3BhbiAqbmdGb3I9XCJsZXQgc2tpblRvbmUgb2Ygc2tpblRvbmVzXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoXCJcbiAgICAgIFtjbGFzcy5lbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkXT1cInNraW5Ub25lID09PSBza2luXCI+XG4gICAgICAgIDxzcGFuIChjbGljayk9XCJ0aGlzLmhhbmRsZUNsaWNrKHNraW5Ub25lKVwiXG4gICAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUte3sgc2tpblRvbmUgfX1cIlxuICAgICAgICA+PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTa2luQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2tpbj86IEVtb2ppWydza2luJ107XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgb3BlbmVkID0gZmFsc2U7XG4gIHNraW5Ub25lcyA9IFsxLCAyLCAzLCA0LCA1LCA2XTtcblxuICB0b2dnbGVPcGVuKCkge1xuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soc2tpbjogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIGlmIChza2luICE9PSB0aGlzLnNraW4pIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoc2tpbik7XG4gICAgfVxuICB9XG59XG4iXX0=