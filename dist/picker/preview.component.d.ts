import { ChangeDetectorRef, EventEmitter, OnChanges } from '@angular/core';
import { EmojiData, EmojiService } from '@ctrl/ngx-emoji-mart/ngx-emoji';
export declare class PreviewComponent implements OnChanges {
    ref: ChangeDetectorRef;
    private emojiService;
    title: any;
    emoji: any;
    idleEmoji: any;
    emojiNative: any;
    emojiSize: any;
    emojiSkin: any;
    emojiSet: any;
    emojiSheetSize: any;
    emojiBackgroundImageFn: any;
    skinChange: EventEmitter<number>;
    emojiData: Partial<EmojiData>;
    listedEmoticons?: string[];
    constructor(ref: ChangeDetectorRef, emojiService: EmojiService);
    ngOnChanges(): void;
}
