/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { categories, } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { EmojiFrequentlyService } from './emoji-frequently.service';
import { PreviewComponent } from './preview.component';
import { SearchComponent } from './search.component';
import { measureScrollbar } from './utils';
var /** @type {?} */ I18N = {
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
var PickerComponent = /** @class */ (function () {
    function PickerComponent(ref, frequently) {
        var _this = this;
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
        this.backgroundImageFn = function (set, sheetSize) {
            return "https://unpkg.com/emoji-datasource-" + _this.set + "@4.0.4/img/" + _this.set + "/sheets-256/" + _this.sheetSize + ".png";
        };
    }
    /**
     * @return {?}
     */
    PickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // measure scroll
        this.measureScrollbar = measureScrollbar();
        this.i18n = tslib_1.__assign({}, I18N, this.i18n);
        this.i18n.categories = tslib_1.__assign({}, I18N.categories, this.i18n.categories);
        this.skin =
            JSON.parse(localStorage.getItem(this.NAMESPACE + ".skin") || 'null') ||
                this.skin;
        var /** @type {?} */ allCategories = tslib_1.__spread(categories);
        if (this.custom.length > 0) {
            this.CUSTOM_CATEGORY.emojis = this.custom.map(function (emoji) {
                return tslib_1.__assign({}, emoji, { id: emoji.short_names[0], custom: true });
            });
            allCategories.push(this.CUSTOM_CATEGORY);
        }
        if (this.include !== undefined) {
            allCategories.sort(function (a, b) {
                if (/** @type {?} */ ((_this.include)).indexOf(a.id) > /** @type {?} */ ((_this.include)).indexOf(b.id)) {
                    return 1;
                }
                return -1;
            });
        }
        try {
            for (var allCategories_1 = tslib_1.__values(allCategories), allCategories_1_1 = allCategories_1.next(); !allCategories_1_1.done; allCategories_1_1 = allCategories_1.next()) {
                var category = allCategories_1_1.value;
                var /** @type {?} */ isIncluded = this.include && this.include.length
                    ? this.include.indexOf(category.id) > -1
                    : true;
                var /** @type {?} */ isExcluded = this.exclude && this.exclude.length
                    ? this.exclude.indexOf(category.id) > -1
                    : false;
                if (!isIncluded || isExcluded) {
                    continue;
                }
                if (this.emojisToShowFilter) {
                    var /** @type {?} */ newEmojis = [];
                    var emojis = category.emojis;
                    for (var /** @type {?} */ emojiIndex = 0; emojiIndex < /** @type {?} */ ((emojis)).length; emojiIndex++) {
                        var /** @type {?} */ emoji = /** @type {?} */ ((emojis))[emojiIndex];
                        if (this.emojisToShowFilter(emoji)) {
                            newEmojis.push(emoji);
                        }
                    }
                    if (newEmojis.length) {
                        var /** @type {?} */ newCategory = {
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
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (allCategories_1_1 && !allCategories_1_1.done && (_a = allCategories_1.return)) _a.call(allCategories_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var /** @type {?} */ includeRecent = this.include && this.include.length
            ? this.include.indexOf(this.RECENT_CATEGORY.id) > -1
            : true;
        var /** @type {?} */ excludeRecent = this.exclude && this.exclude.length
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
        this.selected = this.categories.filter(function (category) { return category.first; })[0].name;
        this.activeCategories = this.categories.slice(0, 3);
        setTimeout(function () {
            _this.activeCategories = _this.categories;
            _this.ref.markForCheck();
            _this.updateCategoriesSize();
        });
        var e_1, _a;
    };
    /**
     * @return {?}
     */
    PickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.updateCategoriesSize();
    };
    /**
     * @return {?}
     */
    PickerComponent.prototype.updateCategoriesSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */ ((this.categoryRefs)).forEach(function (component) { return component.memoizeSize(); });
        if (this.scrollRef) {
            var /** @type {?} */ target = this.scrollRef.nativeElement;
            this.scrollHeight = target.scrollHeight;
            this.clientHeight = target.clientHeight;
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PickerComponent.prototype.handleAnchorClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var /** @type {?} */ component = /** @type {?} */ ((this.categoryRefs)).find(function (n) { return n.id === $event.category.id; });
        if (this.SEARCH_CATEGORY.emojis) {
            this.handleSearch(null); /** @type {?} */
            ((this.searchRef)).clear();
        }
        if (component) {
            var top_1 = component.top;
            if ($event.category.first) {
                top_1 = 0;
            }
            else {
                top_1 += 1;
            } /** @type {?} */
            ((this.scrollRef)).nativeElement.scrollTop = top_1;
        }
        this.selected = $event.category.name;
        this.nextScroll = $event.category.name;
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    PickerComponent.prototype.categoryTrack = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return item.id;
    };
    /**
     * @return {?}
     */
    PickerComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        if (this.nextScroll) {
            this.selected = this.nextScroll;
            this.nextScroll = undefined;
            return;
        }
        if (!this.scrollRef) {
            return;
        }
        var /** @type {?} */ activeCategory = null;
        if (this.SEARCH_CATEGORY.emojis) {
            activeCategory = this.SEARCH_CATEGORY;
        }
        else {
            var /** @type {?} */ target = this.scrollRef.nativeElement;
            // check scroll is not at bottom
            if (target.scrollTop === 0) {
                // hit the TOP
                activeCategory = this.categories.find(function (n) { return n.first === true; });
            }
            else if (target.scrollHeight - target.scrollTop === this.clientHeight) {
                // scrolled to bottom activate last category
                activeCategory = this.categories[this.categories.length - 1];
            }
            else {
                var _loop_1 = function (category) {
                    var /** @type {?} */ component = /** @type {?} */ ((this_1.categoryRefs)).find(function (n) { return n.id === category.id; });
                    var /** @type {?} */ active = /** @type {?} */ ((component)).handleScroll(target.scrollTop);
                    if (active) {
                        activeCategory = category;
                    }
                };
                var this_1 = this;
                try {
                    // scrolling
                    for (var _a = tslib_1.__values(this.categories), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var category = _b.value;
                        _loop_1(category);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            this.scrollTop = target.scrollTop;
        }
        if (activeCategory) {
            this.selected = activeCategory.name;
        }
        var e_2, _c;
    };
    /**
     * @param {?} $emojis
     * @return {?}
     */
    PickerComponent.prototype.handleSearch = /**
     * @param {?} $emojis
     * @return {?}
     */
    function ($emojis) {
        this.SEARCH_CATEGORY.emojis = $emojis;
        try {
            for (var _a = tslib_1.__values(/** @type {?} */ ((this.categoryRefs)).toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
                var component = _b.value;
                if (component.name === 'Search') {
                    component.emojis = $emojis;
                    component.updateDisplay($emojis ? 'inherit' : 'none');
                }
                else {
                    component.updateDisplay($emojis ? 'none' : 'inherit');
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_3) throw e_3.error; }
        }
        ((
        // this.forceUpdate();
        this.scrollRef)).nativeElement.scrollTop = 0;
        this.handleScroll();
        var e_3, _c;
    };
    /**
     * @param {?} $event
     * @param {?=} emoji
     * @return {?}
     */
    PickerComponent.prototype.handleEnterKey = /**
     * @param {?} $event
     * @param {?=} emoji
     * @return {?}
     */
    function ($event, emoji) {
        var _this = this;
        if (!emoji) {
            if (this.SEARCH_CATEGORY.emojis !== null && this.SEARCH_CATEGORY.emojis.length) {
                emoji = this.SEARCH_CATEGORY.emojis[0];
                if (emoji) {
                    this.emojiSelect.emit({ $event: $event, emoji: emoji });
                }
                else {
                    return;
                }
            }
        }
        if (!this.hideRecent && !this.recent) {
            this.frequently.add((/** @type {?} */ (emoji)));
        }
        var /** @type {?} */ component = /** @type {?} */ ((this.categoryRefs)).toArray()[1];
        if (component) {
            var /** @type {?} */ maxMargin_1 = component.maxMargin;
            component.emojis = this.frequently.get(maxMargin_1);
            component.ref.markForCheck();
            window.requestAnimationFrame(function () {
                if (!_this.scrollRef) {
                    return;
                }
                component.memoizeSize();
                if (maxMargin_1 === component.maxMargin) {
                    return;
                }
                _this.updateCategoriesSize();
                _this.handleScroll();
                if (_this.SEARCH_CATEGORY.emojis) {
                    component.updateDisplay('none');
                }
            });
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PickerComponent.prototype.handleEmojiOver = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this.showPreview || !this.previewRef) {
            return;
        }
        var /** @type {?} */ emojiData = /** @type {?} */ ((this.CUSTOM_CATEGORY.emojis)).find(function (customEmoji) { return customEmoji.id === $event.emoji.id; });
        if (emojiData) {
            $event.emoji = tslib_1.__assign({}, emojiData);
        }
        this.previewEmoji = $event.emoji;
        clearTimeout(this.leaveTimeout);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PickerComponent.prototype.handleEmojiLeave = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        var _this = this;
        if (!this.showPreview || !this.previewRef) {
            return;
        }
        this.leaveTimeout = setTimeout(function () {
            _this.previewEmoji = null; /** @type {?} */
            ((_this.previewRef)).ref.markForCheck();
        }, 16);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    PickerComponent.prototype.handleEmojiClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.emojiClick.emit($event);
        this.emojiSelect.emit($event);
        this.handleEnterKey($event.$event, $event.emoji);
    };
    /**
     * @param {?} skin
     * @return {?}
     */
    PickerComponent.prototype.handleSkinChange = /**
     * @param {?} skin
     * @return {?}
     */
    function (skin) {
        this.skin = skin;
        localStorage.setItem(this.NAMESPACE + ".skin", String(skin));
    };
    PickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-mart',
                    template: "<div\n  [style.width.px]=\"perLine * (emojiSize + 12) + 12 + 2 + measureScrollbar\"\n  [ngStyle]=\"style\"\n  class=\"emoji-mart\">\n  <div class=\"emoji-mart-bar\">\n    <emoji-mart-anchors\n      [categories]=\"categories\"\n      (anchorClick)=\"handleAnchorClick($event)\"\n      [color]=\"color\"\n      [selected]=\"selected\"\n      [i18n]=\"i18n\"\n    >\n    </emoji-mart-anchors>\n  </div>\n  <emoji-search\n    #searchRef\n    [i18n]=\"i18n\"\n    (search)=\"handleSearch($event)\"\n    (enterKey)=\"handleEnterKey($event)\"\n    [include]=\"include\"\n    [exclude]=\"exclude\"\n    [custom]=\"custom\"\n    [autoFocus]=\"autoFocus\"\n    [emojisToShowFilter]=\"emojisToShowFilter\"\n  >\n  </emoji-search>\n  <div\n    #scrollRef\n    class=\"emoji-mart-scroll\"\n    (scroll)=\"handleScroll()\"\n  >\n    <div emoji-category\n      *ngFor=\"let category of activeCategories; let idx = index; trackBy: categoryTrack\"\n      #categoryRef\n      [id]=\"category.id\"\n      [name]=\"category.name\"\n      [emojis]=\"category.emojis\"\n      [perLine]=\"perLine\"\n      [native]=\"native\"\n      [hasStickyPosition]=\"native\"\n      [i18n]=\"i18n\"\n      [hideObsolete]=\"hideObsolete\"\n      [custom]=\"category.id == RECENT_CATEGORY.id ? CUSTOM_CATEGORY.emojis : undefined\"\n      [recent]=\"category.id == RECENT_CATEGORY.id ? recent : undefined\"\n\n      [emojiNative]=\"native\"\n      [emojiSkin]=\"skin\"\n      [emojiSize]=\"emojiSize\"\n      [emojiSet]=\"set\"\n      [emojiSheetSize]=\"sheetSize\"\n      [emojiForceSize]=\"native\"\n      [emojiTooltip]=\"emojiTooltip\"\n      (emojiOver)=\"handleEmojiOver($event)\"\n      (emojiLeave)=\"handleEmojiLeave($event)\"\n      (emojiClick)=\"handleEmojiClick($event)\"\n    >\n    </div>\n\n</div>\n<div class=\"emoji-mart-bar\" *ngIf=\"showPreview\">\n  <emoji-preview\n    #previewRef\n    [title]=\"title\"\n    [emoji]=\"previewEmoji\"\n    [idleEmoji]=\"emoji\"\n\n    [emojiNative]=\"native\"\n    [emojiSize]=\"38\"\n    [emojiSkin]=\"skin\"\n    [emojiSet]=\"set\"\n    [emojiSheetSize]=\"sheetSize\"\n    [emojiBackgroundImageFn]=\"backgroundImageFn\"\n    (skinChange)=\"handleSkinChange($event)\"\n  ></emoji-preview>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    PickerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: EmojiFrequentlyService }
    ]; };
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
    return PickerComponent;
}());
export { PickerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0LyIsInNvdXJjZXMiOlsicGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFVBQVUsR0FLWCxNQUFNLGdDQUFnQyxDQUFDO0FBRXhDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFJM0MscUJBQU0sSUFBSSxHQUFRO0lBQ2hCLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsVUFBVSxFQUFFO1FBQ1YsTUFBTSxFQUFFLGdCQUFnQjtRQUN4QixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRSxrQkFBa0I7UUFDMUIsTUFBTSxFQUFFLGtCQUFrQjtRQUMxQixLQUFLLEVBQUUsY0FBYztRQUNyQixRQUFRLEVBQUUsVUFBVTtRQUNwQixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLFFBQVE7S0FDakI7Q0FDRixDQUFDOztJQXdKQSx5QkFDVSxLQUNBO1FBRlYsaUJBR0k7UUFGTSxRQUFHLEdBQUgsR0FBRztRQUNILGVBQVUsR0FB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Q0wsS0FBSztxQ0FDTCxLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7NkJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7NkJBQ0wsTUFBTTs4QkFDTixNQUFNOzRCQUNOLFNBQVMsU0FBQyxXQUFXOzZCQUNyQixTQUFTLFNBQUMsWUFBWTs0QkFDdEIsU0FBUyxTQUFDLFdBQVc7K0JBQ3JCLFlBQVksU0FBQyxhQUFhO29DQThCMUIsS0FBSzs7MEJBN0xSOztTQWlJYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgY2F0ZWdvcmllcyxcbiAgRW1vamksXG4gIEVtb2ppQ2F0ZWdvcnksXG4gIEVtb2ppRGF0YSxcbiAgRW1vamlFdmVudCxcbn0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCB7IENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1vamlGcmVxdWVudGx5U2VydmljZSB9IGZyb20gJy4vZW1vamktZnJlcXVlbnRseS5zZXJ2aWNlJztcbmltcG9ydCB7IFByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBtZWFzdXJlU2Nyb2xsYmFyIH0gZnJvbSAnLi91dGlscyc7XG5cblxuXG5jb25zdCBJMThOOiBhbnkgPSB7XG4gIHNlYXJjaDogJ1NlYXJjaCcsXG4gIG5vdGZvdW5kOiAnTm8gRW1vamkgRm91bmQnLFxuICBjYXRlZ29yaWVzOiB7XG4gICAgc2VhcmNoOiAnU2VhcmNoIFJlc3VsdHMnLFxuICAgIHJlY2VudDogJ0ZyZXF1ZW50bHkgVXNlZCcsXG4gICAgcGVvcGxlOiAnU21pbGV5cyAmIFBlb3BsZScsXG4gICAgbmF0dXJlOiAnQW5pbWFscyAmIE5hdHVyZScsXG4gICAgZm9vZHM6ICdGb29kICYgRHJpbmsnLFxuICAgIGFjdGl2aXR5OiAnQWN0aXZpdHknLFxuICAgIHBsYWNlczogJ1RyYXZlbCAmIFBsYWNlcycsXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcbiAgICBmbGFnczogJ0ZsYWdzJyxcbiAgICBjdXN0b206ICdDdXN0b20nLFxuICB9LFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktbWFydCcsXG4gIHRlbXBsYXRlOiBgPGRpdlxuICBbc3R5bGUud2lkdGgucHhdPVwicGVyTGluZSAqIChlbW9qaVNpemUgKyAxMikgKyAxMiArIDIgKyBtZWFzdXJlU2Nyb2xsYmFyXCJcbiAgW25nU3R5bGVdPVwic3R5bGVcIlxuICBjbGFzcz1cImVtb2ppLW1hcnRcIj5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyXCI+XG4gICAgPGVtb2ppLW1hcnQtYW5jaG9yc1xuICAgICAgW2NhdGVnb3JpZXNdPVwiY2F0ZWdvcmllc1wiXG4gICAgICAoYW5jaG9yQ2xpY2spPVwiaGFuZGxlQW5jaG9yQ2xpY2soJGV2ZW50KVwiXG4gICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICAgIFtpMThuXT1cImkxOG5cIlxuICAgID5cbiAgICA8L2Vtb2ppLW1hcnQtYW5jaG9ycz5cbiAgPC9kaXY+XG4gIDxlbW9qaS1zZWFyY2hcbiAgICAjc2VhcmNoUmVmXG4gICAgW2kxOG5dPVwiaTE4blwiXG4gICAgKHNlYXJjaCk9XCJoYW5kbGVTZWFyY2goJGV2ZW50KVwiXG4gICAgKGVudGVyS2V5KT1cImhhbmRsZUVudGVyS2V5KCRldmVudClcIlxuICAgIFtpbmNsdWRlXT1cImluY2x1ZGVcIlxuICAgIFtleGNsdWRlXT1cImV4Y2x1ZGVcIlxuICAgIFtjdXN0b21dPVwiY3VzdG9tXCJcbiAgICBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1c1wiXG4gICAgW2Vtb2ppc1RvU2hvd0ZpbHRlcl09XCJlbW9qaXNUb1Nob3dGaWx0ZXJcIlxuICA+XG4gIDwvZW1vamktc2VhcmNoPlxuICA8ZGl2XG4gICAgI3Njcm9sbFJlZlxuICAgIGNsYXNzPVwiZW1vamktbWFydC1zY3JvbGxcIlxuICAgIChzY3JvbGwpPVwiaGFuZGxlU2Nyb2xsKClcIlxuICA+XG4gICAgPGRpdiBlbW9qaS1jYXRlZ29yeVxuICAgICAgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGFjdGl2ZUNhdGVnb3JpZXM7IGxldCBpZHggPSBpbmRleDsgdHJhY2tCeTogY2F0ZWdvcnlUcmFja1wiXG4gICAgICAjY2F0ZWdvcnlSZWZcbiAgICAgIFtpZF09XCJjYXRlZ29yeS5pZFwiXG4gICAgICBbbmFtZV09XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgIFtlbW9qaXNdPVwiY2F0ZWdvcnkuZW1vamlzXCJcbiAgICAgIFtwZXJMaW5lXT1cInBlckxpbmVcIlxuICAgICAgW25hdGl2ZV09XCJuYXRpdmVcIlxuICAgICAgW2hhc1N0aWNreVBvc2l0aW9uXT1cIm5hdGl2ZVwiXG4gICAgICBbaTE4bl09XCJpMThuXCJcbiAgICAgIFtoaWRlT2Jzb2xldGVdPVwiaGlkZU9ic29sZXRlXCJcbiAgICAgIFtjdXN0b21dPVwiY2F0ZWdvcnkuaWQgPT0gUkVDRU5UX0NBVEVHT1JZLmlkID8gQ1VTVE9NX0NBVEVHT1JZLmVtb2ppcyA6IHVuZGVmaW5lZFwiXG4gICAgICBbcmVjZW50XT1cImNhdGVnb3J5LmlkID09IFJFQ0VOVF9DQVRFR09SWS5pZCA/IHJlY2VudCA6IHVuZGVmaW5lZFwiXG5cbiAgICAgIFtlbW9qaU5hdGl2ZV09XCJuYXRpdmVcIlxuICAgICAgW2Vtb2ppU2tpbl09XCJza2luXCJcbiAgICAgIFtlbW9qaVNpemVdPVwiZW1vamlTaXplXCJcbiAgICAgIFtlbW9qaVNldF09XCJzZXRcIlxuICAgICAgW2Vtb2ppU2hlZXRTaXplXT1cInNoZWV0U2l6ZVwiXG4gICAgICBbZW1vamlGb3JjZVNpemVdPVwibmF0aXZlXCJcbiAgICAgIFtlbW9qaVRvb2x0aXBdPVwiZW1vamlUb29sdGlwXCJcbiAgICAgIChlbW9qaU92ZXIpPVwiaGFuZGxlRW1vamlPdmVyKCRldmVudClcIlxuICAgICAgKGVtb2ppTGVhdmUpPVwiaGFuZGxlRW1vamlMZWF2ZSgkZXZlbnQpXCJcbiAgICAgIChlbW9qaUNsaWNrKT1cImhhbmRsZUVtb2ppQ2xpY2soJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhclwiICpuZ0lmPVwic2hvd1ByZXZpZXdcIj5cbiAgPGVtb2ppLXByZXZpZXdcbiAgICAjcHJldmlld1JlZlxuICAgIFt0aXRsZV09XCJ0aXRsZVwiXG4gICAgW2Vtb2ppXT1cInByZXZpZXdFbW9qaVwiXG4gICAgW2lkbGVFbW9qaV09XCJlbW9qaVwiXG5cbiAgICBbZW1vamlOYXRpdmVdPVwibmF0aXZlXCJcbiAgICBbZW1vamlTaXplXT1cIjM4XCJcbiAgICBbZW1vamlTa2luXT1cInNraW5cIlxuICAgIFtlbW9qaVNldF09XCJzZXRcIlxuICAgIFtlbW9qaVNoZWV0U2l6ZV09XCJzaGVldFNpemVcIlxuICAgIFtlbW9qaUJhY2tncm91bmRJbWFnZUZuXT1cImJhY2tncm91bmRJbWFnZUZuXCJcbiAgICAoc2tpbkNoYW5nZSk9XCJoYW5kbGVTa2luQ2hhbmdlKCRldmVudClcIlxuICA+PC9lbW9qaS1wcmV2aWV3PlxuPC9kaXY+XG5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHBlckxpbmUgPSA5O1xuICBASW5wdXQoKSBpMThuOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgc3R5bGU6IGFueSA9IHt9O1xuICBASW5wdXQoKSB0aXRsZSA9ICdFbW9qaSBNYXJ04oSiJztcbiAgQElucHV0KCkgZW1vamkgPSAnZGVwYXJ0bWVudF9zdG9yZSc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyNhZTY1YzUnO1xuICBASW5wdXQoKSBoaWRlT2Jzb2xldGUgPSB0cnVlO1xuICAvKiogYWxsIGNhdGVnb3JpZXMgc2hvd24gKi9cbiAgQElucHV0KCkgY2F0ZWdvcmllczogRW1vamlDYXRlZ29yeVtdID0gW107XG4gIC8qKiB1c2VkIHRvIHRlbXBvcmFyaWx5IGRyYXcgY2F0ZWdvcmllcyAqL1xuICBASW5wdXQoKSBhY3RpdmVDYXRlZ29yaWVzOiBFbW9qaUNhdGVnb3J5W10gPSBbXTtcbiAgQElucHV0KCkgc2V0OiBFbW9qaVsnc2V0J10gPSAnYXBwbGUnO1xuICBASW5wdXQoKSBza2luOiBFbW9qaVsnc2tpbiddID0gMTtcbiAgQElucHV0KCkgbmF0aXZlOiBFbW9qaVsnbmF0aXZlJ10gPSBmYWxzZTtcbiAgQElucHV0KCkgZW1vamlTaXplOiBFbW9qaVsnc2l6ZSddID0gMjQ7XG4gIEBJbnB1dCgpIHNoZWV0U2l6ZTogRW1vamlbJ3NoZWV0U2l6ZSddID0gNjQ7XG4gIEBJbnB1dCgpIGVtb2ppc1RvU2hvd0ZpbHRlcj86ICh4OiBzdHJpbmcpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dQcmV2aWV3ID0gdHJ1ZTtcbiAgQElucHV0KCkgZW1vamlUb29sdGlwID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b206IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGhpZGVSZWNlbnQgPSB0cnVlO1xuICBASW5wdXQoKSBpbmNsdWRlPzogc3RyaW5nW107XG4gIEBJbnB1dCgpIGV4Y2x1ZGU/OiBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIGVtb2ppQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVtb2ppU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbFJlZicpIHByaXZhdGUgc2Nyb2xsUmVmPzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncHJldmlld1JlZicpIHByaXZhdGUgcHJldmlld1JlZj86IFByZXZpZXdDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaFJlZicpIHByaXZhdGUgc2VhcmNoUmVmPzogU2VhcmNoQ29tcG9uZW50O1xuICBAVmlld0NoaWxkcmVuKCdjYXRlZ29yeVJlZicpXG4gIHByaXZhdGUgY2F0ZWdvcnlSZWZzPzogUXVlcnlMaXN0PENhdGVnb3J5Q29tcG9uZW50PjtcbiAgc2Nyb2xsSGVpZ2h0ID0gMDtcbiAgY2xpZW50SGVpZ2h0ID0gMDtcbiAgc2VsZWN0ZWQ/OiBzdHJpbmc7XG4gIG5leHRTY3JvbGw/OiBzdHJpbmc7XG4gIHNjcm9sbFRvcD86IG51bWJlcjtcbiAgZmlyc3RSZW5kZXIgPSB0cnVlO1xuICByZWNlbnQ/OiBzdHJpbmdbXTtcbiAgcHJldmlld0Vtb2ppOiBhbnk7XG4gIGxlYXZlVGltZW91dDogYW55O1xuICBOQU1FU1BBQ0UgPSAnZW1vamktbWFydCc7XG4gIG1lYXN1cmVTY3JvbGxiYXIgPSAwO1xuICBSRUNFTlRfQ0FURUdPUlk6IEVtb2ppQ2F0ZWdvcnkgPSB7XG4gICAgaWQ6ICdyZWNlbnQnLFxuICAgIG5hbWU6ICdSZWNlbnQnLFxuICAgIGVtb2ppczogbnVsbCxcbiAgfTtcbiAgU0VBUkNIX0NBVEVHT1JZOiBFbW9qaUNhdGVnb3J5ID0ge1xuICAgIGlkOiAnc2VhcmNoJyxcbiAgICBuYW1lOiAnU2VhcmNoJyxcbiAgICBlbW9qaXM6IG51bGwsXG4gICAgYW5jaG9yOiBmYWxzZSxcbiAgfTtcbiAgQ1VTVE9NX0NBVEVHT1JZOiBFbW9qaUNhdGVnb3J5ID0ge1xuICAgIGlkOiAnY3VzdG9tJyxcbiAgICBuYW1lOiAnQ3VzdG9tJyxcbiAgICBlbW9qaXM6IFtdLFxuICB9O1xuXG4gIEBJbnB1dCgpXG4gIGJhY2tncm91bmRJbWFnZUZuOiBFbW9qaVsnYmFja2dyb3VuZEltYWdlRm4nXSA9IChcbiAgICBzZXQ6IHN0cmluZyxcbiAgICBzaGVldFNpemU6IG51bWJlcixcbiAgKSA9PlxuICAgIGBodHRwczovL3VucGtnLmNvbS9lbW9qaS1kYXRhc291cmNlLSR7dGhpcy5zZXR9QDQuMC40L2ltZy8ke1xuICAgICAgdGhpcy5zZXRcbiAgICB9L3NoZWV0cy0yNTYvJHt0aGlzLnNoZWV0U2l6ZX0ucG5nYFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGZyZXF1ZW50bHk6IEVtb2ppRnJlcXVlbnRseVNlcnZpY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBtZWFzdXJlIHNjcm9sbFxuICAgIHRoaXMubWVhc3VyZVNjcm9sbGJhciA9IG1lYXN1cmVTY3JvbGxiYXIoKTtcblxuICAgIHRoaXMuaTE4biA9IHsgLi4uSTE4TiwgLi4udGhpcy5pMThuIH07XG4gICAgdGhpcy5pMThuLmNhdGVnb3JpZXMgPSB7IC4uLkkxOE4uY2F0ZWdvcmllcywgLi4udGhpcy5pMThuLmNhdGVnb3JpZXMgfTtcbiAgICB0aGlzLnNraW4gPVxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0uc2tpbmApIHx8ICdudWxsJykgfHxcbiAgICAgIHRoaXMuc2tpbjtcblxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBbLi4uY2F0ZWdvcmllc107XG5cbiAgICBpZiAodGhpcy5jdXN0b20ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5DVVNUT01fQ0FURUdPUlkuZW1vamlzID0gdGhpcy5jdXN0b20ubWFwKGVtb2ppID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5lbW9qaSxcbiAgICAgICAgICAvLyBgPENhdGVnb3J5IC8+YCBleHBlY3RzIGVtb2ppIHRvIGhhdmUgYW4gYGlkYC5cbiAgICAgICAgICBpZDogZW1vamkuc2hvcnRfbmFtZXNbMF0sXG4gICAgICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGFsbENhdGVnb3JpZXMucHVzaCh0aGlzLkNVU1RPTV9DQVRFR09SWSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5jbHVkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGxDYXRlZ29yaWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaW5jbHVkZSEuaW5kZXhPZihhLmlkKSA+IHRoaXMuaW5jbHVkZSEuaW5kZXhPZihiLmlkKSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgYWxsQ2F0ZWdvcmllcykge1xuICAgICAgY29uc3QgaXNJbmNsdWRlZCA9XG4gICAgICAgIHRoaXMuaW5jbHVkZSAmJiB0aGlzLmluY2x1ZGUubGVuZ3RoXG4gICAgICAgICAgPyB0aGlzLmluY2x1ZGUuaW5kZXhPZihjYXRlZ29yeS5pZCkgPiAtMVxuICAgICAgICAgIDogdHJ1ZTtcbiAgICAgIGNvbnN0IGlzRXhjbHVkZWQgPVxuICAgICAgICB0aGlzLmV4Y2x1ZGUgJiYgdGhpcy5leGNsdWRlLmxlbmd0aFxuICAgICAgICAgID8gdGhpcy5leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgICA6IGZhbHNlO1xuICAgICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVtb2ppc1RvU2hvd0ZpbHRlcikge1xuICAgICAgICBjb25zdCBuZXdFbW9qaXMgPSBbXTtcblxuICAgICAgICBjb25zdCB7IGVtb2ppcyB9ID0gY2F0ZWdvcnk7XG4gICAgICAgIGZvciAobGV0IGVtb2ppSW5kZXggPSAwOyBlbW9qaUluZGV4IDwgZW1vamlzIS5sZW5ndGg7IGVtb2ppSW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVtb2ppID0gZW1vamlzIVtlbW9qaUluZGV4XTtcbiAgICAgICAgICBpZiAodGhpcy5lbW9qaXNUb1Nob3dGaWx0ZXIoZW1vamkpKSB7XG4gICAgICAgICAgICBuZXdFbW9qaXMucHVzaChlbW9qaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0Vtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBuZXdDYXRlZ29yeSA9IHtcbiAgICAgICAgICAgIGVtb2ppczogbmV3RW1vamlzLFxuICAgICAgICAgICAgbmFtZTogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2gobmV3Q2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5jbHVkZVJlY2VudCA9XG4gICAgICB0aGlzLmluY2x1ZGUgJiYgdGhpcy5pbmNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuaW5jbHVkZS5pbmRleE9mKHRoaXMuUkVDRU5UX0NBVEVHT1JZLmlkKSA+IC0xXG4gICAgICAgIDogdHJ1ZTtcbiAgICBjb25zdCBleGNsdWRlUmVjZW50ID1cbiAgICAgIHRoaXMuZXhjbHVkZSAmJiB0aGlzLmV4Y2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5leGNsdWRlLmluZGV4T2YodGhpcy5SRUNFTlRfQ0FURUdPUlkuaWQpID4gLTFcbiAgICAgICAgOiBmYWxzZTtcbiAgICBpZiAoaW5jbHVkZVJlY2VudCAmJiAhZXhjbHVkZVJlY2VudCkge1xuICAgICAgdGhpcy5oaWRlUmVjZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLmNhdGVnb3JpZXMudW5zaGlmdCh0aGlzLlJFQ0VOVF9DQVRFR09SWSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2F0ZWdvcmllc1swXSkge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNhdGVnb3JpZXMudW5zaGlmdCh0aGlzLlNFQVJDSF9DQVRFR09SWSk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuZmlyc3QpWzBdLm5hbWU7XG5cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXMuc2xpY2UoMCwgMyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXM7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMudXBkYXRlQ2F0ZWdvcmllc1NpemUoKTtcbiAgICB9KTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy51cGRhdGVDYXRlZ29yaWVzU2l6ZSgpO1xuICB9XG4gIHVwZGF0ZUNhdGVnb3JpZXNTaXplKCkge1xuICAgIHRoaXMuY2F0ZWdvcnlSZWZzIS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQubWVtb2l6ZVNpemUoKSk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxSZWYpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2Nyb2xsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnNjcm9sbEhlaWdodCA9IHRhcmdldC5zY3JvbGxIZWlnaHQ7XG4gICAgICB0aGlzLmNsaWVudEhlaWdodCA9IHRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICB9XG4gIGhhbmRsZUFuY2hvckNsaWNrKCRldmVudDogeyBjYXRlZ29yeTogRW1vamlDYXRlZ29yeTsgaW5kZXg6IG51bWJlciB9KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jYXRlZ29yeVJlZnMhLmZpbmQobiA9PiBuLmlkID09PSAkZXZlbnQuY2F0ZWdvcnkuaWQpO1xuXG4gICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcykge1xuICAgICAgdGhpcy5oYW5kbGVTZWFyY2gobnVsbCk7XG4gICAgICB0aGlzLnNlYXJjaFJlZiEuY2xlYXIoKTtcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgbGV0IHsgdG9wIH0gPSBjb21wb25lbnQ7XG5cbiAgICAgIGlmICgkZXZlbnQuY2F0ZWdvcnkuZmlyc3QpIHtcbiAgICAgICAgdG9wID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvcCArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxSZWYhLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gJGV2ZW50LmNhdGVnb3J5Lm5hbWU7XG4gICAgdGhpcy5uZXh0U2Nyb2xsID0gJGV2ZW50LmNhdGVnb3J5Lm5hbWU7XG4gIH1cbiAgY2F0ZWdvcnlUcmFjayhpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuICBoYW5kbGVTY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMubmV4dFNjcm9sbCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMubmV4dFNjcm9sbDtcbiAgICAgIHRoaXMubmV4dFNjcm9sbCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNjcm9sbFJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBhY3RpdmVDYXRlZ29yeSA9IG51bGw7XG4gICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcykge1xuICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLlNFQVJDSF9DQVRFR09SWTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5zY3JvbGxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIC8vIGNoZWNrIHNjcm9sbCBpcyBub3QgYXQgYm90dG9tXG4gICAgICBpZiAodGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAvLyBoaXQgdGhlIFRPUFxuICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllcy5maW5kKG4gPT4gbi5maXJzdCA9PT0gdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5zY3JvbGxIZWlnaHQgLSB0YXJnZXQuc2Nyb2xsVG9wID09PSB0aGlzLmNsaWVudEhlaWdodCkge1xuICAgICAgICAvLyBzY3JvbGxlZCB0byBib3R0b20gYWN0aXZhdGUgbGFzdCBjYXRlZ29yeVxuICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllc1t0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIC0gMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzY3JvbGxpbmdcbiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiB0aGlzLmNhdGVnb3JpZXMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNhdGVnb3J5UmVmcyEuZmluZChuID0+IG4uaWQgPT09IGNhdGVnb3J5LmlkKTtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBjb21wb25lbnQhLmhhbmRsZVNjcm9sbCh0YXJnZXQuc2Nyb2xsVG9wKTtcbiAgICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHRhcmdldC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIGlmIChhY3RpdmVDYXRlZ29yeSkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGFjdGl2ZUNhdGVnb3J5Lm5hbWU7XG4gICAgfVxuICB9XG4gIGhhbmRsZVNlYXJjaCgkZW1vamlzOiBhbnkpIHtcbiAgICB0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMgPSAkZW1vamlzO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHRoaXMuY2F0ZWdvcnlSZWZzIS50b0FycmF5KCkpIHtcbiAgICAgIGlmIChjb21wb25lbnQubmFtZSA9PT0gJ1NlYXJjaCcpIHtcbiAgICAgICAgY29tcG9uZW50LmVtb2ppcyA9ICRlbW9qaXM7XG4gICAgICAgIGNvbXBvbmVudC51cGRhdGVEaXNwbGF5KCRlbW9qaXMgPyAnaW5oZXJpdCcgOiAnbm9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnVwZGF0ZURpc3BsYXkoJGVtb2ppcyA/ICdub25lJyA6ICdpbmhlcml0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIHRoaXMuc2Nyb2xsUmVmIS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgfVxuXG4gIGhhbmRsZUVudGVyS2V5KCRldmVudDogRXZlbnQsIGVtb2ppPzogRW1vamlEYXRhKSB7XG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcyAhPT0gbnVsbCAmJiB0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIGVtb2ppID0gdGhpcy5TRUFSQ0hfQ0FURUdPUlkuZW1vamlzWzBdO1xuICAgICAgICBpZiAoZW1vamkpIHtcbiAgICAgICAgICB0aGlzLmVtb2ppU2VsZWN0LmVtaXQoeyAkZXZlbnQsIGVtb2ppIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5oaWRlUmVjZW50ICYmICF0aGlzLnJlY2VudCkge1xuICAgICAgdGhpcy5mcmVxdWVudGx5LmFkZCgoPEVtb2ppRGF0YT5lbW9qaSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY2F0ZWdvcnlSZWZzIS50b0FycmF5KClbMV07XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgY29uc3QgbWF4TWFyZ2luID0gY29tcG9uZW50Lm1heE1hcmdpbjtcbiAgICAgIGNvbXBvbmVudC5lbW9qaXMgPSB0aGlzLmZyZXF1ZW50bHkuZ2V0KG1heE1hcmdpbik7XG4gICAgICBjb21wb25lbnQucmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbFJlZikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQubWVtb2l6ZVNpemUoKTtcbiAgICAgICAgaWYgKG1heE1hcmdpbiA9PT0gY29tcG9uZW50Lm1heE1hcmdpbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlQ2F0ZWdvcmllc1NpemUoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcblxuICAgICAgICBpZiAodGhpcy5TRUFSQ0hfQ0FURUdPUlkuZW1vamlzKSB7XG4gICAgICAgICAgY29tcG9uZW50LnVwZGF0ZURpc3BsYXkoJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUVtb2ppT3ZlcigkZXZlbnQ6IEVtb2ppRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuc2hvd1ByZXZpZXcgfHwgIXRoaXMucHJldmlld1JlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVtb2ppRGF0YSA9IHRoaXMuQ1VTVE9NX0NBVEVHT1JZLmVtb2ppcyEuZmluZChcbiAgICAgIGN1c3RvbUVtb2ppID0+IGN1c3RvbUVtb2ppLmlkID09PSAkZXZlbnQuZW1vamkuaWQsXG4gICAgKTtcbiAgICBpZiAoZW1vamlEYXRhKSB7XG4gICAgICAkZXZlbnQuZW1vamkgPSB7IC4uLmVtb2ppRGF0YSB9O1xuICAgIH1cblxuICAgIHRoaXMucHJldmlld0Vtb2ppID0gJGV2ZW50LmVtb2ppO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmxlYXZlVGltZW91dCk7XG4gIH1cbiAgaGFuZGxlRW1vamlMZWF2ZSgkZXZlbnQ6IEVtb2ppRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuc2hvd1ByZXZpZXcgfHwgIXRoaXMucHJldmlld1JlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubGVhdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByZXZpZXdFbW9qaSA9IG51bGw7XG4gICAgICB0aGlzLnByZXZpZXdSZWYhLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAxNik7XG4gIH1cbiAgaGFuZGxlRW1vamlDbGljaygkZXZlbnQ6IEVtb2ppRXZlbnQpIHtcbiAgICB0aGlzLmVtb2ppQ2xpY2suZW1pdCgkZXZlbnQpO1xuICAgIHRoaXMuZW1vamlTZWxlY3QuZW1pdCgkZXZlbnQpO1xuICAgIHRoaXMuaGFuZGxlRW50ZXJLZXkoJGV2ZW50LiRldmVudCwgJGV2ZW50LmVtb2ppKTtcbiAgfVxuICBoYW5kbGVTa2luQ2hhbmdlKHNraW46IEVtb2ppWydza2luJ10pIHtcbiAgICB0aGlzLnNraW4gPSBza2luO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5za2luYCwgU3RyaW5nKHNraW4pKTtcbiAgfVxufVxuIl19