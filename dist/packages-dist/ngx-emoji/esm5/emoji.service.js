/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { emojis } from './data/emojis';
var /** @type {?} */ COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
var /** @type {?} */ SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
var EmojiService = /** @class */ (function () {
    function EmojiService() {
        this.uncompressed = false;
        this.names = {};
        this.emojis = [];
        if (!this.uncompressed) {
            this.uncompress(emojis);
            this.uncompressed = true;
        }
    }
    /**
     * @param {?} list
     * @return {?}
     */
    EmojiService.prototype.uncompress = /**
     * @param {?} list
     * @return {?}
     */
    function (list) {
        var _this = this;
        this.emojis = list.map(function (emoji) {
            var /** @type {?} */ data = tslib_1.__assign({}, emoji);
            if (!data.short_names) {
                data.short_names = [];
            }
            data.short_names.unshift(data.short_name);
            data.id = data.short_name;
            data.native = _this.unifiedToNative(data.unified);
            if (!data.skin_variations) {
                data.skin_variations = [];
            }
            if (!data.keywords) {
                data.keywords = [];
            }
            if (!data.emoticons) {
                data.emoticons = [];
            }
            if (!data.hidden) {
                data.hidden = [];
            }
            if (!data.text) {
                data.text = '';
            }
            if (data.obsoletes) {
                // get keywords from emoji that it obsoletes since that is shared
                var /** @type {?} */ f = list.find(function (x) { return x.unified === data.obsoletes; });
                if (f) {
                    if (f.keywords) {
                        data.keywords = tslib_1.__spread(data.keywords, f.keywords, [f.short_name]);
                    }
                    else {
                        data.keywords = tslib_1.__spread(data.keywords, [f.short_name]);
                    }
                }
            }
            _this.names[data.unified] = data;
            try {
                for (var _a = tslib_1.__values(data.short_names), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var n = _b.value;
                    _this.names[n] = data;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return data;
            var e_1, _c;
        });
    };
    /**
     * @param {?} emoji
     * @param {?=} skin
     * @param {?=} set
     * @return {?}
     */
    EmojiService.prototype.getData = /**
     * @param {?} emoji
     * @param {?=} skin
     * @param {?=} set
     * @return {?}
     */
    function (emoji, skin, set) {
        var /** @type {?} */ emojiData;
        if (typeof emoji === 'string') {
            var /** @type {?} */ matches = emoji.match(COLONS_REGEX);
            if (matches) {
                emoji = matches[1];
                if (matches[2]) {
                    skin = /** @type {?} */ (parseInt(matches[2], 10));
                }
            }
            if (this.names.hasOwnProperty(emoji)) {
                emojiData = this.names[emoji];
            }
            else {
                return null;
            }
        }
        else if (emoji.id) {
            emojiData = this.names[emoji.id];
        }
        if (!emojiData) {
            emojiData = emoji;
            emojiData.custom = true;
        }
        var /** @type {?} */ hasSkinVariations = emojiData.skin_variations && emojiData.skin_variations.length;
        if (hasSkinVariations && skin && skin > 1 && set) {
            emojiData = tslib_1.__assign({}, emojiData);
            var /** @type {?} */ skinKey_1 = SKINS[skin - 1];
            var /** @type {?} */ variationData = /** @type {?} */ (emojiData.skin_variations.find(function (n) { return n.unified.includes(skinKey_1); }));
            if (!variationData.variations && emojiData.variations) {
                delete emojiData.variations;
            }
            if (!variationData.hidden || !variationData.hidden.includes(set)) {
                emojiData.skin_tone = skin;
                emojiData = tslib_1.__assign({}, emojiData, variationData);
            }
            emojiData.native = this.unifiedToNative(emojiData.unified);
        }
        if (emojiData.variations && emojiData.variations.length) {
            emojiData = tslib_1.__assign({}, emojiData);
            emojiData.unified = /** @type {?} */ (emojiData.variations.shift());
        }
        emojiData.set = set || '';
        return /** @type {?} */ (emojiData);
    };
    /**
     * @param {?} unified
     * @return {?}
     */
    EmojiService.prototype.unifiedToNative = /**
     * @param {?} unified
     * @return {?}
     */
    function (unified) {
        var /** @type {?} */ codePoints = unified.split('-').map(function (u) { return parseInt("0x" + u, 16); });
        return String.fromCodePoint.apply(String, tslib_1.__spread(codePoints));
    };
    /**
     * @param {?} emoji
     * @return {?}
     */
    EmojiService.prototype.sanitize = /**
     * @param {?} emoji
     * @return {?}
     */
    function (emoji) {
        if (emoji === null) {
            return null;
        }
        var /** @type {?} */ id = emoji.id || emoji.short_names[0];
        var /** @type {?} */ colons = ":" + id + ":";
        if (emoji.skin_tone) {
            colons += ":skin-tone-" + emoji.skin_tone + ":";
        }
        emoji.colons = colons;
        return tslib_1.__assign({}, emoji);
    };
    /**
     * @param {?} emoji
     * @param {?=} skin
     * @param {?=} set
     * @return {?}
     */
    EmojiService.prototype.getSanitizedData = /**
     * @param {?} emoji
     * @param {?=} skin
     * @param {?=} set
     * @return {?}
     */
    function (emoji, skin, set) {
        return this.sanitize(this.getData(emoji, skin, set));
    };
    EmojiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EmojiService.ctorParameters = function () { return []; };
    return EmojiService;
}());
export { EmojiService };
function EmojiService_tsickle_Closure_declarations() {
    /** @type {?} */
    EmojiService.prototype.uncompressed;
    /** @type {?} */
    EmojiService.prototype.names;
    /** @type {?} */
    EmojiService.prototype.emojis;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaS8iLCJzb3VyY2VzIjpbImVtb2ppLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkMscUJBQU0sWUFBWSxHQUFHLDJDQUEyQyxDQUFDO0FBQ2pFLHFCQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7O0lBUW5FOzRCQUplLEtBQUs7cUJBQ2tCLEVBQUU7c0JBQ2xCLEVBQUU7UUFHdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzFCO0tBQ0Y7Ozs7O0lBRUQsaUNBQVU7Ozs7SUFBVixVQUFXLElBQTJCO1FBQXRDLGlCQWdEQztRQS9DQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO1lBQzFCLHFCQUFNLElBQUksd0JBQWEsS0FBSyxDQUFFLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzFCLElBQUks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QUM1QyxxQkFBSSxNQUFNLEdBQUcsTUFBSSxFQUFFLE1BQUcsQ0FBQztRQUN2QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLElBQUksZ0JBQWMsS0FBSyxDQUFDLFNBQVMsTUFBRyxDQUFDO1NBQzVDO1FBQ0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsTUFBTSxzQkFBTSxLQUFLLEVBQUc7S0FDckI7Ozs7Ozs7SUFFRCx1Q0FBZ0I7Ozs7OztJQUFoQixVQUNFLEtBQXlCLEVBQ3pCLElBQW9CLEVBQ3BCLEdBQWtCO1FBRWxCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ3REOztnQkFwSkYsVUFBVTs7Ozt1QkFiWDs7U0FjYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBDb21wcmVzc2VkRW1vamlEYXRhLFxuICBFbW9qaURhdGEsXG4gIEVtb2ppVmFyaWF0aW9uLFxufSBmcm9tICcuL2RhdGEvZGF0YS5pbnRlcmZhY2VzJztcbmltcG9ydCB7IGVtb2ppcyB9IGZyb20gJy4vZGF0YS9lbW9qaXMnO1xuaW1wb3J0IHsgRW1vamkgfSBmcm9tICcuL2Vtb2ppLmNvbXBvbmVudCc7XG5cbmNvbnN0IENPTE9OU19SRUdFWCA9IC9eKD86XFw6KFteXFw6XSspXFw6KSg/OlxcOnNraW4tdG9uZS0oXFxkKVxcOik/JC87XG5jb25zdCBTS0lOUyA9IFsnMUYzRkEnLCAnMUYzRkInLCAnMUYzRkMnLCAnMUYzRkQnLCAnMUYzRkUnLCAnMUYzRkYnXTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVtb2ppU2VydmljZSB7XG4gIHVuY29tcHJlc3NlZCA9IGZhbHNlO1xuICBuYW1lczogeyBba2V5OiBzdHJpbmddOiBFbW9qaURhdGEgfSA9IHt9O1xuICBlbW9qaXM6IEVtb2ppRGF0YVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKCF0aGlzLnVuY29tcHJlc3NlZCkge1xuICAgICAgdGhpcy51bmNvbXByZXNzKGVtb2ppcyk7XG4gICAgICB0aGlzLnVuY29tcHJlc3NlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdW5jb21wcmVzcyhsaXN0OiBDb21wcmVzc2VkRW1vamlEYXRhW10pIHtcbiAgICB0aGlzLmVtb2ppcyA9IGxpc3QubWFwKGVtb2ppID0+IHtcbiAgICAgIGNvbnN0IGRhdGE6IGFueSA9IHsgLi4uZW1vamkgfTtcbiAgICAgIGlmICghZGF0YS5zaG9ydF9uYW1lcykge1xuICAgICAgICBkYXRhLnNob3J0X25hbWVzID0gW107XG4gICAgICB9XG4gICAgICBkYXRhLnNob3J0X25hbWVzLnVuc2hpZnQoZGF0YS5zaG9ydF9uYW1lKTtcbiAgICAgIGRhdGEuaWQgPSBkYXRhLnNob3J0X25hbWU7XG4gICAgICBkYXRhLm5hdGl2ZSA9IHRoaXMudW5pZmllZFRvTmF0aXZlKGRhdGEudW5pZmllZCk7XG5cbiAgICAgIGlmICghZGF0YS5za2luX3ZhcmlhdGlvbnMpIHtcbiAgICAgICAgZGF0YS5za2luX3ZhcmlhdGlvbnMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhLmtleXdvcmRzKSB7XG4gICAgICAgIGRhdGEua2V5d29yZHMgPSBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhLmVtb3RpY29ucykge1xuICAgICAgICBkYXRhLmVtb3RpY29ucyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEuaGlkZGVuKSB7XG4gICAgICAgIGRhdGEuaGlkZGVuID0gW107XG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YS50ZXh0KSB7XG4gICAgICAgIGRhdGEudGV4dCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5vYnNvbGV0ZXMpIHtcbiAgICAgICAgLy8gZ2V0IGtleXdvcmRzIGZyb20gZW1vamkgdGhhdCBpdCBvYnNvbGV0ZXMgc2luY2UgdGhhdCBpcyBzaGFyZWRcbiAgICAgICAgY29uc3QgZiA9IGxpc3QuZmluZCh4ID0+IHgudW5pZmllZCA9PT0gZGF0YS5vYnNvbGV0ZXMpO1xuICAgICAgICBpZiAoZikge1xuICAgICAgICAgIGlmIChmLmtleXdvcmRzKSB7XG4gICAgICAgICAgICBkYXRhLmtleXdvcmRzID0gWy4uLmRhdGEua2V5d29yZHMsIC4uLmYua2V5d29yZHMsIGYuc2hvcnRfbmFtZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEua2V5d29yZHMgPSBbLi4uZGF0YS5rZXl3b3JkcywgZi5zaG9ydF9uYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5uYW1lc1tkYXRhLnVuaWZpZWRdID0gZGF0YTtcbiAgICAgIGZvciAoY29uc3QgbiBvZiBkYXRhLnNob3J0X25hbWVzKSB7XG4gICAgICAgIHRoaXMubmFtZXNbbl0gPSBkYXRhO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBnZXREYXRhKFxuICAgIGVtb2ppOiBFbW9qaURhdGEgfCBzdHJpbmcsXG4gICAgc2tpbj86IEVtb2ppWydza2luJ10sXG4gICAgc2V0PzogRW1vamlbJ3NldCddLFxuICApOiBFbW9qaURhdGEgfCBudWxsIHtcbiAgICBsZXQgZW1vamlEYXRhOiBhbnk7XG5cbiAgICBpZiAodHlwZW9mIGVtb2ppID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgbWF0Y2hlcyA9IGVtb2ppLm1hdGNoKENPTE9OU19SRUdFWCk7XG5cbiAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgIGVtb2ppID0gbWF0Y2hlc1sxXTtcblxuICAgICAgICBpZiAobWF0Y2hlc1syXSkge1xuICAgICAgICAgIHNraW4gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxMCkgYXMgRW1vamlbJ3NraW4nXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmFtZXMuaGFzT3duUHJvcGVydHkoZW1vamkpKSB7XG4gICAgICAgIGVtb2ppRGF0YSA9IHRoaXMubmFtZXNbZW1vamldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbW9qaS5pZCkge1xuICAgICAgZW1vamlEYXRhID0gdGhpcy5uYW1lc1tlbW9qaS5pZF07XG4gICAgfVxuXG4gICAgaWYgKCFlbW9qaURhdGEpIHtcbiAgICAgIGVtb2ppRGF0YSA9IGVtb2ppO1xuICAgICAgZW1vamlEYXRhLmN1c3RvbSA9IHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgaGFzU2tpblZhcmlhdGlvbnMgPSBlbW9qaURhdGEuc2tpbl92YXJpYXRpb25zICYmIGVtb2ppRGF0YS5za2luX3ZhcmlhdGlvbnMubGVuZ3RoO1xuICAgIGlmIChoYXNTa2luVmFyaWF0aW9ucyAmJiBza2luICYmIHNraW4gPiAxICYmIHNldCkge1xuICAgICAgZW1vamlEYXRhID0geyAuLi5lbW9qaURhdGEgfTtcblxuICAgICAgY29uc3Qgc2tpbktleSA9IFNLSU5TW3NraW4gLSAxXTtcbiAgICAgIGNvbnN0IHZhcmlhdGlvbkRhdGEgPSBlbW9qaURhdGEuc2tpbl92YXJpYXRpb25zLmZpbmQoXG4gICAgICAgIChuOiBFbW9qaVZhcmlhdGlvbikgPT4gbi51bmlmaWVkLmluY2x1ZGVzKHNraW5LZXkpLFxuICAgICAgKSBhcyBhbnk7XG5cbiAgICAgIGlmICghdmFyaWF0aW9uRGF0YS52YXJpYXRpb25zICYmIGVtb2ppRGF0YS52YXJpYXRpb25zKSB7XG4gICAgICAgIGRlbGV0ZSBlbW9qaURhdGEudmFyaWF0aW9ucztcbiAgICAgIH1cblxuICAgICAgaWYgKCF2YXJpYXRpb25EYXRhLmhpZGRlbiB8fCAhdmFyaWF0aW9uRGF0YS5oaWRkZW4uaW5jbHVkZXMoc2V0KSkge1xuICAgICAgICBlbW9qaURhdGEuc2tpbl90b25lID0gc2tpbjtcbiAgICAgICAgZW1vamlEYXRhID0geyAuLi5lbW9qaURhdGEsIC4uLnZhcmlhdGlvbkRhdGEgfTtcbiAgICAgIH1cbiAgICAgIGVtb2ppRGF0YS5uYXRpdmUgPSB0aGlzLnVuaWZpZWRUb05hdGl2ZShlbW9qaURhdGEudW5pZmllZCk7XG4gICAgfVxuXG4gICAgaWYgKGVtb2ppRGF0YS52YXJpYXRpb25zICYmIGVtb2ppRGF0YS52YXJpYXRpb25zLmxlbmd0aCkge1xuICAgICAgZW1vamlEYXRhID0geyAuLi5lbW9qaURhdGEgfTtcbiAgICAgIGVtb2ppRGF0YS51bmlmaWVkID0gZW1vamlEYXRhLnZhcmlhdGlvbnMuc2hpZnQoKSBhcyBzdHJpbmc7XG4gICAgfVxuXG4gICAgZW1vamlEYXRhLnNldCA9IHNldCB8fCAnJztcblxuICAgIHJldHVybiBlbW9qaURhdGEgYXMgRW1vamlEYXRhO1xuICB9XG5cbiAgdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQ6IHN0cmluZykge1xuICAgIGNvbnN0IGNvZGVQb2ludHMgPSB1bmlmaWVkLnNwbGl0KCctJykubWFwKHUgPT4gcGFyc2VJbnQoYDB4JHt1fWAsIDE2KSk7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpO1xuICB9XG5cbiAgc2FuaXRpemUoZW1vamk6IEVtb2ppRGF0YSB8IG51bGwpOiBFbW9qaURhdGEgfCBudWxsIHtcbiAgICBpZiAoZW1vamkgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBpZCA9IGVtb2ppLmlkIHx8IGVtb2ppLnNob3J0X25hbWVzWzBdO1xuICAgIGxldCBjb2xvbnMgPSBgOiR7aWR9OmA7XG4gICAgaWYgKGVtb2ppLnNraW5fdG9uZSkge1xuICAgICAgY29sb25zICs9IGA6c2tpbi10b25lLSR7ZW1vamkuc2tpbl90b25lfTpgO1xuICAgIH1cbiAgICBlbW9qaS5jb2xvbnMgPSBjb2xvbnM7XG4gICAgcmV0dXJuIHsgLi4uZW1vamkgfTtcbiAgfVxuXG4gIGdldFNhbml0aXplZERhdGEoXG4gICAgZW1vamk6IHN0cmluZyB8IEVtb2ppRGF0YSxcbiAgICBza2luPzogRW1vamlbJ3NraW4nXSxcbiAgICBzZXQ/OiBFbW9qaVsnc2V0J10sXG4gICkge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplKHRoaXMuZ2V0RGF0YShlbW9qaSwgc2tpbiwgc2V0KSk7XG4gIH1cbn1cbiJdfQ==