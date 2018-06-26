(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ctrl/ngx-emoji-mart/ngx-emoji'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@ctrl/ngx-emoji-mart', ['exports', '@angular/core', '@ctrl/ngx-emoji-mart/ngx-emoji', '@angular/common', '@angular/forms'], factory) :
    (factory((global.ctrl = global.ctrl || {}, global.ctrl['ngx-emoji-mart'] = {}),global.ng.core,global['@ctrl/ngx-emoji-mart/ngx-emoji'],global.ng.common,global.ng.forms));
}(this, (function (exports,core,ngxEmoji,common,forms) { 'use strict';

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
    var AnchorsComponent = (function () {
        function AnchorsComponent() {
            this.categories = [];
            this.anchorClick = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'emoji-mart-anchors',
                        template: "\n  <div class=\"emoji-mart-anchors\">\n    <ng-template ngFor let-category [ngForOf]=\"categories\" let-idx=\"index\" [ngForTrackBy]=\"trackByFn\">\n      <span\n        *ngIf=\"category.anchor !== false\"\n        [attr.title]=\"i18n.categories[category.id]\"\n        (click)=\"this.handleClick($event, idx)\"\n        class=\"emoji-mart-anchor\"\n        [class.emoji-mart-anchor-selected]=\"category.name === selected\"\n        [style.color]=\"category.name === selected ? color : null\"\n      >\n        <div>\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\n            <path [attr.d]=\"svgs[category.id]\" />\n          </svg>\n        </div>\n        <span\n          class=\"emoji-mart-anchor-bar\"\n          [style.background-color]=\"color\"\n        ></span>\n      </span>\n    </ng-template>\n  </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                    },] },
        ];
        AnchorsComponent.propDecorators = {
            categories: [{ type: core.Input }],
            color: [{ type: core.Input }],
            selected: [{ type: core.Input }],
            i18n: [{ type: core.Input }],
            anchorClick: [{ type: core.Output }]
        };
        return AnchorsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var EmojiFrequentlyService = (function () {
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
            { type: core.Injectable },
        ];
        return EmojiFrequentlyService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var CategoryComponent = (function () {
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
            this.emojiOver = new core.EventEmitter();
            this.emojiLeave = new core.EventEmitter();
            this.emojiClick = new core.EventEmitter();
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
                var _a = ((this.container)).nativeElement.getBoundingClientRect(), top = _a.top, height = _a.height;
                var /** @type {?} */ parentTop = ((this.parent)).getBoundingClientRect().top;
                var /** @type {?} */ labelHeight = ((this.label)).nativeElement.getBoundingClientRect().height;
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
            { type: core.Component, args: [{
                        selector: '[emoji-category]',
                        template: "\n  <div\n    #container\n    class=\"emoji-mart-category\"\n    [class.emoji-mart-no-results]=\"emojis && !emojis.length\"\n    [ngStyle]=\"containerStyles\"\n  >\n    <div\n      [ngStyle]=\"labelStyles\"\n      [attr.data-name]=\"name\"\n      class=\"emoji-mart-category-label\"\n    >\n      <span style=\"labelSpanStyles\" #label>\n        {{ i18n.categories[id] }}\n      </span>\n    </div>\n\n    <ng-template [ngIf]=\"emojis\">\n      <ngx-emoji\n        *ngFor=\"let emoji of emojis; trackBy: trackById\"\n        [emoji]=\"emoji\"\n        [size]=\"emojiSize\"\n        [skin]=\"emojiSkin\"\n        [native]=\"emojiNative\"\n        [set]=\"emojiSet\"\n        [sheetSize]=\"emojiSheetSize\"\n        [forceSize]=\"emojiForceSize\"\n        [tooltip]=\"emojiTooltip\"\n        [hideObsolete]=\"hideObsolete\"\n        (emojiOver)=\"emojiOver.emit($event)\"\n        (emojiLeave)=\"emojiLeave.emit($event)\"\n        (emojiClick)=\"emojiClick.emit($event)\"\n      >\n      </ngx-emoji>\n    </ng-template>\n\n    <div *ngIf=\"emojis && !emojis.length\">\n      <div>\n        <ngx-emoji\n          emoji=\"sleuth_or_spy\"\n          size=\"38\"\n          [skin]=\"emojiSkin\"\n          [native]=\"emojiNative\"\n          [set]=\"emojiSet\"\n          [sheetSize]=\"emojiSheetSize\"\n          [forceSize]=\"emojiForceSize\"\n          [tooltip]=\"emojiTooltip\"\n          >\n        </ngx-emoji>\n      </div>\n\n      <div className=\"emoji-mart-no-results-label\">\n        {{ i18n.notfound }}\n      </div>\n    </div>\n\n  </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                    },] },
        ];
        /** @nocollapse */
        CategoryComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: ngxEmoji.EmojiService },
                { type: EmojiFrequentlyService }
            ];
        };
        CategoryComponent.propDecorators = {
            emojis: [{ type: core.Input }],
            hasStickyPosition: [{ type: core.Input }],
            name: [{ type: core.Input }],
            native: [{ type: core.Input }],
            perLine: [{ type: core.Input }],
            recent: [{ type: core.Input }],
            custom: [{ type: core.Input }],
            i18n: [{ type: core.Input }],
            id: [{ type: core.Input }],
            hideObsolete: [{ type: core.Input }],
            emojiNative: [{ type: core.Input }],
            emojiSkin: [{ type: core.Input }],
            emojiSize: [{ type: core.Input }],
            emojiSet: [{ type: core.Input }],
            emojiSheetSize: [{ type: core.Input }],
            emojiForceSize: [{ type: core.Input }],
            emojiTooltip: [{ type: core.Input }],
            emojiOver: [{ type: core.Output }],
            emojiLeave: [{ type: core.Output }],
            emojiClick: [{ type: core.Output }],
            container: [{ type: core.ViewChild, args: ['container',] }],
            label: [{ type: core.ViewChild, args: ['label',] }]
        };
        return CategoryComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
    var EmojiSearch = (function () {
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
            catch (e_1_1) {
                e_1 = { error: e_1_1 };
            }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return))
                        _c.call(_a);
                }
                finally {
                    if (e_1)
                        throw e_1.error;
                }
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
                if (maxResults === void 0) {
                    maxResults = 75;
                }
                if (include === void 0) {
                    include = [];
                }
                if (exclude === void 0) {
                    exclude = [];
                }
                if (custom === void 0) {
                    custom = [];
                }
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
                        ngxEmoji.categories.forEach(function (category) {
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
                                catch (e_2_1) {
                                    e_2 = { error: e_2_1 };
                                }
                                finally {
                                    try {
                                        if (_b && !_b.done && (_c = _a.return))
                                            _c.call(_a);
                                    }
                                    finally {
                                        if (e_2)
                                            throw e_2.error;
                                    }
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        EmojiSearch.ctorParameters = function () {
            return [
                { type: ngxEmoji.EmojiService }
            ];
        };
        return EmojiSearch;
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
    var PickerComponent = (function () {
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
            this.emojiClick = new core.EventEmitter();
            this.emojiSelect = new core.EventEmitter();
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
                var /** @type {?} */ allCategories = __spread(ngxEmoji.categories);
                if (this.custom.length > 0) {
                    this.CUSTOM_CATEGORY.emojis = this.custom.map(function (emoji) {
                        return __assign({}, emoji, { id: emoji.short_names[0], custom: true });
                    });
                    allCategories.push(this.CUSTOM_CATEGORY);
                }
                if (this.include !== undefined) {
                    allCategories.sort(function (a, b) {
                        if (((_this.include)).indexOf(a.id) > /** @type {?} */ ((_this.include)).indexOf(b.id)) {
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
                                var /** @type {?} */ emoji = ((emojis))[emojiIndex];
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (allCategories_1_1 && !allCategories_1_1.done && (_a = allCategories_1.return))
                            _a.call(allCategories_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                var /** @type {?} */ component = ((this.categoryRefs)).find(function (n) { return n.id === $event.category.id; });
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
                            var /** @type {?} */ component = ((this_1.categoryRefs)).find(function (n) { return n.id === category.id; });
                            var /** @type {?} */ active = ((component)).handleScroll(target.scrollTop);
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
                        catch (e_2_1) {
                            e_2 = { error: e_2_1 };
                        }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return))
                                    _c.call(_a);
                            }
                            finally {
                                if (e_2)
                                    throw e_2.error;
                            }
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
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
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
                    this.frequently.add(((emoji)));
                }
                var /** @type {?} */ component = ((this.categoryRefs)).toArray()[1];
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
                var /** @type {?} */ emojiData = ((this.CUSTOM_CATEGORY.emojis)).find(function (customEmoji) { return customEmoji.id === $event.emoji.id; });
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
            { type: core.Component, args: [{
                        selector: 'emoji-mart',
                        template: "<div\n  [style.width.px]=\"perLine * (emojiSize + 12) + 12 + 2 + measureScrollbar\"\n  [ngStyle]=\"style\"\n  class=\"emoji-mart\">\n  <div class=\"emoji-mart-bar\">\n    <emoji-mart-anchors\n      [categories]=\"categories\"\n      (anchorClick)=\"handleAnchorClick($event)\"\n      [color]=\"color\"\n      [selected]=\"selected\"\n      [i18n]=\"i18n\"\n    >\n    </emoji-mart-anchors>\n  </div>\n  <emoji-search\n    #searchRef\n    [i18n]=\"i18n\"\n    (search)=\"handleSearch($event)\"\n    (enterKey)=\"handleEnterKey($event)\"\n    [include]=\"include\"\n    [exclude]=\"exclude\"\n    [custom]=\"custom\"\n    [autoFocus]=\"autoFocus\"\n    [emojisToShowFilter]=\"emojisToShowFilter\"\n  >\n  </emoji-search>\n  <div\n    #scrollRef\n    class=\"emoji-mart-scroll\"\n    (scroll)=\"handleScroll()\"\n  >\n    <div emoji-category\n      *ngFor=\"let category of activeCategories; let idx = index; trackBy: categoryTrack\"\n      #categoryRef\n      [id]=\"category.id\"\n      [name]=\"category.name\"\n      [emojis]=\"category.emojis\"\n      [perLine]=\"perLine\"\n      [native]=\"native\"\n      [hasStickyPosition]=\"native\"\n      [i18n]=\"i18n\"\n      [hideObsolete]=\"hideObsolete\"\n      [custom]=\"category.id == RECENT_CATEGORY.id ? CUSTOM_CATEGORY.emojis : undefined\"\n      [recent]=\"category.id == RECENT_CATEGORY.id ? recent : undefined\"\n\n      [emojiNative]=\"native\"\n      [emojiSkin]=\"skin\"\n      [emojiSize]=\"emojiSize\"\n      [emojiSet]=\"set\"\n      [emojiSheetSize]=\"sheetSize\"\n      [emojiForceSize]=\"native\"\n      [emojiTooltip]=\"emojiTooltip\"\n      (emojiOver)=\"handleEmojiOver($event)\"\n      (emojiLeave)=\"handleEmojiLeave($event)\"\n      (emojiClick)=\"handleEmojiClick($event)\"\n    >\n    </div>\n\n</div>\n<div class=\"emoji-mart-bar\" *ngIf=\"showPreview\">\n  <emoji-preview\n    #previewRef\n    [title]=\"title\"\n    [emoji]=\"previewEmoji\"\n    [idleEmoji]=\"emoji\"\n\n    [emojiNative]=\"native\"\n    [emojiSize]=\"38\"\n    [emojiSkin]=\"skin\"\n    [emojiSet]=\"set\"\n    [emojiSheetSize]=\"sheetSize\"\n    [emojiBackgroundImageFn]=\"backgroundImageFn\"\n    (skinChange)=\"handleSkinChange($event)\"\n  ></emoji-preview>\n</div>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                    },] },
        ];
        /** @nocollapse */
        PickerComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: EmojiFrequentlyService }
            ];
        };
        PickerComponent.propDecorators = {
            perLine: [{ type: core.Input }],
            i18n: [{ type: core.Input }],
            style: [{ type: core.Input }],
            title: [{ type: core.Input }],
            emoji: [{ type: core.Input }],
            color: [{ type: core.Input }],
            hideObsolete: [{ type: core.Input }],
            categories: [{ type: core.Input }],
            activeCategories: [{ type: core.Input }],
            set: [{ type: core.Input }],
            skin: [{ type: core.Input }],
            native: [{ type: core.Input }],
            emojiSize: [{ type: core.Input }],
            sheetSize: [{ type: core.Input }],
            emojisToShowFilter: [{ type: core.Input }],
            showPreview: [{ type: core.Input }],
            emojiTooltip: [{ type: core.Input }],
            autoFocus: [{ type: core.Input }],
            custom: [{ type: core.Input }],
            hideRecent: [{ type: core.Input }],
            include: [{ type: core.Input }],
            exclude: [{ type: core.Input }],
            emojiClick: [{ type: core.Output }],
            emojiSelect: [{ type: core.Output }],
            scrollRef: [{ type: core.ViewChild, args: ['scrollRef',] }],
            previewRef: [{ type: core.ViewChild, args: ['previewRef',] }],
            searchRef: [{ type: core.ViewChild, args: ['searchRef',] }],
            categoryRefs: [{ type: core.ViewChildren, args: ['categoryRef',] }],
            backgroundImageFn: [{ type: core.Input }]
        };
        return PickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PreviewComponent = (function () {
        function PreviewComponent(ref, emojiService) {
            this.ref = ref;
            this.emojiService = emojiService;
            this.skinChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'emoji-preview',
                        template: "\n  <div class=\"emoji-mart-preview\" *ngIf=\"emoji && emojiData\">\n    <div class=\"emoji-mart-preview-emoji\">\n      <ngx-emoji [emoji]=\"emoji\" [size]=\"38\"\n        [native]=\"emojiNative\"\n        [skin]=\"emojiSkin\"\n        [size]=\"emojiSize\"\n        [set]=\"emojiSet\"\n        [sheetSize]=\"emojiSheetSize\"\n        [backgroundImageFn]=\"emojiBackgroundImageFn\">\n      </ngx-emoji>\n    </div>\n\n    <div class=\"emoji-mart-preview-data\">\n      <div class=\"emoji-mart-preview-name\">{{ emojiData.name }}</div>\n      <div class=\"emoji-mart-preview-shortnames\">\n        <span class=\"emoji-mart-preview-shortname\" *ngFor=\"let short_name of emojiData.short_names\">\n          :{{ short_name }}:\n        </span>\n      </div>\n      <div class=\"emoji-mart-preview-emoticons\">\n        <span class=\"emoji-mart-preview-emoticon\" *ngFor=\"let emoticon of listedEmoticons\">\n          {{ emoticon }}\n        </span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"emoji-mart-preview\" *ngIf=\"!emoji\">\n    <div class=\"emoji-mart-preview-emoji\">\n      <ngx-emoji *ngIf=\"idleEmoji && idleEmoji.length\"\n        [native]=\"emojiNative\"\n        [skin]=\"emojiSkin\"\n        [set]=\"emojiSet\"\n        [emoji]=\"idleEmoji\"\n        [backgroundImageFn]=\"emojiBackgroundImageFn\"\n        [size]=\"38\">\n      </ngx-emoji>\n    </div>\n\n    <div class=\"emoji-mart-preview-data\">\n      <span class=\"emoji-mart-title-label\">{{ title }}</span>\n    </div>\n\n    <div class=\"emoji-mart-preview-skins\">\n      <emoji-skins [skin]=\"emojiSkin\" (change)=\"skinChange.emit($event)\">\n      </emoji-skins>\n    </div>\n  </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                    },] },
        ];
        /** @nocollapse */
        PreviewComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: ngxEmoji.EmojiService }
            ];
        };
        PreviewComponent.propDecorators = {
            title: [{ type: core.Input }],
            emoji: [{ type: core.Input }],
            idleEmoji: [{ type: core.Input }],
            emojiNative: [{ type: core.Input }],
            emojiSize: [{ type: core.Input }],
            emojiSkin: [{ type: core.Input }],
            emojiSet: [{ type: core.Input }],
            emojiSheetSize: [{ type: core.Input }],
            emojiBackgroundImageFn: [{ type: core.Input }],
            skinChange: [{ type: core.Output }]
        };
        return PreviewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SearchComponent = (function () {
        function SearchComponent(emojiSearch) {
            this.emojiSearch = emojiSearch;
            this.maxResults = 75;
            this.autoFocus = false;
            this.include = [];
            this.exclude = [];
            this.custom = [];
            this.search = new core.EventEmitter();
            this.enterKey = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'emoji-search',
                        template: "\n  <div class=\"emoji-mart-search\">\n    <input #inputRef type=\"text\"\n      (keyup.enter)=\"handleEnterKey($event)\"\n      [placeholder]=\"i18n.search\" [autofocus]=\"autoFocus\"\n      [(ngModel)]=\"query\" (ngModelChange)=\"handleChange()\"\n    />\n  </div>\n  ",
                        preserveWhitespaces: false,
                    },] },
        ];
        /** @nocollapse */
        SearchComponent.ctorParameters = function () {
            return [
                { type: EmojiSearch }
            ];
        };
        SearchComponent.propDecorators = {
            maxResults: [{ type: core.Input }],
            autoFocus: [{ type: core.Input }],
            i18n: [{ type: core.Input }],
            include: [{ type: core.Input }],
            exclude: [{ type: core.Input }],
            custom: [{ type: core.Input }],
            emojisToShowFilter: [{ type: core.Input }],
            search: [{ type: core.Output }],
            enterKey: [{ type: core.Output }],
            inputRef: [{ type: core.ViewChild, args: ['inputRef',] }]
        };
        return SearchComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SkinComponent = (function () {
        function SkinComponent() {
            this.change = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'emoji-skins',
                        template: "\n  <div class=\"emoji-mart-skin-swatches\" [class.emoji-mart-skin-swatches-opened]=\"opened\">\n    <span *ngFor=\"let skinTone of skinTones\" class=\"emoji-mart-skin-swatch\"\n      [class.emoji-mart-skin-swatch-selected]=\"skinTone === skin\">\n        <span (click)=\"this.handleClick(skinTone)\"\n          class=\"emoji-mart-skin emoji-mart-skin-tone-{{ skinTone }}\"\n        ></span>\n      </span>\n  </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                    },] },
        ];
        SkinComponent.propDecorators = {
            skin: [{ type: core.Input }],
            change: [{ type: core.Output }]
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
    var PickerModule = (function () {
        function PickerModule() {
        }
        PickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule, ngxEmoji.EmojiModule],
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

    exports.AnchorsComponent = AnchorsComponent;
    exports.CategoryComponent = CategoryComponent;
    exports.EmojiFrequentlyService = EmojiFrequentlyService;
    exports.EmojiSearch = EmojiSearch;
    exports.PickerComponent = PickerComponent;
    exports.PickerModule = PickerModule;
    exports.PreviewComponent = PreviewComponent;
    exports.SearchComponent = SearchComponent;
    exports.SkinComponent = SkinComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3RybC1uZ3gtZW1vamktbWFydC51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L3N2Z3MvaW5kZXgudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L2FuY2hvcnMuY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC9lbW9qaS1mcmVxdWVudGx5LnNlcnZpY2UudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L2NhdGVnb3J5LmNvbXBvbmVudC50cyIsbnVsbCwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC91dGlscy9pbmRleC50cyIsIm5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvZW1vamktc2VhcmNoLnNlcnZpY2UudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L3BpY2tlci5jb21wb25lbnQudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L3ByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC9zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC9za2lucy5jb21wb25lbnQudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L3BpY2tlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5jb25zdCBzdmdzOiBhbnkgPSB7XG4gIGFjdGl2aXR5OiBgTTEyIDBhMTIgMTIgMCAxIDAgMCAyNCAxMiAxMiAwIDAgMCAwLTI0bTEwIDExaC01Yy4zLTIuNSAxLjMtNC44IDItNi4xYTEwIDEwIDAgMCAxIDMgNi4xbS05IDBWMmExMCAxMCAwIDAgMSA0LjQgMS42QTE4IDE4IDAgMCAwIDE1IDExaC0yem0tMiAwSDlhMTggMTggMCAwIDAtMi40LTcuNEExMCAxMCAwIDAgMSAxMSAyLjFWMTF6bTAgMnY5YTEwIDEwIDAgMCAxLTQuNC0xLjZBMTggMTggMCAwIDAgOSAxM2gyem00IDBhMTggMTggMCAwIDAgMi40IDcuNCAxMCAxMCAwIDAgMS00LjQgMS41VjEzaDJ6TTUgNC45Yy43IDEuMyAxLjcgMy42IDIgNi4xSDJhMTAgMTAgMCAwIDEgMy02LjFNMiAxM2g1Yy0uMyAyLjUtMS4zIDQuOC0yIDYuMUExMCAxMCAwIDAgMSAyIDEzbTE3IDYuMWMtLjctMS4zLTEuNy0zLjYtMi02LjFoNWExMCAxMCAwIDAgMS0zIDYuMWAsXG5cbiAgY3VzdG9tOiBgTTEwIDFoM3YyMWgtM3ptMTAuMTg2IDRsMS41IDIuNTk4TDMuNSAxOC4wOTggMiAxNS41ek0yIDcuNTk4TDMuNSA1bDE4LjE4NiAxMC41LTEuNSAyLjU5OHpgLFxuXG4gIGZsYWdzOiBgTTAgMGw2IDI0aDJMMiAwem0yMSA1aC00bC0xLTRINGwzIDEyaDNsMSA0aDEzTDIxIDV6TTYuNiAzaDcuOGwyIDhIOC42bC0yLTh6bTguOCAxMGwtMi45IDEuOS0uNC0xLjloMy4zem0zLjYgMGwtMS41LTZoMmwyIDhIMTZsMy0yemAsXG5cbiAgZm9vZHM6IGBNMTcgNWMtMS44IDAtMi45LjQtMy43IDEgLjUtMS4zIDEuOC0zIDQuNy0zYTEgMSAwIDAgMCAwLTJjLTMgMC00LjYgMS4zLTUuNSAyLjVsLS4yLjJjLS42LTEuOS0xLjUtMy43LTMtMy43QzguNSAwIDcuNy4zIDcgMWMtMiAxLjUtMS43IDIuOS0uNSA0QzMuNiA1LjIgMCA3LjQgMCAxM2MwIDQuNiA1IDExIDkgMTEgMiAwIDIuNC0uNSAzLTEgLjYuNSAxIDEgMyAxIDQgMCA5LTYuNCA5LTExIDAtNi00LTgtNy04TTguMiAyLjVjLjctLjUgMS0uNSAxLS41LjQuMiAxIDEuNCAxLjQgMy0xLjYtLjYtMi44LTEuMy0zLTEuOGwuNi0uN00xNSAyMmMtMSAwLTEuMi0uMS0xLjYtLjRsLS4xLS4yYTIgMiAwIDAgMC0yLjYgMGwtLjEuMmMtLjQuMy0uNS40LTEuNi40LTIuOCAwLTctNS40LTctOSAwLTYgNC41LTYgNS02IDIgMCAyLjUuNCAzLjQgMS4ybC4zLjNhMiAyIDAgMCAwIDIuNiAwbC4zLS4zYzEtLjggMS41LTEuMiAzLjQtMS4yLjUgMCA1IC4xIDUgNiAwIDMuNi00LjIgOS03IDlgLFxuXG4gIG5hdHVyZTogYE0xNS41IDhhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNtLTcgMGExLjUgMS41IDAgMSAwIDAgMyAxLjUgMS41IDAgMCAwIDAtM20xMC40My04aC0uMDJjLS45NyAwLTIuMTQuNzktMy4wMiAxLjVBMTMuODggMTMuODggMCAwIDAgMTIgLjk5Yy0xLjI4IDAtMi42Mi4xMy0zLjg3LjUxQzcuMjQuOCA2LjA3IDAgNS4wOSAwaC0uMDJDMy4zNSAwIC4wNyAyLjY3IDAgNy4wM2MtLjA0IDIuNDcuMjggNC4yMyAxLjA0IDUgLjI2LjI3Ljg4LjY5IDEuMy45LjE5IDMuMTcuOTIgNS4yMyAyLjUzIDYuMzcuOS42NCAyLjE5Ljk1IDMuMiAxLjEtLjAzLjItLjA3LjQtLjA3LjYgMCAxLjc3IDIuMzUgMyA0IDNzNC0xLjIzIDQtM2MwLS4yLS4wNC0uNC0uMDctLjU5IDIuNTctLjM4IDUuNDMtMS44NyA1LjkyLTcuNTguNC0uMjIuODktLjU3IDEuMS0uOC43Ny0uNzYgMS4wOS0yLjUyIDEuMDUtNUMyMy45MyAyLjY3IDIwLjY1IDAgMTguOTMgME0zLjIzIDkuMTNjLS4yNC4yOS0uODQgMS4xNi0uOSAxLjI0QTkuNjcgOS42NyAwIDAgMSAyIDcuMDhjLjA1LTMuMjggMi40OC00Ljk3IDMuMS01LjAzLjI1LjAyLjcyLjI3IDEuMjYuNjVBNy45NSA3Ljk1IDAgMCAwIDQgNy44MmMtLjE0LjU1LS40Ljg2LS43OSAxLjMxTTEyIDIyYy0uOSAwLTEuOTUtLjctMi0xIDAtLjY1LjQ3LTEuMjQgMS0xLjZ2LjZhMSAxIDAgMSAwIDIgMHYtLjZjLjUyLjM2IDEgLjk1IDEgMS42LS4wNS4zLTEuMSAxLTIgMW0zLTMuNDh2LjAyYTQuNzUgNC43NSAwIDAgMC0xLjI2LTEuMDJjMS4wOS0uNTIgMi4yNC0xLjMzIDIuMjQtMi4yMiAwLTEuODQtMS43OC0yLjItMy45OC0yLjJzLTMuOTguMzYtMy45OCAyLjJjMCAuODkgMS4xNSAxLjcgMi4yNCAyLjIyQTQuOCA0LjggMCAwIDAgOSAxOC41NHYtLjAzYTYuMSA2LjEgMCAwIDEtMi45Ny0uODRjLTEuMy0uOTItMS44NC0zLjA0LTEuODYtNi40OGwuMDMtLjA0Yy41LS44MiAxLjQ5LTEuNDUgMS44LTMuMUM2IDYgNy4zNiA0LjQyIDguMzYgMy41M2MxLjAxLS4zNSAyLjItLjUzIDMuNTktLjUzIDEuNDUgMCAyLjY4LjIgMy43My41NyAxIC45IDIuMzIgMi40NiAyLjMyIDQuNDguMzEgMS42NSAxLjMgMi4yNyAxLjggMy4xbC4xLjE4Yy0uMDYgNS45Ny0xLjk1IDcuMDEtNC45IDcuMTltNi42My04LjJsLS4xMS0uMmE3LjU5IDcuNTkgMCAwIDAtLjc0LS45OCAzLjAyIDMuMDIgMCAwIDEtLjc5LTEuMzIgNy45MyA3LjkzIDAgMCAwLTIuMzUtNS4xMmMuNTMtLjM4IDEtLjYzIDEuMjYtLjY1LjY0LjA3IDMuMDUgMS43NyAzLjEgNS4wMy4wMiAxLjgxLS4zNSAzLjIyLS4zNyAzLjI0YCxcblxuICBvYmplY3RzOiBgTTEyIDBhOSA5IDAgMCAwLTUgMTYuNVYyMXMyIDMgNSAzIDUtMyA1LTN2LTQuNUE5IDkgMCAwIDAgMTIgMHptMCAyYTcgNyAwIDEgMSAwIDE0IDcgNyAwIDAgMSAwLTE0ek05IDE3LjVhOSA5IDAgMCAwIDYgMHYuOGE3IDcgMCAwIDEtMyAuNyA3IDcgMCAwIDEtMy0uN3YtLjh6bS4yIDNhOC45IDguOSAwIDAgMCAyLjguNWMxIDAgMS45LS4yIDIuOC0uNS0uNi43LTEuNiAxLjUtMi44IDEuNS0xLjEgMC0yLjEtLjgtMi44LTEuNXptNS41LTguMWMtLjggMC0xLjEtLjgtMS41LTEuOC0uNS0xLS43LTEuNS0xLjItMS41cy0uOC41LTEuMyAxLjVjLS40IDEtLjggMS44LTEuNiAxLjhoLS4zYy0uNS0uMi0uOC0uNy0xLjMtMS44bC0uMi0xQTMgMyAwIDAgMCA3IDlhMSAxIDAgMCAxIDAtMmMxLjcgMCAyIDEuNCAyLjIgMi4xLjUtMSAxLjMtMiAyLjgtMiAxLjUgMCAyLjMgMS4xIDIuNyAyLjEuMi0uOC42LTIuMiAyLjMtMi4yYTEgMSAwIDEgMSAwIDJjLS4yIDAtLjMuNS0uMy43YTYuNSA2LjUgMCAwIDEtLjMgMWMtLjUgMS0uOCAxLjctMS43IDEuN2AsXG5cbiAgcGVvcGxlOiBgTTEyIDBhMTIgMTIgMCAxIDAgMCAyNCAxMiAxMiAwIDAgMCAwLTI0bTAgMjJhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwTTggN2EyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRtOCAwYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNG0tLjggOGMtLjcgMS4yLTEuOCAyLTMuMyAyLTEuNSAwLTIuNy0uOC0zLjQtMkgxNW0zLTJINmE2IDYgMCAxIDAgMTIgMGAsXG5cbiAgcGxhY2VzOiBgTTYuNSAxMmEyLjUgMi41IDAgMSAwIDAgNSAyLjUgMi41IDAgMCAwIDAtNW0wIDNjLS4zIDAtLjUtLjItLjUtLjVzLjItLjUuNS0uNS41LjIuNS41LS4yLjUtLjUuNW0xMS0zYTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01bTAgM2MtLjMgMC0uNS0uMi0uNS0uNXMuMi0uNS41LS41LjUuMi41LjUtLjIuNS0uNS41bTUtNS41bC0xLS40LS4xLS4xaC42Yy42IDAgMS0uNCAxLTEgMC0xLS45LTItMi0yaC0uNmwtLjgtMS43QTMgMyAwIDAgMCAxNi44IDJINy4yYTMgMyAwIDAgMC0yLjggMi4zTDMuNiA2SDNhMiAyIDAgMCAwLTIgMmMwIC42LjQgMSAxIDFoLjZ2LjFsLTEgLjRhMiAyIDAgMCAwLTEuNCAybC43IDcuNmExIDEgMCAwIDAgMSAuOUgzdjFjMCAxLjEuOSAyIDIgMmgyYTIgMiAwIDAgMCAyLTJ2LTFoNnYxYzAgMS4xLjkgMiAyIDJoMmEyIDIgMCAwIDAgMi0ydi0xaDEuMWExIDEgMCAwIDAgMS0uOWwuNy03LjVhMiAyIDAgMCAwLTEuMy0yLjFNNi4zIDQuOWMuMS0uNS41LS45IDEtLjloOS41Yy40IDAgLjguNCAxIC45TDE5LjIgOUg0LjdsMS42LTQuMXpNNyAyMUg1di0xaDJ2MXptMTIgMGgtMnYtMWgydjF6bTIuMi0zSDIuOGwtLjctNi42LjktLjRoMThsLjkuNC0uNyA2LjZ6YCxcblxuICByZWNlbnQ6IGBNMTMgNGgtMnY3SDl2MmgydjJoMnYtMmg0di0yaC00em0tMS00YTEyIDEyIDAgMSAwIDAgMjQgMTIgMTIgMCAwIDAgMC0yNG0wIDIyYTEwIDEwIDAgMSAxIDAtMjAgMTAgMTAgMCAwIDEgMCAyMGAsXG5cbiAgc3ltYm9sczogYE0wIDBoMTF2Mkgwem00IDExaDNWNmg0VjRIMHYyaDR6bTExLjUgNmEyLjUgMi41IDAgMSAwIDAtNSAyLjUgMi41IDAgMCAwIDAgNW0wLTIuOTlhLjUuNSAwIDAgMSAwIC45OWMtLjI4IDAtLjUtLjIyLS41LS41cy4yMi0uNDkuNS0uNDltNiA1YTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01bTAgMi45OWEuNS41IDAgMCAxLS41LS41LjUuNSAwIDAgMSAxIC4wMS41LjUgMCAwIDEtLjUuNDltLjUtOWwtOSA5IDEuNTEgMS41IDktOXptLTUtMmMyLjIgMCA0LTEuMTIgNC0yLjVWMnMuOTgtLjE2IDEuNS45NUMyMyA0LjA1IDIzIDYgMjMgNnMxLTEuMTIgMS0zLjEzQzI0LS4wMiAyMSAwIDIxIDBoLTJ2Ni4zNUE1Ljg1IDUuODUgMCAwIDAgMTcgNmMtMi4yIDAtNCAxLjEyLTQgMi41czEuOCAyLjUgNCAyLjVtLTYuNyA5LjQ4TDguODIgMTguOWE0Ny41NCA0Ny41NCAwIDAgMS0xLjQ0IDEuMTNjLS4zLS4zLS45OS0xLjAyLTIuMDQtMi4xOS45LS44MyAxLjQ3LTEuNDYgMS43Mi0xLjg5cy4zOC0uODcuMzgtMS4zM2MwLS42LS4yNy0xLjE4LS44Mi0xLjc2LS41NC0uNTgtMS4zMy0uODctMi4zNS0uODctMSAwLTEuNzkuMjktMi4zNC44Ny0uNTYuNi0uODMgMS4xOC0uODMgMS43OSAwIC44MS40MiAxLjc1IDEuMjUgMi44YTYuNTcgNi41NyAwIDAgMC0xLjggMS43OSAzLjQ2IDMuNDYgMCAwIDAtLjUxIDEuODNjMCAuODYuMyAxLjU2LjkyIDIuMWEzLjUgMy41IDAgMCAwIDIuNDIuODNjMS4xNyAwIDIuNDQtLjM4IDMuODEtMS4xNEw4LjIzIDI0aDIuODJsLTIuMDktMi4zOCAxLjM0LTEuMTR6TTMuNTYgMTQuMWExLjAyIDEuMDIgMCAwIDEgLjczLS4yOGMuMzEgMCAuNTYuMDguNzUuMjVhLjg1Ljg1IDAgMCAxIC4yOC42NmMwIC41Mi0uNDIgMS4xMS0xLjI2IDEuNzgtLjUzLS42NS0uOC0xLjIzLS44LTEuNzRhLjkuOSAwIDAgMSAuMy0uNjdtLjE4IDcuOWMtLjQzIDAtLjc4LS4xMi0xLjA2LS4zNS0uMjgtLjIzLS40MS0uNDktLjQxLS43NiAwLS42LjUtMS4zIDEuNTItMi4wOWEzMS4yMyAzMS4yMyAwIDAgMCAyLjI1IDIuNDRjLS45Mi41LTEuNjkuNzYtMi4zLjc2YCxcbn07XG5leHBvcnQgZGVmYXVsdCBzdmdzO1xuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamlDYXRlZ29yeSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgU1ZHcyBmcm9tICcuL3N2Z3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1tYXJ0LWFuY2hvcnMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1jYXRlZ29yeSBbbmdGb3JPZl09XCJjYXRlZ29yaWVzXCIgbGV0LWlkeD1cImluZGV4XCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5Rm5cIj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwiY2F0ZWdvcnkuYW5jaG9yICE9PSBmYWxzZVwiXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxuICAgICAgICAoY2xpY2spPVwidGhpcy5oYW5kbGVDbGljaygkZXZlbnQsIGlkeClcIlxuICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yXCJcbiAgICAgICAgW2NsYXNzLmVtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkXT1cImNhdGVnb3J5Lm5hbWUgPT09IHNlbGVjdGVkXCJcbiAgICAgICAgW3N0eWxlLmNvbG9yXT1cImNhdGVnb3J5Lm5hbWUgPT09IHNlbGVjdGVkID8gY29sb3IgOiBudWxsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cInN2Z3NbY2F0ZWdvcnkuaWRdXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBBbmNob3JzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2F0ZWdvcmllczogRW1vamlDYXRlZ29yeVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBzZWxlY3RlZD86IHN0cmluZztcbiAgQElucHV0KCkgaTE4bjogYW55O1xuICBAT3V0cHV0KCkgYW5jaG9yQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgY2F0ZWdvcnk6IEVtb2ppQ2F0ZWdvcnksIGluZGV4OiBudW1iZXIgfT4oKTtcbiAgc3ZnczogYW55ID0gU1ZHcztcblxuICB0cmFja0J5Rm4oaWR4OiBudW1iZXIsIGNhdDogRW1vamlDYXRlZ29yeSkge1xuICAgIHJldHVybiBjYXQuaWQ7XG4gIH1cbiAgaGFuZGxlQ2xpY2soJGV2ZW50OiBFdmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuYW5jaG9yQ2xpY2suZW1pdCh7XG4gICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yaWVzW2luZGV4XSxcbiAgICAgIGluZGV4LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtb2ppRGF0YSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIHtcbiAgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnO1xuICBmcmVxdWVudGx5OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG4gIGRlZmF1bHRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIERFRkFVTFRTID0gW1xuICAgICcrMScsXG4gICAgJ2dyaW5uaW5nJyxcbiAgICAna2lzc2luZ19oZWFydCcsXG4gICAgJ2hlYXJ0X2V5ZXMnLFxuICAgICdsYXVnaGluZycsXG4gICAgJ3N0dWNrX291dF90b25ndWVfd2lua2luZ19leWUnLFxuICAgICdzd2VhdF9zbWlsZScsXG4gICAgJ2pveScsXG4gICAgJ3NjcmVhbScsXG4gICAgJ2Rpc2FwcG9pbnRlZCcsXG4gICAgJ3VuYW11c2VkJyxcbiAgICAnd2VhcnknLFxuICAgICdzb2InLFxuICAgICdzdW5nbGFzc2VzJyxcbiAgICAnaGVhcnQnLFxuICAgICdwb29wJyxcbiAgXTtcblxuICBpbml0KCkge1xuICAgIHRoaXMuZnJlcXVlbnRseSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5OQU1FU1BBQ0V9LmZyZXF1ZW50bHlgKSB8fCAnbnVsbCcpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIGFkZChlbW9qaTogRW1vamlEYXRhKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZyZXF1ZW50bHkpIHtcbiAgICAgIHRoaXMuZnJlcXVlbnRseSA9IHRoaXMuZGVmYXVsdHM7XG4gICAgfVxuICAgIGlmICghdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSkge1xuICAgICAgdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSA9IDA7XG4gICAgfVxuICAgIHRoaXMuZnJlcXVlbnRseVtlbW9qaS5pZF0gKz0gMTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5sYXN0YCwgZW1vamkuaWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5mcmVxdWVudGx5YCwgSlNPTi5zdHJpbmdpZnkodGhpcy5mcmVxdWVudGx5KSk7XG4gIH1cbiAgZ2V0KHBlckxpbmU6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyZXF1ZW50bHkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyTGluZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHNbdGhpcy5ERUZBVUxUU1tpXV0gPSBwZXJMaW5lIC0gaTtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ERUZBVUxUU1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHF1YW50aXR5ID0gcGVyTGluZSAqIDQ7XG4gICAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZyZXF1ZW50bHkpO1xuXG4gICAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmZyZXF1ZW50bHkhW2FdIC0gdGhpcy5mcmVxdWVudGx5IVtiXSlcbiAgICAgIC5yZXZlcnNlKCk7XG4gICAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KTtcblxuICAgIGNvbnN0IGxhc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0ubGFzdGApO1xuXG4gICAgaWYgKGxhc3QgJiYgIXNsaWNlZC5pbmNsdWRlcyhsYXN0KSkge1xuICAgICAgc2xpY2VkLnBvcCgpO1xuICAgICAgc2xpY2VkLnB1c2gobGFzdCk7XG4gICAgfVxuICAgIHJldHVybiBzbGljZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamksIEVtb2ppU2VydmljZSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgeyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIH0gZnJvbSAnLi9lbW9qaS1mcmVxdWVudGx5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbZW1vamktY2F0ZWdvcnldJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdlxuICAgICNjb250YWluZXJcbiAgICBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnlcIlxuICAgIFtjbGFzcy5lbW9qaS1tYXJ0LW5vLXJlc3VsdHNdPVwiZW1vamlzICYmICFlbW9qaXMubGVuZ3RoXCJcbiAgICBbbmdTdHlsZV09XCJjb250YWluZXJTdHlsZXNcIlxuICA+XG4gICAgPGRpdlxuICAgICAgW25nU3R5bGVdPVwibGFiZWxTdHlsZXNcIlxuICAgICAgW2F0dHIuZGF0YS1uYW1lXT1cIm5hbWVcIlxuICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCJcbiAgICA+XG4gICAgICA8c3BhbiBzdHlsZT1cImxhYmVsU3BhblN0eWxlc1wiICNsYWJlbD5cbiAgICAgICAge3sgaTE4bi5jYXRlZ29yaWVzW2lkXSB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImVtb2ppc1wiPlxuICAgICAgPG5neC1lbW9qaVxuICAgICAgICAqbmdGb3I9XCJsZXQgZW1vamkgb2YgZW1vamlzOyB0cmFja0J5OiB0cmFja0J5SWRcIlxuICAgICAgICBbZW1vamldPVwiZW1vamlcIlxuICAgICAgICBbc2l6ZV09XCJlbW9qaVNpemVcIlxuICAgICAgICBbc2tpbl09XCJlbW9qaVNraW5cIlxuICAgICAgICBbbmF0aXZlXT1cImVtb2ppTmF0aXZlXCJcbiAgICAgICAgW3NldF09XCJlbW9qaVNldFwiXG4gICAgICAgIFtzaGVldFNpemVdPVwiZW1vamlTaGVldFNpemVcIlxuICAgICAgICBbZm9yY2VTaXplXT1cImVtb2ppRm9yY2VTaXplXCJcbiAgICAgICAgW3Rvb2x0aXBdPVwiZW1vamlUb29sdGlwXCJcbiAgICAgICAgW2hpZGVPYnNvbGV0ZV09XCJoaWRlT2Jzb2xldGVcIlxuICAgICAgICAoZW1vamlPdmVyKT1cImVtb2ppT3Zlci5lbWl0KCRldmVudClcIlxuICAgICAgICAoZW1vamlMZWF2ZSk9XCJlbW9qaUxlYXZlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChlbW9qaUNsaWNrKT1cImVtb2ppQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgIDwvbmd4LWVtb2ppPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiZW1vamlzICYmICFlbW9qaXMubGVuZ3RoXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bmd4LWVtb2ppXG4gICAgICAgICAgZW1vamk9XCJzbGV1dGhfb3Jfc3B5XCJcbiAgICAgICAgICBzaXplPVwiMzhcIlxuICAgICAgICAgIFtza2luXT1cImVtb2ppU2tpblwiXG4gICAgICAgICAgW25hdGl2ZV09XCJlbW9qaU5hdGl2ZVwiXG4gICAgICAgICAgW3NldF09XCJlbW9qaVNldFwiXG4gICAgICAgICAgW3NoZWV0U2l6ZV09XCJlbW9qaVNoZWV0U2l6ZVwiXG4gICAgICAgICAgW2ZvcmNlU2l6ZV09XCJlbW9qaUZvcmNlU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiZW1vamlUb29sdGlwXCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvbmd4LWVtb2ppPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1vamktbWFydC1uby1yZXN1bHRzLWxhYmVsXCI+XG4gICAgICAgIHt7IGkxOG4ubm90Zm91bmQgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgZW1vamlzPzogYW55W10gfCBudWxsO1xuICBASW5wdXQoKSBoYXNTdGlja3lQb3NpdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcbiAgQElucHV0KCkgbmF0aXZlID0gdHJ1ZTtcbiAgQElucHV0KCkgcGVyTGluZSA9IDk7XG4gIEBJbnB1dCgpIHJlY2VudDogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgY3VzdG9tOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBpMThuOiBhbnk7XG4gIEBJbnB1dCgpIGlkOiBhbnk7XG4gIEBJbnB1dCgpIGhpZGVPYnNvbGV0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIGVtb2ppTmF0aXZlPzogRW1vamlbJ25hdGl2ZSddO1xuICBASW5wdXQoKSBlbW9qaVNraW4/OiBFbW9qaVsnc2tpbiddO1xuICBASW5wdXQoKSBlbW9qaVNpemU/OiBFbW9qaVsnc2l6ZSddO1xuICBASW5wdXQoKSBlbW9qaVNldD86IEVtb2ppWydzZXQnXTtcbiAgQElucHV0KCkgZW1vamlTaGVldFNpemU/OiBFbW9qaVsnc2hlZXRTaXplJ107XG4gIEBJbnB1dCgpIGVtb2ppRm9yY2VTaXplPzogRW1vamlbJ2ZvcmNlU2l6ZSddO1xuICBASW5wdXQoKSBlbW9qaVRvb2x0aXA/OiBFbW9qaVsndG9vbHRpcCddO1xuICBAT3V0cHV0KCkgZW1vamlPdmVyOiBFbW9qaVsnZW1vamlPdmVyJ10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlbW9qaUxlYXZlOiBFbW9qaVsnZW1vamlMZWF2ZSddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZW1vamlDbGljazogRW1vamlbJ2Vtb2ppQ2xpY2snXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyPzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGFiZWwnKSBsYWJlbD86IEVsZW1lbnRSZWY7XG4gIGNvbnRhaW5lclN0eWxlczogYW55ID0ge307XG4gIGxhYmVsU3R5bGVzOiBhbnkgPSB7fTtcbiAgbGFiZWxTcGFuU3R5bGVzOiBhbnkgPSB7fTtcbiAgcGFyZW50PzogRWxlbWVudDtcbiAgbWFyZ2luID0gMDtcbiAgbWluTWFyZ2luID0gMDtcbiAgbWF4TWFyZ2luID0gMDtcbiAgdG9wID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVtb2ppU2VydmljZTogRW1vamlTZXJ2aWNlLFxuICAgIHByaXZhdGUgZnJlcXVlbnRseTogRW1vamlGcmVxdWVudGx5U2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZW1vamlzID0gdGhpcy5nZXRFbW9qaXMoKTtcblxuICAgIGlmICghdGhpcy5lbW9qaXMpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyU3R5bGVzID0geyBkaXNwbGF5OiAnbm9uZScgfTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGFzU3RpY2t5UG9zaXRpb24pIHtcbiAgICAgIHRoaXMubGFiZWxTdHlsZXMgPSB7IGhlaWdodDogMjggfTtcbiAgICAgIHRoaXMubGFiZWxTcGFuU3R5bGVzID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9O1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnBhcmVudCA9IHRoaXMuY29udGFpbmVyIS5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB0aGlzLm1lbW9pemVTaXplKCk7XG4gIH1cbiAgbWVtb2l6ZVNpemUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdG9wLFxuICAgICAgaGVpZ2h0LFxuICAgIH0gPSB0aGlzLmNvbnRhaW5lciEubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwYXJlbnRUb3AgPSB0aGlzLnBhcmVudCEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbCEubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB0aGlzLnRvcCA9IHRvcCAtIHBhcmVudFRvcCArIHRoaXMucGFyZW50IS5zY3JvbGxUb3A7XG5cbiAgICBpZiAoaGVpZ2h0ID09PSAwKSB7XG4gICAgICB0aGlzLm1heE1hcmdpbiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWF4TWFyZ2luID0gaGVpZ2h0IC0gbGFiZWxIZWlnaHQ7XG4gICAgfVxuICB9XG4gIGhhbmRsZVNjcm9sbChzY3JvbGxUb3A6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGxldCBtYXJnaW4gPSBzY3JvbGxUb3AgLSB0aGlzLnRvcDtcbiAgICBtYXJnaW4gPSBtYXJnaW4gPCB0aGlzLm1pbk1hcmdpbiA/IHRoaXMubWluTWFyZ2luIDogbWFyZ2luO1xuICAgIG1hcmdpbiA9IG1hcmdpbiA+IHRoaXMubWF4TWFyZ2luID8gdGhpcy5tYXhNYXJnaW4gOiBtYXJnaW47XG5cbiAgICBpZiAobWFyZ2luID09PSB0aGlzLm1hcmdpbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5oYXNTdGlja3lQb3NpdGlvbikge1xuICAgICAgdGhpcy5sYWJlbCEubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHttYXJnaW59cHhgO1xuICAgIH1cblxuICAgIHRoaXMubWFyZ2luID0gbWFyZ2luO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0RW1vamlzKCkge1xuICAgIGlmICh0aGlzLm5hbWUgPT09ICdSZWNlbnQnKSB7XG4gICAgICBsZXQgZnJlcXVlbnRseVVzZWQgPSB0aGlzLnJlY2VudCB8fCB0aGlzLmZyZXF1ZW50bHkuZ2V0KHRoaXMucGVyTGluZSk7XG4gICAgICBpZiAoIWZyZXF1ZW50bHlVc2VkIHx8ICFmcmVxdWVudGx5VXNlZC5sZW5ndGgpIHtcbiAgICAgICAgZnJlcXVlbnRseVVzZWQgPSB0aGlzLmZyZXF1ZW50bHkuZ2V0KHRoaXMucGVyTGluZSk7XG4gICAgICB9XG4gICAgICBpZiAoZnJlcXVlbnRseVVzZWQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZW1vamlzID0gZnJlcXVlbnRseVVzZWRcbiAgICAgICAgICAubWFwKGlkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtb2ppID0gdGhpcy5jdXN0b20uZmlsdGVyKChlOiBhbnkpID0+IGUuaWQgPT09IGlkKVswXTtcbiAgICAgICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgICAgICByZXR1cm4gZW1vamk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoaWQgPT4gISF0aGlzLmVtb2ppU2VydmljZS5nZXREYXRhKGlkKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoIXRoaXMuZW1vamlzIHx8IHRoaXMuZW1vamlzLmxlbmd0aCA9PT0gMCkgJiYgZnJlcXVlbnRseVVzZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbW9qaXMpIHtcbiAgICAgIHRoaXMuZW1vamlzID0gdGhpcy5lbW9qaXMuc2xpY2UoMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZW1vamlzO1xuICB9XG4gIHVwZGF0ZURpc3BsYXkoZGlzcGxheTogJ25vbmUnIHwgJ2luaGVyaXQnKSB7XG4gICAgdGhpcy5jb250YWluZXJTdHlsZXMuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgdGhpcy5nZXRFbW9qaXMoKTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG59XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiZnVuY3Rpb24gdW5pcShhcnI6IGFueVtdKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKChhY2M6IEFycmF5PGFueT4sIGl0ZW06IGFueSkgPT4ge1xuICAgIGlmICghYWNjLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICBhY2MucHVzaChpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0KGE6IGFueSwgYjogYW55KSB7XG4gIGNvbnN0IHVuaXFBID0gdW5pcShhKTtcbiAgY29uc3QgdW5pcUIgPSB1bmlxKGIpO1xuXG4gIHJldHVybiB1bmlxQS5maWx0ZXIoKGl0ZW06IGFueSkgPT4gdW5pcUIuaW5kZXhPZihpdGVtKSA+PSAwKTtcbn1cblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NvbmljZG9lL21lYXN1cmUtc2Nyb2xsYmFyXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZVNjcm9sbGJhcigpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBkaXYuc3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICBkaXYuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgZGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGRpdi5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkaXYpO1xuXG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgY2F0ZWdvcmllcyxcbiAgRW1vamlEYXRhLFxuICBFbW9qaVNlcnZpY2UsXG59IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgeyBpbnRlcnNlY3QgfSBmcm9tICcuL3V0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVtb2ppU2VhcmNoIHtcbiAgb3JpZ2luYWxQb29sOiBhbnkgPSB7fTtcbiAgaW5kZXg6IHtcbiAgICByZXN1bHRzPzogRW1vamlEYXRhW107XG4gICAgcG9vbD86IHsgW2tleTogc3RyaW5nXTogRW1vamlEYXRhIH07XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9ID0ge307XG4gIGVtb2ppc0xpc3Q6IGFueSA9IHt9O1xuICBlbW90aWNvbnNMaXN0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIGVtb2ppU2VhcmNoOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbW9qaVNlcnZpY2U6IEVtb2ppU2VydmljZSkge1xuICAgIGZvciAoY29uc3QgZW1vamlEYXRhIG9mIHRoaXMuZW1vamlTZXJ2aWNlLmVtb2ppcykge1xuICAgICAgY29uc3QgeyBzaG9ydF9uYW1lcywgZW1vdGljb25zIH0gPSBlbW9qaURhdGE7XG4gICAgICBjb25zdCBpZCA9IHNob3J0X25hbWVzWzBdO1xuXG4gICAgICBlbW90aWNvbnMuZm9yRWFjaChlbW90aWNvbiA9PiB7XG4gICAgICAgIGlmICh0aGlzLmVtb3RpY29uc0xpc3RbZW1vdGljb25dKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbW90aWNvbnNMaXN0W2Vtb3RpY29uXSA9IGlkO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZW1vamlzTGlzdFtpZF0gPSB0aGlzLmVtb2ppU2VydmljZS5nZXRTYW5pdGl6ZWREYXRhKGlkKTtcbiAgICAgIHRoaXMub3JpZ2luYWxQb29sW2lkXSA9IGVtb2ppRGF0YTtcbiAgICB9XG4gIH1cblxuICBhZGRDdXN0b21Ub1Bvb2woY3VzdG9tOiBhbnksIHBvb2w6IGFueSkge1xuICAgIGN1c3RvbS5mb3JFYWNoKChlbW9qaTogYW55KSA9PiB7XG4gICAgICBjb25zdCBlbW9qaUlkID0gZW1vamkuaWQgfHwgZW1vamkuc2hvcnRfbmFtZXNbMF07XG5cbiAgICAgIGlmIChlbW9qaUlkICYmICFwb29sW2Vtb2ppSWRdKSB7XG4gICAgICAgIHBvb2xbZW1vamlJZF0gPSB0aGlzLmVtb2ppU2VydmljZS5nZXREYXRhKGVtb2ppKTtcbiAgICAgICAgdGhpcy5lbW9qaXNMaXN0W2Vtb2ppSWRdID0gdGhpcy5lbW9qaVNlcnZpY2UuZ2V0U2FuaXRpemVkRGF0YShlbW9qaSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZWFyY2goXG4gICAgdmFsdWU6IHN0cmluZyxcbiAgICBlbW9qaXNUb1Nob3dGaWx0ZXI/OiAoeDogYW55KSA9PiBib29sZWFuLFxuICAgIG1heFJlc3VsdHMgPSA3NSxcbiAgICBpbmNsdWRlOiBhbnlbXSA9IFtdLFxuICAgIGV4Y2x1ZGU6IGFueVtdID0gW10sXG4gICAgY3VzdG9tOiBhbnlbXSA9IFtdLFxuICApOiBFbW9qaURhdGFbXSB8IG51bGwge1xuICAgIHRoaXMuYWRkQ3VzdG9tVG9Qb29sKGN1c3RvbSwgdGhpcy5vcmlnaW5hbFBvb2wpO1xuXG4gICAgbGV0IHJlc3VsdHM6IEVtb2ppRGF0YVtdIHwgdW5kZWZpbmVkO1xuICAgIGxldCBwb29sID0gdGhpcy5vcmlnaW5hbFBvb2w7XG5cbiAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICctJyB8fCB2YWx1ZSA9PT0gJy0xJykge1xuICAgICAgICByZXR1cm4gW3RoaXMuZW1vamlzTGlzdFsnLTEnXV07XG4gICAgICB9XG5cbiAgICAgIGxldCB2YWx1ZXMgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bXFxzfCx8XFwtfF9dKy8pO1xuICAgICAgbGV0IGFsbFJlc3VsdHMgPSBbXTtcblxuICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgIHZhbHVlcyA9IFt2YWx1ZXNbMF0sIHZhbHVlc1sxXV07XG4gICAgICB9XG5cbiAgICAgIGlmIChpbmNsdWRlLmxlbmd0aCB8fCBleGNsdWRlLmxlbmd0aCkge1xuICAgICAgICBwb29sID0ge307XG5cbiAgICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgICBjb25zdCBpc0luY2x1ZGVkID1cbiAgICAgICAgICAgIGluY2x1ZGUgJiYgaW5jbHVkZS5sZW5ndGhcbiAgICAgICAgICAgICAgPyBpbmNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgICAgICAgOiB0cnVlO1xuICAgICAgICAgIGNvbnN0IGlzRXhjbHVkZWQgPVxuICAgICAgICAgICAgZXhjbHVkZSAmJiBleGNsdWRlLmxlbmd0aFxuICAgICAgICAgICAgICA/IGV4Y2x1ZGUuaW5kZXhPZihjYXRlZ29yeS5pZCkgPiAtMVxuICAgICAgICAgICAgICA6IGZhbHNlO1xuICAgICAgICAgIGlmICghaXNJbmNsdWRlZCB8fCBpc0V4Y2x1ZGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2F0ZWdvcnkuZW1vamlzIS5mb3JFYWNoKFxuICAgICAgICAgICAgZW1vamlJZCA9PiAocG9vbFtlbW9qaUlkXSA9IHRoaXMuZW1vamlTZXJ2aWNlLm5hbWVzW2Vtb2ppSWRdKSxcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY3VzdG9tLmxlbmd0aCkge1xuICAgICAgICAgIGNvbnN0IGN1c3RvbUlzSW5jbHVkZWQgPVxuICAgICAgICAgICAgaW5jbHVkZSAmJiBpbmNsdWRlLmxlbmd0aCA/IGluY2x1ZGUuaW5kZXhPZignY3VzdG9tJykgPiAtMSA6IHRydWU7XG4gICAgICAgICAgY29uc3QgY3VzdG9tSXNFeGNsdWRlZCA9XG4gICAgICAgICAgICBleGNsdWRlICYmIGV4Y2x1ZGUubGVuZ3RoID8gZXhjbHVkZS5pbmRleE9mKCdjdXN0b20nKSA+IC0xIDogZmFsc2U7XG4gICAgICAgICAgaWYgKGN1c3RvbUlzSW5jbHVkZWQgJiYgIWN1c3RvbUlzRXhjbHVkZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tVG9Qb29sKGN1c3RvbSwgcG9vbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFsbFJlc3VsdHMgPSB2YWx1ZXNcbiAgICAgICAgLm1hcCh2ID0+IHtcbiAgICAgICAgICBsZXQgYVBvb2wgPSBwb29sO1xuICAgICAgICAgIGxldCBhSW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgIGxldCBsZW5ndGggPSAwO1xuXG4gICAgICAgICAgZm9yIChsZXQgY2hhckluZGV4ID0gMDsgY2hhckluZGV4IDwgdi5sZW5ndGg7IGNoYXJJbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gdltjaGFySW5kZXhdO1xuICAgICAgICAgICAgbGVuZ3RoKys7XG4gICAgICAgICAgICBpZiAoIWFJbmRleFtjaGFyXSkge1xuICAgICAgICAgICAgICBhSW5kZXhbY2hhcl0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFJbmRleCA9IGFJbmRleFtjaGFyXTtcblxuICAgICAgICAgICAgaWYgKCFhSW5kZXgucmVzdWx0cykge1xuICAgICAgICAgICAgICBjb25zdCBzY29yZXM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcblxuICAgICAgICAgICAgICBhSW5kZXgucmVzdWx0cyA9IFtdO1xuICAgICAgICAgICAgICBhSW5kZXgucG9vbCA9IHt9O1xuXG4gICAgICAgICAgICAgIGZvciAoY29uc3QgaWQgb2YgT2JqZWN0LmtleXMoYVBvb2wpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW1vamkgPSBhUG9vbFtpZF07XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVtb2ppU2VhcmNoW2lkXSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5lbW9qaVNlYXJjaFtpZF0gPSB0aGlzLmJ1aWxkU2VhcmNoKFxuICAgICAgICAgICAgICAgICAgICBlbW9qaS5zaG9ydF9uYW1lcyxcbiAgICAgICAgICAgICAgICAgICAgZW1vamkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamkua2V5d29yZHMsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppLmVtb3RpY29ucyxcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5lbW9qaVNlYXJjaFtpZF07XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViID0gdi5zdWJzdHIoMCwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJJbmRleCA9IHF1ZXJ5LmluZGV4T2Yoc3ViKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdWJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IHN1YkluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgIGlmIChzdWIgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjb3JlID0gMDtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYUluZGV4LnJlc3VsdHMucHVzaCh0aGlzLmVtb2ppc0xpc3RbaWRdKTtcbiAgICAgICAgICAgICAgICAgIGFJbmRleC5wb29sW2lkXSA9IGVtb2ppO1xuXG4gICAgICAgICAgICAgICAgICBzY29yZXNbaWRdID0gc2NvcmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgYUluZGV4LnJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFTY29yZSA9IHNjb3Jlc1thLmlkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBiU2NvcmUgPSBzY29yZXNbYi5pZF07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYVNjb3JlIC0gYlNjb3JlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYVBvb2wgPSBhSW5kZXgucG9vbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gYUluZGV4LnJlc3VsdHM7XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoYSA9PiBhKTtcblxuICAgICAgaWYgKGFsbFJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgICAgICByZXN1bHRzID0gaW50ZXJzZWN0LmFwcGx5KG51bGwsIGFsbFJlc3VsdHMpO1xuICAgICAgfSBlbHNlIGlmIChhbGxSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgICByZXN1bHRzID0gYWxsUmVzdWx0c1swXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVzdWx0cykge1xuICAgICAgaWYgKGVtb2ppc1RvU2hvd0ZpbHRlcikge1xuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5maWx0ZXIoKHJlc3VsdDogRW1vamlEYXRhKSA9PlxuICAgICAgICAgIGVtb2ppc1RvU2hvd0ZpbHRlcih0aGlzLmVtb2ppU2VydmljZS5uYW1lc1tyZXN1bHQuaWRdKSxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiBtYXhSZXN1bHRzKSB7XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG1heFJlc3VsdHMpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cyB8fCBudWxsO1xuICB9XG5cbiAgYnVpbGRTZWFyY2goXG4gICAgc2hvcnRfbmFtZXM6IHN0cmluZ1tdLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBrZXl3b3Jkczogc3RyaW5nW10sXG4gICAgZW1vdGljb25zOiBzdHJpbmdbXSxcbiAgKSB7XG4gICAgY29uc3Qgc2VhcmNoOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3QgYWRkVG9TZWFyY2ggPSAoc3RyaW5nczogc3RyaW5nIHwgc3RyaW5nW10sIHNwbGl0OiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN0cmluZ3MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAoQXJyYXkuaXNBcnJheShzdHJpbmdzKSA/IHN0cmluZ3MgOiBbc3RyaW5nc10pLmZvckVhY2goc3RyaW5nID0+IHtcbiAgICAgICAgKHNwbGl0ID8gc3RyaW5nLnNwbGl0KC9bLXxffFxcc10rLykgOiBbc3RyaW5nXSkuZm9yRWFjaChzID0+IHtcbiAgICAgICAgICBzID0gcy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKCFzZWFyY2guaW5jbHVkZXMocykpIHtcbiAgICAgICAgICAgIHNlYXJjaC5wdXNoKHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgYWRkVG9TZWFyY2goc2hvcnRfbmFtZXMsIHRydWUpO1xuICAgIGFkZFRvU2VhcmNoKG5hbWUsIHRydWUpO1xuICAgIGFkZFRvU2VhcmNoKGtleXdvcmRzLCBmYWxzZSk7XG4gICAgYWRkVG9TZWFyY2goZW1vdGljb25zLCBmYWxzZSk7XG5cbiAgICByZXR1cm4gc2VhcmNoLmpvaW4oJywnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NoaWxkcmVuLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgY2F0ZWdvcmllcyxcbiAgRW1vamksXG4gIEVtb2ppQ2F0ZWdvcnksXG4gIEVtb2ppRGF0YSxcbiAgRW1vamlFdmVudCxcbn0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCB7IENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1vamlGcmVxdWVudGx5U2VydmljZSB9IGZyb20gJy4vZW1vamktZnJlcXVlbnRseS5zZXJ2aWNlJztcbmltcG9ydCB7IFByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBtZWFzdXJlU2Nyb2xsYmFyIH0gZnJvbSAnLi91dGlscyc7XG5cblxuXG5jb25zdCBJMThOOiBhbnkgPSB7XG4gIHNlYXJjaDogJ1NlYXJjaCcsXG4gIG5vdGZvdW5kOiAnTm8gRW1vamkgRm91bmQnLFxuICBjYXRlZ29yaWVzOiB7XG4gICAgc2VhcmNoOiAnU2VhcmNoIFJlc3VsdHMnLFxuICAgIHJlY2VudDogJ0ZyZXF1ZW50bHkgVXNlZCcsXG4gICAgcGVvcGxlOiAnU21pbGV5cyAmIFBlb3BsZScsXG4gICAgbmF0dXJlOiAnQW5pbWFscyAmIE5hdHVyZScsXG4gICAgZm9vZHM6ICdGb29kICYgRHJpbmsnLFxuICAgIGFjdGl2aXR5OiAnQWN0aXZpdHknLFxuICAgIHBsYWNlczogJ1RyYXZlbCAmIFBsYWNlcycsXG4gICAgb2JqZWN0czogJ09iamVjdHMnLFxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcbiAgICBmbGFnczogJ0ZsYWdzJyxcbiAgICBjdXN0b206ICdDdXN0b20nLFxuICB9LFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktbWFydCcsXG4gIHRlbXBsYXRlOiBgPGRpdlxuICBbc3R5bGUud2lkdGgucHhdPVwicGVyTGluZSAqIChlbW9qaVNpemUgKyAxMikgKyAxMiArIDIgKyBtZWFzdXJlU2Nyb2xsYmFyXCJcbiAgW25nU3R5bGVdPVwic3R5bGVcIlxuICBjbGFzcz1cImVtb2ppLW1hcnRcIj5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyXCI+XG4gICAgPGVtb2ppLW1hcnQtYW5jaG9yc1xuICAgICAgW2NhdGVnb3JpZXNdPVwiY2F0ZWdvcmllc1wiXG4gICAgICAoYW5jaG9yQ2xpY2spPVwiaGFuZGxlQW5jaG9yQ2xpY2soJGV2ZW50KVwiXG4gICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkXCJcbiAgICAgIFtpMThuXT1cImkxOG5cIlxuICAgID5cbiAgICA8L2Vtb2ppLW1hcnQtYW5jaG9ycz5cbiAgPC9kaXY+XG4gIDxlbW9qaS1zZWFyY2hcbiAgICAjc2VhcmNoUmVmXG4gICAgW2kxOG5dPVwiaTE4blwiXG4gICAgKHNlYXJjaCk9XCJoYW5kbGVTZWFyY2goJGV2ZW50KVwiXG4gICAgKGVudGVyS2V5KT1cImhhbmRsZUVudGVyS2V5KCRldmVudClcIlxuICAgIFtpbmNsdWRlXT1cImluY2x1ZGVcIlxuICAgIFtleGNsdWRlXT1cImV4Y2x1ZGVcIlxuICAgIFtjdXN0b21dPVwiY3VzdG9tXCJcbiAgICBbYXV0b0ZvY3VzXT1cImF1dG9Gb2N1c1wiXG4gICAgW2Vtb2ppc1RvU2hvd0ZpbHRlcl09XCJlbW9qaXNUb1Nob3dGaWx0ZXJcIlxuICA+XG4gIDwvZW1vamktc2VhcmNoPlxuICA8ZGl2XG4gICAgI3Njcm9sbFJlZlxuICAgIGNsYXNzPVwiZW1vamktbWFydC1zY3JvbGxcIlxuICAgIChzY3JvbGwpPVwiaGFuZGxlU2Nyb2xsKClcIlxuICA+XG4gICAgPGRpdiBlbW9qaS1jYXRlZ29yeVxuICAgICAgKm5nRm9yPVwibGV0IGNhdGVnb3J5IG9mIGFjdGl2ZUNhdGVnb3JpZXM7IGxldCBpZHggPSBpbmRleDsgdHJhY2tCeTogY2F0ZWdvcnlUcmFja1wiXG4gICAgICAjY2F0ZWdvcnlSZWZcbiAgICAgIFtpZF09XCJjYXRlZ29yeS5pZFwiXG4gICAgICBbbmFtZV09XCJjYXRlZ29yeS5uYW1lXCJcbiAgICAgIFtlbW9qaXNdPVwiY2F0ZWdvcnkuZW1vamlzXCJcbiAgICAgIFtwZXJMaW5lXT1cInBlckxpbmVcIlxuICAgICAgW25hdGl2ZV09XCJuYXRpdmVcIlxuICAgICAgW2hhc1N0aWNreVBvc2l0aW9uXT1cIm5hdGl2ZVwiXG4gICAgICBbaTE4bl09XCJpMThuXCJcbiAgICAgIFtoaWRlT2Jzb2xldGVdPVwiaGlkZU9ic29sZXRlXCJcbiAgICAgIFtjdXN0b21dPVwiY2F0ZWdvcnkuaWQgPT0gUkVDRU5UX0NBVEVHT1JZLmlkID8gQ1VTVE9NX0NBVEVHT1JZLmVtb2ppcyA6IHVuZGVmaW5lZFwiXG4gICAgICBbcmVjZW50XT1cImNhdGVnb3J5LmlkID09IFJFQ0VOVF9DQVRFR09SWS5pZCA/IHJlY2VudCA6IHVuZGVmaW5lZFwiXG5cbiAgICAgIFtlbW9qaU5hdGl2ZV09XCJuYXRpdmVcIlxuICAgICAgW2Vtb2ppU2tpbl09XCJza2luXCJcbiAgICAgIFtlbW9qaVNpemVdPVwiZW1vamlTaXplXCJcbiAgICAgIFtlbW9qaVNldF09XCJzZXRcIlxuICAgICAgW2Vtb2ppU2hlZXRTaXplXT1cInNoZWV0U2l6ZVwiXG4gICAgICBbZW1vamlGb3JjZVNpemVdPVwibmF0aXZlXCJcbiAgICAgIFtlbW9qaVRvb2x0aXBdPVwiZW1vamlUb29sdGlwXCJcbiAgICAgIChlbW9qaU92ZXIpPVwiaGFuZGxlRW1vamlPdmVyKCRldmVudClcIlxuICAgICAgKGVtb2ppTGVhdmUpPVwiaGFuZGxlRW1vamlMZWF2ZSgkZXZlbnQpXCJcbiAgICAgIChlbW9qaUNsaWNrKT1cImhhbmRsZUVtb2ppQ2xpY2soJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvZGl2PlxuXG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhclwiICpuZ0lmPVwic2hvd1ByZXZpZXdcIj5cbiAgPGVtb2ppLXByZXZpZXdcbiAgICAjcHJldmlld1JlZlxuICAgIFt0aXRsZV09XCJ0aXRsZVwiXG4gICAgW2Vtb2ppXT1cInByZXZpZXdFbW9qaVwiXG4gICAgW2lkbGVFbW9qaV09XCJlbW9qaVwiXG5cbiAgICBbZW1vamlOYXRpdmVdPVwibmF0aXZlXCJcbiAgICBbZW1vamlTaXplXT1cIjM4XCJcbiAgICBbZW1vamlTa2luXT1cInNraW5cIlxuICAgIFtlbW9qaVNldF09XCJzZXRcIlxuICAgIFtlbW9qaVNoZWV0U2l6ZV09XCJzaGVldFNpemVcIlxuICAgIFtlbW9qaUJhY2tncm91bmRJbWFnZUZuXT1cImJhY2tncm91bmRJbWFnZUZuXCJcbiAgICAoc2tpbkNoYW5nZSk9XCJoYW5kbGVTa2luQ2hhbmdlKCRldmVudClcIlxuICA+PC9lbW9qaS1wcmV2aWV3PlxuPC9kaXY+XG5gLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHBlckxpbmUgPSA5O1xuICBASW5wdXQoKSBpMThuOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgc3R5bGU6IGFueSA9IHt9O1xuICBASW5wdXQoKSB0aXRsZSA9ICdFbW9qaSBNYXJ0w6LChMKiJztcbiAgQElucHV0KCkgZW1vamkgPSAnZGVwYXJ0bWVudF9zdG9yZSc7XG4gIEBJbnB1dCgpIGNvbG9yID0gJyNhZTY1YzUnO1xuICBASW5wdXQoKSBoaWRlT2Jzb2xldGUgPSB0cnVlO1xuICAvKiogYWxsIGNhdGVnb3JpZXMgc2hvd24gKi9cbiAgQElucHV0KCkgY2F0ZWdvcmllczogRW1vamlDYXRlZ29yeVtdID0gW107XG4gIC8qKiB1c2VkIHRvIHRlbXBvcmFyaWx5IGRyYXcgY2F0ZWdvcmllcyAqL1xuICBASW5wdXQoKSBhY3RpdmVDYXRlZ29yaWVzOiBFbW9qaUNhdGVnb3J5W10gPSBbXTtcbiAgQElucHV0KCkgc2V0OiBFbW9qaVsnc2V0J10gPSAnYXBwbGUnO1xuICBASW5wdXQoKSBza2luOiBFbW9qaVsnc2tpbiddID0gMTtcbiAgQElucHV0KCkgbmF0aXZlOiBFbW9qaVsnbmF0aXZlJ10gPSBmYWxzZTtcbiAgQElucHV0KCkgZW1vamlTaXplOiBFbW9qaVsnc2l6ZSddID0gMjQ7XG4gIEBJbnB1dCgpIHNoZWV0U2l6ZTogRW1vamlbJ3NoZWV0U2l6ZSddID0gNjQ7XG4gIEBJbnB1dCgpIGVtb2ppc1RvU2hvd0ZpbHRlcj86ICh4OiBzdHJpbmcpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dQcmV2aWV3ID0gdHJ1ZTtcbiAgQElucHV0KCkgZW1vamlUb29sdGlwID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b206IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGhpZGVSZWNlbnQgPSB0cnVlO1xuICBASW5wdXQoKSBpbmNsdWRlPzogc3RyaW5nW107XG4gIEBJbnB1dCgpIGV4Y2x1ZGU/OiBzdHJpbmdbXTtcbiAgQE91dHB1dCgpIGVtb2ppQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVtb2ppU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbFJlZicpIHByaXZhdGUgc2Nyb2xsUmVmPzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncHJldmlld1JlZicpIHByaXZhdGUgcHJldmlld1JlZj86IFByZXZpZXdDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaFJlZicpIHByaXZhdGUgc2VhcmNoUmVmPzogU2VhcmNoQ29tcG9uZW50O1xuICBAVmlld0NoaWxkcmVuKCdjYXRlZ29yeVJlZicpXG4gIHByaXZhdGUgY2F0ZWdvcnlSZWZzPzogUXVlcnlMaXN0PENhdGVnb3J5Q29tcG9uZW50PjtcbiAgc2Nyb2xsSGVpZ2h0ID0gMDtcbiAgY2xpZW50SGVpZ2h0ID0gMDtcbiAgc2VsZWN0ZWQ/OiBzdHJpbmc7XG4gIG5leHRTY3JvbGw/OiBzdHJpbmc7XG4gIHNjcm9sbFRvcD86IG51bWJlcjtcbiAgZmlyc3RSZW5kZXIgPSB0cnVlO1xuICByZWNlbnQ/OiBzdHJpbmdbXTtcbiAgcHJldmlld0Vtb2ppOiBhbnk7XG4gIGxlYXZlVGltZW91dDogYW55O1xuICBOQU1FU1BBQ0UgPSAnZW1vamktbWFydCc7XG4gIG1lYXN1cmVTY3JvbGxiYXIgPSAwO1xuICBSRUNFTlRfQ0FURUdPUlk6IEVtb2ppQ2F0ZWdvcnkgPSB7XG4gICAgaWQ6ICdyZWNlbnQnLFxuICAgIG5hbWU6ICdSZWNlbnQnLFxuICAgIGVtb2ppczogbnVsbCxcbiAgfTtcbiAgU0VBUkNIX0NBVEVHT1JZOiBFbW9qaUNhdGVnb3J5ID0ge1xuICAgIGlkOiAnc2VhcmNoJyxcbiAgICBuYW1lOiAnU2VhcmNoJyxcbiAgICBlbW9qaXM6IG51bGwsXG4gICAgYW5jaG9yOiBmYWxzZSxcbiAgfTtcbiAgQ1VTVE9NX0NBVEVHT1JZOiBFbW9qaUNhdGVnb3J5ID0ge1xuICAgIGlkOiAnY3VzdG9tJyxcbiAgICBuYW1lOiAnQ3VzdG9tJyxcbiAgICBlbW9qaXM6IFtdLFxuICB9O1xuXG4gIEBJbnB1dCgpXG4gIGJhY2tncm91bmRJbWFnZUZuOiBFbW9qaVsnYmFja2dyb3VuZEltYWdlRm4nXSA9IChcbiAgICBzZXQ6IHN0cmluZyxcbiAgICBzaGVldFNpemU6IG51bWJlcixcbiAgKSA9PlxuICAgIGBodHRwczovL3VucGtnLmNvbS9lbW9qaS1kYXRhc291cmNlLSR7dGhpcy5zZXR9QDQuMC40L2ltZy8ke1xuICAgICAgdGhpcy5zZXRcbiAgICB9L3NoZWV0cy0yNTYvJHt0aGlzLnNoZWV0U2l6ZX0ucG5nYFxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGZyZXF1ZW50bHk6IEVtb2ppRnJlcXVlbnRseVNlcnZpY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBtZWFzdXJlIHNjcm9sbFxuICAgIHRoaXMubWVhc3VyZVNjcm9sbGJhciA9IG1lYXN1cmVTY3JvbGxiYXIoKTtcblxuICAgIHRoaXMuaTE4biA9IHsgLi4uSTE4TiwgLi4udGhpcy5pMThuIH07XG4gICAgdGhpcy5pMThuLmNhdGVnb3JpZXMgPSB7IC4uLkkxOE4uY2F0ZWdvcmllcywgLi4udGhpcy5pMThuLmNhdGVnb3JpZXMgfTtcbiAgICB0aGlzLnNraW4gPVxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0uc2tpbmApIHx8ICdudWxsJykgfHxcbiAgICAgIHRoaXMuc2tpbjtcblxuICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPSBbLi4uY2F0ZWdvcmllc107XG5cbiAgICBpZiAodGhpcy5jdXN0b20ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5DVVNUT01fQ0FURUdPUlkuZW1vamlzID0gdGhpcy5jdXN0b20ubWFwKGVtb2ppID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5lbW9qaSxcbiAgICAgICAgICAvLyBgPENhdGVnb3J5IC8+YCBleHBlY3RzIGVtb2ppIHRvIGhhdmUgYW4gYGlkYC5cbiAgICAgICAgICBpZDogZW1vamkuc2hvcnRfbmFtZXNbMF0sXG4gICAgICAgICAgY3VzdG9tOiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGFsbENhdGVnb3JpZXMucHVzaCh0aGlzLkNVU1RPTV9DQVRFR09SWSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW5jbHVkZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhbGxDYXRlZ29yaWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaW5jbHVkZSEuaW5kZXhPZihhLmlkKSA+IHRoaXMuaW5jbHVkZSEuaW5kZXhPZihiLmlkKSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgYWxsQ2F0ZWdvcmllcykge1xuICAgICAgY29uc3QgaXNJbmNsdWRlZCA9XG4gICAgICAgIHRoaXMuaW5jbHVkZSAmJiB0aGlzLmluY2x1ZGUubGVuZ3RoXG4gICAgICAgICAgPyB0aGlzLmluY2x1ZGUuaW5kZXhPZihjYXRlZ29yeS5pZCkgPiAtMVxuICAgICAgICAgIDogdHJ1ZTtcbiAgICAgIGNvbnN0IGlzRXhjbHVkZWQgPVxuICAgICAgICB0aGlzLmV4Y2x1ZGUgJiYgdGhpcy5leGNsdWRlLmxlbmd0aFxuICAgICAgICAgID8gdGhpcy5leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgICA6IGZhbHNlO1xuICAgICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmVtb2ppc1RvU2hvd0ZpbHRlcikge1xuICAgICAgICBjb25zdCBuZXdFbW9qaXMgPSBbXTtcblxuICAgICAgICBjb25zdCB7IGVtb2ppcyB9ID0gY2F0ZWdvcnk7XG4gICAgICAgIGZvciAobGV0IGVtb2ppSW5kZXggPSAwOyBlbW9qaUluZGV4IDwgZW1vamlzIS5sZW5ndGg7IGVtb2ppSW5kZXgrKykge1xuICAgICAgICAgIGNvbnN0IGVtb2ppID0gZW1vamlzIVtlbW9qaUluZGV4XTtcbiAgICAgICAgICBpZiAodGhpcy5lbW9qaXNUb1Nob3dGaWx0ZXIoZW1vamkpKSB7XG4gICAgICAgICAgICBuZXdFbW9qaXMucHVzaChlbW9qaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0Vtb2ppcy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBuZXdDYXRlZ29yeSA9IHtcbiAgICAgICAgICAgIGVtb2ppczogbmV3RW1vamlzLFxuICAgICAgICAgICAgbmFtZTogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2gobmV3Q2F0ZWdvcnkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5jbHVkZVJlY2VudCA9XG4gICAgICB0aGlzLmluY2x1ZGUgJiYgdGhpcy5pbmNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuaW5jbHVkZS5pbmRleE9mKHRoaXMuUkVDRU5UX0NBVEVHT1JZLmlkKSA+IC0xXG4gICAgICAgIDogdHJ1ZTtcbiAgICBjb25zdCBleGNsdWRlUmVjZW50ID1cbiAgICAgIHRoaXMuZXhjbHVkZSAmJiB0aGlzLmV4Y2x1ZGUubGVuZ3RoXG4gICAgICAgID8gdGhpcy5leGNsdWRlLmluZGV4T2YodGhpcy5SRUNFTlRfQ0FURUdPUlkuaWQpID4gLTFcbiAgICAgICAgOiBmYWxzZTtcbiAgICBpZiAoaW5jbHVkZVJlY2VudCAmJiAhZXhjbHVkZVJlY2VudCkge1xuICAgICAgdGhpcy5oaWRlUmVjZW50ID0gZmFsc2U7XG4gICAgICB0aGlzLmNhdGVnb3JpZXMudW5zaGlmdCh0aGlzLlJFQ0VOVF9DQVRFR09SWSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2F0ZWdvcmllc1swXSkge1xuICAgICAgdGhpcy5jYXRlZ29yaWVzWzBdLmZpcnN0ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmNhdGVnb3JpZXMudW5zaGlmdCh0aGlzLlNFQVJDSF9DQVRFR09SWSk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuY2F0ZWdvcmllcy5maWx0ZXIoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkuZmlyc3QpWzBdLm5hbWU7XG5cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXMuc2xpY2UoMCwgMyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2ZUNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpZXM7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHRoaXMudXBkYXRlQ2F0ZWdvcmllc1NpemUoKTtcbiAgICB9KTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy51cGRhdGVDYXRlZ29yaWVzU2l6ZSgpO1xuICB9XG4gIHVwZGF0ZUNhdGVnb3JpZXNTaXplKCkge1xuICAgIHRoaXMuY2F0ZWdvcnlSZWZzIS5mb3JFYWNoKGNvbXBvbmVudCA9PiBjb21wb25lbnQubWVtb2l6ZVNpemUoKSk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxSZWYpIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2Nyb2xsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnNjcm9sbEhlaWdodCA9IHRhcmdldC5zY3JvbGxIZWlnaHQ7XG4gICAgICB0aGlzLmNsaWVudEhlaWdodCA9IHRhcmdldC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICB9XG4gIGhhbmRsZUFuY2hvckNsaWNrKCRldmVudDogeyBjYXRlZ29yeTogRW1vamlDYXRlZ29yeTsgaW5kZXg6IG51bWJlciB9KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jYXRlZ29yeVJlZnMhLmZpbmQobiA9PiBuLmlkID09PSAkZXZlbnQuY2F0ZWdvcnkuaWQpO1xuXG4gICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcykge1xuICAgICAgdGhpcy5oYW5kbGVTZWFyY2gobnVsbCk7XG4gICAgICB0aGlzLnNlYXJjaFJlZiEuY2xlYXIoKTtcbiAgICB9XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgbGV0IHsgdG9wIH0gPSBjb21wb25lbnQ7XG5cbiAgICAgIGlmICgkZXZlbnQuY2F0ZWdvcnkuZmlyc3QpIHtcbiAgICAgICAgdG9wID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvcCArPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5zY3JvbGxSZWYhLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkID0gJGV2ZW50LmNhdGVnb3J5Lm5hbWU7XG4gICAgdGhpcy5uZXh0U2Nyb2xsID0gJGV2ZW50LmNhdGVnb3J5Lm5hbWU7XG4gIH1cbiAgY2F0ZWdvcnlUcmFjayhpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpIHtcbiAgICByZXR1cm4gaXRlbS5pZDtcbiAgfVxuICBoYW5kbGVTY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMubmV4dFNjcm9sbCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMubmV4dFNjcm9sbDtcbiAgICAgIHRoaXMubmV4dFNjcm9sbCA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNjcm9sbFJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBhY3RpdmVDYXRlZ29yeSA9IG51bGw7XG4gICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcykge1xuICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLlNFQVJDSF9DQVRFR09SWTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5zY3JvbGxSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgIC8vIGNoZWNrIHNjcm9sbCBpcyBub3QgYXQgYm90dG9tXG4gICAgICBpZiAodGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAvLyBoaXQgdGhlIFRPUFxuICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllcy5maW5kKG4gPT4gbi5maXJzdCA9PT0gdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHRhcmdldC5zY3JvbGxIZWlnaHQgLSB0YXJnZXQuc2Nyb2xsVG9wID09PSB0aGlzLmNsaWVudEhlaWdodCkge1xuICAgICAgICAvLyBzY3JvbGxlZCB0byBib3R0b20gYWN0aXZhdGUgbGFzdCBjYXRlZ29yeVxuICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllc1t0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIC0gMV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzY3JvbGxpbmdcbiAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiB0aGlzLmNhdGVnb3JpZXMpIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNhdGVnb3J5UmVmcyEuZmluZChuID0+IG4uaWQgPT09IGNhdGVnb3J5LmlkKTtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBjb21wb25lbnQhLmhhbmRsZVNjcm9sbCh0YXJnZXQuc2Nyb2xsVG9wKTtcbiAgICAgICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IGNhdGVnb3J5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHRhcmdldC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIGlmIChhY3RpdmVDYXRlZ29yeSkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGFjdGl2ZUNhdGVnb3J5Lm5hbWU7XG4gICAgfVxuICB9XG4gIGhhbmRsZVNlYXJjaCgkZW1vamlzOiBhbnkpIHtcbiAgICB0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMgPSAkZW1vamlzO1xuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHRoaXMuY2F0ZWdvcnlSZWZzIS50b0FycmF5KCkpIHtcbiAgICAgIGlmIChjb21wb25lbnQubmFtZSA9PT0gJ1NlYXJjaCcpIHtcbiAgICAgICAgY29tcG9uZW50LmVtb2ppcyA9ICRlbW9qaXM7XG4gICAgICAgIGNvbXBvbmVudC51cGRhdGVEaXNwbGF5KCRlbW9qaXMgPyAnaW5oZXJpdCcgOiAnbm9uZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnVwZGF0ZURpc3BsYXkoJGVtb2ppcyA/ICdub25lJyA6ICdpbmhlcml0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIHRoaXMuc2Nyb2xsUmVmIS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgfVxuXG4gIGhhbmRsZUVudGVyS2V5KCRldmVudDogRXZlbnQsIGVtb2ppPzogRW1vamlEYXRhKSB7XG4gICAgaWYgKCFlbW9qaSkge1xuICAgICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcyAhPT0gbnVsbCAmJiB0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgIGVtb2ppID0gdGhpcy5TRUFSQ0hfQ0FURUdPUlkuZW1vamlzWzBdO1xuICAgICAgICBpZiAoZW1vamkpIHtcbiAgICAgICAgICB0aGlzLmVtb2ppU2VsZWN0LmVtaXQoeyAkZXZlbnQsIGVtb2ppIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy5oaWRlUmVjZW50ICYmICF0aGlzLnJlY2VudCkge1xuICAgICAgdGhpcy5mcmVxdWVudGx5LmFkZCgoPEVtb2ppRGF0YT5lbW9qaSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY2F0ZWdvcnlSZWZzIS50b0FycmF5KClbMV07XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgY29uc3QgbWF4TWFyZ2luID0gY29tcG9uZW50Lm1heE1hcmdpbjtcbiAgICAgIGNvbXBvbmVudC5lbW9qaXMgPSB0aGlzLmZyZXF1ZW50bHkuZ2V0KG1heE1hcmdpbik7XG4gICAgICBjb21wb25lbnQucmVmLm1hcmtGb3JDaGVjaygpO1xuXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbFJlZikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQubWVtb2l6ZVNpemUoKTtcbiAgICAgICAgaWYgKG1heE1hcmdpbiA9PT0gY29tcG9uZW50Lm1heE1hcmdpbikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlQ2F0ZWdvcmllc1NpemUoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcblxuICAgICAgICBpZiAodGhpcy5TRUFSQ0hfQ0FURUdPUlkuZW1vamlzKSB7XG4gICAgICAgICAgY29tcG9uZW50LnVwZGF0ZURpc3BsYXkoJ25vbmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIGhhbmRsZUVtb2ppT3ZlcigkZXZlbnQ6IEVtb2ppRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuc2hvd1ByZXZpZXcgfHwgIXRoaXMucHJldmlld1JlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVtb2ppRGF0YSA9IHRoaXMuQ1VTVE9NX0NBVEVHT1JZLmVtb2ppcyEuZmluZChcbiAgICAgIGN1c3RvbUVtb2ppID0+IGN1c3RvbUVtb2ppLmlkID09PSAkZXZlbnQuZW1vamkuaWQsXG4gICAgKTtcbiAgICBpZiAoZW1vamlEYXRhKSB7XG4gICAgICAkZXZlbnQuZW1vamkgPSB7IC4uLmVtb2ppRGF0YSB9O1xuICAgIH1cblxuICAgIHRoaXMucHJldmlld0Vtb2ppID0gJGV2ZW50LmVtb2ppO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmxlYXZlVGltZW91dCk7XG4gIH1cbiAgaGFuZGxlRW1vamlMZWF2ZSgkZXZlbnQ6IEVtb2ppRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuc2hvd1ByZXZpZXcgfHwgIXRoaXMucHJldmlld1JlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubGVhdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByZXZpZXdFbW9qaSA9IG51bGw7XG4gICAgICB0aGlzLnByZXZpZXdSZWYhLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAxNik7XG4gIH1cbiAgaGFuZGxlRW1vamlDbGljaygkZXZlbnQ6IEVtb2ppRXZlbnQpIHtcbiAgICB0aGlzLmVtb2ppQ2xpY2suZW1pdCgkZXZlbnQpO1xuICAgIHRoaXMuZW1vamlTZWxlY3QuZW1pdCgkZXZlbnQpO1xuICAgIHRoaXMuaGFuZGxlRW50ZXJLZXkoJGV2ZW50LiRldmVudCwgJGV2ZW50LmVtb2ppKTtcbiAgfVxuICBoYW5kbGVTa2luQ2hhbmdlKHNraW46IEVtb2ppWydza2luJ10pIHtcbiAgICB0aGlzLnNraW4gPSBza2luO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5za2luYCwgU3RyaW5nKHNraW4pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamlEYXRhLCBFbW9qaVNlcnZpY2UgfSBmcm9tICdAY3RybC9uZ3gtZW1vamktbWFydC9uZ3gtZW1vamknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1wcmV2aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlld1wiICpuZ0lmPVwiZW1vamkgJiYgZW1vamlEYXRhXCI+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxuICAgICAgPG5neC1lbW9qaSBbZW1vamldPVwiZW1vamlcIiBbc2l6ZV09XCIzOFwiXG4gICAgICAgIFtuYXRpdmVdPVwiZW1vamlOYXRpdmVcIlxuICAgICAgICBbc2tpbl09XCJlbW9qaVNraW5cIlxuICAgICAgICBbc2l6ZV09XCJlbW9qaVNpemVcIlxuICAgICAgICBbc2V0XT1cImVtb2ppU2V0XCJcbiAgICAgICAgW3NoZWV0U2l6ZV09XCJlbW9qaVNoZWV0U2l6ZVwiXG4gICAgICAgIFtiYWNrZ3JvdW5kSW1hZ2VGbl09XCJlbW9qaUJhY2tncm91bmRJbWFnZUZuXCI+XG4gICAgICA8L25neC1lbW9qaT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1uYW1lXCI+e3sgZW1vamlEYXRhLm5hbWUgfX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctc2hvcnRuYW1lc1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVcIiAqbmdGb3I9XCJsZXQgc2hvcnRfbmFtZSBvZiBlbW9qaURhdGEuc2hvcnRfbmFtZXNcIj5cbiAgICAgICAgICA6e3sgc2hvcnRfbmFtZSB9fTpcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW90aWNvblwiICpuZ0Zvcj1cImxldCBlbW90aWNvbiBvZiBsaXN0ZWRFbW90aWNvbnNcIj5cbiAgICAgICAgICB7eyBlbW90aWNvbiB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlld1wiICpuZ0lmPVwiIWVtb2ppXCI+XG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1lbW9qaVwiPlxuICAgICAgPG5neC1lbW9qaSAqbmdJZj1cImlkbGVFbW9qaSAmJiBpZGxlRW1vamkubGVuZ3RoXCJcbiAgICAgICAgW25hdGl2ZV09XCJlbW9qaU5hdGl2ZVwiXG4gICAgICAgIFtza2luXT1cImVtb2ppU2tpblwiXG4gICAgICAgIFtzZXRdPVwiZW1vamlTZXRcIlxuICAgICAgICBbZW1vamldPVwiaWRsZUVtb2ppXCJcbiAgICAgICAgW2JhY2tncm91bmRJbWFnZUZuXT1cImVtb2ppQmFja2dyb3VuZEltYWdlRm5cIlxuICAgICAgICBbc2l6ZV09XCIzOFwiPlxuICAgICAgPC9uZ3gtZW1vamk+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1za2luc1wiPlxuICAgICAgPGVtb2ppLXNraW5zIFtza2luXT1cImVtb2ppU2tpblwiIChjaGFuZ2UpPVwic2tpbkNoYW5nZS5lbWl0KCRldmVudClcIj5cbiAgICAgIDwvZW1vamktc2tpbnM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0aXRsZTogYW55O1xuICBASW5wdXQoKSBlbW9qaTogYW55O1xuICBASW5wdXQoKSBpZGxlRW1vamk6IGFueTtcbiAgQElucHV0KCkgZW1vamlOYXRpdmU6IGFueTtcbiAgQElucHV0KCkgZW1vamlTaXplOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppU2tpbjogYW55O1xuICBASW5wdXQoKSBlbW9qaVNldDogYW55O1xuICBASW5wdXQoKSBlbW9qaVNoZWV0U2l6ZTogYW55O1xuICBASW5wdXQoKSBlbW9qaUJhY2tncm91bmRJbWFnZUZuOiBhbnk7XG4gIEBPdXRwdXQoKSBza2luQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIGVtb2ppRGF0YTogUGFydGlhbDxFbW9qaURhdGE+ID0ge307XG4gIGxpc3RlZEVtb3RpY29ucz86IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgZW1vamlTZXJ2aWNlOiBFbW9qaVNlcnZpY2UsXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBpZiAoIXRoaXMuZW1vamkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbW9qaURhdGEgPSB0aGlzLmVtb2ppU2VydmljZS5nZXREYXRhKHRoaXMuZW1vamksIHRoaXMuZW1vamlTa2luLCB0aGlzLmVtb2ppU2V0KSE7XG4gICAgY29uc3Qga25vd25FbW90aWNvbnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgbGlzdGVkRW1vdGljb25zOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGVtb2l0Y29ucyA9IHRoaXMuZW1vamlEYXRhLmVtb3RpY29ucyB8fCBbXTtcbiAgICBlbW9pdGNvbnMuZm9yRWFjaCgoZW1vdGljb246IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGtub3duRW1vdGljb25zLmluZGV4T2YoZW1vdGljb24udG9Mb3dlckNhc2UoKSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGtub3duRW1vdGljb25zLnB1c2goZW1vdGljb24udG9Mb3dlckNhc2UoKSk7XG4gICAgICBsaXN0ZWRFbW90aWNvbnMucHVzaChlbW90aWNvbik7XG4gICAgfSk7XG4gICAgdGhpcy5saXN0ZWRFbW90aWNvbnMgPSBsaXN0ZWRFbW90aWNvbnM7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW1vamlTZWFyY2ggfSBmcm9tICcuL2Vtb2ppLXNlYXJjaC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktc2VhcmNoJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoXCI+XG4gICAgPGlucHV0ICNpbnB1dFJlZiB0eXBlPVwidGV4dFwiXG4gICAgICAoa2V5dXAuZW50ZXIpPVwiaGFuZGxlRW50ZXJLZXkoJGV2ZW50KVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiaTE4bi5zZWFyY2hcIiBbYXV0b2ZvY3VzXT1cImF1dG9Gb2N1c1wiXG4gICAgICBbKG5nTW9kZWwpXT1cInF1ZXJ5XCIgKG5nTW9kZWxDaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKClcIlxuICAgIC8+XG4gIDwvZGl2PlxuICBgLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG1heFJlc3VsdHMgPSA3NTtcbiAgQElucHV0KCkgYXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIGkxOG46IGFueTtcbiAgQElucHV0KCkgaW5jbHVkZTogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgZXhjbHVkZTogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgY3VzdG9tOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBlbW9qaXNUb1Nob3dGaWx0ZXI/OiAoeDogYW55KSA9PiBib29sZWFuO1xuICBAT3V0cHV0KCkgc2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlbnRlcktleSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKCdpbnB1dFJlZicpIHByaXZhdGUgaW5wdXRSZWY/OiBFbGVtZW50UmVmO1xuICBxdWVyeSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZW1vamlTZWFyY2g6IEVtb2ppU2VhcmNoKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMgJiYgdGhpcy5pbnB1dFJlZikge1xuICAgICAgdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIGNsZWFyKCkge1xuICAgIHRoaXMucXVlcnkgPSAnJztcbiAgfVxuICBoYW5kbGVFbnRlcktleSgkZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5lbnRlcktleS5lbWl0KCRldmVudCk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgaGFuZGxlQ2hhbmdlKCkge1xuICAgIHRoaXMuc2VhcmNoLmVtaXQoXG4gICAgICB0aGlzLmVtb2ppU2VhcmNoLnNlYXJjaChcbiAgICAgICAgdGhpcy5xdWVyeSxcbiAgICAgICAgdGhpcy5lbW9qaXNUb1Nob3dGaWx0ZXIsXG4gICAgICAgIHRoaXMubWF4UmVzdWx0cyxcbiAgICAgICAgdGhpcy5pbmNsdWRlLFxuICAgICAgICB0aGlzLmV4Y2x1ZGUsXG4gICAgICAgIHRoaXMuY3VzdG9tLFxuICAgICAgKSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbW9qaSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLXNraW5zJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlc1wiIFtjbGFzcy5lbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkXT1cIm9wZW5lZFwiPlxuICAgIDxzcGFuICpuZ0Zvcj1cImxldCBza2luVG9uZSBvZiBza2luVG9uZXNcIiBjbGFzcz1cImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hcIlxuICAgICAgW2NsYXNzLmVtb2ppLW1hcnQtc2tpbi1zd2F0Y2gtc2VsZWN0ZWRdPVwic2tpblRvbmUgPT09IHNraW5cIj5cbiAgICAgICAgPHNwYW4gKGNsaWNrKT1cInRoaXMuaGFuZGxlQ2xpY2soc2tpblRvbmUpXCJcbiAgICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS17eyBza2luVG9uZSB9fVwiXG4gICAgICAgID48L3NwYW4+XG4gICAgICA8L3NwYW4+XG4gIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIFNraW5Db21wb25lbnQge1xuICBASW5wdXQoKSBza2luPzogRW1vamlbJ3NraW4nXTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBvcGVuZWQgPSBmYWxzZTtcbiAgc2tpblRvbmVzID0gWzEsIDIsIDMsIDQsIDUsIDZdO1xuXG4gIHRvZ2dsZU9wZW4oKSB7XG4gICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG4gIH1cblxuICBoYW5kbGVDbGljayhza2luOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgaWYgKHNraW4gIT09IHRoaXMuc2tpbikge1xuICAgICAgdGhpcy5jaGFuZ2UuZW1pdChza2luKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEVtb2ppTW9kdWxlIH0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCB7IEFuY2hvcnNDb21wb25lbnQgfSBmcm9tICcuL2FuY2hvcnMuY29tcG9uZW50JztcbmltcG9ydCB7IENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRW1vamlGcmVxdWVudGx5U2VydmljZSB9IGZyb20gJy4vZW1vamktZnJlcXVlbnRseS5zZXJ2aWNlJztcbmltcG9ydCB7IEVtb2ppU2VhcmNoIH0gZnJvbSAnLi9lbW9qaS1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJldmlld0NvbXBvbmVudCB9IGZyb20gJy4vcHJldmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9zZWFyY2guY29tcG9uZW50JztcbmltcG9ydCB7IFNraW5Db21wb25lbnQgfSBmcm9tICcuL3NraW5zLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IGFueVtdID0gW1xuICBQaWNrZXJDb21wb25lbnQsXG4gIEFuY2hvcnNDb21wb25lbnQsXG4gIENhdGVnb3J5Q29tcG9uZW50LFxuICBTZWFyY2hDb21wb25lbnQsXG4gIFByZXZpZXdDb21wb25lbnQsXG4gIFNraW5Db21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgRW1vamlNb2R1bGVdLFxuICBleHBvcnRzOiBjb21wb25lbnRzLFxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXG4gIHByb3ZpZGVyczogW0Vtb2ppU2VhcmNoLCBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyTW9kdWxlIHt9XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiU1ZHcyIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiSW5wdXQiLCJPdXRwdXQiLCJJbmplY3RhYmxlIiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJFbW9qaVNlcnZpY2UiLCJWaWV3Q2hpbGQiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiY2F0ZWdvcmllcyIsIlZpZXdDaGlsZHJlbiIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiRm9ybXNNb2R1bGUiLCJF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