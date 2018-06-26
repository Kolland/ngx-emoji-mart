import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Injectable, ChangeDetectorRef, ViewChild, ViewChildren, NgModule } from '@angular/core';
import { EmojiService, categories, EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/* tslint:disable max-line-length */
const /** @type {?} */ svgs = {
    activity: `M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m10 11h-5c.3-2.5 1.3-4.8 2-6.1a10 10 0 0 1 3 6.1m-9 0V2a10 10 0 0 1 4.4 1.6A18 18 0 0 0 15 11h-2zm-2 0H9a18 18 0 0 0-2.4-7.4A10 10 0 0 1 11 2.1V11zm0 2v9a10 10 0 0 1-4.4-1.6A18 18 0 0 0 9 13h2zm4 0a18 18 0 0 0 2.4 7.4 10 10 0 0 1-4.4 1.5V13h2zM5 4.9c.7 1.3 1.7 3.6 2 6.1H2a10 10 0 0 1 3-6.1M2 13h5c-.3 2.5-1.3 4.8-2 6.1A10 10 0 0 1 2 13m17 6.1c-.7-1.3-1.7-3.6-2-6.1h5a10 10 0 0 1-3 6.1`,
    custom: `M10 1h3v21h-3zm10.186 4l1.5 2.598L3.5 18.098 2 15.5zM2 7.598L3.5 5l18.186 10.5-1.5 2.598z`,
    flags: `M0 0l6 24h2L2 0zm21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.6 3h7.8l2 8H8.6l-2-8zm8.8 10l-2.9 1.9-.4-1.9h3.3zm3.6 0l-1.5-6h2l2 8H16l3-2z`,
    foods: `M17 5c-1.8 0-2.9.4-3.7 1 .5-1.3 1.8-3 4.7-3a1 1 0 0 0 0-2c-3 0-4.6 1.3-5.5 2.5l-.2.2c-.6-1.9-1.5-3.7-3-3.7C8.5 0 7.7.3 7 1c-2 1.5-1.7 2.9-.5 4C3.6 5.2 0 7.4 0 13c0 4.6 5 11 9 11 2 0 2.4-.5 3-1 .6.5 1 1 3 1 4 0 9-6.4 9-11 0-6-4-8-7-8M8.2 2.5c.7-.5 1-.5 1-.5.4.2 1 1.4 1.4 3-1.6-.6-2.8-1.3-3-1.8l.6-.7M15 22c-1 0-1.2-.1-1.6-.4l-.1-.2a2 2 0 0 0-2.6 0l-.1.2c-.4.3-.5.4-1.6.4-2.8 0-7-5.4-7-9 0-6 4.5-6 5-6 2 0 2.5.4 3.4 1.2l.3.3a2 2 0 0 0 2.6 0l.3-.3c1-.8 1.5-1.2 3.4-1.2.5 0 5 .1 5 6 0 3.6-4.2 9-7 9`,
    nature: `M15.5 8a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m10.43-8h-.02c-.97 0-2.14.79-3.02 1.5A13.88 13.88 0 0 0 12 .99c-1.28 0-2.62.13-3.87.51C7.24.8 6.07 0 5.09 0h-.02C3.35 0 .07 2.67 0 7.03c-.04 2.47.28 4.23 1.04 5 .26.27.88.69 1.3.9.19 3.17.92 5.23 2.53 6.37.9.64 2.19.95 3.2 1.1-.03.2-.07.4-.07.6 0 1.77 2.35 3 4 3s4-1.23 4-3c0-.2-.04-.4-.07-.59 2.57-.38 5.43-1.87 5.92-7.58.4-.22.89-.57 1.1-.8.77-.76 1.09-2.52 1.05-5C23.93 2.67 20.65 0 18.93 0M3.23 9.13c-.24.29-.84 1.16-.9 1.24A9.67 9.67 0 0 1 2 7.08c.05-3.28 2.48-4.97 3.1-5.03.25.02.72.27 1.26.65A7.95 7.95 0 0 0 4 7.82c-.14.55-.4.86-.79 1.31M12 22c-.9 0-1.95-.7-2-1 0-.65.47-1.24 1-1.6v.6a1 1 0 1 0 2 0v-.6c.52.36 1 .95 1 1.6-.05.3-1.1 1-2 1m3-3.48v.02a4.75 4.75 0 0 0-1.26-1.02c1.09-.52 2.24-1.33 2.24-2.22 0-1.84-1.78-2.2-3.98-2.2s-3.98.36-3.98 2.2c0 .89 1.15 1.7 2.24 2.22A4.8 4.8 0 0 0 9 18.54v-.03a6.1 6.1 0 0 1-2.97-.84c-1.3-.92-1.84-3.04-1.86-6.48l.03-.04c.5-.82 1.49-1.45 1.8-3.1C6 6 7.36 4.42 8.36 3.53c1.01-.35 2.2-.53 3.59-.53 1.45 0 2.68.2 3.73.57 1 .9 2.32 2.46 2.32 4.48.31 1.65 1.3 2.27 1.8 3.1l.1.18c-.06 5.97-1.95 7.01-4.9 7.19m6.63-8.2l-.11-.2a7.59 7.59 0 0 0-.74-.98 3.02 3.02 0 0 1-.79-1.32 7.93 7.93 0 0 0-2.35-5.12c.53-.38 1-.63 1.26-.65.64.07 3.05 1.77 3.1 5.03.02 1.81-.35 3.22-.37 3.24`,
    objects: `M12 0a9 9 0 0 0-5 16.5V21s2 3 5 3 5-3 5-3v-4.5A9 9 0 0 0 12 0zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14zM9 17.5a9 9 0 0 0 6 0v.8a7 7 0 0 1-3 .7 7 7 0 0 1-3-.7v-.8zm.2 3a8.9 8.9 0 0 0 2.8.5c1 0 1.9-.2 2.8-.5-.6.7-1.6 1.5-2.8 1.5-1.1 0-2.1-.8-2.8-1.5zm5.5-8.1c-.8 0-1.1-.8-1.5-1.8-.5-1-.7-1.5-1.2-1.5s-.8.5-1.3 1.5c-.4 1-.8 1.8-1.6 1.8h-.3c-.5-.2-.8-.7-1.3-1.8l-.2-1A3 3 0 0 0 7 9a1 1 0 0 1 0-2c1.7 0 2 1.4 2.2 2.1.5-1 1.3-2 2.8-2 1.5 0 2.3 1.1 2.7 2.1.2-.8.6-2.2 2.3-2.2a1 1 0 1 1 0 2c-.2 0-.3.5-.3.7a6.5 6.5 0 0 1-.3 1c-.5 1-.8 1.7-1.7 1.7`,
    people: `M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20M8 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-.8 8c-.7 1.2-1.8 2-3.3 2-1.5 0-2.7-.8-3.4-2H15m3-2H6a6 6 0 1 0 12 0`,
    places: `M6.5 12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m11-3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5m5-5.5l-1-.4-.1-.1h.6c.6 0 1-.4 1-1 0-1-.9-2-2-2h-.6l-.8-1.7A3 3 0 0 0 16.8 2H7.2a3 3 0 0 0-2.8 2.3L3.6 6H3a2 2 0 0 0-2 2c0 .6.4 1 1 1h.6v.1l-1 .4a2 2 0 0 0-1.4 2l.7 7.6a1 1 0 0 0 1 .9H3v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h6v1c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-1h1.1a1 1 0 0 0 1-.9l.7-7.5a2 2 0 0 0-1.3-2.1M6.3 4.9c.1-.5.5-.9 1-.9h9.5c.4 0 .8.4 1 .9L19.2 9H4.7l1.6-4.1zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.2-3H2.8l-.7-6.6.9-.4h18l.9.4-.7 6.6z`,
    recent: `M13 4h-2v7H9v2h2v2h2v-2h4v-2h-4zm-1-4a12 12 0 1 0 0 24 12 12 0 0 0 0-24m0 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20`,
    symbols: `M0 0h11v2H0zm4 11h3V6h4V4H0v2h4zm11.5 6a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-2.99a.5.5 0 0 1 0 .99c-.28 0-.5-.22-.5-.5s.22-.49.5-.49m6 5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m0 2.99a.5.5 0 0 1-.5-.5.5.5 0 0 1 1 .01.5.5 0 0 1-.5.49m.5-9l-9 9 1.51 1.5 9-9zm-5-2c2.2 0 4-1.12 4-2.5V2s.98-.16 1.5.95C23 4.05 23 6 23 6s1-1.12 1-3.13C24-.02 21 0 21 0h-2v6.35A5.85 5.85 0 0 0 17 6c-2.2 0-4 1.12-4 2.5s1.8 2.5 4 2.5m-6.7 9.48L8.82 18.9a47.54 47.54 0 0 1-1.44 1.13c-.3-.3-.99-1.02-2.04-2.19.9-.83 1.47-1.46 1.72-1.89s.38-.87.38-1.33c0-.6-.27-1.18-.82-1.76-.54-.58-1.33-.87-2.35-.87-1 0-1.79.29-2.34.87-.56.6-.83 1.18-.83 1.79 0 .81.42 1.75 1.25 2.8a6.57 6.57 0 0 0-1.8 1.79 3.46 3.46 0 0 0-.51 1.83c0 .86.3 1.56.92 2.1a3.5 3.5 0 0 0 2.42.83c1.17 0 2.44-.38 3.81-1.14L8.23 24h2.82l-2.09-2.38 1.34-1.14zM3.56 14.1a1.02 1.02 0 0 1 .73-.28c.31 0 .56.08.75.25a.85.85 0 0 1 .28.66c0 .52-.42 1.11-1.26 1.78-.53-.65-.8-1.23-.8-1.74a.9.9 0 0 1 .3-.67m.18 7.9c-.43 0-.78-.12-1.06-.35-.28-.23-.41-.49-.41-.76 0-.6.5-1.3 1.52-2.09a31.23 31.23 0 0 0 2.25 2.44c-.92.5-1.69.76-2.3.76`,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AnchorsComponent {
    constructor() {
        this.categories = [];
        this.anchorClick = new EventEmitter();
        this.svgs = svgs;
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EmojiFrequentlyService {
    constructor() {
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
    init() {
        this.frequently = JSON.parse(localStorage.getItem(`${this.NAMESPACE}.frequently`) || 'null');
        this.initialized = true;
    }
    /**
     * @param {?} emoji
     * @return {?}
     */
    add(emoji) {
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
        localStorage.setItem(`${this.NAMESPACE}.last`, emoji.id);
        localStorage.setItem(`${this.NAMESPACE}.frequently`, JSON.stringify(this.frequently));
    }
    /**
     * @param {?} perLine
     * @return {?}
     */
    get(perLine) {
        if (!this.initialized) {
            this.init();
        }
        if (this.frequently === null) {
            this.defaults = {};
            const /** @type {?} */ result = [];
            for (let /** @type {?} */ i = 0; i < perLine; i++) {
                this.defaults[this.DEFAULTS[i]] = perLine - i;
                result.push(this.DEFAULTS[i]);
            }
            return result;
        }
        const /** @type {?} */ quantity = perLine * 4;
        const /** @type {?} */ frequentlyKeys = Object.keys(this.frequently);
        const /** @type {?} */ sorted = frequentlyKeys
            .sort((a, b) => /** @type {?} */ ((this.frequently))[a] - /** @type {?} */ ((this.frequently))[b])
            .reverse();
        const /** @type {?} */ sliced = sorted.slice(0, quantity);
        const /** @type {?} */ last = localStorage.getItem(`${this.NAMESPACE}.last`);
        if (last && !sliced.includes(last)) {
            sliced.pop();
            sliced.push(last);
        }
        return sliced;
    }
}
EmojiFrequentlyService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CategoryComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} arr
 * @return {?}
 */
function uniq(arr) {
    return arr.reduce((acc, item) => {
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
    const /** @type {?} */ uniqA = uniq(a);
    const /** @type {?} */ uniqB = uniq(b);
    return uniqA.filter((item) => uniqB.indexOf(item) >= 0);
}
/**
 * @return {?}
 */
function measureScrollbar() {
    if (typeof document === 'undefined') {
        return 0;
    }
    const /** @type {?} */ div = document.createElement('div');
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.overflow = 'scroll';
    div.style.position = 'absolute';
    div.style.top = '-9999px';
    document.body.appendChild(div);
    const /** @type {?} */ scrollbarWidth = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
    return scrollbarWidth;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EmojiSearch {
    /**
     * @param {?} emojiService
     */
    constructor(emojiService) {
        this.emojiService = emojiService;
        this.originalPool = {};
        this.index = {};
        this.emojisList = {};
        this.emoticonsList = {};
        this.emojiSearch = {};
        for (const /** @type {?} */ emojiData of this.emojiService.emojis) {
            const { short_names, emoticons } = emojiData;
            const /** @type {?} */ id = short_names[0];
            emoticons.forEach(emoticon => {
                if (this.emoticonsList[emoticon]) {
                    return;
                }
                this.emoticonsList[emoticon] = id;
            });
            this.emojisList[id] = this.emojiService.getSanitizedData(id);
            this.originalPool[id] = emojiData;
        }
    }
    /**
     * @param {?} custom
     * @param {?} pool
     * @return {?}
     */
    addCustomToPool(custom, pool) {
        custom.forEach((emoji) => {
            const /** @type {?} */ emojiId = emoji.id || emoji.short_names[0];
            if (emojiId && !pool[emojiId]) {
                pool[emojiId] = this.emojiService.getData(emoji);
                this.emojisList[emojiId] = this.emojiService.getSanitizedData(emoji);
            }
        });
    }
    /**
     * @param {?} value
     * @param {?=} emojisToShowFilter
     * @param {?=} maxResults
     * @param {?=} include
     * @param {?=} exclude
     * @param {?=} custom
     * @return {?}
     */
    search(value, emojisToShowFilter, maxResults = 75, include = [], exclude = [], custom = []) {
        this.addCustomToPool(custom, this.originalPool);
        let /** @type {?} */ results;
        let /** @type {?} */ pool = this.originalPool;
        if (value.length) {
            if (value === '-' || value === '-1') {
                return [this.emojisList['-1']];
            }
            let /** @type {?} */ values = value.toLowerCase().split(/[\s|,|\-|_]+/);
            let /** @type {?} */ allResults = [];
            if (values.length > 2) {
                values = [values[0], values[1]];
            }
            if (include.length || exclude.length) {
                pool = {};
                categories.forEach(category => {
                    const /** @type {?} */ isIncluded = include && include.length
                        ? include.indexOf(category.id) > -1
                        : true;
                    const /** @type {?} */ isExcluded = exclude && exclude.length
                        ? exclude.indexOf(category.id) > -1
                        : false;
                    if (!isIncluded || isExcluded) {
                        return;
                    } /** @type {?} */
                    ((category.emojis)).forEach(emojiId => (pool[emojiId] = this.emojiService.names[emojiId]));
                });
                if (custom.length) {
                    const /** @type {?} */ customIsIncluded = include && include.length ? include.indexOf('custom') > -1 : true;
                    const /** @type {?} */ customIsExcluded = exclude && exclude.length ? exclude.indexOf('custom') > -1 : false;
                    if (customIsIncluded && !customIsExcluded) {
                        this.addCustomToPool(custom, pool);
                    }
                }
            }
            allResults = values
                .map(v => {
                let /** @type {?} */ aPool = pool;
                let /** @type {?} */ aIndex = this.index;
                let /** @type {?} */ length = 0;
                for (let /** @type {?} */ charIndex = 0; charIndex < v.length; charIndex++) {
                    const /** @type {?} */ char = v[charIndex];
                    length++;
                    if (!aIndex[char]) {
                        aIndex[char] = {};
                    }
                    aIndex = aIndex[char];
                    if (!aIndex.results) {
                        const /** @type {?} */ scores = {};
                        aIndex.results = [];
                        aIndex.pool = {};
                        for (const /** @type {?} */ id of Object.keys(aPool)) {
                            const /** @type {?} */ emoji = aPool[id];
                            if (!this.emojiSearch[id]) {
                                this.emojiSearch[id] = this.buildSearch(emoji.short_names, emoji.name, emoji.keywords, emoji.emoticons);
                            }
                            const /** @type {?} */ query = this.emojiSearch[id];
                            const /** @type {?} */ sub = v.substr(0, length);
                            const /** @type {?} */ subIndex = query.indexOf(sub);
                            if (subIndex !== -1) {
                                let /** @type {?} */ score = subIndex + 1;
                                if (sub === id) {
                                    score = 0;
                                }
                                aIndex.results.push(this.emojisList[id]);
                                aIndex.pool[id] = emoji;
                                scores[id] = score;
                            }
                        }
                        aIndex.results.sort((a, b) => {
                            const /** @type {?} */ aScore = scores[a.id];
                            const /** @type {?} */ bScore = scores[b.id];
                            return aScore - bScore;
                        });
                    }
                    aPool = aIndex.pool;
                }
                return aIndex.results;
            })
                .filter(a => a);
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
                results = results.filter((result) => emojisToShowFilter(this.emojiService.names[result.id]));
            }
            if (results && results.length > maxResults) {
                results = results.slice(0, maxResults);
            }
        }
        return results || null;
    }
    /**
     * @param {?} short_names
     * @param {?} name
     * @param {?} keywords
     * @param {?} emoticons
     * @return {?}
     */
    buildSearch(short_names, name, keywords, emoticons) {
        const /** @type {?} */ search = [];
        const /** @type {?} */ addToSearch = (strings, split) => {
            if (!strings) {
                return;
            }
            (Array.isArray(strings) ? strings : [strings]).forEach(string => {
                (split ? string.split(/[-|_|\s]+/) : [string]).forEach(s => {
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
    }
}
EmojiSearch.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EmojiSearch.ctorParameters = () => [
    { type: EmojiService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PreviewComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SearchComponent {
    /**
     * @param {?} emojiSearch
     */
    constructor(emojiSearch) {
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
    ngAfterViewInit() {
        if (this.autoFocus && this.inputRef) {
            this.inputRef.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.query = '';
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleEnterKey($event) {
        this.enterKey.emit($event);
        $event.preventDefault();
    }
    /**
     * @return {?}
     */
    handleChange() {
        this.search.emit(this.emojiSearch.search(this.query, this.emojisToShowFilter, this.maxResults, this.include, this.exclude, this.custom));
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji-search',
                template: `
  <div class="emoji-mart-search">
    <input #inputRef type="text"
      (keyup.enter)="handleEnterKey($event)"
      [placeholder]="i18n.search" [autofocus]="autoFocus"
      [(ngModel)]="query" (ngModelChange)="handleChange()"
    />
  </div>
  `,
                preserveWhitespaces: false,
            },] },
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: EmojiSearch }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
class PickerComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SkinComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ components = [
    PickerComponent,
    AnchorsComponent,
    CategoryComponent,
    SearchComponent,
    PreviewComponent,
    SkinComponent,
];
class PickerModule {
}
PickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule, EmojiModule],
                exports: components,
                declarations: components,
                providers: [EmojiSearch, EmojiFrequentlyService],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AnchorsComponent, CategoryComponent, EmojiFrequentlyService, EmojiSearch, PickerComponent, PickerModule, PreviewComponent, SearchComponent, SkinComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3RybC1uZ3gtZW1vamktbWFydC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvc3Zncy9pbmRleC50cyIsIm5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvYW5jaG9ycy5jb21wb25lbnQudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L2Vtb2ppLWZyZXF1ZW50bHkuc2VydmljZS50cyIsIm5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvY2F0ZWdvcnkuY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC91dGlscy9pbmRleC50cyIsIm5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvZW1vamktc2VhcmNoLnNlcnZpY2UudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L3ByZXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC9zZWFyY2guY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC9waWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC9za2lucy5jb21wb25lbnQudHMiLCJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L3BpY2tlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgbWF4LWxpbmUtbGVuZ3RoICovXG5jb25zdCBzdmdzOiBhbnkgPSB7XG4gIGFjdGl2aXR5OiBgTTEyIDBhMTIgMTIgMCAxIDAgMCAyNCAxMiAxMiAwIDAgMCAwLTI0bTEwIDExaC01Yy4zLTIuNSAxLjMtNC44IDItNi4xYTEwIDEwIDAgMCAxIDMgNi4xbS05IDBWMmExMCAxMCAwIDAgMSA0LjQgMS42QTE4IDE4IDAgMCAwIDE1IDExaC0yem0tMiAwSDlhMTggMTggMCAwIDAtMi40LTcuNEExMCAxMCAwIDAgMSAxMSAyLjFWMTF6bTAgMnY5YTEwIDEwIDAgMCAxLTQuNC0xLjZBMTggMTggMCAwIDAgOSAxM2gyem00IDBhMTggMTggMCAwIDAgMi40IDcuNCAxMCAxMCAwIDAgMS00LjQgMS41VjEzaDJ6TTUgNC45Yy43IDEuMyAxLjcgMy42IDIgNi4xSDJhMTAgMTAgMCAwIDEgMy02LjFNMiAxM2g1Yy0uMyAyLjUtMS4zIDQuOC0yIDYuMUExMCAxMCAwIDAgMSAyIDEzbTE3IDYuMWMtLjctMS4zLTEuNy0zLjYtMi02LjFoNWExMCAxMCAwIDAgMS0zIDYuMWAsXG5cbiAgY3VzdG9tOiBgTTEwIDFoM3YyMWgtM3ptMTAuMTg2IDRsMS41IDIuNTk4TDMuNSAxOC4wOTggMiAxNS41ek0yIDcuNTk4TDMuNSA1bDE4LjE4NiAxMC41LTEuNSAyLjU5OHpgLFxuXG4gIGZsYWdzOiBgTTAgMGw2IDI0aDJMMiAwem0yMSA1aC00bC0xLTRINGwzIDEyaDNsMSA0aDEzTDIxIDV6TTYuNiAzaDcuOGwyIDhIOC42bC0yLTh6bTguOCAxMGwtMi45IDEuOS0uNC0xLjloMy4zem0zLjYgMGwtMS41LTZoMmwyIDhIMTZsMy0yemAsXG5cbiAgZm9vZHM6IGBNMTcgNWMtMS44IDAtMi45LjQtMy43IDEgLjUtMS4zIDEuOC0zIDQuNy0zYTEgMSAwIDAgMCAwLTJjLTMgMC00LjYgMS4zLTUuNSAyLjVsLS4yLjJjLS42LTEuOS0xLjUtMy43LTMtMy43QzguNSAwIDcuNy4zIDcgMWMtMiAxLjUtMS43IDIuOS0uNSA0QzMuNiA1LjIgMCA3LjQgMCAxM2MwIDQuNiA1IDExIDkgMTEgMiAwIDIuNC0uNSAzLTEgLjYuNSAxIDEgMyAxIDQgMCA5LTYuNCA5LTExIDAtNi00LTgtNy04TTguMiAyLjVjLjctLjUgMS0uNSAxLS41LjQuMiAxIDEuNCAxLjQgMy0xLjYtLjYtMi44LTEuMy0zLTEuOGwuNi0uN00xNSAyMmMtMSAwLTEuMi0uMS0xLjYtLjRsLS4xLS4yYTIgMiAwIDAgMC0yLjYgMGwtLjEuMmMtLjQuMy0uNS40LTEuNi40LTIuOCAwLTctNS40LTctOSAwLTYgNC41LTYgNS02IDIgMCAyLjUuNCAzLjQgMS4ybC4zLjNhMiAyIDAgMCAwIDIuNiAwbC4zLS4zYzEtLjggMS41LTEuMiAzLjQtMS4yLjUgMCA1IC4xIDUgNiAwIDMuNi00LjIgOS03IDlgLFxuXG4gIG5hdHVyZTogYE0xNS41IDhhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNtLTcgMGExLjUgMS41IDAgMSAwIDAgMyAxLjUgMS41IDAgMCAwIDAtM20xMC40My04aC0uMDJjLS45NyAwLTIuMTQuNzktMy4wMiAxLjVBMTMuODggMTMuODggMCAwIDAgMTIgLjk5Yy0xLjI4IDAtMi42Mi4xMy0zLjg3LjUxQzcuMjQuOCA2LjA3IDAgNS4wOSAwaC0uMDJDMy4zNSAwIC4wNyAyLjY3IDAgNy4wM2MtLjA0IDIuNDcuMjggNC4yMyAxLjA0IDUgLjI2LjI3Ljg4LjY5IDEuMy45LjE5IDMuMTcuOTIgNS4yMyAyLjUzIDYuMzcuOS42NCAyLjE5Ljk1IDMuMiAxLjEtLjAzLjItLjA3LjQtLjA3LjYgMCAxLjc3IDIuMzUgMyA0IDNzNC0xLjIzIDQtM2MwLS4yLS4wNC0uNC0uMDctLjU5IDIuNTctLjM4IDUuNDMtMS44NyA1LjkyLTcuNTguNC0uMjIuODktLjU3IDEuMS0uOC43Ny0uNzYgMS4wOS0yLjUyIDEuMDUtNUMyMy45MyAyLjY3IDIwLjY1IDAgMTguOTMgME0zLjIzIDkuMTNjLS4yNC4yOS0uODQgMS4xNi0uOSAxLjI0QTkuNjcgOS42NyAwIDAgMSAyIDcuMDhjLjA1LTMuMjggMi40OC00Ljk3IDMuMS01LjAzLjI1LjAyLjcyLjI3IDEuMjYuNjVBNy45NSA3Ljk1IDAgMCAwIDQgNy44MmMtLjE0LjU1LS40Ljg2LS43OSAxLjMxTTEyIDIyYy0uOSAwLTEuOTUtLjctMi0xIDAtLjY1LjQ3LTEuMjQgMS0xLjZ2LjZhMSAxIDAgMSAwIDIgMHYtLjZjLjUyLjM2IDEgLjk1IDEgMS42LS4wNS4zLTEuMSAxLTIgMW0zLTMuNDh2LjAyYTQuNzUgNC43NSAwIDAgMC0xLjI2LTEuMDJjMS4wOS0uNTIgMi4yNC0xLjMzIDIuMjQtMi4yMiAwLTEuODQtMS43OC0yLjItMy45OC0yLjJzLTMuOTguMzYtMy45OCAyLjJjMCAuODkgMS4xNSAxLjcgMi4yNCAyLjIyQTQuOCA0LjggMCAwIDAgOSAxOC41NHYtLjAzYTYuMSA2LjEgMCAwIDEtMi45Ny0uODRjLTEuMy0uOTItMS44NC0zLjA0LTEuODYtNi40OGwuMDMtLjA0Yy41LS44MiAxLjQ5LTEuNDUgMS44LTMuMUM2IDYgNy4zNiA0LjQyIDguMzYgMy41M2MxLjAxLS4zNSAyLjItLjUzIDMuNTktLjUzIDEuNDUgMCAyLjY4LjIgMy43My41NyAxIC45IDIuMzIgMi40NiAyLjMyIDQuNDguMzEgMS42NSAxLjMgMi4yNyAxLjggMy4xbC4xLjE4Yy0uMDYgNS45Ny0xLjk1IDcuMDEtNC45IDcuMTltNi42My04LjJsLS4xMS0uMmE3LjU5IDcuNTkgMCAwIDAtLjc0LS45OCAzLjAyIDMuMDIgMCAwIDEtLjc5LTEuMzIgNy45MyA3LjkzIDAgMCAwLTIuMzUtNS4xMmMuNTMtLjM4IDEtLjYzIDEuMjYtLjY1LjY0LjA3IDMuMDUgMS43NyAzLjEgNS4wMy4wMiAxLjgxLS4zNSAzLjIyLS4zNyAzLjI0YCxcblxuICBvYmplY3RzOiBgTTEyIDBhOSA5IDAgMCAwLTUgMTYuNVYyMXMyIDMgNSAzIDUtMyA1LTN2LTQuNUE5IDkgMCAwIDAgMTIgMHptMCAyYTcgNyAwIDEgMSAwIDE0IDcgNyAwIDAgMSAwLTE0ek05IDE3LjVhOSA5IDAgMCAwIDYgMHYuOGE3IDcgMCAwIDEtMyAuNyA3IDcgMCAwIDEtMy0uN3YtLjh6bS4yIDNhOC45IDguOSAwIDAgMCAyLjguNWMxIDAgMS45LS4yIDIuOC0uNS0uNi43LTEuNiAxLjUtMi44IDEuNS0xLjEgMC0yLjEtLjgtMi44LTEuNXptNS41LTguMWMtLjggMC0xLjEtLjgtMS41LTEuOC0uNS0xLS43LTEuNS0xLjItMS41cy0uOC41LTEuMyAxLjVjLS40IDEtLjggMS44LTEuNiAxLjhoLS4zYy0uNS0uMi0uOC0uNy0xLjMtMS44bC0uMi0xQTMgMyAwIDAgMCA3IDlhMSAxIDAgMCAxIDAtMmMxLjcgMCAyIDEuNCAyLjIgMi4xLjUtMSAxLjMtMiAyLjgtMiAxLjUgMCAyLjMgMS4xIDIuNyAyLjEuMi0uOC42LTIuMiAyLjMtMi4yYTEgMSAwIDEgMSAwIDJjLS4yIDAtLjMuNS0uMy43YTYuNSA2LjUgMCAwIDEtLjMgMWMtLjUgMS0uOCAxLjctMS43IDEuN2AsXG5cbiAgcGVvcGxlOiBgTTEyIDBhMTIgMTIgMCAxIDAgMCAyNCAxMiAxMiAwIDAgMCAwLTI0bTAgMjJhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwTTggN2EyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRtOCAwYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNG0tLjggOGMtLjcgMS4yLTEuOCAyLTMuMyAyLTEuNSAwLTIuNy0uOC0zLjQtMkgxNW0zLTJINmE2IDYgMCAxIDAgMTIgMGAsXG5cbiAgcGxhY2VzOiBgTTYuNSAxMmEyLjUgMi41IDAgMSAwIDAgNSAyLjUgMi41IDAgMCAwIDAtNW0wIDNjLS4zIDAtLjUtLjItLjUtLjVzLjItLjUuNS0uNS41LjIuNS41LS4yLjUtLjUuNW0xMS0zYTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01bTAgM2MtLjMgMC0uNS0uMi0uNS0uNXMuMi0uNS41LS41LjUuMi41LjUtLjIuNS0uNS41bTUtNS41bC0xLS40LS4xLS4xaC42Yy42IDAgMS0uNCAxLTEgMC0xLS45LTItMi0yaC0uNmwtLjgtMS43QTMgMyAwIDAgMCAxNi44IDJINy4yYTMgMyAwIDAgMC0yLjggMi4zTDMuNiA2SDNhMiAyIDAgMCAwLTIgMmMwIC42LjQgMSAxIDFoLjZ2LjFsLTEgLjRhMiAyIDAgMCAwLTEuNCAybC43IDcuNmExIDEgMCAwIDAgMSAuOUgzdjFjMCAxLjEuOSAyIDIgMmgyYTIgMiAwIDAgMCAyLTJ2LTFoNnYxYzAgMS4xLjkgMiAyIDJoMmEyIDIgMCAwIDAgMi0ydi0xaDEuMWExIDEgMCAwIDAgMS0uOWwuNy03LjVhMiAyIDAgMCAwLTEuMy0yLjFNNi4zIDQuOWMuMS0uNS41LS45IDEtLjloOS41Yy40IDAgLjguNCAxIC45TDE5LjIgOUg0LjdsMS42LTQuMXpNNyAyMUg1di0xaDJ2MXptMTIgMGgtMnYtMWgydjF6bTIuMi0zSDIuOGwtLjctNi42LjktLjRoMThsLjkuNC0uNyA2LjZ6YCxcblxuICByZWNlbnQ6IGBNMTMgNGgtMnY3SDl2MmgydjJoMnYtMmg0di0yaC00em0tMS00YTEyIDEyIDAgMSAwIDAgMjQgMTIgMTIgMCAwIDAgMC0yNG0wIDIyYTEwIDEwIDAgMSAxIDAtMjAgMTAgMTAgMCAwIDEgMCAyMGAsXG5cbiAgc3ltYm9sczogYE0wIDBoMTF2Mkgwem00IDExaDNWNmg0VjRIMHYyaDR6bTExLjUgNmEyLjUgMi41IDAgMSAwIDAtNSAyLjUgMi41IDAgMCAwIDAgNW0wLTIuOTlhLjUuNSAwIDAgMSAwIC45OWMtLjI4IDAtLjUtLjIyLS41LS41cy4yMi0uNDkuNS0uNDltNiA1YTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01bTAgMi45OWEuNS41IDAgMCAxLS41LS41LjUuNSAwIDAgMSAxIC4wMS41LjUgMCAwIDEtLjUuNDltLjUtOWwtOSA5IDEuNTEgMS41IDktOXptLTUtMmMyLjIgMCA0LTEuMTIgNC0yLjVWMnMuOTgtLjE2IDEuNS45NUMyMyA0LjA1IDIzIDYgMjMgNnMxLTEuMTIgMS0zLjEzQzI0LS4wMiAyMSAwIDIxIDBoLTJ2Ni4zNUE1Ljg1IDUuODUgMCAwIDAgMTcgNmMtMi4yIDAtNCAxLjEyLTQgMi41czEuOCAyLjUgNCAyLjVtLTYuNyA5LjQ4TDguODIgMTguOWE0Ny41NCA0Ny41NCAwIDAgMS0xLjQ0IDEuMTNjLS4zLS4zLS45OS0xLjAyLTIuMDQtMi4xOS45LS44MyAxLjQ3LTEuNDYgMS43Mi0xLjg5cy4zOC0uODcuMzgtMS4zM2MwLS42LS4yNy0xLjE4LS44Mi0xLjc2LS41NC0uNTgtMS4zMy0uODctMi4zNS0uODctMSAwLTEuNzkuMjktMi4zNC44Ny0uNTYuNi0uODMgMS4xOC0uODMgMS43OSAwIC44MS40MiAxLjc1IDEuMjUgMi44YTYuNTcgNi41NyAwIDAgMC0xLjggMS43OSAzLjQ2IDMuNDYgMCAwIDAtLjUxIDEuODNjMCAuODYuMyAxLjU2LjkyIDIuMWEzLjUgMy41IDAgMCAwIDIuNDIuODNjMS4xNyAwIDIuNDQtLjM4IDMuODEtMS4xNEw4LjIzIDI0aDIuODJsLTIuMDktMi4zOCAxLjM0LTEuMTR6TTMuNTYgMTQuMWExLjAyIDEuMDIgMCAwIDEgLjczLS4yOGMuMzEgMCAuNTYuMDguNzUuMjVhLjg1Ljg1IDAgMCAxIC4yOC42NmMwIC41Mi0uNDIgMS4xMS0xLjI2IDEuNzgtLjUzLS42NS0uOC0xLjIzLS44LTEuNzRhLjkuOSAwIDAgMSAuMy0uNjdtLjE4IDcuOWMtLjQzIDAtLjc4LS4xMi0xLjA2LS4zNS0uMjgtLjIzLS40MS0uNDktLjQxLS43NiAwLS42LjUtMS4zIDEuNTItMi4wOWEzMS4yMyAzMS4yMyAwIDAgMCAyLjI1IDIuNDRjLS45Mi41LTEuNjkuNzYtMi4zLjc2YCxcbn07XG5leHBvcnQgZGVmYXVsdCBzdmdzO1xuIiwiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamlDYXRlZ29yeSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgU1ZHcyBmcm9tICcuL3N2Z3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1tYXJ0LWFuY2hvcnMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1hbmNob3JzXCI+XG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1jYXRlZ29yeSBbbmdGb3JPZl09XCJjYXRlZ29yaWVzXCIgbGV0LWlkeD1cImluZGV4XCIgW25nRm9yVHJhY2tCeV09XCJ0cmFja0J5Rm5cIj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwiY2F0ZWdvcnkuYW5jaG9yICE9PSBmYWxzZVwiXG4gICAgICAgIFthdHRyLnRpdGxlXT1cImkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF1cIlxuICAgICAgICAoY2xpY2spPVwidGhpcy5oYW5kbGVDbGljaygkZXZlbnQsIGlkeClcIlxuICAgICAgICBjbGFzcz1cImVtb2ppLW1hcnQtYW5jaG9yXCJcbiAgICAgICAgW2NsYXNzLmVtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkXT1cImNhdGVnb3J5Lm5hbWUgPT09IHNlbGVjdGVkXCJcbiAgICAgICAgW3N0eWxlLmNvbG9yXT1cImNhdGVnb3J5Lm5hbWUgPT09IHNlbGVjdGVkID8gY29sb3IgOiBudWxsXCJcbiAgICAgID5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+XG4gICAgICAgICAgICA8cGF0aCBbYXR0ci5kXT1cInN2Z3NbY2F0ZWdvcnkuaWRdXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIlxuICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yXCJcbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBBbmNob3JzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgY2F0ZWdvcmllczogRW1vamlDYXRlZ29yeVtdID0gW107XG4gIEBJbnB1dCgpIGNvbG9yPzogc3RyaW5nO1xuICBASW5wdXQoKSBzZWxlY3RlZD86IHN0cmluZztcbiAgQElucHV0KCkgaTE4bjogYW55O1xuICBAT3V0cHV0KCkgYW5jaG9yQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHsgY2F0ZWdvcnk6IEVtb2ppQ2F0ZWdvcnksIGluZGV4OiBudW1iZXIgfT4oKTtcbiAgc3ZnczogYW55ID0gU1ZHcztcblxuICB0cmFja0J5Rm4oaWR4OiBudW1iZXIsIGNhdDogRW1vamlDYXRlZ29yeSkge1xuICAgIHJldHVybiBjYXQuaWQ7XG4gIH1cbiAgaGFuZGxlQ2xpY2soJGV2ZW50OiBFdmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuYW5jaG9yQ2xpY2suZW1pdCh7XG4gICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yaWVzW2luZGV4XSxcbiAgICAgIGluZGV4LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtb2ppRGF0YSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIHtcbiAgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnO1xuICBmcmVxdWVudGx5OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG4gIGRlZmF1bHRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIERFRkFVTFRTID0gW1xuICAgICcrMScsXG4gICAgJ2dyaW5uaW5nJyxcbiAgICAna2lzc2luZ19oZWFydCcsXG4gICAgJ2hlYXJ0X2V5ZXMnLFxuICAgICdsYXVnaGluZycsXG4gICAgJ3N0dWNrX291dF90b25ndWVfd2lua2luZ19leWUnLFxuICAgICdzd2VhdF9zbWlsZScsXG4gICAgJ2pveScsXG4gICAgJ3NjcmVhbScsXG4gICAgJ2Rpc2FwcG9pbnRlZCcsXG4gICAgJ3VuYW11c2VkJyxcbiAgICAnd2VhcnknLFxuICAgICdzb2InLFxuICAgICdzdW5nbGFzc2VzJyxcbiAgICAnaGVhcnQnLFxuICAgICdwb29wJyxcbiAgXTtcblxuICBpbml0KCkge1xuICAgIHRoaXMuZnJlcXVlbnRseSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5OQU1FU1BBQ0V9LmZyZXF1ZW50bHlgKSB8fCAnbnVsbCcpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIGFkZChlbW9qaTogRW1vamlEYXRhKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZyZXF1ZW50bHkpIHtcbiAgICAgIHRoaXMuZnJlcXVlbnRseSA9IHRoaXMuZGVmYXVsdHM7XG4gICAgfVxuICAgIGlmICghdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSkge1xuICAgICAgdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSA9IDA7XG4gICAgfVxuICAgIHRoaXMuZnJlcXVlbnRseVtlbW9qaS5pZF0gKz0gMTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5sYXN0YCwgZW1vamkuaWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5mcmVxdWVudGx5YCwgSlNPTi5zdHJpbmdpZnkodGhpcy5mcmVxdWVudGx5KSk7XG4gIH1cbiAgZ2V0KHBlckxpbmU6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyZXF1ZW50bHkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyTGluZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHNbdGhpcy5ERUZBVUxUU1tpXV0gPSBwZXJMaW5lIC0gaTtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ERUZBVUxUU1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHF1YW50aXR5ID0gcGVyTGluZSAqIDQ7XG4gICAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZyZXF1ZW50bHkpO1xuXG4gICAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmZyZXF1ZW50bHkhW2FdIC0gdGhpcy5mcmVxdWVudGx5IVtiXSlcbiAgICAgIC5yZXZlcnNlKCk7XG4gICAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KTtcblxuICAgIGNvbnN0IGxhc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0ubGFzdGApO1xuXG4gICAgaWYgKGxhc3QgJiYgIXNsaWNlZC5pbmNsdWRlcyhsYXN0KSkge1xuICAgICAgc2xpY2VkLnBvcCgpO1xuICAgICAgc2xpY2VkLnB1c2gobGFzdCk7XG4gICAgfVxuICAgIHJldHVybiBzbGljZWQ7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRW1vamksIEVtb2ppU2VydmljZSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgeyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIH0gZnJvbSAnLi9lbW9qaS1mcmVxdWVudGx5LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbZW1vamktY2F0ZWdvcnldJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdlxuICAgICNjb250YWluZXJcbiAgICBjbGFzcz1cImVtb2ppLW1hcnQtY2F0ZWdvcnlcIlxuICAgIFtjbGFzcy5lbW9qaS1tYXJ0LW5vLXJlc3VsdHNdPVwiZW1vamlzICYmICFlbW9qaXMubGVuZ3RoXCJcbiAgICBbbmdTdHlsZV09XCJjb250YWluZXJTdHlsZXNcIlxuICA+XG4gICAgPGRpdlxuICAgICAgW25nU3R5bGVdPVwibGFiZWxTdHlsZXNcIlxuICAgICAgW2F0dHIuZGF0YS1uYW1lXT1cIm5hbWVcIlxuICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCJcbiAgICA+XG4gICAgICA8c3BhbiBzdHlsZT1cImxhYmVsU3BhblN0eWxlc1wiICNsYWJlbD5cbiAgICAgICAge3sgaTE4bi5jYXRlZ29yaWVzW2lkXSB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImVtb2ppc1wiPlxuICAgICAgPG5neC1lbW9qaVxuICAgICAgICAqbmdGb3I9XCJsZXQgZW1vamkgb2YgZW1vamlzOyB0cmFja0J5OiB0cmFja0J5SWRcIlxuICAgICAgICBbZW1vamldPVwiZW1vamlcIlxuICAgICAgICBbc2l6ZV09XCJlbW9qaVNpemVcIlxuICAgICAgICBbc2tpbl09XCJlbW9qaVNraW5cIlxuICAgICAgICBbbmF0aXZlXT1cImVtb2ppTmF0aXZlXCJcbiAgICAgICAgW3NldF09XCJlbW9qaVNldFwiXG4gICAgICAgIFtzaGVldFNpemVdPVwiZW1vamlTaGVldFNpemVcIlxuICAgICAgICBbZm9yY2VTaXplXT1cImVtb2ppRm9yY2VTaXplXCJcbiAgICAgICAgW3Rvb2x0aXBdPVwiZW1vamlUb29sdGlwXCJcbiAgICAgICAgW2hpZGVPYnNvbGV0ZV09XCJoaWRlT2Jzb2xldGVcIlxuICAgICAgICAoZW1vamlPdmVyKT1cImVtb2ppT3Zlci5lbWl0KCRldmVudClcIlxuICAgICAgICAoZW1vamlMZWF2ZSk9XCJlbW9qaUxlYXZlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIChlbW9qaUNsaWNrKT1cImVtb2ppQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgIDwvbmd4LWVtb2ppPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8ZGl2ICpuZ0lmPVwiZW1vamlzICYmICFlbW9qaXMubGVuZ3RoXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bmd4LWVtb2ppXG4gICAgICAgICAgZW1vamk9XCJzbGV1dGhfb3Jfc3B5XCJcbiAgICAgICAgICBzaXplPVwiMzhcIlxuICAgICAgICAgIFtza2luXT1cImVtb2ppU2tpblwiXG4gICAgICAgICAgW25hdGl2ZV09XCJlbW9qaU5hdGl2ZVwiXG4gICAgICAgICAgW3NldF09XCJlbW9qaVNldFwiXG4gICAgICAgICAgW3NoZWV0U2l6ZV09XCJlbW9qaVNoZWV0U2l6ZVwiXG4gICAgICAgICAgW2ZvcmNlU2l6ZV09XCJlbW9qaUZvcmNlU2l6ZVwiXG4gICAgICAgICAgW3Rvb2x0aXBdPVwiZW1vamlUb29sdGlwXCJcbiAgICAgICAgICA+XG4gICAgICAgIDwvbmd4LWVtb2ppPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1vamktbWFydC1uby1yZXN1bHRzLWxhYmVsXCI+XG4gICAgICAgIHt7IGkxOG4ubm90Zm91bmQgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG59KVxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgZW1vamlzPzogYW55W10gfCBudWxsO1xuICBASW5wdXQoKSBoYXNTdGlja3lQb3NpdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcbiAgQElucHV0KCkgbmF0aXZlID0gdHJ1ZTtcbiAgQElucHV0KCkgcGVyTGluZSA9IDk7XG4gIEBJbnB1dCgpIHJlY2VudDogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgY3VzdG9tOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBpMThuOiBhbnk7XG4gIEBJbnB1dCgpIGlkOiBhbnk7XG4gIEBJbnB1dCgpIGhpZGVPYnNvbGV0ZSA9IHRydWU7XG4gIEBJbnB1dCgpIGVtb2ppTmF0aXZlPzogRW1vamlbJ25hdGl2ZSddO1xuICBASW5wdXQoKSBlbW9qaVNraW4/OiBFbW9qaVsnc2tpbiddO1xuICBASW5wdXQoKSBlbW9qaVNpemU/OiBFbW9qaVsnc2l6ZSddO1xuICBASW5wdXQoKSBlbW9qaVNldD86IEVtb2ppWydzZXQnXTtcbiAgQElucHV0KCkgZW1vamlTaGVldFNpemU/OiBFbW9qaVsnc2hlZXRTaXplJ107XG4gIEBJbnB1dCgpIGVtb2ppRm9yY2VTaXplPzogRW1vamlbJ2ZvcmNlU2l6ZSddO1xuICBASW5wdXQoKSBlbW9qaVRvb2x0aXA/OiBFbW9qaVsndG9vbHRpcCddO1xuICBAT3V0cHV0KCkgZW1vamlPdmVyOiBFbW9qaVsnZW1vamlPdmVyJ10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlbW9qaUxlYXZlOiBFbW9qaVsnZW1vamlMZWF2ZSddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZW1vamlDbGljazogRW1vamlbJ2Vtb2ppQ2xpY2snXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyPzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbGFiZWwnKSBsYWJlbD86IEVsZW1lbnRSZWY7XG4gIGNvbnRhaW5lclN0eWxlczogYW55ID0ge307XG4gIGxhYmVsU3R5bGVzOiBhbnkgPSB7fTtcbiAgbGFiZWxTcGFuU3R5bGVzOiBhbnkgPSB7fTtcbiAgcGFyZW50PzogRWxlbWVudDtcbiAgbWFyZ2luID0gMDtcbiAgbWluTWFyZ2luID0gMDtcbiAgbWF4TWFyZ2luID0gMDtcbiAgdG9wID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGVtb2ppU2VydmljZTogRW1vamlTZXJ2aWNlLFxuICAgIHByaXZhdGUgZnJlcXVlbnRseTogRW1vamlGcmVxdWVudGx5U2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZW1vamlzID0gdGhpcy5nZXRFbW9qaXMoKTtcblxuICAgIGlmICghdGhpcy5lbW9qaXMpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyU3R5bGVzID0geyBkaXNwbGF5OiAnbm9uZScgfTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGFzU3RpY2t5UG9zaXRpb24pIHtcbiAgICAgIHRoaXMubGFiZWxTdHlsZXMgPSB7IGhlaWdodDogMjggfTtcbiAgICAgIHRoaXMubGFiZWxTcGFuU3R5bGVzID0geyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9O1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnBhcmVudCA9IHRoaXMuY29udGFpbmVyIS5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB0aGlzLm1lbW9pemVTaXplKCk7XG4gIH1cbiAgbWVtb2l6ZVNpemUoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdG9wLFxuICAgICAgaGVpZ2h0LFxuICAgIH0gPSB0aGlzLmNvbnRhaW5lciEubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwYXJlbnRUb3AgPSB0aGlzLnBhcmVudCEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbCEubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICB0aGlzLnRvcCA9IHRvcCAtIHBhcmVudFRvcCArIHRoaXMucGFyZW50IS5zY3JvbGxUb3A7XG5cbiAgICBpZiAoaGVpZ2h0ID09PSAwKSB7XG4gICAgICB0aGlzLm1heE1hcmdpbiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWF4TWFyZ2luID0gaGVpZ2h0IC0gbGFiZWxIZWlnaHQ7XG4gICAgfVxuICB9XG4gIGhhbmRsZVNjcm9sbChzY3JvbGxUb3A6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGxldCBtYXJnaW4gPSBzY3JvbGxUb3AgLSB0aGlzLnRvcDtcbiAgICBtYXJnaW4gPSBtYXJnaW4gPCB0aGlzLm1pbk1hcmdpbiA/IHRoaXMubWluTWFyZ2luIDogbWFyZ2luO1xuICAgIG1hcmdpbiA9IG1hcmdpbiA+IHRoaXMubWF4TWFyZ2luID8gdGhpcy5tYXhNYXJnaW4gOiBtYXJnaW47XG5cbiAgICBpZiAobWFyZ2luID09PSB0aGlzLm1hcmdpbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5oYXNTdGlja3lQb3NpdGlvbikge1xuICAgICAgdGhpcy5sYWJlbCEubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSBgJHttYXJnaW59cHhgO1xuICAgIH1cblxuICAgIHRoaXMubWFyZ2luID0gbWFyZ2luO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZ2V0RW1vamlzKCkge1xuICAgIGlmICh0aGlzLm5hbWUgPT09ICdSZWNlbnQnKSB7XG4gICAgICBsZXQgZnJlcXVlbnRseVVzZWQgPSB0aGlzLnJlY2VudCB8fCB0aGlzLmZyZXF1ZW50bHkuZ2V0KHRoaXMucGVyTGluZSk7XG4gICAgICBpZiAoIWZyZXF1ZW50bHlVc2VkIHx8ICFmcmVxdWVudGx5VXNlZC5sZW5ndGgpIHtcbiAgICAgICAgZnJlcXVlbnRseVVzZWQgPSB0aGlzLmZyZXF1ZW50bHkuZ2V0KHRoaXMucGVyTGluZSk7XG4gICAgICB9XG4gICAgICBpZiAoZnJlcXVlbnRseVVzZWQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZW1vamlzID0gZnJlcXVlbnRseVVzZWRcbiAgICAgICAgICAubWFwKGlkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVtb2ppID0gdGhpcy5jdXN0b20uZmlsdGVyKChlOiBhbnkpID0+IGUuaWQgPT09IGlkKVswXTtcbiAgICAgICAgICAgIGlmIChlbW9qaSkge1xuICAgICAgICAgICAgICByZXR1cm4gZW1vamk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5maWx0ZXIoaWQgPT4gISF0aGlzLmVtb2ppU2VydmljZS5nZXREYXRhKGlkKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgoIXRoaXMuZW1vamlzIHx8IHRoaXMuZW1vamlzLmxlbmd0aCA9PT0gMCkgJiYgZnJlcXVlbnRseVVzZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbW9qaXMpIHtcbiAgICAgIHRoaXMuZW1vamlzID0gdGhpcy5lbW9qaXMuc2xpY2UoMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZW1vamlzO1xuICB9XG4gIHVwZGF0ZURpc3BsYXkoZGlzcGxheTogJ25vbmUnIHwgJ2luaGVyaXQnKSB7XG4gICAgdGhpcy5jb250YWluZXJTdHlsZXMuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgdGhpcy5nZXRFbW9qaXMoKTtcbiAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cbiAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG59XG4iLCJmdW5jdGlvbiB1bmlxKGFycjogYW55W10pIHtcbiAgcmV0dXJuIGFyci5yZWR1Y2UoKGFjYzogQXJyYXk8YW55PiwgaXRlbTogYW55KSA9PiB7XG4gICAgaWYgKCFhY2MuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgIGFjYy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3QoYTogYW55LCBiOiBhbnkpIHtcbiAgY29uc3QgdW5pcUEgPSB1bmlxKGEpO1xuICBjb25zdCB1bmlxQiA9IHVuaXEoYik7XG5cbiAgcmV0dXJuIHVuaXFBLmZpbHRlcigoaXRlbTogYW55KSA9PiB1bmlxQi5pbmRleE9mKGl0ZW0pID49IDApO1xufVxuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vc29uaWNkb2UvbWVhc3VyZS1zY3JvbGxiYXJcbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGRpdi5zdHlsZS53aWR0aCA9ICcxMDBweCc7XG4gIGRpdi5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICBkaXYuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgZGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4JztcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG5cbiAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBjYXRlZ29yaWVzLFxuICBFbW9qaURhdGEsXG4gIEVtb2ppU2VydmljZSxcbn0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCB7IGludGVyc2VjdCB9IGZyb20gJy4vdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1vamlTZWFyY2gge1xuICBvcmlnaW5hbFBvb2w6IGFueSA9IHt9O1xuICBpbmRleDoge1xuICAgIHJlc3VsdHM/OiBFbW9qaURhdGFbXTtcbiAgICBwb29sPzogeyBba2V5OiBzdHJpbmddOiBFbW9qaURhdGEgfTtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fTtcbiAgZW1vamlzTGlzdDogYW55ID0ge307XG4gIGVtb3RpY29uc0xpc3Q6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgZW1vamlTZWFyY2g6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtb2ppU2VydmljZTogRW1vamlTZXJ2aWNlKSB7XG4gICAgZm9yIChjb25zdCBlbW9qaURhdGEgb2YgdGhpcy5lbW9qaVNlcnZpY2UuZW1vamlzKSB7XG4gICAgICBjb25zdCB7IHNob3J0X25hbWVzLCBlbW90aWNvbnMgfSA9IGVtb2ppRGF0YTtcbiAgICAgIGNvbnN0IGlkID0gc2hvcnRfbmFtZXNbMF07XG5cbiAgICAgIGVtb3RpY29ucy5mb3JFYWNoKGVtb3RpY29uID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZW1vdGljb25zTGlzdFtlbW90aWNvbl0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtb3RpY29uc0xpc3RbZW1vdGljb25dID0gaWQ7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5lbW9qaXNMaXN0W2lkXSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldFNhbml0aXplZERhdGEoaWQpO1xuICAgICAgdGhpcy5vcmlnaW5hbFBvb2xbaWRdID0gZW1vamlEYXRhO1xuICAgIH1cbiAgfVxuXG4gIGFkZEN1c3RvbVRvUG9vbChjdXN0b206IGFueSwgcG9vbDogYW55KSB7XG4gICAgY3VzdG9tLmZvckVhY2goKGVtb2ppOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGVtb2ppSWQgPSBlbW9qaS5pZCB8fCBlbW9qaS5zaG9ydF9uYW1lc1swXTtcblxuICAgICAgaWYgKGVtb2ppSWQgJiYgIXBvb2xbZW1vamlJZF0pIHtcbiAgICAgICAgcG9vbFtlbW9qaUlkXSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldERhdGEoZW1vamkpO1xuICAgICAgICB0aGlzLmVtb2ppc0xpc3RbZW1vamlJZF0gPSB0aGlzLmVtb2ppU2VydmljZS5nZXRTYW5pdGl6ZWREYXRhKGVtb2ppKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaChcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIGVtb2ppc1RvU2hvd0ZpbHRlcj86ICh4OiBhbnkpID0+IGJvb2xlYW4sXG4gICAgbWF4UmVzdWx0cyA9IDc1LFxuICAgIGluY2x1ZGU6IGFueVtdID0gW10sXG4gICAgZXhjbHVkZTogYW55W10gPSBbXSxcbiAgICBjdXN0b206IGFueVtdID0gW10sXG4gICk6IEVtb2ppRGF0YVtdIHwgbnVsbCB7XG4gICAgdGhpcy5hZGRDdXN0b21Ub1Bvb2woY3VzdG9tLCB0aGlzLm9yaWdpbmFsUG9vbCk7XG5cbiAgICBsZXQgcmVzdWx0czogRW1vamlEYXRhW10gfCB1bmRlZmluZWQ7XG4gICAgbGV0IHBvb2wgPSB0aGlzLm9yaWdpbmFsUG9vbDtcblxuICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJy0nIHx8IHZhbHVlID09PSAnLTEnKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5lbW9qaXNMaXN0WyctMSddXTtcbiAgICAgIH1cblxuICAgICAgbGV0IHZhbHVlcyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHN8LHxcXC18X10rLyk7XG4gICAgICBsZXQgYWxsUmVzdWx0cyA9IFtdO1xuXG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluY2x1ZGUubGVuZ3RoIHx8IGV4Y2x1ZGUubGVuZ3RoKSB7XG4gICAgICAgIHBvb2wgPSB7fTtcblxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzSW5jbHVkZWQgPVxuICAgICAgICAgICAgaW5jbHVkZSAmJiBpbmNsdWRlLmxlbmd0aFxuICAgICAgICAgICAgICA/IGluY2x1ZGUuaW5kZXhPZihjYXRlZ29yeS5pZCkgPiAtMVxuICAgICAgICAgICAgICA6IHRydWU7XG4gICAgICAgICAgY29uc3QgaXNFeGNsdWRlZCA9XG4gICAgICAgICAgICBleGNsdWRlICYmIGV4Y2x1ZGUubGVuZ3RoXG4gICAgICAgICAgICAgID8gZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXRlZ29yeS5lbW9qaXMhLmZvckVhY2goXG4gICAgICAgICAgICBlbW9qaUlkID0+IChwb29sW2Vtb2ppSWRdID0gdGhpcy5lbW9qaVNlcnZpY2UubmFtZXNbZW1vamlJZF0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjdXN0b20ubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgY3VzdG9tSXNJbmNsdWRlZCA9XG4gICAgICAgICAgICBpbmNsdWRlICYmIGluY2x1ZGUubGVuZ3RoID8gaW5jbHVkZS5pbmRleE9mKCdjdXN0b20nKSA+IC0xIDogdHJ1ZTtcbiAgICAgICAgICBjb25zdCBjdXN0b21Jc0V4Y2x1ZGVkID1cbiAgICAgICAgICAgIGV4Y2x1ZGUgJiYgZXhjbHVkZS5sZW5ndGggPyBleGNsdWRlLmluZGV4T2YoJ2N1c3RvbScpID4gLTEgOiBmYWxzZTtcbiAgICAgICAgICBpZiAoY3VzdG9tSXNJbmNsdWRlZCAmJiAhY3VzdG9tSXNFeGNsdWRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDdXN0b21Ub1Bvb2woY3VzdG9tLCBwb29sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWxsUmVzdWx0cyA9IHZhbHVlc1xuICAgICAgICAubWFwKHYgPT4ge1xuICAgICAgICAgIGxldCBhUG9vbCA9IHBvb2w7XG4gICAgICAgICAgbGV0IGFJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG5cbiAgICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2Lmxlbmd0aDsgY2hhckluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSB2W2NoYXJJbmRleF07XG4gICAgICAgICAgICBsZW5ndGgrKztcbiAgICAgICAgICAgIGlmICghYUluZGV4W2NoYXJdKSB7XG4gICAgICAgICAgICAgIGFJbmRleFtjaGFyXSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYUluZGV4ID0gYUluZGV4W2NoYXJdO1xuXG4gICAgICAgICAgICBpZiAoIWFJbmRleC5yZXN1bHRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNjb3JlczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuXG4gICAgICAgICAgICAgIGFJbmRleC5yZXN1bHRzID0gW107XG4gICAgICAgICAgICAgIGFJbmRleC5wb29sID0ge307XG5cbiAgICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBPYmplY3Qua2V5cyhhUG9vbCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbW9qaSA9IGFQb29sW2lkXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZW1vamlTZWFyY2hbaWRdKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmVtb2ppU2VhcmNoW2lkXSA9IHRoaXMuYnVpbGRTZWFyY2goXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppLnNob3J0X25hbWVzLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaS5rZXl3b3JkcyxcbiAgICAgICAgICAgICAgICAgICAgZW1vamkuZW1vdGljb25zLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmVtb2ppU2VhcmNoW2lkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWIgPSB2LnN1YnN0cigwLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YkluZGV4ID0gcXVlcnkuaW5kZXhPZihzdWIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgaWYgKHN1YiA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBhSW5kZXgucmVzdWx0cy5wdXNoKHRoaXMuZW1vamlzTGlzdFtpZF0pO1xuICAgICAgICAgICAgICAgICAgYUluZGV4LnBvb2xbaWRdID0gZW1vamk7XG5cbiAgICAgICAgICAgICAgICAgIHNjb3Jlc1tpZF0gPSBzY29yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhSW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYVNjb3JlID0gc2NvcmVzW2EuaWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJTY29yZSA9IHNjb3Jlc1tiLmlkXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhUG9vbCA9IGFJbmRleC5wb29sO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhSW5kZXgucmVzdWx0cztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihhID0+IGEpO1xuXG4gICAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJlc3VsdHMgPSBpbnRlcnNlY3QuYXBwbHkobnVsbCwgYWxsUmVzdWx0cyk7XG4gICAgICB9IGVsc2UgaWYgKGFsbFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMgPSBhbGxSZXN1bHRzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICBpZiAoZW1vamlzVG9TaG93RmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcigocmVzdWx0OiBFbW9qaURhdGEpID0+XG4gICAgICAgICAgZW1vamlzVG9TaG93RmlsdGVyKHRoaXMuZW1vamlTZXJ2aWNlLm5hbWVzW3Jlc3VsdC5pZF0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IG1heFJlc3VsdHMpIHtcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzIHx8IG51bGw7XG4gIH1cblxuICBidWlsZFNlYXJjaChcbiAgICBzaG9ydF9uYW1lczogc3RyaW5nW10sXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGtleXdvcmRzOiBzdHJpbmdbXSxcbiAgICBlbW90aWNvbnM6IHN0cmluZ1tdLFxuICApIHtcbiAgICBjb25zdCBzZWFyY2g6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBhZGRUb1NlYXJjaCA9IChzdHJpbmdzOiBzdHJpbmcgfCBzdHJpbmdbXSwgc3BsaXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3RyaW5ncykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIChBcnJheS5pc0FycmF5KHN0cmluZ3MpID8gc3RyaW5ncyA6IFtzdHJpbmdzXSkuZm9yRWFjaChzdHJpbmcgPT4ge1xuICAgICAgICAoc3BsaXQgPyBzdHJpbmcuc3BsaXQoL1stfF98XFxzXSsvKSA6IFtzdHJpbmddKS5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoIXNlYXJjaC5pbmNsdWRlcyhzKSkge1xuICAgICAgICAgICAgc2VhcmNoLnB1c2gocyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhZGRUb1NlYXJjaChzaG9ydF9uYW1lcywgdHJ1ZSk7XG4gICAgYWRkVG9TZWFyY2gobmFtZSwgdHJ1ZSk7XG4gICAgYWRkVG9TZWFyY2goa2V5d29yZHMsIGZhbHNlKTtcbiAgICBhZGRUb1NlYXJjaChlbW90aWNvbnMsIGZhbHNlKTtcblxuICAgIHJldHVybiBzZWFyY2guam9pbignLCcpO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbW9qaURhdGEsIEVtb2ppU2VydmljZSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLXByZXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3XCIgKm5nSWY9XCJlbW9qaSAmJiBlbW9qaURhdGFcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICA8bmd4LWVtb2ppIFtlbW9qaV09XCJlbW9qaVwiIFtzaXplXT1cIjM4XCJcbiAgICAgICAgW25hdGl2ZV09XCJlbW9qaU5hdGl2ZVwiXG4gICAgICAgIFtza2luXT1cImVtb2ppU2tpblwiXG4gICAgICAgIFtzaXplXT1cImVtb2ppU2l6ZVwiXG4gICAgICAgIFtzZXRdPVwiZW1vamlTZXRcIlxuICAgICAgICBbc2hlZXRTaXplXT1cImVtb2ppU2hlZXRTaXplXCJcbiAgICAgICAgW2JhY2tncm91bmRJbWFnZUZuXT1cImVtb2ppQmFja2dyb3VuZEltYWdlRm5cIj5cbiAgICAgIDwvbmd4LWVtb2ppPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LW5hbWVcIj57eyBlbW9qaURhdGEubmFtZSB9fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVzXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiICpuZ0Zvcj1cImxldCBzaG9ydF9uYW1lIG9mIGVtb2ppRGF0YS5zaG9ydF9uYW1lc1wiPlxuICAgICAgICAgIDp7eyBzaG9ydF9uYW1lIH19OlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25zXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCIgKm5nRm9yPVwibGV0IGVtb3RpY29uIG9mIGxpc3RlZEVtb3RpY29uc1wiPlxuICAgICAgICAgIHt7IGVtb3RpY29uIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3XCIgKm5nSWY9XCIhZW1vamlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XG4gICAgICA8bmd4LWVtb2ppICpuZ0lmPVwiaWRsZUVtb2ppICYmIGlkbGVFbW9qaS5sZW5ndGhcIlxuICAgICAgICBbbmF0aXZlXT1cImVtb2ppTmF0aXZlXCJcbiAgICAgICAgW3NraW5dPVwiZW1vamlTa2luXCJcbiAgICAgICAgW3NldF09XCJlbW9qaVNldFwiXG4gICAgICAgIFtlbW9qaV09XCJpZGxlRW1vamlcIlxuICAgICAgICBbYmFja2dyb3VuZEltYWdlRm5dPVwiZW1vamlCYWNrZ3JvdW5kSW1hZ2VGblwiXG4gICAgICAgIFtzaXplXT1cIjM4XCI+XG4gICAgICA8L25neC1lbW9qaT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJlbW9qaS1tYXJ0LXRpdGxlLWxhYmVsXCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCI+XG4gICAgICA8ZW1vamktc2tpbnMgW3NraW5dPVwiZW1vamlTa2luXCIgKGNoYW5nZSk9XCJza2luQ2hhbmdlLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgPC9lbW9qaS1za2lucz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHRpdGxlOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppOiBhbnk7XG4gIEBJbnB1dCgpIGlkbGVFbW9qaTogYW55O1xuICBASW5wdXQoKSBlbW9qaU5hdGl2ZTogYW55O1xuICBASW5wdXQoKSBlbW9qaVNpemU6IGFueTtcbiAgQElucHV0KCkgZW1vamlTa2luOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppU2V0OiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppU2hlZXRTaXplOiBhbnk7XG4gIEBJbnB1dCgpIGVtb2ppQmFja2dyb3VuZEltYWdlRm46IGFueTtcbiAgQE91dHB1dCgpIHNraW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgZW1vamlEYXRhOiBQYXJ0aWFsPEVtb2ppRGF0YT4gPSB7fTtcbiAgbGlzdGVkRW1vdGljb25zPzogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBlbW9qaVNlcnZpY2U6IEVtb2ppU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5lbW9qaSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVtb2ppRGF0YSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldERhdGEodGhpcy5lbW9qaSwgdGhpcy5lbW9qaVNraW4sIHRoaXMuZW1vamlTZXQpITtcbiAgICBjb25zdCBrbm93bkVtb3RpY29uczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBsaXN0ZWRFbW90aWNvbnM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgZW1vaXRjb25zID0gdGhpcy5lbW9qaURhdGEuZW1vdGljb25zIHx8IFtdO1xuICAgIGVtb2l0Y29ucy5mb3JFYWNoKChlbW90aWNvbjogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoa25vd25FbW90aWNvbnMuaW5kZXhPZihlbW90aWNvbi50b0xvd2VyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAga25vd25FbW90aWNvbnMucHVzaChlbW90aWNvbi50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIGxpc3RlZEVtb3RpY29ucy5wdXNoKGVtb3RpY29uKTtcbiAgICB9KTtcbiAgICB0aGlzLmxpc3RlZEVtb3RpY29ucyA9IGxpc3RlZEVtb3RpY29ucztcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbW9qaVNlYXJjaCB9IGZyb20gJy4vZW1vamktc2VhcmNoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbW9qaS1zZWFyY2gnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1zZWFyY2hcIj5cbiAgICA8aW5wdXQgI2lucHV0UmVmIHR5cGU9XCJ0ZXh0XCJcbiAgICAgIChrZXl1cC5lbnRlcik9XCJoYW5kbGVFbnRlcktleSgkZXZlbnQpXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJpMThuLnNlYXJjaFwiIFthdXRvZm9jdXNdPVwiYXV0b0ZvY3VzXCJcbiAgICAgIFsobmdNb2RlbCldPVwicXVlcnlcIiAobmdNb2RlbENoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoKVwiXG4gICAgLz5cbiAgPC9kaXY+XG4gIGAsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgbWF4UmVzdWx0cyA9IDc1O1xuICBASW5wdXQoKSBhdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgaTE4bjogYW55O1xuICBASW5wdXQoKSBpbmNsdWRlOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBleGNsdWRlOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBjdXN0b206IGFueVtdID0gW107XG4gIEBJbnB1dCgpIGVtb2ppc1RvU2hvd0ZpbHRlcj86ICh4OiBhbnkpID0+IGJvb2xlYW47XG4gIEBPdXRwdXQoKSBzZWFyY2ggPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVudGVyS2V5ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0UmVmJykgcHJpdmF0ZSBpbnB1dFJlZj86IEVsZW1lbnRSZWY7XG4gIHF1ZXJ5ID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbW9qaVNlYXJjaDogRW1vamlTZWFyY2gpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cyAmJiB0aGlzLmlucHV0UmVmKSB7XG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5xdWVyeSA9ICcnO1xuICB9XG4gIGhhbmRsZUVudGVyS2V5KCRldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmVudGVyS2V5LmVtaXQoJGV2ZW50KTtcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICBoYW5kbGVDaGFuZ2UoKSB7XG4gICAgdGhpcy5zZWFyY2guZW1pdChcbiAgICAgIHRoaXMuZW1vamlTZWFyY2guc2VhcmNoKFxuICAgICAgICB0aGlzLnF1ZXJ5LFxuICAgICAgICB0aGlzLmVtb2ppc1RvU2hvd0ZpbHRlcixcbiAgICAgICAgdGhpcy5tYXhSZXN1bHRzLFxuICAgICAgICB0aGlzLmluY2x1ZGUsXG4gICAgICAgIHRoaXMuZXhjbHVkZSxcbiAgICAgICAgdGhpcy5jdXN0b20sXG4gICAgICApLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIGNhdGVnb3JpZXMsXG4gIEVtb2ppLFxuICBFbW9qaUNhdGVnb3J5LFxuICBFbW9qaURhdGEsXG4gIEVtb2ppRXZlbnQsXG59IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgeyBDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEVtb2ppRnJlcXVlbnRseVNlcnZpY2UgfSBmcm9tICcuL2Vtb2ppLWZyZXF1ZW50bHkuc2VydmljZSc7XG5pbXBvcnQgeyBQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgbWVhc3VyZVNjcm9sbGJhciB9IGZyb20gJy4vdXRpbHMnO1xuXG5cblxuY29uc3QgSTE4TjogYW55ID0ge1xuICBzZWFyY2g6ICdTZWFyY2gnLFxuICBub3Rmb3VuZDogJ05vIEVtb2ppIEZvdW5kJyxcbiAgY2F0ZWdvcmllczoge1xuICAgIHNlYXJjaDogJ1NlYXJjaCBSZXN1bHRzJyxcbiAgICByZWNlbnQ6ICdGcmVxdWVudGx5IFVzZWQnLFxuICAgIHBlb3BsZTogJ1NtaWxleXMgJiBQZW9wbGUnLFxuICAgIG5hdHVyZTogJ0FuaW1hbHMgJiBOYXR1cmUnLFxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcbiAgICBhY3Rpdml0eTogJ0FjdGl2aXR5JyxcbiAgICBwbGFjZXM6ICdUcmF2ZWwgJiBQbGFjZXMnLFxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcbiAgICBzeW1ib2xzOiAnU3ltYm9scycsXG4gICAgZmxhZ3M6ICdGbGFncycsXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcbiAgfSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vtb2ppLW1hcnQnLFxuICB0ZW1wbGF0ZTogYDxkaXZcbiAgW3N0eWxlLndpZHRoLnB4XT1cInBlckxpbmUgKiAoZW1vamlTaXplICsgMTIpICsgMTIgKyAyICsgbWVhc3VyZVNjcm9sbGJhclwiXG4gIFtuZ1N0eWxlXT1cInN0eWxlXCJcbiAgY2xhc3M9XCJlbW9qaS1tYXJ0XCI+XG4gIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhclwiPlxuICAgIDxlbW9qaS1tYXJ0LWFuY2hvcnNcbiAgICAgIFtjYXRlZ29yaWVzXT1cImNhdGVnb3JpZXNcIlxuICAgICAgKGFuY2hvckNsaWNrKT1cImhhbmRsZUFuY2hvckNsaWNrKCRldmVudClcIlxuICAgICAgW2NvbG9yXT1cImNvbG9yXCJcbiAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZFwiXG4gICAgICBbaTE4bl09XCJpMThuXCJcbiAgICA+XG4gICAgPC9lbW9qaS1tYXJ0LWFuY2hvcnM+XG4gIDwvZGl2PlxuICA8ZW1vamktc2VhcmNoXG4gICAgI3NlYXJjaFJlZlxuICAgIFtpMThuXT1cImkxOG5cIlxuICAgIChzZWFyY2gpPVwiaGFuZGxlU2VhcmNoKCRldmVudClcIlxuICAgIChlbnRlcktleSk9XCJoYW5kbGVFbnRlcktleSgkZXZlbnQpXCJcbiAgICBbaW5jbHVkZV09XCJpbmNsdWRlXCJcbiAgICBbZXhjbHVkZV09XCJleGNsdWRlXCJcbiAgICBbY3VzdG9tXT1cImN1c3RvbVwiXG4gICAgW2F1dG9Gb2N1c109XCJhdXRvRm9jdXNcIlxuICAgIFtlbW9qaXNUb1Nob3dGaWx0ZXJdPVwiZW1vamlzVG9TaG93RmlsdGVyXCJcbiAgPlxuICA8L2Vtb2ppLXNlYXJjaD5cbiAgPGRpdlxuICAgICNzY3JvbGxSZWZcbiAgICBjbGFzcz1cImVtb2ppLW1hcnQtc2Nyb2xsXCJcbiAgICAoc2Nyb2xsKT1cImhhbmRsZVNjcm9sbCgpXCJcbiAgPlxuICAgIDxkaXYgZW1vamktY2F0ZWdvcnlcbiAgICAgICpuZ0Zvcj1cImxldCBjYXRlZ29yeSBvZiBhY3RpdmVDYXRlZ29yaWVzOyBsZXQgaWR4ID0gaW5kZXg7IHRyYWNrQnk6IGNhdGVnb3J5VHJhY2tcIlxuICAgICAgI2NhdGVnb3J5UmVmXG4gICAgICBbaWRdPVwiY2F0ZWdvcnkuaWRcIlxuICAgICAgW25hbWVdPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICBbZW1vamlzXT1cImNhdGVnb3J5LmVtb2ppc1wiXG4gICAgICBbcGVyTGluZV09XCJwZXJMaW5lXCJcbiAgICAgIFtuYXRpdmVdPVwibmF0aXZlXCJcbiAgICAgIFtoYXNTdGlja3lQb3NpdGlvbl09XCJuYXRpdmVcIlxuICAgICAgW2kxOG5dPVwiaTE4blwiXG4gICAgICBbaGlkZU9ic29sZXRlXT1cImhpZGVPYnNvbGV0ZVwiXG4gICAgICBbY3VzdG9tXT1cImNhdGVnb3J5LmlkID09IFJFQ0VOVF9DQVRFR09SWS5pZCA/IENVU1RPTV9DQVRFR09SWS5lbW9qaXMgOiB1bmRlZmluZWRcIlxuICAgICAgW3JlY2VudF09XCJjYXRlZ29yeS5pZCA9PSBSRUNFTlRfQ0FURUdPUlkuaWQgPyByZWNlbnQgOiB1bmRlZmluZWRcIlxuXG4gICAgICBbZW1vamlOYXRpdmVdPVwibmF0aXZlXCJcbiAgICAgIFtlbW9qaVNraW5dPVwic2tpblwiXG4gICAgICBbZW1vamlTaXplXT1cImVtb2ppU2l6ZVwiXG4gICAgICBbZW1vamlTZXRdPVwic2V0XCJcbiAgICAgIFtlbW9qaVNoZWV0U2l6ZV09XCJzaGVldFNpemVcIlxuICAgICAgW2Vtb2ppRm9yY2VTaXplXT1cIm5hdGl2ZVwiXG4gICAgICBbZW1vamlUb29sdGlwXT1cImVtb2ppVG9vbHRpcFwiXG4gICAgICAoZW1vamlPdmVyKT1cImhhbmRsZUVtb2ppT3ZlcigkZXZlbnQpXCJcbiAgICAgIChlbW9qaUxlYXZlKT1cImhhbmRsZUVtb2ppTGVhdmUoJGV2ZW50KVwiXG4gICAgICAoZW1vamlDbGljayk9XCJoYW5kbGVFbW9qaUNsaWNrKCRldmVudClcIlxuICAgID5cbiAgICA8L2Rpdj5cblxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiZW1vamktbWFydC1iYXJcIiAqbmdJZj1cInNob3dQcmV2aWV3XCI+XG4gIDxlbW9qaS1wcmV2aWV3XG4gICAgI3ByZXZpZXdSZWZcbiAgICBbdGl0bGVdPVwidGl0bGVcIlxuICAgIFtlbW9qaV09XCJwcmV2aWV3RW1vamlcIlxuICAgIFtpZGxlRW1vamldPVwiZW1vamlcIlxuXG4gICAgW2Vtb2ppTmF0aXZlXT1cIm5hdGl2ZVwiXG4gICAgW2Vtb2ppU2l6ZV09XCIzOFwiXG4gICAgW2Vtb2ppU2tpbl09XCJza2luXCJcbiAgICBbZW1vamlTZXRdPVwic2V0XCJcbiAgICBbZW1vamlTaGVldFNpemVdPVwic2hlZXRTaXplXCJcbiAgICBbZW1vamlCYWNrZ3JvdW5kSW1hZ2VGbl09XCJiYWNrZ3JvdW5kSW1hZ2VGblwiXG4gICAgKHNraW5DaGFuZ2UpPVwiaGFuZGxlU2tpbkNoYW5nZSgkZXZlbnQpXCJcbiAgPjwvZW1vamktcHJldmlldz5cbjwvZGl2PlxuYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwZXJMaW5lID0gOTtcbiAgQElucHV0KCkgaTE4bjogYW55ID0ge307XG4gIEBJbnB1dCgpIHN0eWxlOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgdGl0bGUgPSAnRW1vamkgTWFydMOiwoTCoic7XG4gIEBJbnB1dCgpIGVtb2ppID0gJ2RlcGFydG1lbnRfc3RvcmUnO1xuICBASW5wdXQoKSBjb2xvciA9ICcjYWU2NWM1JztcbiAgQElucHV0KCkgaGlkZU9ic29sZXRlID0gdHJ1ZTtcbiAgLyoqIGFsbCBjYXRlZ29yaWVzIHNob3duICovXG4gIEBJbnB1dCgpIGNhdGVnb3JpZXM6IEVtb2ppQ2F0ZWdvcnlbXSA9IFtdO1xuICAvKiogdXNlZCB0byB0ZW1wb3JhcmlseSBkcmF3IGNhdGVnb3JpZXMgKi9cbiAgQElucHV0KCkgYWN0aXZlQ2F0ZWdvcmllczogRW1vamlDYXRlZ29yeVtdID0gW107XG4gIEBJbnB1dCgpIHNldDogRW1vamlbJ3NldCddID0gJ2FwcGxlJztcbiAgQElucHV0KCkgc2tpbjogRW1vamlbJ3NraW4nXSA9IDE7XG4gIEBJbnB1dCgpIG5hdGl2ZTogRW1vamlbJ25hdGl2ZSddID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVtb2ppU2l6ZTogRW1vamlbJ3NpemUnXSA9IDI0O1xuICBASW5wdXQoKSBzaGVldFNpemU6IEVtb2ppWydzaGVldFNpemUnXSA9IDY0O1xuICBASW5wdXQoKSBlbW9qaXNUb1Nob3dGaWx0ZXI/OiAoeDogc3RyaW5nKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93UHJldmlldyA9IHRydWU7XG4gIEBJbnB1dCgpIGVtb2ppVG9vbHRpcCA9IGZhbHNlO1xuICBASW5wdXQoKSBhdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgY3VzdG9tOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBoaWRlUmVjZW50ID0gdHJ1ZTtcbiAgQElucHV0KCkgaW5jbHVkZT86IHN0cmluZ1tdO1xuICBASW5wdXQoKSBleGNsdWRlPzogc3RyaW5nW107XG4gIEBPdXRwdXQoKSBlbW9qaUNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlbW9qaVNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAVmlld0NoaWxkKCdzY3JvbGxSZWYnKSBwcml2YXRlIHNjcm9sbFJlZj86IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3ByZXZpZXdSZWYnKSBwcml2YXRlIHByZXZpZXdSZWY/OiBQcmV2aWV3Q29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdzZWFyY2hSZWYnKSBwcml2YXRlIHNlYXJjaFJlZj86IFNlYXJjaENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZHJlbignY2F0ZWdvcnlSZWYnKVxuICBwcml2YXRlIGNhdGVnb3J5UmVmcz86IFF1ZXJ5TGlzdDxDYXRlZ29yeUNvbXBvbmVudD47XG4gIHNjcm9sbEhlaWdodCA9IDA7XG4gIGNsaWVudEhlaWdodCA9IDA7XG4gIHNlbGVjdGVkPzogc3RyaW5nO1xuICBuZXh0U2Nyb2xsPzogc3RyaW5nO1xuICBzY3JvbGxUb3A/OiBudW1iZXI7XG4gIGZpcnN0UmVuZGVyID0gdHJ1ZTtcbiAgcmVjZW50Pzogc3RyaW5nW107XG4gIHByZXZpZXdFbW9qaTogYW55O1xuICBsZWF2ZVRpbWVvdXQ6IGFueTtcbiAgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnO1xuICBtZWFzdXJlU2Nyb2xsYmFyID0gMDtcbiAgUkVDRU5UX0NBVEVHT1JZOiBFbW9qaUNhdGVnb3J5ID0ge1xuICAgIGlkOiAncmVjZW50JyxcbiAgICBuYW1lOiAnUmVjZW50JyxcbiAgICBlbW9qaXM6IG51bGwsXG4gIH07XG4gIFNFQVJDSF9DQVRFR09SWTogRW1vamlDYXRlZ29yeSA9IHtcbiAgICBpZDogJ3NlYXJjaCcsXG4gICAgbmFtZTogJ1NlYXJjaCcsXG4gICAgZW1vamlzOiBudWxsLFxuICAgIGFuY2hvcjogZmFsc2UsXG4gIH07XG4gIENVU1RPTV9DQVRFR09SWTogRW1vamlDYXRlZ29yeSA9IHtcbiAgICBpZDogJ2N1c3RvbScsXG4gICAgbmFtZTogJ0N1c3RvbScsXG4gICAgZW1vamlzOiBbXSxcbiAgfTtcblxuICBASW5wdXQoKVxuICBiYWNrZ3JvdW5kSW1hZ2VGbjogRW1vamlbJ2JhY2tncm91bmRJbWFnZUZuJ10gPSAoXG4gICAgc2V0OiBzdHJpbmcsXG4gICAgc2hlZXRTaXplOiBudW1iZXIsXG4gICkgPT5cbiAgICBgaHR0cHM6Ly91bnBrZy5jb20vZW1vamktZGF0YXNvdXJjZS0ke3RoaXMuc2V0fUA0LjAuNC9pbWcvJHtcbiAgICAgIHRoaXMuc2V0XG4gICAgfS9zaGVldHMtMjU2LyR7dGhpcy5zaGVldFNpemV9LnBuZ2BcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBmcmVxdWVudGx5OiBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gbWVhc3VyZSBzY3JvbGxcbiAgICB0aGlzLm1lYXN1cmVTY3JvbGxiYXIgPSBtZWFzdXJlU2Nyb2xsYmFyKCk7XG5cbiAgICB0aGlzLmkxOG4gPSB7IC4uLkkxOE4sIC4uLnRoaXMuaTE4biB9O1xuICAgIHRoaXMuaTE4bi5jYXRlZ29yaWVzID0geyAuLi5JMThOLmNhdGVnb3JpZXMsIC4uLnRoaXMuaTE4bi5jYXRlZ29yaWVzIH07XG4gICAgdGhpcy5za2luID1cbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5OQU1FU1BBQ0V9LnNraW5gKSB8fCAnbnVsbCcpIHx8XG4gICAgICB0aGlzLnNraW47XG5cbiAgICBjb25zdCBhbGxDYXRlZ29yaWVzID0gWy4uLmNhdGVnb3JpZXNdO1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuQ1VTVE9NX0NBVEVHT1JZLmVtb2ppcyA9IHRoaXMuY3VzdG9tLm1hcChlbW9qaSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uZW1vamksXG4gICAgICAgICAgLy8gYDxDYXRlZ29yeSAvPmAgZXhwZWN0cyBlbW9qaSB0byBoYXZlIGFuIGBpZGAuXG4gICAgICAgICAgaWQ6IGVtb2ppLnNob3J0X25hbWVzWzBdLFxuICAgICAgICAgIGN1c3RvbTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBhbGxDYXRlZ29yaWVzLnB1c2godGhpcy5DVVNUT01fQ0FURUdPUlkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluY2x1ZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWxsQ2F0ZWdvcmllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmluY2x1ZGUhLmluZGV4T2YoYS5pZCkgPiB0aGlzLmluY2x1ZGUhLmluZGV4T2YoYi5pZCkpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGFsbENhdGVnb3JpZXMpIHtcbiAgICAgIGNvbnN0IGlzSW5jbHVkZWQgPVxuICAgICAgICB0aGlzLmluY2x1ZGUgJiYgdGhpcy5pbmNsdWRlLmxlbmd0aFxuICAgICAgICAgID8gdGhpcy5pbmNsdWRlLmluZGV4T2YoY2F0ZWdvcnkuaWQpID4gLTFcbiAgICAgICAgICA6IHRydWU7XG4gICAgICBjb25zdCBpc0V4Y2x1ZGVkID1cbiAgICAgICAgdGhpcy5leGNsdWRlICYmIHRoaXMuZXhjbHVkZS5sZW5ndGhcbiAgICAgICAgICA/IHRoaXMuZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgOiBmYWxzZTtcbiAgICAgIGlmICghaXNJbmNsdWRlZCB8fCBpc0V4Y2x1ZGVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5lbW9qaXNUb1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgbmV3RW1vamlzID0gW107XG5cbiAgICAgICAgY29uc3QgeyBlbW9qaXMgfSA9IGNhdGVnb3J5O1xuICAgICAgICBmb3IgKGxldCBlbW9qaUluZGV4ID0gMDsgZW1vamlJbmRleCA8IGVtb2ppcyEubGVuZ3RoOyBlbW9qaUluZGV4KyspIHtcbiAgICAgICAgICBjb25zdCBlbW9qaSA9IGVtb2ppcyFbZW1vamlJbmRleF07XG4gICAgICAgICAgaWYgKHRoaXMuZW1vamlzVG9TaG93RmlsdGVyKGVtb2ppKSkge1xuICAgICAgICAgICAgbmV3RW1vamlzLnB1c2goZW1vamkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdFbW9qaXMubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgbmV3Q2F0ZWdvcnkgPSB7XG4gICAgICAgICAgICBlbW9qaXM6IG5ld0Vtb2ppcyxcbiAgICAgICAgICAgIG5hbWU6IGNhdGVnb3J5Lm5hbWUsXG4gICAgICAgICAgICBpZDogY2F0ZWdvcnkuaWQsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKG5ld0NhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluY2x1ZGVSZWNlbnQgPVxuICAgICAgdGhpcy5pbmNsdWRlICYmIHRoaXMuaW5jbHVkZS5sZW5ndGhcbiAgICAgICAgPyB0aGlzLmluY2x1ZGUuaW5kZXhPZih0aGlzLlJFQ0VOVF9DQVRFR09SWS5pZCkgPiAtMVxuICAgICAgICA6IHRydWU7XG4gICAgY29uc3QgZXhjbHVkZVJlY2VudCA9XG4gICAgICB0aGlzLmV4Y2x1ZGUgJiYgdGhpcy5leGNsdWRlLmxlbmd0aFxuICAgICAgICA/IHRoaXMuZXhjbHVkZS5pbmRleE9mKHRoaXMuUkVDRU5UX0NBVEVHT1JZLmlkKSA+IC0xXG4gICAgICAgIDogZmFsc2U7XG4gICAgaWYgKGluY2x1ZGVSZWNlbnQgJiYgIWV4Y2x1ZGVSZWNlbnQpIHtcbiAgICAgIHRoaXMuaGlkZVJlY2VudCA9IGZhbHNlO1xuICAgICAgdGhpcy5jYXRlZ29yaWVzLnVuc2hpZnQodGhpcy5SRUNFTlRfQ0FURUdPUlkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNhdGVnb3JpZXNbMF0pIHtcbiAgICAgIHRoaXMuY2F0ZWdvcmllc1swXS5maXJzdCA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5jYXRlZ29yaWVzLnVuc2hpZnQodGhpcy5TRUFSQ0hfQ0FURUdPUlkpO1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmNhdGVnb3JpZXMuZmlsdGVyKGNhdGVnb3J5ID0+IGNhdGVnb3J5LmZpcnN0KVswXS5uYW1lO1xuXG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzLnNsaWNlKDAsIDMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWVzO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNhdGVnb3JpZXNTaXplKCk7XG4gICAgfSk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudXBkYXRlQ2F0ZWdvcmllc1NpemUoKTtcbiAgfVxuICB1cGRhdGVDYXRlZ29yaWVzU2l6ZSgpIHtcbiAgICB0aGlzLmNhdGVnb3J5UmVmcyEuZm9yRWFjaChjb21wb25lbnQgPT4gY29tcG9uZW50Lm1lbW9pemVTaXplKCkpO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsUmVmKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnNjcm9sbFJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5zY3JvbGxIZWlnaHQgPSB0YXJnZXQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgdGhpcy5jbGllbnRIZWlnaHQgPSB0YXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgfVxuICBoYW5kbGVBbmNob3JDbGljaygkZXZlbnQ6IHsgY2F0ZWdvcnk6IEVtb2ppQ2F0ZWdvcnk7IGluZGV4OiBudW1iZXIgfSkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY2F0ZWdvcnlSZWZzIS5maW5kKG4gPT4gbi5pZCA9PT0gJGV2ZW50LmNhdGVnb3J5LmlkKTtcblxuICAgIGlmICh0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMpIHtcbiAgICAgIHRoaXMuaGFuZGxlU2VhcmNoKG51bGwpO1xuICAgICAgdGhpcy5zZWFyY2hSZWYhLmNsZWFyKCk7XG4gICAgfVxuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIGxldCB7IHRvcCB9ID0gY29tcG9uZW50O1xuXG4gICAgICBpZiAoJGV2ZW50LmNhdGVnb3J5LmZpcnN0KSB7XG4gICAgICAgIHRvcCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b3AgKz0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2Nyb2xsUmVmIS5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRvcDtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9ICRldmVudC5jYXRlZ29yeS5uYW1lO1xuICAgIHRoaXMubmV4dFNjcm9sbCA9ICRldmVudC5jYXRlZ29yeS5uYW1lO1xuICB9XG4gIGNhdGVnb3J5VHJhY2soaW5kZXg6IG51bWJlciwgaXRlbTogYW55KSB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH1cbiAgaGFuZGxlU2Nyb2xsKCkge1xuICAgIGlmICh0aGlzLm5leHRTY3JvbGwpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLm5leHRTY3JvbGw7XG4gICAgICB0aGlzLm5leHRTY3JvbGwgPSB1bmRlZmluZWQ7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5zY3JvbGxSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2F0ZWdvcnkgPSBudWxsO1xuICAgIGlmICh0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMpIHtcbiAgICAgIGFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5TRUFSQ0hfQ0FURUdPUlk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuc2Nyb2xsUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAvLyBjaGVjayBzY3JvbGwgaXMgbm90IGF0IGJvdHRvbVxuICAgICAgaWYgKHRhcmdldC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgLy8gaGl0IHRoZSBUT1BcbiAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXMuZmluZChuID0+IG4uZmlyc3QgPT09IHRydWUpO1xuICAgICAgfSBlbHNlIGlmICh0YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gdGFyZ2V0LnNjcm9sbFRvcCA9PT0gdGhpcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgLy8gc2Nyb2xsZWQgdG8gYm90dG9tIGFjdGl2YXRlIGxhc3QgY2F0ZWdvcnlcbiAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXNbdGhpcy5jYXRlZ29yaWVzLmxlbmd0aCAtIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2Nyb2xsaW5nXG4gICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgdGhpcy5jYXRlZ29yaWVzKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jYXRlZ29yeVJlZnMhLmZpbmQobiA9PiBuLmlkID09PSBjYXRlZ29yeS5pZCk7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gY29tcG9uZW50IS5oYW5kbGVTY3JvbGwodGFyZ2V0LnNjcm9sbFRvcCk7XG4gICAgICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxUb3AgPSB0YXJnZXQuc2Nyb2xsVG9wO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlQ2F0ZWdvcnkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBhY3RpdmVDYXRlZ29yeS5uYW1lO1xuICAgIH1cbiAgfVxuICBoYW5kbGVTZWFyY2goJGVtb2ppczogYW55KSB7XG4gICAgdGhpcy5TRUFSQ0hfQ0FURUdPUlkuZW1vamlzID0gJGVtb2ppcztcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmNhdGVnb3J5UmVmcyEudG9BcnJheSgpKSB7XG4gICAgICBpZiAoY29tcG9uZW50Lm5hbWUgPT09ICdTZWFyY2gnKSB7XG4gICAgICAgIGNvbXBvbmVudC5lbW9qaXMgPSAkZW1vamlzO1xuICAgICAgICBjb21wb25lbnQudXBkYXRlRGlzcGxheSgkZW1vamlzID8gJ2luaGVyaXQnIDogJ25vbmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC51cGRhdGVEaXNwbGF5KCRlbW9qaXMgPyAnbm9uZScgOiAnaW5oZXJpdCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB0aGlzLnNjcm9sbFJlZiEubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSAwO1xuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gIH1cblxuICBoYW5kbGVFbnRlcktleSgkZXZlbnQ6IEV2ZW50LCBlbW9qaT86IEVtb2ppRGF0YSkge1xuICAgIGlmICghZW1vamkpIHtcbiAgICAgIGlmICh0aGlzLlNFQVJDSF9DQVRFR09SWS5lbW9qaXMgIT09IG51bGwgJiYgdGhpcy5TRUFSQ0hfQ0FURUdPUlkuZW1vamlzLmxlbmd0aCkge1xuICAgICAgICBlbW9qaSA9IHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppc1swXTtcbiAgICAgICAgaWYgKGVtb2ppKSB7XG4gICAgICAgICAgdGhpcy5lbW9qaVNlbGVjdC5lbWl0KHsgJGV2ZW50LCBlbW9qaSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaGlkZVJlY2VudCAmJiAhdGhpcy5yZWNlbnQpIHtcbiAgICAgIHRoaXMuZnJlcXVlbnRseS5hZGQoKDxFbW9qaURhdGE+ZW1vamkpKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNhdGVnb3J5UmVmcyEudG9BcnJheSgpWzFdO1xuICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgIGNvbnN0IG1heE1hcmdpbiA9IGNvbXBvbmVudC5tYXhNYXJnaW47XG4gICAgICBjb21wb25lbnQuZW1vamlzID0gdGhpcy5mcmVxdWVudGx5LmdldChtYXhNYXJnaW4pO1xuICAgICAgY29tcG9uZW50LnJlZi5tYXJrRm9yQ2hlY2soKTtcblxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxSZWYpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50Lm1lbW9pemVTaXplKCk7XG4gICAgICAgIGlmIChtYXhNYXJnaW4gPT09IGNvbXBvbmVudC5tYXhNYXJnaW4pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUNhdGVnb3JpZXNTaXplKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuU0VBUkNIX0NBVEVHT1JZLmVtb2ppcykge1xuICAgICAgICAgIGNvbXBvbmVudC51cGRhdGVEaXNwbGF5KCdub25lJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBoYW5kbGVFbW9qaU92ZXIoJGV2ZW50OiBFbW9qaUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnNob3dQcmV2aWV3IHx8ICF0aGlzLnByZXZpZXdSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBlbW9qaURhdGEgPSB0aGlzLkNVU1RPTV9DQVRFR09SWS5lbW9qaXMhLmZpbmQoXG4gICAgICBjdXN0b21FbW9qaSA9PiBjdXN0b21FbW9qaS5pZCA9PT0gJGV2ZW50LmVtb2ppLmlkLFxuICAgICk7XG4gICAgaWYgKGVtb2ppRGF0YSkge1xuICAgICAgJGV2ZW50LmVtb2ppID0geyAuLi5lbW9qaURhdGEgfTtcbiAgICB9XG5cbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9ICRldmVudC5lbW9qaTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5sZWF2ZVRpbWVvdXQpO1xuICB9XG4gIGhhbmRsZUVtb2ppTGVhdmUoJGV2ZW50OiBFbW9qaUV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnNob3dQcmV2aWV3IHx8ICF0aGlzLnByZXZpZXdSZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxlYXZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5wcmV2aWV3RW1vamkgPSBudWxsO1xuICAgICAgdGhpcy5wcmV2aWV3UmVmIS5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMTYpO1xuICB9XG4gIGhhbmRsZUVtb2ppQ2xpY2soJGV2ZW50OiBFbW9qaUV2ZW50KSB7XG4gICAgdGhpcy5lbW9qaUNsaWNrLmVtaXQoJGV2ZW50KTtcbiAgICB0aGlzLmVtb2ppU2VsZWN0LmVtaXQoJGV2ZW50KTtcbiAgICB0aGlzLmhhbmRsZUVudGVyS2V5KCRldmVudC4kZXZlbnQsICRldmVudC5lbW9qaSk7XG4gIH1cbiAgaGFuZGxlU2tpbkNoYW5nZShza2luOiBFbW9qaVsnc2tpbiddKSB7XG4gICAgdGhpcy5za2luID0gc2tpbjtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0uc2tpbmAsIFN0cmluZyhza2luKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtb2ppIH0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW1vamktc2tpbnMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1za2luLXN3YXRjaGVzXCIgW2NsYXNzLmVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcy1vcGVuZWRdPVwib3BlbmVkXCI+XG4gICAgPHNwYW4gKm5nRm9yPVwibGV0IHNraW5Ub25lIG9mIHNraW5Ub25lc1wiIGNsYXNzPVwiZW1vamktbWFydC1za2luLXN3YXRjaFwiXG4gICAgICBbY2xhc3MuZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZF09XCJza2luVG9uZSA9PT0gc2tpblwiPlxuICAgICAgICA8c3BhbiAoY2xpY2spPVwidGhpcy5oYW5kbGVDbGljayhza2luVG9uZSlcIlxuICAgICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1za2luIGVtb2ppLW1hcnQtc2tpbi10b25lLXt7IHNraW5Ub25lIH19XCJcbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgU2tpbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNraW4/OiBFbW9qaVsnc2tpbiddO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIG9wZW5lZCA9IGZhbHNlO1xuICBza2luVG9uZXMgPSBbMSwgMiwgMywgNCwgNSwgNl07XG5cbiAgdG9nZ2xlT3BlbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKHNraW46IG51bWJlcikge1xuICAgIGlmICghdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICBpZiAoc2tpbiAhPT0gdGhpcy5za2luKSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHNraW4pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRW1vamlNb2R1bGUgfSBmcm9tICdAY3RybC9uZ3gtZW1vamktbWFydC9uZ3gtZW1vamknO1xuaW1wb3J0IHsgQW5jaG9yc0NvbXBvbmVudCB9IGZyb20gJy4vYW5jaG9ycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlDb21wb25lbnQgfSBmcm9tICcuL2NhdGVnb3J5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIH0gZnJvbSAnLi9lbW9qaS1mcmVxdWVudGx5LnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1vamlTZWFyY2ggfSBmcm9tICcuL2Vtb2ppLXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2tpbkNvbXBvbmVudCB9IGZyb20gJy4vc2tpbnMuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50czogYW55W10gPSBbXG4gIFBpY2tlckNvbXBvbmVudCxcbiAgQW5jaG9yc0NvbXBvbmVudCxcbiAgQ2F0ZWdvcnlDb21wb25lbnQsXG4gIFNlYXJjaENvbXBvbmVudCxcbiAgUHJldmlld0NvbXBvbmVudCxcbiAgU2tpbkNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBFbW9qaU1vZHVsZV0sXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcbiAgcHJvdmlkZXJzOiBbRW1vamlTZWFyY2gsIEVtb2ppRnJlcXVlbnRseVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBQaWNrZXJNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJTVkdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsdUJBQU0sSUFBSSxHQUFRO0lBQ2hCLFFBQVEsRUFBRSwwYUFBMGE7SUFFcGIsTUFBTSxFQUFFLDJGQUEyRjtJQUVuRyxLQUFLLEVBQUUsb0lBQW9JO0lBRTNJLEtBQUssRUFBRSxpZkFBaWY7SUFFeGYsTUFBTSxFQUFFLG94Q0FBb3hDO0lBRTV4QyxPQUFPLEVBQUUsc2hCQUFzaEI7SUFFL2hCLE1BQU0sRUFBRSxxTkFBcU47SUFFN04sTUFBTSxFQUFFLCttQkFBK21CO0lBRXZuQixNQUFNLEVBQUUsZ0hBQWdIO0lBRXhILE9BQU8sRUFBRSxvaUNBQW9pQztDQUM5aUMsQ0FBQzs7Ozs7O0FDckJGOzswQkF5Q3lDLEVBQUU7MkJBSWpCLElBQUksWUFBWSxFQUE4QztvQkFDMUVBLElBQUk7Ozs7Ozs7SUFFaEIsU0FBUyxDQUFDLEdBQVcsRUFBRSxHQUFrQjtRQUN2QyxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7S0FDZjs7Ozs7O0lBQ0QsV0FBVyxDQUFDLE1BQWEsRUFBRSxLQUFhO1FBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3BCLFFBQVEsRUFBRSxJ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