/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { categories, } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { EmojiFrequentlyService } from './emoji-frequently.service';
import { PreviewComponent } from './preview.component';
import { SearchComponent } from './search.component';
import { measureScrollbar } from './utils';
const /** @type {?} */ I18N = {
    search: 'Search',
    notfound: 'No Emoji Found',
    categories: {
        search: 'Search Results',
        recent: 'Frequently Used',
        people: 'Smileys & People',
        nature: 'Animals & Nature',
        foods: 'Food & Drink',
        activity: 'Activity',
        places: 'Travel & Places',
        objects: 'Objects',
        symbols: 'Symbols',
        flags: 'Flags',
        custom: 'Custom',
    },
};
export class PickerComponent {
    /**
     * @param {?} ref
     * @param {?} frequently
     */
    constructor(ref, frequently) {
        this.ref = ref;
        this.frequently = frequently;
        this.perLine = 9;
        this.i18n = {};
        this.style = {};
        this.title = 'Emoji Mart™';
        this.emoji = 'department_store';
        this.color = '#ae65c5';
        this.hideObsolete = true;
        /**
         * all categories shown
         */
        this.categories = [];
        /**
         * used to temporarily draw categories
         */
        this.activeCategories = [];
        this.set = 'apple';
        this.skin = 1;
        this.native = false;
        this.emojiSize = 24;
        this.sheetSize = 64;
        this.showPreview = true;
        this.emojiTooltip = false;
        this.autoFocus = false;
        this.custom = [];
        this.hideRecent = true;
        this.emojiClick = new EventEmitter();
        this.emojiSelect = new EventEmitter();
        this.scrollHeight = 0;
        this.clientHeight = 0;
        this.firstRender = true;
        this.NAMESPACE = 'emoji-mart';
        this.measureScrollbar = 0;
        this.RECENT_CATEGORY = {
            id: 'recent',
            name: 'Recent',
            emojis: null,
        };
        this.SEARCH_CATEGORY = {
            id: 'search',
            name: 'Search',
            emojis: null,
            anchor: false,
        };
        this.CUSTOM_CATEGORY = {
            id: 'custom',
            name: 'Custom',
            emojis: [],
        };
        this.backgroundImageFn = (set, sheetSize) => `https://unpkg.com/emoji-datasource-${this.set}@4.0.4/img/${this.set}/sheets-256/${this.sheetSize}.png`;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // measure scroll
        this.measureScrollbar = measureScrollbar();
        this.i18n = Object.assign({}, I18N, this.i18n);
        this.i18n.categories = Object.assign({}, I18N.categories, this.i18n.categories);
        this.skin =
            JSON.parse(localStorage.getItem(`${this.NAMESPACE}.skin`) || 'null') ||
                this.skin;
        const /** @type {?} */ allCategories = [...categories];
        if (this.custom.length > 0) {
            this.CUSTOM_CATEGORY.emojis = this.custom.map(emoji => {
                return Object.assign({}, emoji, { id: emoji.short_names[0], custom: true });
            });
            allCategories.push(this.CUSTOM_CATEGORY);
        }
        if (this.include !== undefined) {
            allCategories.sort((a, b) => {
                if (/** @type {?} */ ((this.include)).indexOf(a.id) > /** @type {?} */ ((this.include)).indexOf(b.id)) {
                    return 1;
                }
                return -1;
            });
        }
        for (const /** @type {?} */ category of allCategories) {
            const /** @type {?} */ isIncluded = this.include && this.include.length
                ? this.include.indexOf(category.id) > -1
                : true;
            const /** @type {?} */ isExcluded = this.exclude && this.exclude.length
                ? this.exclude.indexOf(category.id) > -1
                : false;
            if (!isIncluded || isExcluded) {
                continue;
            }
            if (this.emojisToShowFilter) {
                const /** @type {?} */ newEmojis = [];
                const { emojis } = category;
                for (let /** @type {?} */ emojiIndex = 0; emojiIndex < /** @type {?} */ ((emojis)).length; emojiIndex++) {
                    const /** @type {?} */ emoji = /** @type {?} */ ((emojis))[emojiIndex];
                    if (this.emojisToShowFilter(emoji)) {
                        newEmojis.push(emoji);
                    }
                }
                if (newEmojis.length) {
                    const /** @type {?} */ newCategory = {
                        emojis: newEmojis,
                        name: category.name,
                        id: category.id,
                    };
                    this.categories.push(newCategory);
                }
            }
            else {
                this.categories.push(category);
            }
        }
        const /** @type {?} */ includeRecent = this.include && this.include.length
            ? this.include.indexOf(this.RECENT_CATEGORY.id) > -1
            : true;
        const /** @type {?} */ excludeRecent = this.exclude && this.exclude.length
            ? this.exclude.indexOf(this.RECENT_CATEGORY.id) > -1
            : false;
        if (includeRecent && !excludeRecent) {
            this.hideRecent = false;
            this.categories.unshift(this.RECENT_CATEGORY);
        }
        if (this.categories[0]) {
            this.categories[0].first = true;
        }
        this.categories.unshift(this.SEARCH_CATEGORY);
        this.selected = this.categories.filter(category => category.first)[0].name;
        this.activeCategories = this.categories.slice(0, 3);
        setTimeout(() => {
            this.activeCategories = this.categories;
            this.ref.markForCheck();
            this.updateCategoriesSize();
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateCategoriesSize();
    }
    /**
     * @return {?}
     */
    updateCategoriesSize() {
        /** @type {?} */ ((this.categoryRefs)).forEach(component => component.memoizeSize());
        if (this.scrollRef) {
            const /** @type {?} */ target = this.scrollRef.nativeElement;
            this.scrollHeight = target.scrollHeight;
            this.clientHeight = target.clientHeight;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleAnchorClick($event) {
        const /** @type {?} */ component = /** @type {?} */ ((this.categoryRefs)).find(n => n.id === $event.category.id);
        if (this.SEARCH_CATEGORY.emojis) {
            this.handleSearch(null); /** @type {?} */
            ((this.searchRef)).clear();
        }
        if (component) {
            let { top } = component;
            if ($event.category.first) {
                top = 0;
            }
            else {
                top += 1;
            } /** @type {?} */
            ((this.scrollRef)).nativeElement.scrollTop = top;
        }
        this.selected = $event.category.name;
        this.nextScroll = $event.category.name;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    categoryTrack(index, item) {
        return item.id;
    }
    /**
     * @return {?}
     */
    handleScroll() {
        if (this.nextScroll) {
            this.selected = this.nextScroll;
            this.nextScroll = undefined;
            return;
        }
        if (!this.scrollRef) {
            return;
        }
        let /** @type {?} */ activeCategory = null;
        if (this.SEARCH_CATEGORY.emojis) {
            activeCategory = this.SEARCH_CATEGORY;
        }
        else {
            const /** @type {?} */ target = this.scrollRef.nativeElement;
            // check scroll is not at bottom
            if (target.scrollTop === 0) {
                // hit the TOP
                activeCategory = this.categories.find(n => n.first === true);
            }
            else if (target.scrollHeight - target.scrollTop === this.clientHeight) {
                // scrolled to bottom activate last category
                activeCategory = this.categories[this.categories.length - 1];
            }
            else {
                // scrolling
                for (const /** @type {?} */ category of this.categories) {
                    const /** @type {?} */ component = /** @type {?} */ ((this.categoryRefs)).find(n => n.id === category.id);
                    const /** @type {?} */ active = /** @type {?} */ ((component)).handleScroll(target.scrollTop);
                    if (active) {
                        activeCategory = category;
                    }
                }
            }
            this.scrollTop = target.scrollTop;
        }
        if (activeCategory) {
            this.selected = activeCategory.name;
        }
    }
    /**
     * @param {?} $emojis
     * @return {?}
     */
    handleSearch($emojis) {
        this.SEARCH_CATEGORY.emojis = $emojis;
        for (const /** @type {?} */ component of /** @type {?} */ ((this.categoryRefs)).toArray()) {
            if (component.name === 'Search') {
                component.emojis = $emojis;
                component.updateDisplay($emojis ? 'inherit' : 'none');
            }
            else {
                component.updateDisplay($emojis ? 'none' : 'inherit');
            }
        } /** @type {?} */
        ((
        // this.forceUpdate();
        this.scrollRef)).nativeElement.scrollTop = 0;
        this.handleScroll();
    }
    /**
     * @param {?} $event
     * @param {?=} emoji
     * @return {?}
     */
    handleEnterKey($event, emoji) {
        if (!emoji) {
            if (this.SEARCH_CATEGORY.emojis !== null && this.SEARCH_CATEGORY.emojis.length) {
                emoji = this.SEARCH_CATEGORY.emojis[0];
                if (emoji) {
                    this.emojiSelect.emit({ $event, emoji });
                }
                else {
                    return;
                }
            }
        }
        if (!this.hideRecent && !this.recent) {
            this.frequently.add((/** @type {?} */ (emoji)));
        }
        const /** @type {?} */ component = /** @type {?} */ ((this.categoryRefs)).toArray()[1];
        if (component) {
            const /** @type {?} */ maxMargin = component.maxMargin;
            component.emojis = this.frequently.get(maxMargin);
            component.ref.markForCheck();
            window.requestAnimationFrame(() => {
                if (!this.scrollRef) {
                    return;
                }
                component.memoizeSize();
                if (maxMargin === component.maxMargin) {
                    return;
                }
                this.updateCategoriesSize();
                this.handleScroll();
                if (this.SEARCH_CATEGORY.emojis) {
                    component.updateDisplay('none');
                }
            });
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleEmojiOver($event) {
        if (!this.showPreview || !this.previewRef) {
            return;
        }
        const /** @type {?} */ emojiData = /** @type {?} */ ((this.CUSTOM_CATEGORY.emojis)).find(customEmoji => customEmoji.id === $event.emoji.id);
        if (emojiData) {
            $event.emoji = Object.assign({}, emojiData);
        }
        this.previewEmoji = $event.emoji;
        clearTimeout(this.leaveTimeout);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleEmojiLeave($event) {
        if (!this.showPreview || !this.previewRef) {
            return;
        }
        this.leaveTimeout = setTimeout(() => {
            this.previewEmoji = null; /** @type {?} */
            ((this.previewRef)).ref.markForCheck();
        }, 16);
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleEmojiClick($event) {
        this.emojiClick.emit($event);
        this.emojiSelect.emit($event);
        this.handleEnterKey($event.$event, $event.emoji);
    }
    /**
     * @param {?} skin
     * @return {?}
     */
    handleSkinChange(skin) {
        this.skin = skin;
        localStorage.setItem(`${this.NAMESPACE}.skin`, String(skin));
    }
}
PickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-mart',
                template: `<div
  [style.width.px]="perLine * (emojiSize + 12) + 12 + 2 + measureScrollbar"
  [ngStyle]="style"
  class="emoji-mart">
  <div class="emoji-mart-bar">
    <emoji-mart-anchors
      [categories]="categories"
      (anchorClick)="handleAnchorClick($event)"
      [color]="color"
      [selected]="selected"
      [i18n]="i18n"
    >
    </emoji-mart-anchors>
  </div>
  <emoji-search
    #searchRef
    [i18n]="i18n"
    (search)="handleSearch($event)"
    (enterKey)="handleEnterKey($event)"
    [include]="include"
    [exclude]="exclude"
    [custom]="custom"
    [autoFocus]="autoFocus"
    [emojisToShowFilter]="emojisToShowFilter"
  >
  </emoji-search>
  <div
    #scrollRef
    class="emoji-mart-scroll"
    (scroll)="handleScroll()"
  >
    <div emoji-category
      *ngFor="let category of activeCategories; let idx = index; trackBy: categoryTrack"
      #categoryRef
      [id]="category.id"
      [name]="category.name"
      [emojis]="category.emojis"
      [perLine]="perLine"
      [native]="native"
      [hasStickyPosition]="native"
      [i18n]="i18n"
      [hideObsolete]="hideObsolete"
      [custom]="category.id == RECENT_CATEGORY.id ? CUSTOM_CATEGORY.emojis : undefined"
      [recent]="category.id == RECENT_CATEGORY.id ? recent : undefined"

      [emojiNative]="native"
      [emojiSkin]="skin"
      [emojiSize]="emojiSize"
      [emojiSet]="set"
      [emojiSheetSize]="sheetSize"
      [emojiForceSize]="native"
      [emojiTooltip]="emojiTooltip"
      (emojiOver)="handleEmojiOver($event)"
      (emojiLeave)="handleEmojiLeave($event)"
      (emojiClick)="handleEmojiClick($event)"
    >
    </div>

</div>
<div class="emoji-mart-bar" *ngIf="showPreview">
  <emoji-preview
    #previewRef
    [title]="title"
    [emoji]="previewEmoji"
    [idleEmoji]="emoji"

    [emojiNative]="native"
    [emojiSize]="38"
    [emojiSkin]="skin"
    [emojiSet]="set"
    [emojiSheetSize]="sheetSize"
    [emojiBackgroundImageFn]="backgroundImageFn"
    (skinChange)="handleSkinChange($event)"
  ></emoji-preview>
</div>
`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
            },] },
];
/** @nocollapse */
PickerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: EmojiFrequentlyService }
];
PickerComponent.propDecorators = {
    perLine: [{ type: Input }],
    i18n: [{ type: Input }],
    style: [{ type: Input }],
    title: [{ type: Input }],
    emoji: [{ type: Input }],
    color: [{ type: Input }],
    hideObsolete: [{ type: Input }],
    categories: [{ type: Input }],
    activeCategories: [{ type: Input }],
    set: [{ type: Input }],
    skin: [{ type: Input }],
    native: [{ type: Input }],
    emojiSize: [{ type: Input }],
    sheetSize: [{ type: Input }],
    emojisToShowFilter: [{ type: Input }],
    showPreview: [{ type: Input }],
    emojiTooltip: [{ type: Input }],
    autoFocus: [{ type: Input }],
    custom: [{ type: Input }],
    hideRecent: [{ type: Input }],
    include: [{ type: Input }],
    exclude: [{ type: Input }],
    emojiClick: [{ type: Output }],
    emojiSelect: [{ type: Output }],
    scrollRef: [{ type: ViewChild, args: ['scrollRef',] }],
    previewRef: [{ type: ViewChild, args: ['previewRef',] }],
    searchRef: [{ type: ViewChild, args: ['searchRef',] }],
    categoryRefs: [{ type: ViewChildren, args: ['categoryRef',] }],
    backgroundImageFn: [{ type: Input }]
};
function PickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    PickerComponent.prototype.perLine;
    /** @type {?} */
    PickerComponent.prototype.i18n;
    /** @type {?} */
    PickerComponent.prototype.style;
    /** @type {?} */
    PickerComponent.prototype.title;
    /** @type {?} */
    PickerComponent.prototype.emoji;
    /** @type {?} */
    PickerComponent.prototype.color;
    /** @type {?} */
    PickerComponent.prototype.hideObsolete;
    /**
     * all categories shown
     * @type {?}
     */
    PickerComponent.prototype.categories;
    /**
     * used to temporarily draw categories
     * @type {?}
     */
    PickerComponent.prototype.activeCategories;
    /** @type {?} */
    PickerComponent.prototype.set;
    /** @type {?} */
    PickerComponent.prototype.skin;
    /** @type {?} */
    PickerComponent.prototype.native;
    /** @type {?} */
    PickerComponent.prototype.emojiSize;
    /** @type {?} */
    PickerComponent.prototype.sheetSize;
    /** @type {?} */
    PickerComponent.prototype.emojisToShowFilter;
    /** @type {?} */
    PickerComponent.prototype.showPreview;
    /** @type {?} */
    PickerComponent.prototype.emojiTooltip;
    /** @type {?} */
    PickerComponent.prototype.autoFocus;
    /** @type {?} */
    PickerComponent.prototype.custom;
    /** @type {?} */
    PickerComponent.prototype.hideRecent;
    /** @type {?} */
    PickerComponent.prototype.include;
    /** @type {?} */
    PickerComponent.prototype.exclude;
    /** @type {?} */
    PickerComponent.prototype.emojiClick;
    /** @type {?} */
    PickerComponent.prototype.emojiSelect;
    /** @type {?} */
    PickerComponent.prototype.scrollRef;
    /** @type {?} */
    PickerComponent.prototype.previewRef;
    /** @type {?} */
    PickerComponent.prototype.searchRef;
    /** @type {?} */
    PickerComponent.prototype.categoryRefs;
    /** @type {?} */
    PickerComponent.prototype.scrollHeight;
    /** @type {?} */
    PickerComponent.prototype.clientHeight;
    /** @type {?} */
    PickerComponent.prototype.selected;
    /** @type {?} */
    PickerComponent.prototype.nextScroll;
    /** @type {?} */
    PickerComponent.prototype.scrollTop;
    /** @type {?} */
    PickerComponent.prototype.firstRender;
    /** @type {?} */
    PickerComponent.prototype.recent;
    /** @type {?} */
    PickerComponent.prototype.previewEmoji;
    /** @type {?} */
    PickerComponent.prototype.leaveTimeout;
    /** @type {?} */
    PickerComponent.prototype.NAMESPACE;
    /** @type {?} */
    PickerComponent.prototype.measureScrollbar;
    /** @type {?} */
    PickerComponent.prototype.RECENT_CATEGORY;
    /** @type {?} */
    PickerComponent.prototype.SEARCH_CATEGORY;
    /** @type {?} */
    PickerComponent.prototype.CUSTOM_CATEGORY;
    /** @type {?} */
    PickerComponent.prototype.backgroundImageFn;
    /** @type {?} */
    PickerComponent.prototype.ref;
    /** @type {?} */
    PickerComponent.prototype.frequently;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0LyIsInNvdXJjZXMiOlsicGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsVUFBVSxHQUtYLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUkzQyx1QkFBTSxJQUFJLEdBQVE7SUFDaEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLGdCQUFnQjtJQUMxQixVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsTUFBTSxFQUFFLGtCQUFrQjtRQUMxQixNQUFNLEVBQUUsa0JBQWtCO1FBQzFCLEtBQUssRUFBRSxjQUFjO1FBQ3JCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLE1BQU0sRUFBRSxpQkFBaUI7UUFDekIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsUUFBUTtLQUNqQjtDQUNGLENBQUM7QUFtRkYsTUFBTTs7Ozs7SUFxRUosWUFDVSxLQUNBO1FBREEsUUFBRyxHQUFILEdBQUc7UUFDSCxlQUFVLEdB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LFNBQUMsV0FBVzsyQkFDckIsWUFBWSxTQUFDLGFBQWE7Z0NBOEIxQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgY2F0ZWdvcmllcyxcbiAgRW1vamksXG4gIEVtb2ppQ2F0ZWdvcnksXG4gIEVtb2ppRGF0YSxcbiAgRW1vamlFdmVudCxcbn0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCB7IENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1vamlGcmVxdWVudGx5U2VydmljZSB9IGZyb20gJy4vZW1vamktZnJlcXVlbnRseS5zZXJ2aWNlJztcbmltcG9ydCB7IFByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBtZWFzdXJlU2Nyb2xsYmFyIH0gZnJvbSAnLi91dGlscyc7XG5cblxuXG5jb25zdCBJMThOOiBhbnkgPSB7XG4gIHNlYXJjaDogJ1NlYXJjaCcsXG4gIG5vdGZvdW5kOiAnTm8gRW1vamkgRm91bmQnLFxuICBjYXRlZ29yaWVzOiB7XG4gICAgc2VhcmNoOiAnU2VhcmNoIFJlc3VsdHMnLFxuICAgIHJlY2VudDogJ0ZyZXF1ZW50bHkgVXNlZCcsXG4gICAgcGVvcGxlOiAnU21pbGV5cyAmIFBlb3BsZScsXG4gICAgbmF0dXJlOiAnQW5pbWFscyAmIE5hdHVyZScsXG4gICAgZm9vZHM6ICdGb29kICYgRHJpbmsnLFxuICAgIGFjdGl2aXR5OiAnQWN0aXZpdHknLFxuICAgIHBsYWNlczogJ1RyYXZlbCAmIFBsYWNlcycsXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcbiAgICBmbGFnczogJ0ZsYWdzJyxcbiAgICBjdXN0b206ICdDdXN0b20nLFxuICB9LFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktbWFydCcsXG4gIHRlbXBsYXRlOiBgPGRpdlxuICBbc3R5bGUud2lkdGgucHhdPVwicGVyTGluZSAqIChlbW9qaVNpemUgKyAxMikgKyAxMiArIDIgKyBtZWFzdXJlU2Nyb2xsYmFyXCJcbiAgW25nU3R5bGVdPVwic3R5bGVcIlxuICBjbGFzcz1cImVtb2ppLW1hcnRcIj5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyXCI+XG4gICAgPGVtb2ppLW1hcnQtYW5jaG9yc1xuICAgICAgW2NhdGVnb3JpZXNdPVwiY2F0ZWdvcmllc1wiXG4gICAgICAoYW5jaG9yQ2xpY2spPVwiaGFuZGxlQW5jaG9yQ2xpY2soJGV2ZW50KVwiXG4gICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICAgIFtpMThuXT1cImkxOG5cIlxuICAgID5cbiAgICA8L2Vtb2ppLW1hcnQtYW5jaG9ycz5cbiAgPC9kaXY+XG4gIDxlbW9qaS1zZWFyY2hcbiAgICAjc2VhcmNoUmVmXG4gICAgW2kxOG5dPVwiaTE4blwiXG4gICAgKHNlYXJjaCk9XCJoYW5kbGVTZWFyY2goJGV2ZW50KVwiXG4gICAgKGVudGVyS2V5KT1cImhhbmRsZUVudGVyS2V5KCRldmVudClcIlxuICAgIFtpbmNsdWRlXT1cImluY2x1ZGVcIlxuICAgIFtleGNsdWRlXT1cImV4Y2x1ZGVcIlxuICAgIFtjdXN0b21dPVwiY3VzdG9tXCJcbiAgICBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1c1wiXG4gICAgW2Vtb2ppc1RvU2hvd0ZpbHRlcl09XCJlbW9qaXNUb1Nob3dGaWx0ZXJcIlxuICA+XG4gIDwvZW1vamktc2VhcmNoPlxuICA8ZGl2XG4gICAgI3Njcm9sbFJlZlxuICAgIGNsYXNzPVwiZW1vamktbWFydC1zY3JvbGxcIlxuICAgIChzY3JvbGwpPVwiaGFuZGxlU2Nyb2xsKClcIlxuICA+XG4gICAgPGRpdiBlbW9qaS1jYXRlZ29yeVxuICAgICAgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGFjdGl2ZUNhdGVnb3JpZXM7IGxldCBpZHggPSBpbmRleDsgdHJhY2tCeTogY2F0ZWdvcnlUcmFja1wiXG4gICAgICAjY2F0ZWdvcnlSZWZcbiAgICAgIFtpZF09XCJjYXRlZ29yeS5pZFwiXG4gICAgICBbbmFtZV09XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgIFtlbW9qaXNdPVwiY2F0ZWdvcnkuZW1vamlzXCJcbiAgICAgIFtwZXJMaW5lXT1cInBlckxpbmVcIlxuICAgICAgW25hdGl2ZV09XCJuYXRpdmVcIlxuICAgICAgW2hhc1N0aWNreVBvc2l0aW9uXT1cIm5hdGl2ZVwiXG4gICAgICBbaTE4bl09XCJpMThuXCJcbiAgICAgIFtoaWRlT2Jzb2xldGVdPVwiaGlkZU9ic29sZXRlXCJcbiAgICAgIFtjdXN0b21dPVwiY2F0ZWdvcnkuaWQgPT0gUkVDRU5UX0NBVEVHT1JZLmlkID8gQ1VTVE9NX0NBVEVHT1JZLmVtb2ppcyA6IHVuZGVmaW5lZFwiXG4gICAgICBbcmVjZW50XT1cImNhdGVnb3J5LmlkID09IFJFQ0VOVF9DQVRFR09SWS5pZCA/IHJlY2VudCA6IHVuZGVmaW5lZFwiXG5cbiAgICAgIFtlbW9qaU5hdGl2ZV09XCJuYXRpdmVcIlxuICAgICAgW2Vtb2ppU2tpbl09XCJza2luXCJcbiAgICAgIFtlbW9qaVNpemVdPVwiZW1vamlTaXplXCJcbiAgICAgIFtlbW9qaVNldF09XCJzZXRcIlxuICAgICAgW2Vtb2ppU2hlZXRTaXplXT1cInNoZWV0U2l6ZVwiXG4gICAgICBbZW1vamlGb3JjZVNpemVdPVwibmF0aXZlXCJcbiAgICAgIFtlbW9qaVRvb2x0aXBdPVwiZW1vamlUb29sdGlwXCJcbiAgICAgIChlbW9qaU92ZXIpPVwiaGFuZGxlRW1vamlPdmVyKCRldmVudClcIlxuICAgICAgKGVtb2ppTGVhdmUpPVwiaGFuZGxlRW1vamlMZWF2ZSgkZXZlbnQpXCJcbiAgICAgIChlbW9qaUNsaWNrKT1cImhhbmRsZUVtb2ppQ2xpY2soJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhclwiICpuZ0lmPVwic2hvd1ByZXZpZXdcIj5cbiAgPGVtb2ppLXByZXZpZXdcbiAgICAjcHJldmlld1JlZlxuICAgIFt0aXRsZV09XCJ0aXRsZVwiXG4gICAgW2Vtb2ppXT1cInByZXZpZXdFbW9qaVwiXG4gICAgW2lkbGVFbW9qaV09XCJlbW9qaVwiXG5cbiAgICBbZW1vamlOYXRpdmVdPVwibmF0aXZlXCJcbiAgICBbZW1vamlTaXplXT1cIjM4XCJcbiAgICBbZW1vamlTa2luXT1cInNraW5cIlxuICAgIFtlbW9qaVNldF09XCJzZXRcIlxuICAgIFtlbW9qaVNoZWV0U2l6ZV09XCJzaGVldFNpemVcIlxuICAgIFtlbW9qaUJhY2tncm91bmRJbWFnZUZuXT1cImJhY2tncm91bmRJbWFnZUZuXCJcbiAgICAoc2tpbkNoYW5nZSk9XCJoYW5kbGVTa2luQ2hhbmdlKCRldmVudClcIlxuICA+PC9lbW9qaS1wcmV2aWV3PlxuPC9kaXY+XG5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHBlckxpbmUgPSA5O1xuICBASW5wdXQoKSBpMThuOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgc3R5bGU6IGFueSA9IHt9O1xuICBASW5wdXQoKSB0aXRsZSA9ICdFbW9qaSBNYXJ04oSiJztcbiAgQElucHV0KCkgZW1vamkgPSAnZGVwYXJ0bWVudF9zdG9yZSc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyNhZTY1YzUnO1xuICBASW5wdXQoKSBoaWRlT2Jzb2xldGUgPSB0cnVlO1xuICAvKiogYWxsIGNhdGVnb3JpZXMgc2hvd24gKi9cbiAgQElucHV0KCkgY2F0ZWdvcmllczogRW1vamlDYXRlZ29yeVtdID0gW107XG4gIC8qKiB1c2VkIHRvIHRlbXBvcmFyaWx5IGRyYXcgY2F0ZWdvcmllcyAqL1xuICBASW5wdXQoKSBhY3RpdmVDYXRlZ29yaWVzOiBFbW9qaUNhdGVnb3J5W10gPSBbXTtcbiAgQElucHV0KCkgc2V0OiBFbW9qaVsnc2V0J10gPSAnYXBwbGUnO1xuICBASW5wdXQoKSBza2luOiBFbW9qaVsnc2tpbiddID0gMTtcbiAgQElucHV0KCkgbmF0aXZlOiBFbW9qaVsnbmF0aXZlJ10gPSBmYWxzZTtcbiAgQElucHV0KCkgZW1vamlTaXplOiBFbW9qaVsnc2l6ZSddID0gMjQ7XG4gIEBJbnB1dCgpIHNoZWV0U2l6ZTogRW1vamlbJ3NoZWV0U2l6ZSddID0gNjQ7XG4gIEBJbnB1dCgpIGVtb2ppc1RvU2hvd0ZpbHRlcj86ICh4OiBzdHJpbmcpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dQcmV2aWV3ID0gdHJ1ZTtcbiAgQElucHV0KCkgZW1vamlUb29sdGlwID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b206IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGhpZGVSZWNlbnQgPSB0cnVlO1xuICBASW5wdXQoKSBpbmNsdWRlPzogc3RyaW5nW107XG4gIEBJbnB1dCgpIGV4Y2x1ZGU/OiBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIGVtb2ppQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVtb2ppU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbFJlZicpIHByaXZhdGUgc2Nyb2xsUmVmPzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncHJldmlld1JlZicpIHByaXZhdGUgcHJldmlld1JlZj86IFByZXZpZXdDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaFJlZicpIHByaXZhdGUgc2VhcmNoUmVmPzogU2VhcmNoQ29tcG9uZW50O1xuICBAVmlld0NoaWxkcmVuKCdjYXRlZ29yeVJlZicpXG4gIHByaXZhdGUgY2F0ZWdvcnlSZWZzPzogUXVlcnlMaXN0PENhdGVnb3J5Q29tcG9uZW50PjtcbiAgc2Nyb2xsSGVpZ2h0ID0gMDtcbiAgY2xpZW50SGVpZ2h0ID0gMDtcbiAgc2VsZWN0ZWQ/OiBzdHJpbmc7XG4gIG5leHRTY3JvbGw/OiBzdHJpbmc7XG4gIHNjcm9sbFRvcD86IG51bWJlcjtcbiAgZmlyc3RSZW5kZXIgPSB0cnVlO1xuICByZWNlbnQ/OiBzdHJpbmdbXTtcbiAgcHJldmlld0Vtb2ppOiBhbnk7XG4gIGxlYXZlVGltZW91dDogYW55O1xuICBOQU1FU1BBQ0UgPSAnZW1vamktbWFydCc7XG4gIG1lYXN1cmVTY3JvbGxiYXIgPSAwO1xuICBSRUNFTlRfQ0FURUdPUlk6IEVtb2ppQ2F0ZWdvcnkgPSB7XG4gICAgaWQ6ICdyZWNlbnQnLFxuICAgIG5hbWU6ICdSZWNlbnQnLFxuICAgIGVtb2ppczogbnVsbCxcbiAgfTtcbiAgU0VBUkNIX0NBVEVHT1JZOiBFbW9qaUNhdGVnb3J5ID0ge1xuICAgIGlkOiAnc2VhcmNoJyxcbiAgICBuYW1lOiAnU2VhcmNoJyxcbiAgICBlbW9qaXM6IG51bGwsXG4gICAgYW5jaG9yOiBmYWxzZSxcbiAgfTtcbiAgQ1VTVE9NX0NBVEVHT1JZOiBFbW9qaUNhdGVnb3J5ID0ge1xuICAgIGlkOiAnY3VzdG9tJyxcbiAgICBuYW1lOiAnQ3VzdG9tJyxcbiAgICBlbW9qaXM6IFtdLFxuICB9O1xuXG4gIEBJbnB1dCgpXG4gIGJhY2tncm91bmRJbWFnZUZuOiBFbW9qaVsnYmFja2dyb3VuZEltYWdlRm4nXSA9IChcbiAgICBzZXQ6IHN0cmluZyxcbiAgICBzaGVldFNpemU6IG51bWJlcixcbiAgKSA9PlxuICAgIGBodHRwczovL3VucGtnLmNvbS9lbW9qaS1kYXRhc291cmNlLSR7dGhpcy5zZXR9QDQuMC40L2ltZy8ke1xuICAgICAgdGhpcy5zZXRcbiAgICB9L3NoZWV0cy0yNTYvJHt0aGlzLnNoZWV0U2l6ZX0ucG5nYFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGZyZXF1ZW50bHk6IEVtb2ppRnJlcXVlbnRseVNlcnZpY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBtZWFzdXJlIHNjcm9sbFxuICAgIHRoaXMubWVhc3VyZVNjcm9sbGJhciA9IG1lYXN1cmVTY3JvbGxiYXIoKTtcblxuICAgIHRoaXMuaTE4biA9IHsgLi4uSTE4TiwgLi4udGhpcy5pMThuIH07XG4gICAgdGhpcy5pMThuLmNhdGVnb3JpZXMgPSB7IC4uLkkxOE4uY2F0ZWdvcmllcywgLi4udGhpcy5pMThuLmNhdGVnb3JpZXMgfTtcbiAgICB0aGlzLnNraW4gPVxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0uc2tpbmApIHx8ICdudWxsJykgfHxcbiAgICAgIHRoaXMuc2tpbjtcblxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBbLi4uY2F0ZWdvcmllc107XG5cbiAgICBpZiAodGhpcy5jdXN0b20ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5DVVNUT01fQ0FURUdPUlkuZW1vamlzID0gdGhpcy5jdXN0b20ubWFwKGVtb2ppID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5lbW9qaSxcbiAgICAgICAgICAvLyBgPENhdGVnb3J5IC8+YCBleHBlY3RzIGVtb2ppIHRvIGhhdmUgYW4gYGlkYC5cbiAgICAgICAgICBpZDogZW1vamkuc2hvcnRfbmFtZXNbMF0sXG4gICAgICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGFsbENhdGVnb3JpZXMucHVzaCh0aGlzLkNVU1RPTV9DQVRFR09SWSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5jbHVkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGxDYXRlZ29yaWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaW5jbHVkZSEuaW5kZXhPZihhLmlkKSA+IHRoaXMuaW5jbHVkZSEuaW5kZXhPZihiLmlkKSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgYWxsQ2F0ZWdvcmllcykge1xuICAgICAgY29uc3QgaXNJbmNsdWRlZCA9XG4gICAgICAgIHRoaXMuaW5jbHVkZSAmJiB0aGlzLmluY2x1ZGUubGVuZ3RoXG4gICAgICAgICAgPyB0aGlzLmluY2x1ZGUuaW5kZXhPZihjYXRlZ29yeS5pZCkgPiAtMVxuICAgICAgICAgIDogdHJ1ZTtcbiAgICAgIGNvbnN0IGlzRXhjbHVkZWQgPVxuICAgICAgICB0aGlzLmV4Y2x1ZGUgJiYgdGhpcy5leGNsdWRlLmxlbmd0aFxuICAgICAgICAgID8gdGhpcy5leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgICA6IGZhbHNlO1xuICAgICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVtb2ppc1RvU2hvd0ZpbHRlcikge1xuICAgICAgICBjb25zdCBuZXdFbW9qaXMgPSBbXTtcblxuICAgICAgICBjb25zdCB7IGVtb2ppcyB9ID0gY2F0ZWdvcnk7XG4gICAgICAgIGZvciAobGV0IGVtb2ppSW5kZXggPSAwOyBlbW9qaUluZGV4IDwgZW1vamlzIS5sZW5ndGg7IGVtb2ppSW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVtb2ppID0gZW1vamlzIVtlbW9qaUluZGV4XTtcbiAgICAgICAgICBpZiAodGhpcy5lbW9qaXNUb1Nob3dGaWx0ZXIoZW1vamkpKSB7XG4gICAgICAgICAgICBuZXdFbW9qaXMucHVzaChlbW9qaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0Vtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBuZXdDYXRlZ29yeSA9IHtcbiAgICAgICAgICAgIGVtb2ppczogbmV3RW1vamlzLFxuICAgICAgICAgICAgbmFtZTogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2gobmV3Q2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5jbHVkZVJlY2VudCA9XG4gICAgICB0aGlzLmluY2x1ZGUgJiYgdGhpcy5pbmNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuaW5jbHVkZS5pbmRleE9mKHRoaXMuUkVDRU5UX0NBVEVHT1JZLmlkKSA+IC0xXG4gICAgICAgIDogdHJ1ZTtcbiAgICBjb25zdCBleGNsdWRlUmVjZW50ID1cbiAgICAgIHRoaXMuZXhjbHVkZSAmJiB0aGlzLmV4Y2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5leGNsdWRlLmluZGV4T2YodGhpcy5SRUNFTlRfQ0FURUdPUlkuaWQpID4gLTFcbiAgICAgICAgOiBmYWxzZTtcbiAgICBpZiAoaW5jbHVkZVJlY2VudCAmJiAhZXhjbHVkZVJlY2VudCkge1xuICAgICAgdGhpcy5oaWRlUmVjZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLmNhdGVnb3JpZXMudW5zaGlmdCh0aGlzLlJFQ0VOVF9DQVRFR09SWSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2F0ZWdvcmllc1swXSkge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNhdGVnb3JpZXMudW5zaGlmdCh0aGlzLlNFQVJDSF9DQVRFR09SWSk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuZmlyc3QpWzBdLm5hbWU7XG5cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXMuc2xpY2UoMCwgMyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXM7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMudXBkYXRlQ2F0ZWdvcmllc1NpemUoKTtcbiAgICB9KTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy51cGRhdGVDYXRlZ29yaWVzU2l6ZSgpO1xuICB9XG4gIHVwZGF0ZUNhdGVnb3JpZXNTaXplKCkge1xuICAgIHRoaXMuY2F0ZWdvcnlSZWZzIS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQubWVtb2l6ZVNpemUoKSk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxSZWYpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2Nyb2xsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnNjcm9sbEhlaWdodCA9IHRhcmdldC5zY3JvbGxIZWlnaHQ7XG4gICAgICB0aGlzLmNsaWVudEhlaWdodCA9IHRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICB9XG4gIGhhbmRsZUFuY2hvckNsaWNrKCRldmVudDogeyBjYXRlZ29yeTogRW1vamlDYXRlZ29yeTsgaW5kZXg6IG51bWJlciB9KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jYXRlZ29yeVJlZnMhLmZpbmQobiA9PiBuLmlkID09PSAkZXZlbnQuY2F0ZWdvcnkuaWQpO1xuXG4gICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcykge1xuICAgICAgdGhpcy5oYW5kbGVTZWFyY2gobnVsbCk7XG4gICAgICB0aGlzLnNlYXJjaFJlZiEuY2xlYXIoKTtcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgbGV0IHsgdG9wIH0gPSBjb21wb25lbnQ7XG5cbiAgICAgIGlmICgkZXZlbnQuY2F0ZWdvcnkuZmlyc3QpIHtcbiAgICAgICAgdG9wID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvcCArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxSZWYhLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gJGV2ZW50LmNhdGVnb3J5Lm5hbWU7XG4gICAgdGhpcy5uZXh0U2Nyb2xsID0gJGV2ZW50LmNhdGVnb3J5Lm5hbWU7XG4gIH1cbiAgY2F0ZWdvcnlUcmFjayhpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuICBoYW5kbGVTY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMubmV4dFNjcm9sbCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMubmV4dFNjcm9sbDtcbiAgICAgIHRoaXMubmV4dFNjcm9sbCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNjcm9sbFJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBhY3RpdmVDYXRlZ29yeSA9IG51bGw7XG4gICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcykge1xuICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLlNFQVJDSF9DQVRFR09SWTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5zY3JvbGxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIC8vIGNoZWNrIHNjcm9sbCBpcyBub3QgYXQgYm90dG9tXG4gICAgICBpZiAodGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAvLyBoaXQgdGhlIFRPUFxuICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllcy5maW5kKG4gPT4gbi5maXJzdCA9PT0gdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5zY3JvbGxIZWlnaHQgLSB0YXJnZXQuc2Nyb2xsVG9wID09PSB0aGlzLmNsaWVudEhlaWdodCkge1xuICAgICAgICAvLyBzY3JvbGxlZCB0byBib3R0b20gYWN0aXZhdGUgbGFzdCBjYXRlZ29yeVxuICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllc1t0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIC0gMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzY3JvbGxpbmdcbiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiB0aGlzLmNhdGVnb3JpZXMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNhdGVnb3J5UmVmcyEuZmluZChuID0+IG4uaWQgPT09IGNhdGVnb3J5LmlkKTtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBjb21wb25lbnQhLmhhbmRsZVNjcm9sbCh0YXJnZXQuc2Nyb2xsVG9wKTtcbiAgICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHRhcmdldC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIGlmIChhY3RpdmVDYXRlZ29yeSkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGFjdGl2ZUNhdGVnb3J5Lm5hbWU7XG4gICAgfVxuICB9XG4gIGhhbmRsZVNlYXJjaCgkZW1vamlzOiBhbnkpIHtcbiAgICB0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMgPSAkZW1vamlzO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHRoaXMuY2F0ZWdvcnlSZWZzIS50b0FycmF5KCkpIHtcbiAgICAgIGlmIChjb21wb25lbnQubmFtZSA9PT0gJ1NlYXJjaCcpIHtcbiAgICAgICAgY29tcG9uZW50LmVtb2ppcyA9ICRlbW9qaXM7XG4gICAgICAgIGNvbXBvbmVudC51cGRhdGVEaXNwbGF5KCRlbW9qaXMgPyAnaW5oZXJpdCcgOiAnbm9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnVwZGF0ZURpc3BsYXkoJGVtb2ppcyA/ICdub25lJyA6ICdpbmhlcml0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIHRoaXMuc2Nyb2xsUmVmIS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgfVxuXG4gIGhhbmRsZUVudGVyS2V5KCRldmVudDogRXZlbnQsIGVtb2ppPzogRW1vamlEYXRhKSB7XG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcyAhPT0gbnVsbCAmJiB0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIGVtb2ppID0gdGhpcy5TRUFSQ0hfQ0FURUdPUlkuZW1vamlzWzBdO1xuICAgICAgICBpZiAoZW1vamkpIHtcbiAgICAgICAgICB0aGlzLmVtb2ppU2VsZWN0LmVtaXQoeyAkZXZlbnQsIGVtb2ppIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5oaWRlUmVjZW50ICYmICF0aGlzLnJlY2VudCkge1xuICAgICAgdGhpcy5mcmVxdWVudGx5LmFkZCgoPEVtb2ppRGF0YT5lbW9qaSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY2F0ZWdvcnlSZWZzIS50b0FycmF5KClbMV07XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgY29uc3QgbWF4TWFyZ2luID0gY29tcG9uZW50Lm1heE1hcmdpbjtcbiAgICAgIGNvbXBvbmVudC5lbW9qaXMgPSB0aGlzLmZyZXF1ZW50bHkuZ2V0KG1heE1hcmdpbik7XG4gICAgICBjb21wb25lbnQucmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbFJlZikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQubWVtb2l6ZVNpemUoKTtcbiAgICAgICAgaWYgKG1heE1hcmdpbiA9PT0gY29tcG9uZW50Lm1heE1hcmdpbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlQ2F0ZWdvcmllc1NpemUoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcblxuICAgICAgICBpZiAodGhpcy5TRUFSQ0hfQ0FURUdPUlkuZW1vamlzKSB7XG4gICAgICAgICAgY29tcG9uZW50LnVwZGF0ZURpc3BsYXkoJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUVtb2ppT3ZlcigkZXZlbnQ6IEVtb2ppRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuc2hvd1ByZXZpZXcgfHwgIXRoaXMucHJldmlld1JlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVtb2ppRGF0YSA9IHRoaXMuQ1VTVE9NX0NBVEVHT1JZLmVtb2ppcyEuZmluZChcbiAgICAgIGN1c3RvbUVtb2ppID0+IGN1c3RvbUVtb2ppLmlkID09PSAkZXZlbnQuZW1vamkuaWQsXG4gICAgKTtcbiAgICBpZiAoZW1vamlEYXRhKSB7XG4gICAgICAkZXZlbnQuZW1vamkgPSB7IC4uLmVtb2ppRGF0YSB9O1xuICAgIH1cblxuICAgIHRoaXMucHJldmlld0Vtb2ppID0gJGV2ZW50LmVtb2ppO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmxlYXZlVGltZW91dCk7XG4gIH1cbiAgaGFuZGxlRW1vamlMZWF2ZSgkZXZlbnQ6IEVtb2ppRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuc2hvd1ByZXZpZXcgfHwgIXRoaXMucHJldmlld1JlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubGVhdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByZXZpZXdFbW9qaSA9IG51bGw7XG4gICAgICB0aGlzLnByZXZpZXdSZWYhLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAxNik7XG4gIH1cbiAgaGFuZGxlRW1vamlDbGljaygkZXZlbnQ6IEVtb2ppRXZlbnQpIHtcbiAgICB0aGlzLmVtb2ppQ2xpY2suZW1pdCgkZXZlbnQpO1xuICAgIHRoaXMuZW1vamlTZWxlY3QuZW1pdCgkZXZlbnQpO1xuICAgIHRoaXMuaGFuZGxlRW50ZXJLZXkoJGV2ZW50LiRldmVudCwgJGV2ZW50LmVtb2ppKTtcbiAgfVxuICBoYW5kbGVTa2luQ2hhbmdlKHNraW46IEVtb2ppWydza2luJ10pIHtcbiAgICB0aGlzLnNraW4gPSBza2luO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5za2luYCwgU3RyaW5nKHNraW4pKTtcbiAgfVxufVxuIl19