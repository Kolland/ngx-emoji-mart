/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import SVGs from './svgs';
export class AnchorsComponent {
    constructor() {
        this.categories = [];
        this.anchorClick = new EventEmitter();
        this.svgs = SVGs;
    }
    /**
     * @param {?} idx
     * @param {?} cat
     * @return {?}
     */
    trackByFn(idx, cat) {
        return cat.id;
    }
    /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    handleClick($event, index) {
        this.anchorClick.emit({
            category: this.categories[index],
            index,
        });
    }
}
AnchorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-mart-anchors',
                template: `
  <div class="emoji-mart-anchors">
    <ng-template ngFor let-category [ngForOf]="categories" let-idx="index" [ngForTrackBy]="trackByFn">
      <span
        *ngIf="category.anchor !== false"
        [attr.title]="i18n.categories[category.id]"
        (click)="this.handleClick($event, idx)"
        class="emoji-mart-anchor"
        [class.emoji-mart-anchor-selected]="category.name === selected"
        [style.color]="category.name === selected ? color : null"
      >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path [attr.d]="svgs[category.id]" />
          </svg>
        </div>
        <span
          class="emoji-mart-anchor-bar"
          [style.background-color]="color"
        ></span>
      </span>
    </ng-template>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
            },] },
];
AnchorsComponent.propDecorators = {
    categories: [{ type: Input }],
    color: [{ type: Input }],
    selected: [{ type: Input }],
    i18n: [{ type: Input }],
    anchorClick: [{ type: Output }]
};
function AnchorsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AnchorsComponent.prototype.categories;
    /** @type {?} */
    AnchorsComponent.prototype.color;
    /** @type {?} */
    AnchorsComponent.prototype.selected;
    /** @type {?} */
    AnchorsComponent.prototype.i18n;
    /** @type {?} */
    AnchorsComponent.prototype.anchorClick;
    /** @type {?} */
    AnchorsComponent.prototype.svgs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5jaG9ycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC8iLCJzb3VyY2VzIjpbImFuY2hvcnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLElBQUksTUFBTSxRQUFRLENBQUM7QUErQjFCLE1BQU07OzBCQUNtQyxFQUFFOzJCQUlqQixJQUFJLFlBQVksRUFBOEM7b0JBQzFFLElBQUk7Ozs7Ozs7SUFFaEIsU0FBUyxDQUFDLEdBQVcsRUFBRSxHQUFrQjtRQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztLQUNmOzs7Ozs7SUFDRCxXQUFXLENBQUMsTUFBYSxFQUFFLEtBQWE7UUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ2hDLEtBQUs7U0FDTixDQUFDLENBQUM7S0FDSjs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO2FBQzNCOzs7eUJBRUUsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamlDYXRlZ29yeSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgU1ZHcyBmcm9tICcuL3N2Z3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1tYXJ0LWFuY2hvcnMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1jYXRlZ29yeSBbbmdGb3JPZl09XCJjYXRlZ29yaWVzXCIgbGV0LWlkeD1cImluZGV4XCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5Rm5cIj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwiY2F0ZWdvcnkuYW5jaG9yICE9PSBmYWxzZVwiXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxuICAgICAgICAoY2xpY2spPVwidGhpcy5oYW5kbGVDbGljaygkZXZlbnQsIGlkeClcIlxuICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yXCJcbiAgICAgICAgW2NsYXNzLmVtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkXT1cImNhdGVnb3J5Lm5hbWUgPT09IHNlbGVjdGVkXCJcbiAgICAgICAgW3N0eWxlLmNvbG9yXT1cImNhdGVnb3J5Lm5hbWUgPT09IHNlbGVjdGVkID8gY29sb3IgOiBudWxsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cInN2Z3NbY2F0ZWdvcnkuaWRdXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBBbmNob3JzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2F0ZWdvcmllczogRW1vamlDYXRlZ29yeVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBzZWxlY3RlZD86IHN0cmluZztcbiAgQElucHV0KCkgaTE4bjogYW55O1xuICBAT3V0cHV0KCkgYW5jaG9yQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgY2F0ZWdvcnk6IEVtb2ppQ2F0ZWdvcnksIGluZGV4OiBudW1iZXIgfT4oKTtcbiAgc3ZnczogYW55ID0gU1ZHcztcblxuICB0cmFja0J5Rm4oaWR4OiBudW1iZXIsIGNhdDogRW1vamlDYXRlZ29yeSkge1xuICAgIHJldHVybiBjYXQuaWQ7XG4gIH1cbiAgaGFuZGxlQ2xpY2soJGV2ZW50OiBFdmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuYW5jaG9yQ2xpY2suZW1pdCh7XG4gICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yaWVzW2luZGV4XSxcbiAgICAgIGluZGV4LFxuICAgIH0pO1xuICB9XG59XG4iXX0=