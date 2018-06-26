import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Injectable, ChangeDetectorRef, ViewChild, ViewChildren, NgModule } from '@angular/core';
import { EmojiService, categories, EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { __values, __assign, __spread } from 'tslib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* tslint:disable max-line-length */
var /** @type {?} */ svgs = {
    activity: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m10 11h-5c.3-2.5 1.3-4.8 2-6.1a10 10 0 0 1 3 6.1m-9 0V2a10 10 0 0 1 4.4 1.6A18 18 0 0 0 15 11h-2zm-2 0H9a18 18 0 0 0-2.4-7.4A10 10 0 0 1 11 2.1V11zm0 2v9a10 10 0 0 1-4.4-1.6A18 18 0 0 0 9 13h2zm4 0a18 18 0 0 0 2.4 7.4 10 10 0 0 1-4.4 1.5V13h2zM5 4.9c.7 1.3 1.7 3.6 2 6.1H2a10 10 0 0 1 3-6.1M2 13h5c-.3 2.5-1.3 4.8-2 6.1A10 10 0 0 1 2 13m17 6.1c-.7-1.3-1.7-3.6-2-6.1h5a10 10 0 0 1-3 6.1",
    custom: "M10 1h3v21h-3zm10.186 4l1.5 2.598L3.5 18.098 2 15.5zM2 7.598L3.5 5l18.186 10.5-1.5 2.598z",
    flags: "M0 0l6 24h2L2 0zm21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.6 3h7.8l2 8H8.6l-2-8zm8.8 10l-2.9 1.9-.4-1.9h3.3zm3.6 0l-1.5-6h2l2 8H16l3-2z",
    foods: "M17 5c-1.8 0-2.9.4-3.7 1 .5-1.3 1.8-3 4.7-3a1 1 0 0 0 0-2c-3 0-4.6 1.3-5.5 2.5l-.2.2c-.6-1.9-1.5-3.7-3-3.7C8.5 0 7.7.3 7 1c-2 1.5-1.7 2.9-.5 4C3.6 5.2 0 7.4 0 13c0 4.6 5 11 9 11 2 0 2.4-.5 3-1 .6.5 1 1 3 1 4 0 9-6.4 9-11 0-6-4-8-7-8M8.2 2.5c.7-.5 1-.5 1-.5.4.2 1 1.4 1.4 3-1.6-.6-2.8-1.3-3-1.8l.6-.7M15 22c-1 0-1.2-.1-1.6-.4l-.1-.2a2 2 0 0 0-2.6 0l-.1.2c-.4.3-.5.4-1.6.4-2.8 0-7-5.4-7-9 0-6 4.5-6 5-6 2 0 2.5.4 3.4 1.2l.3.3a2 2 0 0 0 2.6 0l.3-.3c1-.8 1.5-1.2 3.4-1.2.5 0 5 .1 5 6 0 3.6-4.2 9-7 9",
    nature: "M15.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10.43-8h-.02c-.97 0-2.14.79-3.02 1.5A13.88 13.88 0 0 0 12 .99c-1.28 0-2.62.13-3.87.51C7.24.8 6.07 0 5.09 0h-.02C3.35 0 .07 2.67 0 7.03c-.04 2.47.28 4.23 1.04 5 .26.27.88.69 1.3.9.19 3.17.92 5.23 2.53 6.37.9.64 2.19.95 3.2 1.1-.03.2-.07.4-.07.6 0 1.77 2.35 3 4 3s4-1.23 4-3c0-.2-.04-.4-.07-.59 2.57-.38 5.43-1.87 5.92-7.58.4-.22.89-.57 1.1-.8.77-.76 1.09-2.52 1.05-5C23.93 2.67 20.65 0 18.93 0M3.23 9.13c-.24.29-.84 1.16-.9 1.24A9.67 9.67 0 0 1 2 7.08c.05-3.28 2.48-4.97 3.1-5.03.25.02.72.27 1.26.65A7.95 7.95 0 0 0 4 7.82c-.14.55-.4.86-.79 1.31M12 22c-.9 0-1.95-.7-2-1 0-.65.47-1.24 1-1.6v.6a1 1 0 1 0 2 0v-.6c.52.36 1 .95 1 1.6-.05.3-1.1 1-2 1m3-3.48v.02a4.75 4.75 0 0 0-1.26-1.02c1.09-.52 2.24-1.33 2.24-2.22 0-1.84-1.78-2.2-3.98-2.2s-3.98.36-3.98 2.2c0 .89 1.15 1.7 2.24 2.22A4.8 4.8 0 0 0 9 18.54v-.03a6.1 6.1 0 0 1-2.97-.84c-1.3-.92-1.84-3.04-1.86-6.48l.03-.04c.5-.82 1.49-1.45 1.8-3.1C6 6 7.36 4.42 8.36 3.53c1.01-.35 2.2-.53 3.59-.53 1.45 0 2.68.2 3.73.57 1 .9 2.32 2.46 2.32 4.48.31 1.65 1.3 2.27 1.8 3.1l.1.18c-.06 5.97-1.95 7.01-4.9 7.19m6.63-8.2l-.11-.2a7.59 7.59 0 0 0-.74-.98 3.02 3.02 0 0 1-.79-1.32 7.93 7.93 0 0 0-2.35-5.12c.53-.38 1-.63 1.26-.65.64.07 3.05 1.77 3.1 5.03.02 1.81-.35 3.22-.37 3.24",
    objects: "M12 0a9 9 0 0 0-5 16.5V21s2 3 5 3 5-3 5-3v-4.5A9 9 0 0 0 12 0zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM9 17.5a9 9 0 0 0 6 0v.8a7 7 0 0 1-3 .7 7 7 0 0 1-3-.7v-.8zm.2 3a8.9 8.9 0 0 0 2.8.5c1 0 1.9-.2 2.8-.5-.6.7-1.6 1.5-2.8 1.5-1.1 0-2.1-.8-2.8-1.5zm5.5-8.1c-.8 0-1.1-.8-1.5-1.8-.5-1-.7-1.5-1.2-1.5s-.8.5-1.3 1.5c-.4 1-.8 1.8-1.6 1.8h-.3c-.5-.2-.8-.7-1.3-1.8l-.2-1A3 3 0 0 0 7 9a1 1 0 0 1 0-2c1.7 0 2 1.4 2.2 2.1.5-1 1.3-2 2.8-2 1.5 0 2.3 1.1 2.7 2.1.2-.8.6-2.2 2.3-2.2a1 1 0 1 1 0 2c-.2 0-.3.5-.3.7a6.5 6.5 0 0 1-.3 1c-.5 1-.8 1.7-1.7 1.7",
    people: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20M8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-.8 8c-.7 1.2-1.8 2-3.3 2-1.5 0-2.7-.8-3.4-2H15m3-2H6a6 6 0 1 0 12 0",
    places: "M6.5 12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m11-3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m5-5.5l-1-.4-.1-.1h.6c.6 0 1-.4 1-1 0-1-.9-2-2-2h-.6l-.8-1.7A3 3 0 0 0 16.8 2H7.2a3 3 0 0 0-2.8 2.3L3.6 6H3a2 2 0 0 0-2 2c0 .6.4 1 1 1h.6v.1l-1 .4a2 2 0 0 0-1.4 2l.7 7.6a1 1 0 0 0 1 .9H3v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h6v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h1.1a1 1 0 0 0 1-.9l.7-7.5a2 2 0 0 0-1.3-2.1M6.3 4.9c.1-.5.5-.9 1-.9h9.5c.4 0 .8.4 1 .9L19.2 9H4.7l1.6-4.1zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.2-3H2.8l-.7-6.6.9-.4h18l.9.4-.7 6.6z",
    recent: "M13 4h-2v7H9v2h2v2h2v-2h4v-2h-4zm-1-4a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20",
    symbols: "M0 0h11v2H0zm4 11h3V6h4V4H0v2h4zm11.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-2.99a.5.5 0 0 1 0 .99c-.28 0-.5-.22-.5-.5s.22-.49.5-.49m6 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 2.99a.5.5 0 0 1-.5-.5.5.5 0 0 1 1 .01.5.5 0 0 1-.5.49m.5-9l-9 9 1.51 1.5 9-9zm-5-2c2.2 0 4-1.12 4-2.5V2s.98-.16 1.5.95C23 4.05 23 6 23 6s1-1.12 1-3.13C24-.02 21 0 21 0h-2v6.35A5.85 5.85 0 0 0 17 6c-2.2 0-4 1.12-4 2.5s1.8 2.5 4 2.5m-6.7 9.48L8.82 18.9a47.54 47.54 0 0 1-1.44 1.13c-.3-.3-.99-1.02-2.04-2.19.9-.83 1.47-1.46 1.72-1.89s.38-.87.38-1.33c0-.6-.27-1.18-.82-1.76-.54-.58-1.33-.87-2.35-.87-1 0-1.79.29-2.34.87-.56.6-.83 1.18-.83 1.79 0 .81.42 1.75 1.25 2.8a6.57 6.57 0 0 0-1.8 1.79 3.46 3.46 0 0 0-.51 1.83c0 .86.3 1.56.92 2.1a3.5 3.5 0 0 0 2.42.83c1.17 0 2.44-.38 3.81-1.14L8.23 24h2.82l-2.09-2.38 1.34-1.14zM3.56 14.1a1.02 1.02 0 0 1 .73-.28c.31 0 .56.08.75.25a.85.85 0 0 1 .28.66c0 .52-.42 1.11-1.26 1.78-.53-.65-.8-1.23-.8-1.74a.9.9 0 0 1 .3-.67m.18 7.9c-.43 0-.78-.12-1.06-.35-.28-.23-.41-.49-.41-.76 0-.6.5-1.3 1.52-2.09a31.23 31.23 0 0 0 2.25 2.44c-.92.5-1.69.76-2.3.76",
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AnchorsComponent = /** @class */ (function () {
    function AnchorsComponent() {
        this.categories = [];
        this.anchorClick = new EventEmitter();
        this.svgs = svgs;
    }
    /**
     * @param {?} idx
     * @param {?} cat
     * @return {?}
     */
    AnchorsComponent.prototype.trackByFn = /**
     * @param {?} idx
     * @param {?} cat
     * @return {?}
     */
    function (idx, cat) {
        return cat.id;
    };
    /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    AnchorsComponent.prototype.handleClick = /**
     * @param {?} $event
     * @param {?} index
     * @return {?}
     */
    function ($event, index) {
        this.anchorClick.emit({
            category: this.categories[index],
            index: index,
        });
    };
    AnchorsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-mart-anchors',
                    template: "\n  <div class=\"emoji-mart-anchors\">\n    <ng-template ngFor let-category [ngForOf]=\"categories\" let-idx=\"index\" [ngForTrackBy]=\"trackByFn\">\n      <span\n        *ngIf=\"category.anchor !== false\"\n        [attr.title]=\"i18n.categories[category.id]\"\n        (click)=\"this.handleClick($event, idx)\"\n        class=\"emoji-mart-anchor\"\n        [class.emoji-mart-anchor-selected]=\"category.name === selected\"\n        [style.color]=\"category.name === selected ? color : null\"\n      >\n        <div>\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n            <path [attr.d]=\"svgs[category.id]\" />\n          </svg>\n        </div>\n        <span\n          class=\"emoji-mart-anchor-bar\"\n          [style.background-color]=\"color\"\n        ></span>\n      </span>\n    </ng-template>\n  </div>\n  ",
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
    return AnchorsComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EmojiFrequentlyService = /** @class */ (function () {
    function EmojiFrequentlyService() {
        this.NAMESPACE = 'emoji-mart';
        this.frequently = null;
        this.defaults = {};
        this.initialized = false;
        this.DEFAULTS = [
            '+1',
            'grinning',
            'kissing_heart',
            'heart_eyes',
            'laughing',
            'stuck_out_tongue_winking_eye',
            'sweat_smile',
            'joy',
            'scream',
            'disappointed',
            'unamused',
            'weary',
            'sob',
            'sunglasses',
            'heart',
            'poop',
        ];
    }
    /**
     * @return {?}
     */
    EmojiFrequentlyService.prototype.init = /**
     * @return {?}
     */
    function () {
        this.frequently = JSON.parse(localStorage.getItem(this.NAMESPACE + ".frequently") || 'null');
        this.initialized = true;
    };
    /**
     * @param {?} emoji
     * @return {?}
     */
    EmojiFrequentlyService.prototype.add = /**
     * @param {?} emoji
     * @return {?}
     */
    function (emoji) {
        if (!this.initialized) {
            this.init();
        }
        if (!this.frequently) {
            this.frequently = this.defaults;
        }
        if (!this.frequently[emoji.id]) {
            this.frequently[emoji.id] = 0;
        }
        this.frequently[emoji.id] += 1;
        localStorage.setItem(this.NAMESPACE + ".last", emoji.id);
        localStorage.setItem(this.NAMESPACE + ".frequently", JSON.stringify(this.frequently));
    };
    /**
     * @param {?} perLine
     * @return {?}
     */
    EmojiFrequentlyService.prototype.get = /**
     * @param {?} perLine
     * @return {?}
     */
    function (perLine) {
        var _this = this;
        if (!this.initialized) {
            this.init();
        }
        if (this.frequently === null) {
            this.defaults = {};
            var /** @type {?} */ result = [];
            for (var /** @type {?} */ i = 0; i < perLine; i++) {
                this.defaults[this.DEFAULTS[i]] = perLine - i;
                result.push(this.DEFAULTS[i]);
            }
            return result;
        }
        var /** @type {?} */ quantity = perLine * 4;
        var /** @type {?} */ frequentlyKeys = Object.keys(this.frequently);
        var /** @type {?} */ sorted = frequentlyKeys
            .sort(function (a, b) { return ((_this.frequently))[a] - /** @type {?} */ ((_this.frequently))[b]; })
            .reverse();
        var /** @type {?} */ sliced = sorted.slice(0, quantity);
        var /** @type {?} */ last = localStorage.getItem(this.NAMESPACE + ".last");
        if (last && !sliced.includes(last)) {
            sliced.pop();
            sliced.push(last);
        }
        return sliced;
    };
    EmojiFrequentlyService.decorators = [
        { type: Injectable },
    ];
    return EmojiFrequentlyService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} arr
 * @return {?}
 */
function uniq(arr) {
    return arr.reduce(function (acc, item) {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function intersect(a, b) {
    var /** @type {?} */ uniqA = uniq(a);
    var /** @type {?} */ uniqB = uniq(b);
    return uniqA.filter(function (item) { return uniqB.indexOf(item) >= 0; });
}
/**
 * @return {?}
 */
function measureScrollbar() {
    if (typeof document === 'undefined') {
        return 0;
    }
    var /** @type {?} */ div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    document.body.appendChild(div);
    var /** @type {?} */ scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollbarWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EmojiSearch = /** @class */ (function () {
    function EmojiSearch(emojiService) {
        var _this = this;
        this.emojiService = emojiService;
        this.originalPool = {};
        this.index = {};
        this.emojisList = {};
        this.emoticonsList = {};
        this.emojiSearch = {};
        var _loop_1 = function (emojiData) {
            var short_names = emojiData.short_names, emoticons = emojiData.emoticons;
            var /** @type {?} */ id = short_names[0];
            emoticons.forEach(function (emoticon) {
                if (_this.emoticonsList[emoticon]) {
                    return;
                }
                _this.emoticonsList[emoticon] = id;
            });
            this_1.emojisList[id] = this_1.emojiService.getSanitizedData(id);
            this_1.originalPool[id] = emojiData;
        };
        var this_1 = this;
        try {
            for (var _a = __values(this.emojiService.emojis), _b = _a.next(); !_b.done; _b = _a.next()) {
                var emojiData = _b.value;
                _loop_1(emojiData);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    }
    /**
     * @param {?} custom
     * @param {?} pool
     * @return {?}
     */
    EmojiSearch.prototype.addCustomToPool = /**
     * @param {?} custom
     * @param {?} pool
     * @return {?}
     */
    function (custom, pool) {
        var _this = this;
        custom.forEach(function (emoji) {
            var /** @type {?} */ emojiId = emoji.id || emoji.short_names[0];
            if (emojiId && !pool[emojiId]) {
                pool[emojiId] = _this.emojiService.getData(emoji);
                _this.emojisList[emojiId] = _this.emojiService.getSanitizedData(emoji);
            }
        });
    };
    /**
     * @param {?} value
     * @param {?=} emojisToShowFilter
     * @param {?=} maxResults
     * @param {?=} include
     * @param {?=} exclude
     * @param {?=} custom
     * @return {?}
     */
    EmojiSearch.prototype.search = /**
     * @param {?} value
     * @param {?=} emojisToShowFilter
     * @param {?=} maxResults
     * @param {?=} include
     * @param {?=} exclude
     * @param {?=} custom
     * @return {?}
     */
    function (value, emojisToShowFilter, maxResults, include, exclude, custom) {
        var _this = this;
        if (maxResults === void 0) { maxResults = 75; }
        if (include === void 0) { include = []; }
        if (exclude === void 0) { exclude = []; }
        if (custom === void 0) { custom = []; }
        this.addCustomToPool(custom, this.originalPool);
        var /** @type {?} */ results;
        var /** @type {?} */ pool = this.originalPool;
        if (value.length) {
            if (value === '-' || value === '-1') {
                return [this.emojisList['-1']];
            }
            var /** @type {?} */ values = value.toLowerCase().split(/[\s|,|\-|_]+/);
            var /** @type {?} */ allResults = [];
            if (values.length > 2) {
                values = [values[0], values[1]];
            }
            if (include.length || exclude.length) {
                pool = {};
                categories.forEach(function (category) {
                    var /** @type {?} */ isIncluded = include && include.length
                        ? include.indexOf(category.id) > -1
                        : true;
                    var /** @type {?} */ isExcluded = exclude && exclude.length
                        ? exclude.indexOf(category.id) > -1
                        : false;
                    if (!isIncluded || isExcluded) {
                        return;
                    } /** @type {?} */
                    ((category.emojis)).forEach(function (emojiId) { return (pool[emojiId] = _this.emojiService.names[emojiId]); });
                });
                if (custom.length) {
                    var /** @type {?} */ customIsIncluded = include && include.length ? include.indexOf('custom') > -1 : true;
                    var /** @type {?} */ customIsExcluded = exclude && exclude.length ? exclude.indexOf('custom') > -1 : false;
                    if (customIsIncluded && !customIsExcluded) {
                        this.addCustomToPool(custom, pool);
                    }
                }
            }
            allResults = values
                .map(function (v) {
                var /** @type {?} */ aPool = pool;
                var /** @type {?} */ aIndex = _this.index;
                var /** @type {?} */ length = 0;
                var _loop_2 = function (charIndex) {
                    var /** @type {?} */ char = v[charIndex];
                    length++;
                    if (!aIndex[char]) {
                        aIndex[char] = {};
                    }
                    aIndex = aIndex[char];
                    if (!aIndex.results) {
                        var /** @type {?} */ scores_1 = {};
                        aIndex.results = [];
                        aIndex.pool = {};
                        try {
                            for (var _a = __values(Object.keys(aPool)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                var id = _b.value;
                                var /** @type {?} */ emoji = aPool[id];
                                if (!_this.emojiSearch[id]) {
                                    _this.emojiSearch[id] = _this.buildSearch(emoji.short_names, emoji.name, emoji.keywords, emoji.emoticons);
                                }
                                var /** @type {?} */ query = _this.emojiSearch[id];
                                var /** @type {?} */ sub = v.substr(0, length);
                                var /** @type {?} */ subIndex = query.indexOf(sub);
                                if (subIndex !== -1) {
                                    var /** @type {?} */ score = subIndex + 1;
                                    if (sub === id) {
                                        score = 0;
                                    }
                                    aIndex.results.push(_this.emojisList[id]);
                                    aIndex.pool[id] = emoji;
                                    scores_1[id] = score;
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        aIndex.results.sort(function (a, b) {
                            var /** @type {?} */ aScore = scores_1[a.id];
                            var /** @type {?} */ bScore = scores_1[b.id];
                            return aScore - bScore;
                        });
                    }
                    aPool = aIndex.pool;
                    var e_2, _c;
                };
                for (var /** @type {?} */ charIndex = 0; charIndex < v.length; charIndex++) {
                    _loop_2(charIndex);
                }
                return aIndex.results;
            })
                .filter(function (a) { return a; });
            if (allResults.length > 1) {
                results = intersect.apply(null, allResults);
            }
            else if (allResults.length) {
                results = allResults[0];
            }
            else {
                results = [];
            }
        }
        if (results) {
            if (emojisToShowFilter) {
                results = results.filter(function (result) {
                    return emojisToShowFilter(_this.emojiService.names[result.id]);
                });
            }
            if (results && results.length > maxResults) {
                results = results.slice(0, maxResults);
            }
        }
        return results || null;
    };
    /**
     * @param {?} short_names
     * @param {?} name
     * @param {?} keywords
     * @param {?} emoticons
     * @return {?}
     */
    EmojiSearch.prototype.buildSearch = /**
     * @param {?} short_names
     * @param {?} name
     * @param {?} keywords
     * @param {?} emoticons
     * @return {?}
     */
    function (short_names, name, keywords, emoticons) {
        var /** @type {?} */ search = [];
        var /** @type {?} */ addToSearch = function (strings, split) {
            if (!strings) {
                return;
            }
            (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
                (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
                    s = s.toLowerCase();
                    if (!search.includes(s)) {
                        search.push(s);
                    }
                });
            });
        };
        addToSearch(short_names, true);
        addToSearch(name, true);
        addToSearch(keywords, false);
        addToSearch(emoticons, false);
        return search.join(',');
    };
    EmojiSearch.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EmojiSearch.ctorParameters = function () { return [
        { type: EmojiService }
    ]; };
    return EmojiSearch;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SearchComponent = /** @class */ (function () {
    function SearchComponent(emojiSearch) {
        this.emojiSearch = emojiSearch;
        this.maxResults = 75;
        this.autoFocus = false;
        this.include = [];
        this.exclude = [];
        this.custom = [];
        this.search = new EventEmitter();
        this.enterKey = new EventEmitter();
        this.query = '';
    }
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.autoFocus && this.inputRef) {
            this.inputRef.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.query = '';
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    SearchComponent.prototype.handleEnterKey = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.enterKey.emit($event);
        $event.preventDefault();
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.handleChange = /**
     * @return {?}
     */
    function () {
        this.search.emit(this.emojiSearch.search(this.query, this.emojisToShowFilter, this.maxResults, this.include, this.exclude, this.custom));
    };
    SearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji-search',
                    template: "\n  <div class=\"emoji-mart-search\">\n    <input #inputRef type=\"text\"\n      (keyup.enter)=\"handleEnterKey($event)\"\n      [placeholder]=\"i18n.search\" [autofocus]=\"autoFocus\"\n      [(ngModel)]=\"query\" (ngModelChange)=\"handleChange()\"\n    />\n  </div>\n  ",
                    preserveWhitespaces: false,
                },] },
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: EmojiSearch }
    ]; };
    SearchComponent.propDecorators = {
        maxResults: [{ type: Input }],
        autoFocus: [{ type: Input }],
        i18n: [{ type: Input }],
        include: [{ type: Input }],
        exclude: [{ type: Input }],
        custom: [{ type: Input }],
        emojisToShowFilter: [{ type: Input }],
        search: [{ type: Output }],
        enterKey: [{ type: Output }],
        inputRef: [{ type: ViewChild, args: ['inputRef',] }]
    };
    return SearchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
        this.i18n = __assign({}, I18N, this.i18n);
        this.i18n.categories = __assign({}, I18N.categories, this.i18n.categories);
        this.skin =
            JSON.parse(localStorage.getItem(this.NAMESPACE + ".skin") || 'null') ||
                this.skin;
        var /** @type {?} */ allCategories = __spread(categories);
        if (this.custom.length > 0) {
            this.CUSTOM_CATEGORY.emojis = this.custom.map(function (emoji) {
                return __assign({}, emoji, { id: emoji.short_names[0], custom: true });
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
            for (var allCategories_1 = __values(allCategories), allCategories_1_1 = allCategories_1.next(); !allCategories_1_1.done; allCategories_1_1 = allCategories_1.next()) {
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
                    for (var _a = __values(this.categories), _b = _a.next(); !_b.done; _b = _a.next()) {
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
            for (var _a = __values(/** @type {?} */ ((this.categoryRefs)).toArray()), _b = _a.next(); !_b.done; _b = _a.next()) {
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
            $event.emoji = __assign({}, emojiData);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ components = [
    PickerComponent,
    AnchorsComponent,
    CategoryComponent,
    SearchComponent,
    PreviewComponent,
    SkinComponent,
];
var PickerModule = /** @class */ (function () {
    function PickerModule() {
    }
    PickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, EmojiModule],
                    exports: components,
                    declarations: components,
                    providers: [EmojiSearch, EmojiFrequentlyService],
                },] },
    ];
    return PickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AnchorsComponent, CategoryComponent, EmojiFrequentlyService, EmojiSearch, PickerComponent, PickerModule, PreviewComponent, SearchComponent, SkinComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3RybC1uZ3gtZW1vamktbWFydC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvc3Zncy9pbmRleC50cyIsIm5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvYW5jaG9ycy5jb21wb25lbnQudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L2Vtb2ppLWZyZXF1ZW50bHkuc2VydmljZS50cyIsIm5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvY2F0ZWdvcnkuY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC91dGlscy9pbmRleC50cyIsIm5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvZW1vamktc2VhcmNoLnNlcnZpY2UudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L3ByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC9zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC9waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC9za2lucy5jb21wb25lbnQudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L3BpY2tlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5jb25zdCBzdmdzOiBhbnkgPSB7XG4gIGFjdGl2aXR5OiBgTTEyIDBhMTIgMTIgMCAxIDAgMCAyNCAxMiAxMiAwIDAgMCAwLTI0bTEwIDExaC01Yy4zLTIuNSAxLjMtNC44IDItNi4xYTEwIDEwIDAgMCAxIDMgNi4xbS05IDBWMmExMCAxMCAwIDAgMSA0LjQgMS42QTE4IDE4IDAgMCAwIDE1IDExaC0yem0tMiAwSDlhMTggMTggMCAwIDAtMi40LTcuNEExMCAxMCAwIDAgMSAxMSAyLjFWMTF6bTAgMnY5YTEwIDEwIDAgMCAxLTQuNC0xLjZBMTggMTggMCAwIDAgOSAxM2gyem00IDBhMTggMTggMCAwIDAgMi40IDcuNCAxMCAxMCAwIDAgMS00LjQgMS41VjEzaDJ6TTUgNC45Yy43IDEuMyAxLjcgMy42IDIgNi4xSDJhMTAgMTAgMCAwIDEgMy02LjFNMiAxM2g1Yy0uMyAyLjUtMS4zIDQuOC0yIDYuMUExMCAxMCAwIDAgMSAyIDEzbTE3IDYuMWMtLjctMS4zLTEuNy0zLjYtMi02LjFoNWExMCAxMCAwIDAgMS0zIDYuMWAsXG5cbiAgY3VzdG9tOiBgTTEwIDFoM3YyMWgtM3ptMTAuMTg2IDRsMS41IDIuNTk4TDMuNSAxOC4wOTggMiAxNS41ek0yIDcuNTk4TDMuNSA1bDE4LjE4NiAxMC41LTEuNSAyLjU5OHpgLFxuXG4gIGZsYWdzOiBgTTAgMGw2IDI0aDJMMiAwem0yMSA1aC00bC0xLTRINGwzIDEyaDNsMSA0aDEzTDIxIDV6TTYuNiAzaDcuOGwyIDhIOC42bC0yLTh6bTguOCAxMGwtMi45IDEuOS0uNC0xLjloMy4zem0zLjYgMGwtMS41LTZoMmwyIDhIMTZsMy0yemAsXG5cbiAgZm9vZHM6IGBNMTcgNWMtMS44IDAtMi45LjQtMy43IDEgLjUtMS4zIDEuOC0zIDQuNy0zYTEgMSAwIDAgMCAwLTJjLTMgMC00LjYgMS4zLTUuNSAyLjVsLS4yLjJjLS42LTEuOS0xLjUtMy43LTMtMy43QzguNSAwIDcuNy4zIDcgMWMtMiAxLjUtMS43IDIuOS0uNSA0QzMuNiA1LjIgMCA3LjQgMCAxM2MwIDQuNiA1IDExIDkgMTEgMiAwIDIuNC0uNSAzLTEgLjYuNSAxIDEgMyAxIDQgMCA5LTYuNCA5LTExIDAtNi00LTgtNy04TTguMiAyLjVjLjctLjUgMS0uNSAxLS41LjQuMiAxIDEuNCAxLjQgMy0xLjYtLjYtMi44LTEuMy0zLTEuOGwuNi0uN00xNSAyMmMtMSAwLTEuMi0uMS0xLjYtLjRsLS4xLS4yYTIgMiAwIDAgMC0yLjYgMGwtLjEuMmMtLjQuMy0uNS40LTEuNi40LTIuOCAwLTctNS40LTctOSAwLTYgNC41LTYgNS02IDIgMCAyLjUuNCAzLjQgMS4ybC4zLjNhMiAyIDAgMCAwIDIuNiAwbC4zLS4zYzEtLjggMS41LTEuMiAzLjQtMS4yLjUgMCA1IC4xIDUgNiAwIDMuNi00LjIgOS03IDlgLFxuXG4gIG5hdHVyZTogYE0xNS41IDhhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNtLTcgMGExLjUgMS41IDAgMSAwIDAgMyAxLjUgMS41IDAgMCAwIDAtM20xMC40My04aC0uMDJjLS45NyAwLTIuMTQuNzktMy4wMiAxLjVBMTMuODggMTMuODggMCAwIDAgMTIgLjk5Yy0xLjI4IDAtMi42Mi4xMy0zLjg3LjUxQzcuMjQuOCA2LjA3IDAgNS4wOSAwaC0uMDJDMy4zNSAwIC4wNyAyLjY3IDAgNy4wM2MtLjA0IDIuNDcuMjggNC4yMyAxLjA0IDUgLjI2LjI3Ljg4LjY5IDEuMy45LjE5IDMuMTcuOTIgNS4yMyAyLjUzIDYuMzcuOS42NCAyLjE5Ljk1IDMuMiAxLjEtLjAzLjItLjA3LjQtLjA3LjYgMCAxLjc3IDIuMzUgMyA0IDNzNC0xLjIzIDQtM2MwLS4yLS4wNC0uNC0uMDctLjU5IDIuNTctLjM4IDUuNDMtMS44NyA1LjkyLTcuNTguNC0uMjIuODktLjU3IDEuMS0uOC43Ny0uNzYgMS4wOS0yLjUyIDEuMDUtNUMyMy45MyAyLjY3IDIwLjY1IDAgMTguOTMgME0zLjIzIDkuMTNjLS4yNC4yOS0uODQgMS4xNi0uOSAxLjI0QTkuNjcgOS42NyAwIDAgMSAyIDcuMDhjLjA1LTMuMjggMi40OC00Ljk3IDMuMS01LjAzLjI1LjAyLjcyLjI3IDEuMjYuNjVBNy45NSA3Ljk1IDAgMCAwIDQgNy44MmMtLjE0LjU1LS40Ljg2LS43OSAxLjMxTTEyIDIyYy0uOSAwLTEuOTUtLjctMi0xIDAtLjY1LjQ3LTEuMjQgMS0xLjZ2LjZhMSAxIDAgMSAwIDIgMHYtLjZjLjUyLjM2IDEgLjk1IDEgMS42LS4wNS4zLTEuMSAxLTIgMW0zLTMuNDh2LjAyYTQuNzUgNC43NSAwIDAgMC0xLjI2LTEuMDJjMS4wOS0uNTIgMi4yNC0xLjMzIDIuMjQtMi4yMiAwLTEuODQtMS43OC0yLjItMy45OC0yLjJzLTMuOTguMzYtMy45OCAyLjJjMCAuODkgMS4xNSAxLjcgMi4yNCAyLjIyQTQuOCA0LjggMCAwIDAgOSAxOC41NHYtLjAzYTYuMSA2LjEgMCAwIDEtMi45Ny0uODRjLTEuMy0uOTItMS44NC0zLjA0LTEuODYtNi40OGwuMDMtLjA0Yy41LS44MiAxLjQ5LTEuNDUgMS44LTMuMUM2IDYgNy4zNiA0LjQyIDguMzYgMy41M2MxLjAxLS4zNSAyLjItLjUzIDMuNTktLjUzIDEuNDUgMCAyLjY4LjIgMy43My41NyAxIC45IDIuMzIgMi40NiAyLjMyIDQuNDguMzEgMS42NSAxLjMgMi4yNyAxLjggMy4xbC4xLjE4Yy0uMDYgNS45Ny0xLjk1IDcuMDEtNC45IDcuMTltNi42My04LjJsLS4xMS0uMmE3LjU5IDcuNTkgMCAwIDAtLjc0LS45OCAzLjAyIDMuMDIgMCAwIDEtLjc5LTEuMzIgNy45MyA3LjkzIDAgMCAwLTIuMzUtNS4xMmMuNTMtLjM4IDEtLjYzIDEuMjYtLjY1LjY0LjA3IDMuMDUgMS43NyAzLjEgNS4wMy4wMiAxLjgxLS4zNSAzLjIyLS4zNyAzLjI0YCxcblxuICBvYmplY3RzOiBgTTEyIDBhOSA5IDAgMCAwLTUgMTYuNVYyMXMyIDMgNSAzIDUtMyA1LTN2LTQuNUE5IDkgMCAwIDAgMTIgMHptMCAyYTcgNyAwIDEgMSAwIDE0IDcgNyAwIDAgMSAwLTE0ek05IDE3LjVhOSA5IDAgMCAwIDYgMHYuOGE3IDcgMCAwIDEtMyAuNyA3IDcgMCAwIDEtMy0uN3YtLjh6bS4yIDNhOC45IDguOSAwIDAgMCAyLjguNWMxIDAgMS45LS4yIDIuOC0uNS0uNi43LTEuNiAxLjUtMi44IDEuNS0xLjEgMC0yLjEtLjgtMi44LTEuNXptNS41LTguMWMtLjggMC0xLjEtLjgtMS41LTEuOC0uNS0xLS43LTEuNS0xLjItMS41cy0uOC41LTEuMyAxLjVjLS40IDEtLjggMS44LTEuNiAxLjhoLS4zYy0uNS0uMi0uOC0uNy0xLjMtMS44bC0uMi0xQTMgMyAwIDAgMCA3IDlhMSAxIDAgMCAxIDAtMmMxLjcgMCAyIDEuNCAyLjIgMi4xLjUtMSAxLjMtMiAyLjgtMiAxLjUgMCAyLjMgMS4xIDIuNyAyLjEuMi0uOC42LTIuMiAyLjMtMi4yYTEgMSAwIDEgMSAwIDJjLS4yIDAtLjMuNS0uMy43YTYuNSA2LjUgMCAwIDEtLjMgMWMtLjUgMS0uOCAxLjctMS43IDEuN2AsXG5cbiAgcGVvcGxlOiBgTTEyIDBhMTIgMTIgMCAxIDAgMCAyNCAxMiAxMiAwIDAgMCAwLTI0bTAgMjJhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwTTggN2EyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRtOCAwYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNG0tLjggOGMtLjcgMS4yLTEuOCAyLTMuMyAyLTEuNSAwLTIuNy0uOC0zLjQtMkgxNW0zLTJINmE2IDYgMCAxIDAgMTIgMGAsXG5cbiAgcGxhY2VzOiBgTTYuNSAxMmEyLjUgMi41IDAgMSAwIDAgNSAyLjUgMi41IDAgMCAwIDAtNW0wIDNjLS4zIDAtLjUtLjItLjUtLjVzLjItLjUuNS0uNS41LjIuNS41LS4yLjUtLjUuNW0xMS0zYTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01bTAgM2MtLjMgMC0uNS0uMi0uNS0uNXMuMi0uNS41LS41LjUuMi41LjUtLjIuNS0uNS41bTUtNS41bC0xLS40LS4xLS4xaC42Yy42IDAgMS0uNCAxLTEgMC0xLS45LTItMi0yaC0uNmwtLjgtMS43QTMgMyAwIDAgMCAxNi44IDJINy4yYTMgMyAwIDAgMC0yLjggMi4zTDMuNiA2SDNhMiAyIDAgMCAwLTIgMmMwIC42LjQgMSAxIDFoLjZ2LjFsLTEgLjRhMiAyIDAgMCAwLTEuNCAybC43IDcuNmExIDEgMCAwIDAgMSAuOUgzdjFjMCAxLjEuOSAyIDIgMmgyYTIgMiAwIDAgMCAyLTJ2LTFoNnYxYzAgMS4xLjkgMiAyIDJoMmEyIDIgMCAwIDAgMi0ydi0xaDEuMWExIDEgMCAwIDAgMS0uOWwuNy03LjVhMiAyIDAgMCAwLTEuMy0yLjFNNi4zIDQuOWMuMS0uNS41LS45IDEtLjloOS41Yy40IDAgLjguNCAxIC45TDE5LjIgOUg0LjdsMS42LTQuMXpNNyAyMUg1di0xaDJ2MXptMTIgMGgtMnYtMWgydjF6bTIuMi0zSDIuOGwtLjctNi42LjktLjRoMThsLjkuNC0uNyA2LjZ6YCxcblxuICByZWNlbnQ6IGBNMTMgNGgtMnY3SDl2MmgydjJoMnYtMmg0di0yaC00em0tMS00YTEyIDEyIDAgMSAwIDAgMjQgMTIgMTIgMCAwIDAgMC0yNG0wIDIyYTEwIDEwIDAgMSAxIDAtMjAgMTAgMTAgMCAwIDEgMCAyMGAsXG5cbiAgc3ltYm9sczogYE0wIDBoMTF2Mkgwem00IDExaDNWNmg0VjRIMHYyaDR6bTExLjUgNmEyLjUgMi41IDAgMSAwIDAtNSAyLjUgMi41IDAgMCAwIDAgNW0wLTIuOTlhLjUuNSAwIDAgMSAwIC45OWMtLjI4IDAtLjUtLjIyLS41LS41cy4yMi0uNDkuNS0uNDltNiA1YTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01bTAgMi45OWEuNS41IDAgMCAxLS41LS41LjUuNSAwIDAgMSAxIC4wMS41LjUgMCAwIDEtLjUuNDltLjUtOWwtOSA5IDEuNTEgMS41IDktOXptLTUtMmMyLjIgMCA0LTEuMTIgNC0yLjVWMnMuOTgtLjE2IDEuNS45NUMyMyA0LjA1IDIzIDYgMjMgNnMxLTEuMTIgMS0zLjEzQzI0LS4wMiAyMSAwIDIxIDBoLTJ2Ni4zNUE1Ljg1IDUuODUgMCAwIDAgMTcgNmMtMi4yIDAtNCAxLjEyLTQgMi41czEuOCAyLjUgNCAyLjVtLTYuNyA5LjQ4TDguODIgMTguOWE0Ny41NCA0Ny41NCAwIDAgMS0xLjQ0IDEuMTNjLS4zLS4zLS45OS0xLjAyLTIuMDQtMi4xOS45LS44MyAxLjQ3LTEuNDYgMS43Mi0xLjg5cy4zOC0uODcuMzgtMS4zM2MwLS42LS4yNy0xLjE4LS44Mi0xLjc2LS41NC0uNTgtMS4zMy0uODctMi4zNS0uODctMSAwLTEuNzkuMjktMi4zNC44Ny0uNTYuNi0uODMgMS4xOC0uODMgMS43OSAwIC44MS40MiAxLjc1IDEuMjUgMi44YTYuNTcgNi41NyAwIDAgMC0xLjggMS43OSAzLjQ2IDMuNDYgMCAwIDAtLjUxIDEuODNjMCAuODYuMyAxLjU2LjkyIDIuMWEzLjUgMy41IDAgMCAwIDIuNDIuODNjMS4xNyAwIDIuNDQtLjM4IDMuODEtMS4xNEw4LjIzIDI0aDIuODJsLTIuMDktMi4zOCAxLjM0LTEuMTR6TTMuNTYgMTQuMWExLjAyIDEuMDIgMCAwIDEgLjczLS4yOGMuMzEgMCAuNTYuMDguNzUuMjVhLjg1Ljg1IDAgMCAxIC4yOC42NmMwIC41Mi0uNDIgMS4xMS0xLjI2IDEuNzgtLjUzLS42NS0uOC0xLjIzLS44LTEuNzRhLjkuOSAwIDAgMSAuMy0uNjdtLjE4IDcuOWMtLjQzIDAtLjc4LS4xMi0xLjA2LS4zNS0uMjgtLjIzLS40MS0uNDktLjQxLS43NiAwLS42LjUtMS4zIDEuNTItMi4wOWEzMS4yMyAzMS4yMyAwIDAgMCAyLjI1IDIuNDRjLS45Mi41LTEuNjkuNzYtMi4zLjc2YCxcbn07XG5leHBvcnQgZGVmYXVsdCBzdmdzO1xuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamlDYXRlZ29yeSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgU1ZHcyBmcm9tICcuL3N2Z3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1tYXJ0LWFuY2hvcnMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1jYXRlZ29yeSBbbmdGb3JPZl09XCJjYXRlZ29yaWVzXCIgbGV0LWlkeD1cImluZGV4XCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5Rm5cIj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwiY2F0ZWdvcnkuYW5jaG9yICE9PSBmYWxzZVwiXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxuICAgICAgICAoY2xpY2spPVwidGhpcy5oYW5kbGVDbGljaygkZXZlbnQsIGlkeClcIlxuICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yXCJcbiAgICAgICAgW2NsYXNzLmVtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkXT1cImNhdGVnb3J5Lm5hbWUgPT09IHNlbGVjdGVkXCJcbiAgICAgICAgW3N0eWxlLmNvbG9yXT1cImNhdGVnb3J5Lm5hbWUgPT09IHNlbGVjdGVkID8gY29sb3IgOiBudWxsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cInN2Z3NbY2F0ZWdvcnkuaWRdXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBBbmNob3JzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2F0ZWdvcmllczogRW1vamlDYXRlZ29yeVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBzZWxlY3RlZD86IHN0cmluZztcbiAgQElucHV0KCkgaTE4bjogYW55O1xuICBAT3V0cHV0KCkgYW5jaG9yQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgY2F0ZWdvcnk6IEVtb2ppQ2F0ZWdvcnksIGluZGV4OiBudW1iZXIgfT4oKTtcbiAgc3ZnczogYW55ID0gU1ZHcztcblxuICB0cmFja0J5Rm4oaWR4OiBudW1iZXIsIGNhdDogRW1vamlDYXRlZ29yeSkge1xuICAgIHJldHVybiBjYXQuaWQ7XG4gIH1cbiAgaGFuZGxlQ2xpY2soJGV2ZW50OiBFdmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuYW5jaG9yQ2xpY2suZW1pdCh7XG4gICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yaWVzW2luZGV4XSxcbiAgICAgIGluZGV4LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtb2ppRGF0YSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIHtcbiAgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnO1xuICBmcmVxdWVudGx5OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG4gIGRlZmF1bHRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIERFRkFVTFRTID0gW1xuICAgICcrMScsXG4gICAgJ2dyaW5uaW5nJyxcbiAgICAna2lzc2luZ19oZWFydCcsXG4gICAgJ2hlYXJ0X2V5ZXMnLFxuICAgICdsYXVnaGluZycsXG4gICAgJ3N0dWNrX291dF90b25ndWVfd2lua2luZ19leWUnLFxuICAgICdzd2VhdF9zbWlsZScsXG4gICAgJ2pveScsXG4gICAgJ3NjcmVhbScsXG4gICAgJ2Rpc2FwcG9pbnRlZCcsXG4gICAgJ3VuYW11c2VkJyxcbiAgICAnd2VhcnknLFxuICAgICdzb2InLFxuICAgICdzdW5nbGFzc2VzJyxcbiAgICAnaGVhcnQnLFxuICAgICdwb29wJyxcbiAgXTtcblxuICBpbml0KCkge1xuICAgIHRoaXMuZnJlcXVlbnRseSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5OQU1FU1BBQ0V9LmZyZXF1ZW50bHlgKSB8fCAnbnVsbCcpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIGFkZChlbW9qaTogRW1vamlEYXRhKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZyZXF1ZW50bHkpIHtcbiAgICAgIHRoaXMuZnJlcXVlbnRseSA9IHRoaXMuZGVmYXVsdHM7XG4gICAgfVxuICAgIGlmICghdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSkge1xuICAgICAgdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSA9IDA7XG4gICAgfVxuICAgIHRoaXMuZnJlcXVlbnRseVtlbW9qaS5pZF0gKz0gMTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5sYXN0YCwgZW1vamkuaWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5mcmVxdWVudGx5YCwgSlNPTi5zdHJpbmdpZnkodGhpcy5mcmVxdWVudGx5KSk7XG4gIH1cbiAgZ2V0KHBlckxpbmU6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyZXF1ZW50bHkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyTGluZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHNbdGhpcy5ERUZBVUxUU1tpXV0gPSBwZXJMaW5lIC0gaTtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ERUZBVUxUU1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHF1YW50aXR5ID0gcGVyTGluZSAqIDQ7XG4gICAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZyZXF1ZW50bHkpO1xuXG4gICAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmZyZXF1ZW50bHkhW2FdIC0gdGhpcy5mcmVxdWVudGx5IVtiXSlcbiAgICAgIC5yZXZlcnNlKCk7XG4gICAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KTtcblxuICAgIGNvbnN0IGxhc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0ubGFzdGApO1xuXG4gICAgaWYgKGxhc3QgJiYgIXNsaWNlZC5pbmNsdWRlcyhsYXN0KSkge1xuICAgICAgc2xpY2VkLnBvcCgpO1xuICAgICAgc2xpY2VkLnB1c2gobGFzdCk7XG4gICAgfVxuICAgIHJldHVybiBzbGljZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamksIEVtb2ppU2VydmljZSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgeyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIH0gZnJvbSAnLi9lbW9qaS1mcmVxdWVudGx5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbZW1vamktY2F0ZWdvcnldJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdlxuICAgICNjb250YWluZXJcbiAgICBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnlcIlxuICAgIFtjbGFzcy5lbW9qaS1tYXJ0LW5vLXJlc3VsdHNdPVwiZW1vamlzICYmICFlbW9qaXMubGVuZ3RoXCJcbiAgICBbbmdTdHlsZV09XCJjb250YWluZXJTdHlsZXNcIlxuICA+XG4gICAgPGRpdlxuICAgICAgW25nU3R5bGVdPVwibGFiZWxTdHlsZXNcIlxuICAgICAgW2F0dHIuZGF0YS1uYW1lXT1cIm5hbWVcIlxuICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCJcbiAgICA+XG4gICAgICA8c3BhbiBzdHlsZT1cImxhYmVsU3BhblN0eWxlc1wiICNsYWJlbD5cbiAgICAgICAge3sgaTE4bi5jYXRlZ29yaWVzW2lkXSB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImVtb2ppc1wiPlxuICAgICAgPG5neC1lbW9qaVxuICAgICAgICAqbmdGb3I9XCJsZXQgZW1vamkgb2YgZW1vamlzOyB0cmFja0J5OiB0cmFja0J5SWRcIlxuICAgICAgICBbZW1vamldPVwiZW1vamlcIlxuICAgICAgICBbc2l6ZV09XCJlbW9qaVNpemVcIlxuICAgICAgICBbc2tpbl09XCJlbW9qaVNraW5cIlxuICAgICAgICBbbmF0aXZlXT1cImVtb2ppTmF0aXZlXCJcbiAgICAgICAgW3NldF09XCJlbW9qaVNldFwiXG4gICAgICAgIFtzaGVldFNpemVdPVwiZW1vamlTaGVldFNpemVcIlxuICAgICAgICBbZm9yY2VTaXplXT1cImVtb2ppRm9yY2VTaXplXCJcbiAgICAgICAgW3Rvb2x0aXBdPVwiZW1vamlUb29sdGlwXCJcbiAgICAgICAgW2hpZGVPYnNvbGV0ZV09XCJoaWRlT2Jzb2xldGVcIlxuICAgICAgICAoZW1vamlPdmVyKT1cImVtb2ppT3Zlci5lbWl0KCRldmVudClcIlxuICAgICAgICAoZW1vamlMZWF2ZSk9XCJlbW9qaUxlYXZlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChlbW9qaUNsaWNrKT1cImVtb2ppQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgIDwvbmd4LWVtb2ppPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiZW1vamlzICYmICFlbW9qaXMubGVuZ3RoXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bmd4LWVtb2ppXG4gICAgICAgICAgZW1vamk9XCJzbGV1dGhfb3Jfc3B5XCJcbiAgICAgICAgICBzaXplPVwiMzhcIlxuICAgICAgICAgIFtza2luXT1cImVtb2ppU2tpblwiXG4gICAgICAgICAgW25hdGl2ZV09XCJlbW9qaU5hdGl2ZVwiXG4gICAgICAgICAgW3NldF09XCJlbW9qaVNldFwiXG4gICAgICAgICAgW3NoZWV0U2l6ZV09XCJlbW9qaVNoZWV0U2l6ZVwiXG4gICAgICAgICAgW2ZvcmNlU2l6ZV09XCJlbW9qaUZvcmNlU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiZW1vamlUb29sdGlwXCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvbmd4LWVtb2ppPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1vamktbWFydC1uby1yZXN1bHRzLWxhYmVsXCI+XG4gICAgICAgIHt7IGkxOG4ubm90Zm91bmQgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgZW1vamlzPzogYW55W10gfCBudWxsO1xuICBASW5wdXQoKSBoYXNTdGlja3lQb3NpdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcbiAgQElucHV0KCkgbmF0aXZlID0gdHJ1ZTtcbiAgQElucHV0KCkgcGVyTGluZSA9IDk7XG4gIEBJbnB1dCgpIHJlY2VudDogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgY3VzdG9tOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBpMThuOiBhbnk7XG4gIEBJbnB1dCgpIGlkOiBhbnk7XG4gIEBJbnB1dCgpIGhpZGVPYnNvbGV0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIGVtb2ppTmF0aXZlPzogRW1vamlbJ25hdGl2ZSddO1xuICBASW5wdXQoKSBlbW9qaVNraW4/OiBFbW9qaVsnc2tpbiddO1xuICBASW5wdXQoKSBlbW9qaVNpemU/OiBFbW9qaVsnc2l6ZSddO1xuICBASW5wdXQoKSBlbW9qaVNldD86IEVtb2ppWydzZXQnXTtcbiAgQElucHV0KCkgZW1vamlTaGVldFNpemU/OiBFbW9qaVsnc2hlZXRTaXplJ107XG4gIEBJbnB1dCgpIGVtb2ppRm9yY2VTaXplPzogRW1vamlbJ2ZvcmNlU2l6ZSddO1xuICBASW5wdXQoKSBlbW9qaVRvb2x0aXA/OiBFbW9qaVsndG9vbHRpcCddO1xuICBAT3V0cHV0KCkgZW1vamlPdmVyOiBFbW9qaVsnZW1vamlPdmVyJ10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlbW9qaUxlYXZlOiBFbW9qaVsnZW1vamlMZWF2ZSddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZW1vamlDbGljazogRW1vamlbJ2Vtb2ppQ2xpY2snXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyPzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGFiZWwnKSBsYWJlbD86IEVsZW1lbnRSZWY7XG4gIGNvbnRhaW5lclN0eWxlczogYW55ID0ge307XG4gIGxhYmVsU3R5bGVzOiBhbnkgPSB7fTtcbiAgbGFiZWxTcGFuU3R5bGVzOiBhbnkgPSB7fTtcbiAgcGFyZW50PzogRWxlbWVudDtcbiAgbWFyZ2luID0gMDtcbiAgbWluTWFyZ2luID0gMDtcbiAgbWF4TWFyZ2luID0gMDtcbiAgdG9wID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVtb2ppU2VydmljZTogRW1vamlTZXJ2aWNlLFxuICAgIHByaXZhdGUgZnJlcXVlbnRseTogRW1vamlGcmVxdWVudGx5U2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZW1vamlzID0gdGhpcy5nZXRFbW9qaXMoKTtcblxuICAgIGlmICghdGhpcy5lbW9qaXMpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyU3R5bGVzID0geyBkaXNwbGF5OiAnbm9uZScgfTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGFzU3RpY2t5UG9zaXRpb24pIHtcbiAgICAgIHRoaXMubGFiZWxTdHlsZXMgPSB7IGhlaWdodDogMjggfTtcbiAgICAgIHRoaXMubGFiZWxTcGFuU3R5bGVzID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9O1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnBhcmVudCA9IHRoaXMuY29udGFpbmVyIS5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB0aGlzLm1lbW9pemVTaXplKCk7XG4gIH1cbiAgbWVtb2l6ZVNpemUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdG9wLFxuICAgICAgaGVpZ2h0LFxuICAgIH0gPSB0aGlzLmNvbnRhaW5lciEubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwYXJlbnRUb3AgPSB0aGlzLnBhcmVudCEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbCEubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB0aGlzLnRvcCA9IHRvcCAtIHBhcmVudFRvcCArIHRoaXMucGFyZW50IS5zY3JvbGxUb3A7XG5cbiAgICBpZiAoaGVpZ2h0ID09PSAwKSB7XG4gICAgICB0aGlzLm1heE1hcmdpbiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWF4TWFyZ2luID0gaGVpZ2h0IC0gbGFiZWxIZWlnaHQ7XG4gICAgfVxuICB9XG4gIGhhbmRsZVNjcm9sbChzY3JvbGxUb3A6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGxldCBtYXJnaW4gPSBzY3JvbGxUb3AgLSB0aGlzLnRvcDtcbiAgICBtYXJnaW4gPSBtYXJnaW4gPCB0aGlzLm1pbk1hcmdpbiA/IHRoaXMubWluTWFyZ2luIDogbWFyZ2luO1xuICAgIG1hcmdpbiA9IG1hcmdpbiA+IHRoaXMubWF4TWFyZ2luID8gdGhpcy5tYXhNYXJnaW4gOiBtYXJnaW47XG5cbiAgICBpZiAobWFyZ2luID09PSB0aGlzLm1hcmdpbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5oYXNTdGlja3lQb3NpdGlvbikge1xuICAgICAgdGhpcy5sYWJlbCEubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHttYXJnaW59cHhgO1xuICAgIH1cblxuICAgIHRoaXMubWFyZ2luID0gbWFyZ2luO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0RW1vamlzKCkge1xuICAgIGlmICh0aGlzLm5hbWUgPT09ICdSZWNlbnQnKSB7XG4gICAgICBsZXQgZnJlcXVlbnRseVVzZWQgPSB0aGlzLnJlY2VudCB8fCB0aGlzLmZyZXF1ZW50bHkuZ2V0KHRoaXMucGVyTGluZSk7XG4gICAgICBpZiAoIWZyZXF1ZW50bHlVc2VkIHx8ICFmcmVxdWVudGx5VXNlZC5sZW5ndGgpIHtcbiAgICAgICAgZnJlcXVlbnRseVVzZWQgPSB0aGlzLmZyZXF1ZW50bHkuZ2V0KHRoaXMucGVyTGluZSk7XG4gICAgICB9XG4gICAgICBpZiAoZnJlcXVlbnRseVVzZWQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZW1vamlzID0gZnJlcXVlbnRseVVzZWRcbiAgICAgICAgICAubWFwKGlkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtb2ppID0gdGhpcy5jdXN0b20uZmlsdGVyKChlOiBhbnkpID0+IGUuaWQgPT09IGlkKVswXTtcbiAgICAgICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgICAgICByZXR1cm4gZW1vamk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoaWQgPT4gISF0aGlzLmVtb2ppU2VydmljZS5nZXREYXRhKGlkKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoIXRoaXMuZW1vamlzIHx8IHRoaXMuZW1vamlzLmxlbmd0aCA9PT0gMCkgJiYgZnJlcXVlbnRseVVzZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbW9qaXMpIHtcbiAgICAgIHRoaXMuZW1vamlzID0gdGhpcy5lbW9qaXMuc2xpY2UoMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZW1vamlzO1xuICB9XG4gIHVwZGF0ZURpc3BsYXkoZGlzcGxheTogJ25vbmUnIHwgJ2luaGVyaXQnKSB7XG4gICAgdGhpcy5jb250YWluZXJTdHlsZXMuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgdGhpcy5nZXRFbW9qaXMoKTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG59XG4iLCJmdW5jdGlvbiB1bmlxKGFycjogYW55W10pIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYzogQXJyYXk8YW55PiwgaXRlbTogYW55KSA9PiB7XG4gICAgaWYgKCFhY2MuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgIGFjYy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3QoYTogYW55LCBiOiBhbnkpIHtcbiAgY29uc3QgdW5pcUEgPSB1bmlxKGEpO1xuICBjb25zdCB1bmlxQiA9IHVuaXEoYik7XG5cbiAgcmV0dXJuIHVuaXFBLmZpbHRlcigoaXRlbTogYW55KSA9PiB1bmlxQi5pbmRleE9mKGl0ZW0pID49IDApO1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29uaWNkb2UvbWVhc3VyZS1zY3JvbGxiYXJcbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGRpdi5zdHlsZS53aWR0aCA9ICcxMDBweCc7XG4gIGRpdi5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG5cbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBjYXRlZ29yaWVzLFxuICBFbW9qaURhdGEsXG4gIEVtb2ppU2VydmljZSxcbn0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCB7IGludGVyc2VjdCB9IGZyb20gJy4vdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1vamlTZWFyY2gge1xuICBvcmlnaW5hbFBvb2w6IGFueSA9IHt9O1xuICBpbmRleDoge1xuICAgIHJlc3VsdHM/OiBFbW9qaURhdGFbXTtcbiAgICBwb29sPzogeyBba2V5OiBzdHJpbmddOiBFbW9qaURhdGEgfTtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fTtcbiAgZW1vamlzTGlzdDogYW55ID0ge307XG4gIGVtb3RpY29uc0xpc3Q6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgZW1vamlTZWFyY2g6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtb2ppU2VydmljZTogRW1vamlTZXJ2aWNlKSB7XG4gICAgZm9yIChjb25zdCBlbW9qaURhdGEgb2YgdGhpcy5lbW9qaVNlcnZpY2UuZW1vamlzKSB7XG4gICAgICBjb25zdCB7IHNob3J0X25hbWVzLCBlbW90aWNvbnMgfSA9IGVtb2ppRGF0YTtcbiAgICAgIGNvbnN0IGlkID0gc2hvcnRfbmFtZXNbMF07XG5cbiAgICAgIGVtb3RpY29ucy5mb3JFYWNoKGVtb3RpY29uID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZW1vdGljb25zTGlzdFtlbW90aWNvbl0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtb3RpY29uc0xpc3RbZW1vdGljb25dID0gaWQ7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5lbW9qaXNMaXN0W2lkXSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldFNhbml0aXplZERhdGEoaWQpO1xuICAgICAgdGhpcy5vcmlnaW5hbFBvb2xbaWRdID0gZW1vamlEYXRhO1xuICAgIH1cbiAgfVxuXG4gIGFkZEN1c3RvbVRvUG9vbChjdXN0b206IGFueSwgcG9vbDogYW55KSB7XG4gICAgY3VzdG9tLmZvckVhY2goKGVtb2ppOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGVtb2ppSWQgPSBlbW9qaS5pZCB8fCBlbW9qaS5zaG9ydF9uYW1lc1swXTtcblxuICAgICAgaWYgKGVtb2ppSWQgJiYgIXBvb2xbZW1vamlJZF0pIHtcbiAgICAgICAgcG9vbFtlbW9qaUlkXSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldERhdGEoZW1vamkpO1xuICAgICAgICB0aGlzLmVtb2ppc0xpc3RbZW1vamlJZF0gPSB0aGlzLmVtb2ppU2VydmljZS5nZXRTYW5pdGl6ZWREYXRhKGVtb2ppKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaChcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIGVtb2ppc1RvU2hvd0ZpbHRlcj86ICh4OiBhbnkpID0+IGJvb2xlYW4sXG4gICAgbWF4UmVzdWx0cyA9IDc1LFxuICAgIGluY2x1ZGU6IGFueVtdID0gW10sXG4gICAgZXhjbHVkZTogYW55W10gPSBbXSxcbiAgICBjdXN0b206IGFueVtdID0gW10sXG4gICk6IEVtb2ppRGF0YVtdIHwgbnVsbCB7XG4gICAgdGhpcy5hZGRDdXN0b21Ub1Bvb2woY3VzdG9tLCB0aGlzLm9yaWdpbmFsUG9vbCk7XG5cbiAgICBsZXQgcmVzdWx0czogRW1vamlEYXRhW10gfCB1bmRlZmluZWQ7XG4gICAgbGV0IHBvb2wgPSB0aGlzLm9yaWdpbmFsUG9vbDtcblxuICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJy0nIHx8IHZhbHVlID09PSAnLTEnKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5lbW9qaXNMaXN0WyctMSddXTtcbiAgICAgIH1cblxuICAgICAgbGV0IHZhbHVlcyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHN8LHxcXC18X10rLyk7XG4gICAgICBsZXQgYWxsUmVzdWx0cyA9IFtdO1xuXG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluY2x1ZGUubGVuZ3RoIHx8IGV4Y2x1ZGUubGVuZ3RoKSB7XG4gICAgICAgIHBvb2wgPSB7fTtcblxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzSW5jbHVkZWQgPVxuICAgICAgICAgICAgaW5jbHVkZSAmJiBpbmNsdWRlLmxlbmd0aFxuICAgICAgICAgICAgICA/IGluY2x1ZGUuaW5kZXhPZihjYXRlZ29yeS5pZCkgPiAtMVxuICAgICAgICAgICAgICA6IHRydWU7XG4gICAgICAgICAgY29uc3QgaXNFeGNsdWRlZCA9XG4gICAgICAgICAgICBleGNsdWRlICYmIGV4Y2x1ZGUubGVuZ3RoXG4gICAgICAgICAgICAgID8gZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXRlZ29yeS5lbW9qaXMhLmZvckVhY2goXG4gICAgICAgICAgICBlbW9qaUlkID0+IChwb29sW2Vtb2ppSWRdID0gdGhpcy5lbW9qaVNlcnZpY2UubmFtZXNbZW1vamlJZF0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjdXN0b20ubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgY3VzdG9tSXNJbmNsdWRlZCA9XG4gICAgICAgICAgICBpbmNsdWRlICYmIGluY2x1ZGUubGVuZ3RoID8gaW5jbHVkZS5pbmRleE9mKCdjdXN0b20nKSA+IC0xIDogdHJ1ZTtcbiAgICAgICAgICBjb25zdCBjdXN0b21Jc0V4Y2x1ZGVkID1cbiAgICAgICAgICAgIGV4Y2x1ZGUgJiYgZXhjbHVkZS5sZW5ndGggPyBleGNsdWRlLmluZGV4T2YoJ2N1c3RvbScpID4gLTEgOiBmYWxzZTtcbiAgICAgICAgICBpZiAoY3VzdG9tSXNJbmNsdWRlZCAmJiAhY3VzdG9tSXNFeGNsdWRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDdXN0b21Ub1Bvb2woY3VzdG9tLCBwb29sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWxsUmVzdWx0cyA9IHZhbHVlc1xuICAgICAgICAubWFwKHYgPT4ge1xuICAgICAgICAgIGxldCBhUG9vbCA9IHBvb2w7XG4gICAgICAgICAgbGV0IGFJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG5cbiAgICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2Lmxlbmd0aDsgY2hhckluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSB2W2NoYXJJbmRleF07XG4gICAgICAgICAgICBsZW5ndGgrKztcbiAgICAgICAgICAgIGlmICghYUluZGV4W2NoYXJdKSB7XG4gICAgICAgICAgICAgIGFJbmRleFtjaGFyXSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYUluZGV4ID0gYUluZGV4W2NoYXJdO1xuXG4gICAgICAgICAgICBpZiAoIWFJbmRleC5yZXN1bHRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNjb3JlczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuXG4gICAgICAgICAgICAgIGFJbmRleC5yZXN1bHRzID0gW107XG4gICAgICAgICAgICAgIGFJbmRleC5wb29sID0ge307XG5cbiAgICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBPYmplY3Qua2V5cyhhUG9vbCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbW9qaSA9IGFQb29sW2lkXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZW1vamlTZWFyY2hbaWRdKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmVtb2ppU2VhcmNoW2lkXSA9IHRoaXMuYnVpbGRTZWFyY2goXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppLnNob3J0X25hbWVzLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaS5rZXl3b3JkcyxcbiAgICAgICAgICAgICAgICAgICAgZW1vamkuZW1vdGljb25zLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmVtb2ppU2VhcmNoW2lkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWIgPSB2LnN1YnN0cigwLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YkluZGV4ID0gcXVlcnkuaW5kZXhPZihzdWIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgaWYgKHN1YiA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBhSW5kZXgucmVzdWx0cy5wdXNoKHRoaXMuZW1vamlzTGlzdFtpZF0pO1xuICAgICAgICAgICAgICAgICAgYUluZGV4LnBvb2xbaWRdID0gZW1vamk7XG5cbiAgICAgICAgICAgICAgICAgIHNjb3Jlc1tpZF0gPSBzY29yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhSW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYVNjb3JlID0gc2NvcmVzW2EuaWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJTY29yZSA9IHNjb3Jlc1tiLmlkXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhUG9vbCA9IGFJbmRleC5wb29sO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhSW5kZXgucmVzdWx0cztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihhID0+IGEpO1xuXG4gICAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJlc3VsdHMgPSBpbnRlcnNlY3QuYXBwbHkobnVsbCwgYWxsUmVzdWx0cyk7XG4gICAgICB9IGVsc2UgaWYgKGFsbFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMgPSBhbGxSZXN1bHRzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICBpZiAoZW1vamlzVG9TaG93RmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcigocmVzdWx0OiBFbW9qaURhdGEpID0+XG4gICAgICAgICAgZW1vamlzVG9TaG93RmlsdGVyKHRoaXMuZW1vamlTZXJ2aWNlLm5hbWVzW3Jlc3VsdC5pZF0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IG1heFJlc3VsdHMpIHtcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzIHx8IG51bGw7XG4gIH1cblxuICBidWlsZFNlYXJjaChcbiAgICBzaG9ydF9uYW1lczogc3RyaW5nW10sXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGtleXdvcmRzOiBzdHJpbmdbXSxcbiAgICBlbW90aWNvbnM6IHN0cmluZ1tdLFxuICApIHtcbiAgICBjb25zdCBzZWFyY2g6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBhZGRUb1NlYXJjaCA9IChzdHJpbmdzOiBzdHJpbmcgfCBzdHJpbmdbXSwgc3BsaXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3RyaW5ncykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIChBcnJheS5pc0FycmF5KHN0cmluZ3MpID8gc3RyaW5ncyA6IFtzdHJpbmdzXSkuZm9yRWFjaChzdHJpbmcgPT4ge1xuICAgICAgICAoc3BsaXQgPyBzdHJpbmcuc3BsaXQoL1stfF98XFxzXSsvKSA6IFtzdHJpbmddKS5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoIXNlYXJjaC5pbmNsdWRlcyhzKSkge1xuICAgICAgICAgICAgc2VhcmNoLnB1c2gocyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhZGRUb1NlYXJjaChzaG9ydF9uYW1lcywgdHJ1ZSk7XG4gICAgYWRkVG9TZWFyY2gobmFtZSwgdHJ1ZSk7XG4gICAgYWRkVG9TZWFyY2goa2V5d29yZHMsIGZhbHNlKTtcbiAgICBhZGRUb1NlYXJjaChlbW90aWNvbnMsIGZhbHNlKTtcblxuICAgIHJldHVybiBzZWFyY2guam9pbignLCcpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbW9qaURhdGEsIEVtb2ppU2VydmljZSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3XCIgKm5nSWY9XCJlbW9qaSAmJiBlbW9qaURhdGFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICA8bmd4LWVtb2ppIFtlbW9qaV09XCJlbW9qaVwiIFtzaXplXT1cIjM4XCJcbiAgICAgICAgW25hdGl2ZV09XCJlbW9qaU5hdGl2ZVwiXG4gICAgICAgIFtza2luXT1cImVtb2ppU2tpblwiXG4gICAgICAgIFtzaXplXT1cImVtb2ppU2l6ZVwiXG4gICAgICAgIFtzZXRdPVwiZW1vamlTZXRcIlxuICAgICAgICBbc2hlZXRTaXplXT1cImVtb2ppU2hlZXRTaXplXCJcbiAgICAgICAgW2JhY2tncm91bmRJbWFnZUZuXT1cImVtb2ppQmFja2dyb3VuZEltYWdlRm5cIj5cbiAgICAgIDwvbmd4LWVtb2ppPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LW5hbWVcIj57eyBlbW9qaURhdGEubmFtZSB9fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiICpuZ0Zvcj1cImxldCBzaG9ydF9uYW1lIG9mIGVtb2ppRGF0YS5zaG9ydF9uYW1lc1wiPlxuICAgICAgICAgIDp7eyBzaG9ydF9uYW1lIH19OlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCIgKm5nRm9yPVwibGV0IGVtb3RpY29uIG9mIGxpc3RlZEVtb3RpY29uc1wiPlxuICAgICAgICAgIHt7IGVtb3RpY29uIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3XCIgKm5nSWY9XCIhZW1vamlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICA8bmd4LWVtb2ppICpuZ0lmPVwiaWRsZUVtb2ppICYmIGlkbGVFbW9qaS5sZW5ndGhcIlxuICAgICAgICBbbmF0aXZlXT1cImVtb2ppTmF0aXZlXCJcbiAgICAgICAgW3NraW5dPVwiZW1vamlTa2luXCJcbiAgICAgICAgW3NldF09XCJlbW9qaVNldFwiXG4gICAgICAgIFtlbW9qaV09XCJpZGxlRW1vamlcIlxuICAgICAgICBbYmFja2dyb3VuZEltYWdlRm5dPVwiZW1vamlCYWNrZ3JvdW5kSW1hZ2VGblwiXG4gICAgICAgIFtzaXplXT1cIjM4XCI+XG4gICAgICA8L25neC1lbW9qaT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LXRpdGxlLWxhYmVsXCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCI+XG4gICAgICA8ZW1vamktc2tpbnMgW3NraW5dPVwiZW1vamlTa2luXCIgKGNoYW5nZSk9XCJza2luQ2hhbmdlLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgPC9lbW9qaS1za2lucz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHRpdGxlOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppOiBhbnk7XG4gIEBJbnB1dCgpIGlkbGVFbW9qaTogYW55O1xuICBASW5wdXQoKSBlbW9qaU5hdGl2ZTogYW55O1xuICBASW5wdXQoKSBlbW9qaVNpemU6IGFueTtcbiAgQElucHV0KCkgZW1vamlTa2luOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppU2V0OiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppU2hlZXRTaXplOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppQmFja2dyb3VuZEltYWdlRm46IGFueTtcbiAgQE91dHB1dCgpIHNraW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgZW1vamlEYXRhOiBQYXJ0aWFsPEVtb2ppRGF0YT4gPSB7fTtcbiAgbGlzdGVkRW1vdGljb25zPzogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbW9qaVNlcnZpY2U6IEVtb2ppU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5lbW9qaSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtb2ppRGF0YSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldERhdGEodGhpcy5lbW9qaSwgdGhpcy5lbW9qaVNraW4sIHRoaXMuZW1vamlTZXQpITtcbiAgICBjb25zdCBrbm93bkVtb3RpY29uczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBsaXN0ZWRFbW90aWNvbnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZW1vaXRjb25zID0gdGhpcy5lbW9qaURhdGEuZW1vdGljb25zIHx8IFtdO1xuICAgIGVtb2l0Y29ucy5mb3JFYWNoKChlbW90aWNvbjogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoa25vd25FbW90aWNvbnMuaW5kZXhPZihlbW90aWNvbi50b0xvd2VyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAga25vd25FbW90aWNvbnMucHVzaChlbW90aWNvbi50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGxpc3RlZEVtb3RpY29ucy5wdXNoKGVtb3RpY29uKTtcbiAgICB9KTtcbiAgICB0aGlzLmxpc3RlZEVtb3RpY29ucyA9IGxpc3RlZEVtb3RpY29ucztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbW9qaVNlYXJjaCB9IGZyb20gJy4vZW1vamktc2VhcmNoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1zZWFyY2gnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1zZWFyY2hcIj5cbiAgICA8aW5wdXQgI2lucHV0UmVmIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIChrZXl1cC5lbnRlcik9XCJoYW5kbGVFbnRlcktleSgkZXZlbnQpXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJpMThuLnNlYXJjaFwiIFthdXRvZm9jdXNdPVwiYXV0b0ZvY3VzXCJcbiAgICAgIFsobmdNb2RlbCldPVwicXVlcnlcIiAobmdNb2RlbENoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoKVwiXG4gICAgLz5cbiAgPC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbWF4UmVzdWx0cyA9IDc1O1xuICBASW5wdXQoKSBhdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgaTE4bjogYW55O1xuICBASW5wdXQoKSBpbmNsdWRlOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBleGNsdWRlOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBjdXN0b206IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGVtb2ppc1RvU2hvd0ZpbHRlcj86ICh4OiBhbnkpID0+IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBzZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVudGVyS2V5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0UmVmJykgcHJpdmF0ZSBpbnB1dFJlZj86IEVsZW1lbnRSZWY7XG4gIHF1ZXJ5ID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbW9qaVNlYXJjaDogRW1vamlTZWFyY2gpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyAmJiB0aGlzLmlucHV0UmVmKSB7XG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5xdWVyeSA9ICcnO1xuICB9XG4gIGhhbmRsZUVudGVyS2V5KCRldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmVudGVyS2V5LmVtaXQoJGV2ZW50KTtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgdGhpcy5zZWFyY2guZW1pdChcbiAgICAgIHRoaXMuZW1vamlTZWFyY2guc2VhcmNoKFxuICAgICAgICB0aGlzLnF1ZXJ5LFxuICAgICAgICB0aGlzLmVtb2ppc1RvU2hvd0ZpbHRlcixcbiAgICAgICAgdGhpcy5tYXhSZXN1bHRzLFxuICAgICAgICB0aGlzLmluY2x1ZGUsXG4gICAgICAgIHRoaXMuZXhjbHVkZSxcbiAgICAgICAgdGhpcy5jdXN0b20sXG4gICAgICApLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIGNhdGVnb3JpZXMsXG4gIEVtb2ppLFxuICBFbW9qaUNhdGVnb3J5LFxuICBFbW9qaURhdGEsXG4gIEVtb2ppRXZlbnQsXG59IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgeyBDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEVtb2ppRnJlcXVlbnRseVNlcnZpY2UgfSBmcm9tICcuL2Vtb2ppLWZyZXF1ZW50bHkuc2VydmljZSc7XG5pbXBvcnQgeyBQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgbWVhc3VyZVNjcm9sbGJhciB9IGZyb20gJy4vdXRpbHMnO1xuXG5cblxuY29uc3QgSTE4TjogYW55ID0ge1xuICBzZWFyY2g6ICdTZWFyY2gnLFxuICBub3Rmb3VuZDogJ05vIEVtb2ppIEZvdW5kJyxcbiAgY2F0ZWdvcmllczoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCBSZXN1bHRzJyxcbiAgICByZWNlbnQ6ICdGcmVxdWVudGx5IFVzZWQnLFxuICAgIHBlb3BsZTogJ1NtaWxleXMgJiBQZW9wbGUnLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLW1hcnQnLFxuICB0ZW1wbGF0ZTogYDxkaXZcbiAgW3N0eWxlLndpZHRoLnB4XT1cInBlckxpbmUgKiAoZW1vamlTaXplICsgMTIpICsgMTIgKyAyICsgbWVhc3VyZVNjcm9sbGJhclwiXG4gIFtuZ1N0eWxlXT1cInN0eWxlXCJcbiAgY2xhc3M9XCJlbW9qaS1tYXJ0XCI+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhclwiPlxuICAgIDxlbW9qaS1tYXJ0LWFuY2hvcnNcbiAgICAgIFtjYXRlZ29yaWVzXT1cImNhdGVnb3JpZXNcIlxuICAgICAgKGFuY2hvckNsaWNrKT1cImhhbmRsZUFuY2hvckNsaWNrKCRldmVudClcIlxuICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgICBbaTE4bl09XCJpMThuXCJcbiAgICA+XG4gICAgPC9lbW9qaS1tYXJ0LWFuY2hvcnM+XG4gIDwvZGl2PlxuICA8ZW1vamktc2VhcmNoXG4gICAgI3NlYXJjaFJlZlxuICAgIFtpMThuXT1cImkxOG5cIlxuICAgIChzZWFyY2gpPVwiaGFuZGxlU2VhcmNoKCRldmVudClcIlxuICAgIChlbnRlcktleSk9XCJoYW5kbGVFbnRlcktleSgkZXZlbnQpXCJcbiAgICBbaW5jbHVkZV09XCJpbmNsdWRlXCJcbiAgICBbZXhjbHVkZV09XCJleGNsdWRlXCJcbiAgICBbY3VzdG9tXT1cImN1c3RvbVwiXG4gICAgW2F1dG9Gb2N1c109XCJhdXRvRm9jdXNcIlxuICAgIFtlbW9qaXNUb1Nob3dGaWx0ZXJdPVwiZW1vamlzVG9TaG93RmlsdGVyXCJcbiAgPlxuICA8L2Vtb2ppLXNlYXJjaD5cbiAgPGRpdlxuICAgICNzY3JvbGxSZWZcbiAgICBjbGFzcz1cImVtb2ppLW1hcnQtc2Nyb2xsXCJcbiAgICAoc2Nyb2xsKT1cImhhbmRsZVNjcm9sbCgpXCJcbiAgPlxuICAgIDxkaXYgZW1vamktY2F0ZWdvcnlcbiAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBhY3RpdmVDYXRlZ29yaWVzOyBsZXQgaWR4ID0gaW5kZXg7IHRyYWNrQnk6IGNhdGVnb3J5VHJhY2tcIlxuICAgICAgI2NhdGVnb3J5UmVmXG4gICAgICBbaWRdPVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgW25hbWVdPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICBbZW1vamlzXT1cImNhdGVnb3J5LmVtb2ppc1wiXG4gICAgICBbcGVyTGluZV09XCJwZXJMaW5lXCJcbiAgICAgIFtuYXRpdmVdPVwibmF0aXZlXCJcbiAgICAgIFtoYXNTdGlja3lQb3NpdGlvbl09XCJuYXRpdmVcIlxuICAgICAgW2kxOG5dPVwiaTE4blwiXG4gICAgICBbaGlkZU9ic29sZXRlXT1cImhpZGVPYnNvbGV0ZVwiXG4gICAgICBbY3VzdG9tXT1cImNhdGVnb3J5LmlkID09IFJFQ0VOVF9DQVRFR09SWS5pZCA/IENVU1RPTV9DQVRFR09SWS5lbW9qaXMgOiB1bmRlZmluZWRcIlxuICAgICAgW3JlY2VudF09XCJjYXRlZ29yeS5pZCA9PSBSRUNFTlRfQ0FURUdPUlkuaWQgPyByZWNlbnQgOiB1bmRlZmluZWRcIlxuXG4gICAgICBbZW1vamlOYXRpdmVdPVwibmF0aXZlXCJcbiAgICAgIFtlbW9qaVNraW5dPVwic2tpblwiXG4gICAgICBbZW1vamlTaXplXT1cImVtb2ppU2l6ZVwiXG4gICAgICBbZW1vamlTZXRdPVwic2V0XCJcbiAgICAgIFtlbW9qaVNoZWV0U2l6ZV09XCJzaGVldFNpemVcIlxuICAgICAgW2Vtb2ppRm9yY2VTaXplXT1cIm5hdGl2ZVwiXG4gICAgICBbZW1vamlUb29sdGlwXT1cImVtb2ppVG9vbHRpcFwiXG4gICAgICAoZW1vamlPdmVyKT1cImhhbmRsZUVtb2ppT3ZlcigkZXZlbnQpXCJcbiAgICAgIChlbW9qaUxlYXZlKT1cImhhbmRsZUVtb2ppTGVhdmUoJGV2ZW50KVwiXG4gICAgICAoZW1vamlDbGljayk9XCJoYW5kbGVFbW9qaUNsaWNrKCRldmVudClcIlxuICAgID5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXJcIiAqbmdJZj1cInNob3dQcmV2aWV3XCI+XG4gIDxlbW9qaS1wcmV2aWV3XG4gICAgI3ByZXZpZXdSZWZcbiAgICBbdGl0bGVdPVwidGl0bGVcIlxuICAgIFtlbW9qaV09XCJwcmV2aWV3RW1vamlcIlxuICAgIFtpZGxlRW1vamldPVwiZW1vamlcIlxuXG4gICAgW2Vtb2ppTmF0aXZlXT1cIm5hdGl2ZVwiXG4gICAgW2Vtb2ppU2l6ZV09XCIzOFwiXG4gICAgW2Vtb2ppU2tpbl09XCJza2luXCJcbiAgICBbZW1vamlTZXRdPVwic2V0XCJcbiAgICBbZW1vamlTaGVldFNpemVdPVwic2hlZXRTaXplXCJcbiAgICBbZW1vamlCYWNrZ3JvdW5kSW1hZ2VGbl09XCJiYWNrZ3JvdW5kSW1hZ2VGblwiXG4gICAgKHNraW5DaGFuZ2UpPVwiaGFuZGxlU2tpbkNoYW5nZSgkZXZlbnQpXCJcbiAgPjwvZW1vamktcHJldmlldz5cbjwvZGl2PlxuYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwZXJMaW5lID0gOTtcbiAgQElucHV0KCkgaTE4bjogYW55ID0ge307XG4gIEBJbnB1dCgpIHN0eWxlOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgdGl0bGUgPSAnRW1vamkgTWFydMOiwoTCoic7XG4gIEBJbnB1dCgpIGVtb2ppID0gJ2RlcGFydG1lbnRfc3RvcmUnO1xuICBASW5wdXQoKSBjb2xvciA9ICcjYWU2NWM1JztcbiAgQElucHV0KCkgaGlkZU9ic29sZXRlID0gdHJ1ZTtcbiAgLyoqIGFsbCBjYXRlZ29yaWVzIHNob3duICovXG4gIEBJbnB1dCgpIGNhdGVnb3JpZXM6IEVtb2ppQ2F0ZWdvcnlbXSA9IFtdO1xuICAvKiogdXNlZCB0byB0ZW1wb3JhcmlseSBkcmF3IGNhdGVnb3JpZXMgKi9cbiAgQElucHV0KCkgYWN0aXZlQ2F0ZWdvcmllczogRW1vamlDYXRlZ29yeVtdID0gW107XG4gIEBJbnB1dCgpIHNldDogRW1vamlbJ3NldCddID0gJ2FwcGxlJztcbiAgQElucHV0KCkgc2tpbjogRW1vamlbJ3NraW4nXSA9IDE7XG4gIEBJbnB1dCgpIG5hdGl2ZTogRW1vamlbJ25hdGl2ZSddID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVtb2ppU2l6ZTogRW1vamlbJ3NpemUnXSA9IDI0O1xuICBASW5wdXQoKSBzaGVldFNpemU6IEVtb2ppWydzaGVldFNpemUnXSA9IDY0O1xuICBASW5wdXQoKSBlbW9qaXNUb1Nob3dGaWx0ZXI/OiAoeDogc3RyaW5nKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93UHJldmlldyA9IHRydWU7XG4gIEBJbnB1dCgpIGVtb2ppVG9vbHRpcCA9IGZhbHNlO1xuICBASW5wdXQoKSBhdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgY3VzdG9tOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBoaWRlUmVjZW50ID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5jbHVkZT86IHN0cmluZ1tdO1xuICBASW5wdXQoKSBleGNsdWRlPzogc3RyaW5nW107XG4gIEBPdXRwdXQoKSBlbW9qaUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlbW9qaVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKCdzY3JvbGxSZWYnKSBwcml2YXRlIHNjcm9sbFJlZj86IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3ByZXZpZXdSZWYnKSBwcml2YXRlIHByZXZpZXdSZWY/OiBQcmV2aWV3Q29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdzZWFyY2hSZWYnKSBwcml2YXRlIHNlYXJjaFJlZj86IFNlYXJjaENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZHJlbignY2F0ZWdvcnlSZWYnKVxuICBwcml2YXRlIGNhdGVnb3J5UmVmcz86IFF1ZXJ5TGlzdDxDYXRlZ29yeUNvbXBvbmVudD47XG4gIHNjcm9sbEhlaWdodCA9IDA7XG4gIGNsaWVudEhlaWdodCA9IDA7XG4gIHNlbGVjdGVkPzogc3RyaW5nO1xuICBuZXh0U2Nyb2xsPzogc3RyaW5nO1xuICBzY3JvbGxUb3A/OiBudW1iZXI7XG4gIGZpcnN0UmVuZGVyID0gdHJ1ZTtcbiAgcmVjZW50Pzogc3RyaW5nW107XG4gIHByZXZpZXdFbW9qaTogYW55O1xuICBsZWF2ZVRpbWVvdXQ6IGFueTtcbiAgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnO1xuICBtZWFzdXJlU2Nyb2xsYmFyID0gMDtcbiAgUkVDRU5UX0NBVEVHT1JZOiBFbW9qaUNhdGVnb3J5ID0ge1xuICAgIGlkOiAncmVjZW50JyxcbiAgICBuYW1lOiAnUmVjZW50JyxcbiAgICBlbW9qaXM6IG51bGwsXG4gIH07XG4gIFNFQVJDSF9DQVRFR09SWTogRW1vamlDYXRlZ29yeSA9IHtcbiAgICBpZDogJ3NlYXJjaCcsXG4gICAgbmFtZTogJ1NlYXJjaCcsXG4gICAgZW1vamlzOiBudWxsLFxuICAgIGFuY2hvcjogZmFsc2UsXG4gIH07XG4gIENVU1RPTV9DQVRFR09SWTogRW1vamlDYXRlZ29yeSA9IHtcbiAgICBpZDogJ2N1c3RvbScsXG4gICAgbmFtZTogJ0N1c3RvbScsXG4gICAgZW1vamlzOiBbXSxcbiAgfTtcblxuICBASW5wdXQoKVxuICBiYWNrZ3JvdW5kSW1hZ2VGbjogRW1vamlbJ2JhY2tncm91bmRJbWFnZUZuJ10gPSAoXG4gICAgc2V0OiBzdHJpbmcsXG4gICAgc2hlZXRTaXplOiBudW1iZXIsXG4gICkgPT5cbiAgICBgaHR0cHM6Ly91bnBrZy5jb20vZW1vamktZGF0YXNvdXJjZS0ke3RoaXMuc2V0fUA0LjAuNC9pbWcvJHtcbiAgICAgIHRoaXMuc2V0XG4gICAgfS9zaGVldHMtMjU2LyR7dGhpcy5zaGVldFNpemV9LnBuZ2BcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBmcmVxdWVudGx5OiBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gbWVhc3VyZSBzY3JvbGxcbiAgICB0aGlzLm1lYXN1cmVTY3JvbGxiYXIgPSBtZWFzdXJlU2Nyb2xsYmFyKCk7XG5cbiAgICB0aGlzLmkxOG4gPSB7IC4uLkkxOE4sIC4uLnRoaXMuaTE4biB9O1xuICAgIHRoaXMuaTE4bi5jYXRlZ29yaWVzID0geyAuLi5JMThOLmNhdGVnb3JpZXMsIC4uLnRoaXMuaTE4bi5jYXRlZ29yaWVzIH07XG4gICAgdGhpcy5za2luID1cbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5OQU1FU1BBQ0V9LnNraW5gKSB8fCAnbnVsbCcpIHx8XG4gICAgICB0aGlzLnNraW47XG5cbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gWy4uLmNhdGVnb3JpZXNdO1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuQ1VTVE9NX0NBVEVHT1JZLmVtb2ppcyA9IHRoaXMuY3VzdG9tLm1hcChlbW9qaSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZW1vamksXG4gICAgICAgICAgLy8gYDxDYXRlZ29yeSAvPmAgZXhwZWN0cyBlbW9qaSB0byBoYXZlIGFuIGBpZGAuXG4gICAgICAgICAgaWQ6IGVtb2ppLnNob3J0X25hbWVzWzBdLFxuICAgICAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBhbGxDYXRlZ29yaWVzLnB1c2godGhpcy5DVVNUT01fQ0FURUdPUlkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluY2x1ZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxsQ2F0ZWdvcmllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmluY2x1ZGUhLmluZGV4T2YoYS5pZCkgPiB0aGlzLmluY2x1ZGUhLmluZGV4T2YoYi5pZCkpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGFsbENhdGVnb3JpZXMpIHtcbiAgICAgIGNvbnN0IGlzSW5jbHVkZWQgPVxuICAgICAgICB0aGlzLmluY2x1ZGUgJiYgdGhpcy5pbmNsdWRlLmxlbmd0aFxuICAgICAgICAgID8gdGhpcy5pbmNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgICA6IHRydWU7XG4gICAgICBjb25zdCBpc0V4Y2x1ZGVkID1cbiAgICAgICAgdGhpcy5leGNsdWRlICYmIHRoaXMuZXhjbHVkZS5sZW5ndGhcbiAgICAgICAgICA/IHRoaXMuZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgOiBmYWxzZTtcbiAgICAgIGlmICghaXNJbmNsdWRlZCB8fCBpc0V4Y2x1ZGVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbW9qaXNUb1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgbmV3RW1vamlzID0gW107XG5cbiAgICAgICAgY29uc3QgeyBlbW9qaXMgfSA9IGNhdGVnb3J5O1xuICAgICAgICBmb3IgKGxldCBlbW9qaUluZGV4ID0gMDsgZW1vamlJbmRleCA8IGVtb2ppcyEubGVuZ3RoOyBlbW9qaUluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbW9qaSA9IGVtb2ppcyFbZW1vamlJbmRleF07XG4gICAgICAgICAgaWYgKHRoaXMuZW1vamlzVG9TaG93RmlsdGVyKGVtb2ppKSkge1xuICAgICAgICAgICAgbmV3RW1vamlzLnB1c2goZW1vamkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdFbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSB7XG4gICAgICAgICAgICBlbW9qaXM6IG5ld0Vtb2ppcyxcbiAgICAgICAgICAgIG5hbWU6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKG5ld0NhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluY2x1ZGVSZWNlbnQgPVxuICAgICAgdGhpcy5pbmNsdWRlICYmIHRoaXMuaW5jbHVkZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLmluY2x1ZGUuaW5kZXhPZih0aGlzLlJFQ0VOVF9DQVRFR09SWS5pZCkgPiAtMVxuICAgICAgICA6IHRydWU7XG4gICAgY29uc3QgZXhjbHVkZVJlY2VudCA9XG4gICAgICB0aGlzLmV4Y2x1ZGUgJiYgdGhpcy5leGNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuZXhjbHVkZS5pbmRleE9mKHRoaXMuUkVDRU5UX0NBVEVHT1JZLmlkKSA+IC0xXG4gICAgICAgIDogZmFsc2U7XG4gICAgaWYgKGluY2x1ZGVSZWNlbnQgJiYgIWV4Y2x1ZGVSZWNlbnQpIHtcbiAgICAgIHRoaXMuaGlkZVJlY2VudCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzLnVuc2hpZnQodGhpcy5SRUNFTlRfQ0FURUdPUlkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbMF0pIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1swXS5maXJzdCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5jYXRlZ29yaWVzLnVuc2hpZnQodGhpcy5TRUFSQ0hfQ0FURUdPUlkpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmZpcnN0KVswXS5uYW1lO1xuXG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLnNsaWNlKDAsIDMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNhdGVnb3JpZXNTaXplKCk7XG4gICAgfSk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudXBkYXRlQ2F0ZWdvcmllc1NpemUoKTtcbiAgfVxuICB1cGRhdGVDYXRlZ29yaWVzU2l6ZSgpIHtcbiAgICB0aGlzLmNhdGVnb3J5UmVmcyEuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50Lm1lbW9pemVTaXplKCkpO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsUmVmKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnNjcm9sbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5zY3JvbGxIZWlnaHQgPSB0YXJnZXQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgdGhpcy5jbGllbnRIZWlnaHQgPSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgfVxuICBoYW5kbGVBbmNob3JDbGljaygkZXZlbnQ6IHsgY2F0ZWdvcnk6IEVtb2ppQ2F0ZWdvcnk7IGluZGV4OiBudW1iZXIgfSkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY2F0ZWdvcnlSZWZzIS5maW5kKG4gPT4gbi5pZCA9PT0gJGV2ZW50LmNhdGVnb3J5LmlkKTtcblxuICAgIGlmICh0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMpIHtcbiAgICAgIHRoaXMuaGFuZGxlU2VhcmNoKG51bGwpO1xuICAgICAgdGhpcy5zZWFyY2hSZWYhLmNsZWFyKCk7XG4gICAgfVxuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIGxldCB7IHRvcCB9ID0gY29tcG9uZW50O1xuXG4gICAgICBpZiAoJGV2ZW50LmNhdGVnb3J5LmZpcnN0KSB7XG4gICAgICAgIHRvcCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3AgKz0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsUmVmIS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRvcDtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9ICRldmVudC5jYXRlZ29yeS5uYW1lO1xuICAgIHRoaXMubmV4dFNjcm9sbCA9ICRldmVudC5jYXRlZ29yeS5uYW1lO1xuICB9XG4gIGNhdGVnb3J5VHJhY2soaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIGlmICh0aGlzLm5leHRTY3JvbGwpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm5leHRTY3JvbGw7XG4gICAgICB0aGlzLm5leHRTY3JvbGwgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5zY3JvbGxSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2F0ZWdvcnkgPSBudWxsO1xuICAgIGlmICh0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMpIHtcbiAgICAgIGFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5TRUFSQ0hfQ0FURUdPUlk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2Nyb2xsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAvLyBjaGVjayBzY3JvbGwgaXMgbm90IGF0IGJvdHRvbVxuICAgICAgaWYgKHRhcmdldC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgLy8gaGl0IHRoZSBUT1BcbiAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXMuZmluZChuID0+IG4uZmlyc3QgPT09IHRydWUpO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gdGFyZ2V0LnNjcm9sbFRvcCA9PT0gdGhpcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgLy8gc2Nyb2xsZWQgdG8gYm90dG9tIGFjdGl2YXRlIGxhc3QgY2F0ZWdvcnlcbiAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCAtIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2Nyb2xsaW5nXG4gICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgdGhpcy5jYXRlZ29yaWVzKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jYXRlZ29yeVJlZnMhLmZpbmQobiA9PiBuLmlkID09PSBjYXRlZ29yeS5pZCk7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gY29tcG9uZW50IS5oYW5kbGVTY3JvbGwodGFyZ2V0LnNjcm9sbFRvcCk7XG4gICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxUb3AgPSB0YXJnZXQuc2Nyb2xsVG9wO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlQ2F0ZWdvcnkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBhY3RpdmVDYXRlZ29yeS5uYW1lO1xuICAgIH1cbiAgfVxuICBoYW5kbGVTZWFyY2goJGVtb2ppczogYW55KSB7XG4gICAgdGhpcy5TRUFSQ0hfQ0FURUdPUlkuZW1vamlzID0gJGVtb2ppcztcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmNhdGVnb3J5UmVmcyEudG9BcnJheSgpKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm5hbWUgPT09ICdTZWFyY2gnKSB7XG4gICAgICAgIGNvbXBvbmVudC5lbW9qaXMgPSAkZW1vamlzO1xuICAgICAgICBjb21wb25lbnQudXBkYXRlRGlzcGxheSgkZW1vamlzID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC51cGRhdGVEaXNwbGF5KCRlbW9qaXMgPyAnbm9uZScgOiAnaW5oZXJpdCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB0aGlzLnNjcm9sbFJlZiEubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gIH1cblxuICBoYW5kbGVFbnRlcktleSgkZXZlbnQ6IEV2ZW50LCBlbW9qaT86IEVtb2ppRGF0YSkge1xuICAgIGlmICghZW1vamkpIHtcbiAgICAgIGlmICh0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMgIT09IG51bGwgJiYgdGhpcy5TRUFSQ0hfQ0FURUdPUlkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICBlbW9qaSA9IHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppc1swXTtcbiAgICAgICAgaWYgKGVtb2ppKSB7XG4gICAgICAgICAgdGhpcy5lbW9qaVNlbGVjdC5lbWl0KHsgJGV2ZW50LCBlbW9qaSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGlkZVJlY2VudCAmJiAhdGhpcy5yZWNlbnQpIHtcbiAgICAgIHRoaXMuZnJlcXVlbnRseS5hZGQoKDxFbW9qaURhdGE+ZW1vamkpKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNhdGVnb3J5UmVmcyEudG9BcnJheSgpWzFdO1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIGNvbnN0IG1heE1hcmdpbiA9IGNvbXBvbmVudC5tYXhNYXJnaW47XG4gICAgICBjb21wb25lbnQuZW1vamlzID0gdGhpcy5mcmVxdWVudGx5LmdldChtYXhNYXJnaW4pO1xuICAgICAgY29tcG9uZW50LnJlZi5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxSZWYpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50Lm1lbW9pemVTaXplKCk7XG4gICAgICAgIGlmIChtYXhNYXJnaW4gPT09IGNvbXBvbmVudC5tYXhNYXJnaW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUNhdGVnb3JpZXNTaXplKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcykge1xuICAgICAgICAgIGNvbXBvbmVudC51cGRhdGVEaXNwbGF5KCdub25lJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVFbW9qaU92ZXIoJGV2ZW50OiBFbW9qaUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnNob3dQcmV2aWV3IHx8ICF0aGlzLnByZXZpZXdSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbW9qaURhdGEgPSB0aGlzLkNVU1RPTV9DQVRFR09SWS5lbW9qaXMhLmZpbmQoXG4gICAgICBjdXN0b21FbW9qaSA9PiBjdXN0b21FbW9qaS5pZCA9PT0gJGV2ZW50LmVtb2ppLmlkLFxuICAgICk7XG4gICAgaWYgKGVtb2ppRGF0YSkge1xuICAgICAgJGV2ZW50LmVtb2ppID0geyAuLi5lbW9qaURhdGEgfTtcbiAgICB9XG5cbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9ICRldmVudC5lbW9qaTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5sZWF2ZVRpbWVvdXQpO1xuICB9XG4gIGhhbmRsZUVtb2ppTGVhdmUoJGV2ZW50OiBFbW9qaUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnNob3dQcmV2aWV3IHx8ICF0aGlzLnByZXZpZXdSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxlYXZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsO1xuICAgICAgdGhpcy5wcmV2aWV3UmVmIS5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMTYpO1xuICB9XG4gIGhhbmRsZUVtb2ppQ2xpY2soJGV2ZW50OiBFbW9qaUV2ZW50KSB7XG4gICAgdGhpcy5lbW9qaUNsaWNrLmVtaXQoJGV2ZW50KTtcbiAgICB0aGlzLmVtb2ppU2VsZWN0LmVtaXQoJGV2ZW50KTtcbiAgICB0aGlzLmhhbmRsZUVudGVyS2V5KCRldmVudC4kZXZlbnQsICRldmVudC5lbW9qaSk7XG4gIH1cbiAgaGFuZGxlU2tpbkNoYW5nZShza2luOiBFbW9qaVsnc2tpbiddKSB7XG4gICAgdGhpcy5za2luID0gc2tpbjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0uc2tpbmAsIFN0cmluZyhza2luKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtb2ppIH0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktc2tpbnMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1za2luLXN3YXRjaGVzXCIgW2NsYXNzLmVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWRdPVwib3BlbmVkXCI+XG4gICAgPHNwYW4gKm5nRm9yPVwibGV0IHNraW5Ub25lIG9mIHNraW5Ub25lc1wiIGNsYXNzPVwiZW1vamktbWFydC1za2luLXN3YXRjaFwiXG4gICAgICBbY2xhc3MuZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZF09XCJza2luVG9uZSA9PT0gc2tpblwiPlxuICAgICAgICA8c3BhbiAoY2xpY2spPVwidGhpcy5oYW5kbGVDbGljayhza2luVG9uZSlcIlxuICAgICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLXt7IHNraW5Ub25lIH19XCJcbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2tpbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNraW4/OiBFbW9qaVsnc2tpbiddO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIG9wZW5lZCA9IGZhbHNlO1xuICBza2luVG9uZXMgPSBbMSwgMiwgMywgNCwgNSwgNl07XG5cbiAgdG9nZ2xlT3BlbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKHNraW46IG51bWJlcikge1xuICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICBpZiAoc2tpbiAhPT0gdGhpcy5za2luKSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHNraW4pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRW1vamlNb2R1bGUgfSBmcm9tICdAY3RybC9uZ3gtZW1vamktbWFydC9uZ3gtZW1vamknO1xuaW1wb3J0IHsgQW5jaG9yc0NvbXBvbmVudCB9IGZyb20gJy4vYW5jaG9ycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuL2NhdGVnb3J5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIH0gZnJvbSAnLi9lbW9qaS1mcmVxdWVudGx5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1vamlTZWFyY2ggfSBmcm9tICcuL2Vtb2ppLXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2tpbkNvbXBvbmVudCB9IGZyb20gJy4vc2tpbnMuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50czogYW55W10gPSBbXG4gIFBpY2tlckNvbXBvbmVudCxcbiAgQW5jaG9yc0NvbXBvbmVudCxcbiAgQ2F0ZWdvcnlDb21wb25lbnQsXG4gIFNlYXJjaENvbXBvbmVudCxcbiAgUHJldmlld0NvbXBvbmVudCxcbiAgU2tpbkNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBFbW9qaU1vZHVsZV0sXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcbiAgcHJvdmlkZXJzOiBbRW1vamlTZWFyY2gsIEVtb2ppRnJlcXVlbnRseVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJTVkdzIiwidHNsaWJfMS5fX3ZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxxQkFBTSxJQUFJLEdBQVE7SUFDaEIsUUFBUSxFQUFFLDBhQUEwYTtJQUVwYixNQUFNLEVBQUUsMkZBQTJGO0lBRW5HLEtBQUssRUFBRSxvSUFBb0k7SUFFM0ksS0FBSyxFQUFFLGlmQUFpZjtJQUV4ZixNQUFNLEVBQUUsb3hDQUFveEM7SUFFNXhDLE9BQU8sRUFBRSxzaEJBQXNoQjtJQUUvaEIsTUFBTSxFQUFFLHFOQUFxTjtJQUU3TixNQUFNLEVBQUUsK21CQUErbUI7SUFFdm5CLE1BQU0sRUFBRSxnSEFBZ0g7SUFFeEgsT0FBTyxFQUFFLG9pQ0FBb2lDO0NBQzlpQyxDQUFDOzs7Ozs7QUNyQkY7OzBCQXlDeUMsRUFBRTsyQkFJakIsSUFBSSxZQUFZLEVBQThDO29CQUMxRUEsSUFBSTs7Ozs7OztJQUVoQixvQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVcsRUFBRSxHQUFrQjtRQUN2QyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7S0FDZjs7Ozs7O0lBQ0Qsc0NBQVc7Ozs7O0lBQVgsVUFBWSxNQUFhLEVBQUUsS0FBYTtRQUN0QyxJQUFJLENB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