/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
export class SkinComponent {
    constructor() {
        this.change = new EventEmitter();
        this.opened = false;
        this.skinTones = [1, 2, 3, 4, 5, 6];
    }
    /**
     * @return {?}
     */
    toggleOpen() {
        this.opened = !this.opened;
    }
    /**
     * @param {?} skin
     * @return {?}
     */
    handleClick(skin) {
        if (!this.opened) {
            this.opened = true;
            return;
        }
        this.opened = false;
        if (skin !== this.skin) {
            this.change.emit(skin);
        }
    }
}
SkinComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-skins',
                template: `
  <div class="emoji-mart-skin-swatches" [class.emoji-mart-skin-swatches-opened]="opened">
    <span *ngFor="let skinTone of skinTones" class="emoji-mart-skin-swatch"
      [class.emoji-mart-skin-swatch-selected]="skinTone === skin">
        <span (click)="this.handleClick(skinTone)"
          class="emoji-mart-skin emoji-mart-skin-tone-{{ skinTone }}"
        ></span>
      </span>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
            },] },
];
SkinComponent.propDecorators = {
    skin: [{ type: Input }],
    change: [{ type: Output }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvIiwic291cmNlcyI6WyJza2lucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBbUJ2QixNQUFNOztzQkFFZSxJQUFJLFlBQVksRUFBVTtzQkFDcEMsS0FBSzt5QkFDRixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7OztJQUU5QixVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDNUI7Ozs7O0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixNQUFNLENBQUM7U0FDUjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtLQUNGOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7bUJBRUUsS0FBSztxQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamkgfSBmcm9tICdAY3RybC9uZ3gtZW1vamktbWFydC9uZ3gtZW1vamknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1za2lucycsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXNcIiBbY2xhc3MuZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZF09XCJvcGVuZWRcIj5cbiAgICA8c3BhbiAqbmdGb3I9XCJsZXQgc2tpblRvbmUgb2Ygc2tpblRvbmVzXCIgY2xhc3M9XCJlbW9qaS1tYXJ0LXNraW4tc3dhdGNoXCJcbiAgICAgIFtjbGFzcy5lbW9qaS1tYXJ0LXNraW4tc3dhdGNoLXNlbGVjdGVkXT1cInNraW5Ub25lID09PSBza2luXCI+XG4gICAgICAgIDxzcGFuIChjbGljayk9XCJ0aGlzLmhhbmRsZUNsaWNrKHNraW5Ub25lKVwiXG4gICAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUte3sgc2tpblRvbmUgfX1cIlxuICAgICAgICA+PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTa2luQ29tcG9uZW50IHtcbiAgQElucHV0KCkgc2tpbj86IEVtb2ppWydza2luJ107XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgb3BlbmVkID0gZmFsc2U7XG4gIHNraW5Ub25lcyA9IFsxLCAyLCAzLCA0LCA1LCA2XTtcblxuICB0b2dnbGVPcGVuKCkge1xuICAgIHRoaXMub3BlbmVkID0gIXRoaXMub3BlbmVkO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soc2tpbjogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIGlmIChza2luICE9PSB0aGlzLnNraW4pIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoc2tpbik7XG4gICAgfVxuICB9XG59XG4iXX0=