/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { emojis } from './data/emojis';
const /** @type {?} */ COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
const /** @type {?} */ SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
export class EmojiService {
    constructor() {
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
    uncompress(list) {
        this.emojis = list.map(emoji => {
            const /** @type {?} */ data = Object.assign({}, emoji);
            if (!data.short_names) {
                data.short_names = [];
            }
            data.short_names.unshift(data.short_name);
            data.id = data.short_name;
            data.native = this.unifiedToNative(data.unified);
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
                const /** @type {?} */ f = list.find(x => x.unified === data.obsoletes);
                if (f) {
                    if (f.keywords) {
                        data.keywords = [...data.keywords, ...f.keywords, f.short_name];
                    }
                    else {
                        data.keywords = [...data.keywords, f.short_name];
                    }
                }
            }
            this.names[data.unified] = data;
            for (const /** @type {?} */ n of data.short_names) {
                this.names[n] = data;
            }
            return data;
        });
    }
    /**
     * @param {?} emoji
     * @param {?=} skin
     * @param {?=} set
     * @return {?}
     */
    getData(emoji, skin, set) {
        let /** @type {?} */ emojiData;
        if (typeof emoji === 'string') {
            const /** @type {?} */ matches = emoji.match(COLONS_REGEX);
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
        const /** @type {?} */ hasSkinVariations = emojiData.skin_variations && emojiData.skin_variations.length;
        if (hasSkinVariations && skin && skin > 1 && set) {
            emojiData = Object.assign({}, emojiData);
            const /** @type {?} */ skinKey = SKINS[skin - 1];
            const /** @type {?} */ variationData = /** @type {?} */ (emojiData.skin_variations.find((n) => n.unified.includes(skinKey)));
            if (!variationData.variations && emojiData.variations) {
                delete emojiData.variations;
            }
            if (!variationData.hidden || !variationData.hidden.includes(set)) {
                emojiData.skin_tone = skin;
                emojiData = Object.assign({}, emojiData, variationData);
            }
            emojiData.native = this.unifiedToNative(emojiData.unified);
        }
        if (emojiData.variations && emojiData.variations.length) {
            emojiData = Object.assign({}, emojiData);
            emojiData.unified = /** @type {?} */ (emojiData.variations.shift());
        }
        emojiData.set = set || '';
        return /** @type {?} */ (emojiData);
    }
    /**
     * @param {?} unified
     * @return {?}
     */
    unifiedToNative(unified) {
        const /** @type {?} */ codePoints = unified.split('-').map(u => parseInt(`0x${u}`, 16));
        return String.fromCodePoint(...codePoints);
    }
    /**
     * @param {?} emoji
     * @return {?}
     */
    sanitize(emoji) {
        if (emoji === null) {
            return null;
        }
        const /** @type {?} */ id = emoji.id || emoji.short_names[0];
        let /** @type {?} */ colons = `:${id}:`;
        if (emoji.skin_tone) {
            colons += `:skin-tone-${emoji.skin_tone}:`;
        }
        emoji.colons = colons;
        return Object.assign({}, emoji);
    }
    /**
     * @param {?} emoji
     * @param {?=} skin
     * @param {?=} set
     * @return {?}
     */
    getSanitizedData(emoji, skin, set) {
        return this.sanitize(this.getData(emoji, skin, set));
    }
}
EmojiService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EmojiService.ctorParameters = () => [];
function EmojiService_tsickle_Closure_declarations() {
    /** @type {?} */
    EmojiService.prototype.uncompressed;
    /** @type {?} */
    EmojiService.prototype.names;
    /** @type {?} */
    EmojiService.prototype.emojis;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaS8iLCJzb3VyY2VzIjpbImVtb2ppLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd2Qyx1QkFBTSxZQUFZLEdBQUcsMkNBQTJDLENBQUM7QUFDakUsdUJBQU0sS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUdyRSxNQUFNO0lBS0o7NEJBSmUsS0FBSztxQkFDa0IsRUFBRTtzQkFDbEIsRUFBRTtRQUd0QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7S0FDRjs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBMkI7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLHVCQUFNLElBQUkscUJBQWEsS0FBSyxDQUFFLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQzFCLElBQUksQ0FBQyxNQUFN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QVMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxJQUFJLGNBQWMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDO1NBQzVDO1FBQ0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdEIsTUFBTSxtQkFBTSxLQUFLLEVBQUc7S0FDckI7Ozs7Ozs7SUFFRCxnQkFBZ0IsQ0FDZCxLQUF5QixFQUN6QixJQUFvQixFQUNwQixHQUFrQjtRQUVsQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN0RDs7O1lBcEpGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIENvbXByZXNzZWRFbW9qaURhdGEsXG4gIEVtb2ppRGF0YSxcbiAgRW1vamlWYXJpYXRpb24sXG59IGZyb20gJy4vZGF0YS9kYXRhLmludGVyZmFjZXMnO1xuaW1wb3J0IHsgZW1vamlzIH0gZnJvbSAnLi9kYXRhL2Vtb2ppcyc7XG5pbXBvcnQgeyBFbW9qaSB9IGZyb20gJy4vZW1vamkuY29tcG9uZW50JztcblxuY29uc3QgQ09MT05TX1JFR0VYID0gL14oPzpcXDooW15cXDpdKylcXDopKD86XFw6c2tpbi10b25lLShcXGQpXFw6KT8kLztcbmNvbnN0IFNLSU5TID0gWycxRjNGQScsICcxRjNGQicsICcxRjNGQycsICcxRjNGRCcsICcxRjNGRScsICcxRjNGRiddO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1vamlTZXJ2aWNlIHtcbiAgdW5jb21wcmVzc2VkID0gZmFsc2U7XG4gIG5hbWVzOiB7IFtrZXk6IHN0cmluZ106IEVtb2ppRGF0YSB9ID0ge307XG4gIGVtb2ppczogRW1vamlEYXRhW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoIXRoaXMudW5jb21wcmVzc2VkKSB7XG4gICAgICB0aGlzLnVuY29tcHJlc3MoZW1vamlzKTtcbiAgICAgIHRoaXMudW5jb21wcmVzc2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1bmNvbXByZXNzKGxpc3Q6IENvbXByZXNzZWRFbW9qaURhdGFbXSkge1xuICAgIHRoaXMuZW1vamlzID0gbGlzdC5tYXAoZW1vamkgPT4ge1xuICAgICAgY29uc3QgZGF0YTogYW55ID0geyAuLi5lbW9qaSB9O1xuICAgICAgaWYgKCFkYXRhLnNob3J0X25hbWVzKSB7XG4gICAgICAgIGRhdGEuc2hvcnRfbmFtZXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIGRhdGEuc2hvcnRfbmFtZXMudW5zaGlmdChkYXRhLnNob3J0X25hbWUpO1xuICAgICAgZGF0YS5pZCA9IGRhdGEuc2hvcnRfbmFtZTtcbiAgICAgIGRhdGEubmF0aXZlID0gdGhpcy51bmlmaWVkVG9OYXRpdmUoZGF0YS51bmlmaWVkKTtcblxuICAgICAgaWYgKCFkYXRhLnNraW5fdmFyaWF0aW9ucykge1xuICAgICAgICBkYXRhLnNraW5fdmFyaWF0aW9ucyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEua2V5d29yZHMpIHtcbiAgICAgICAgZGF0YS5rZXl3b3JkcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWRhdGEuZW1vdGljb25zKSB7XG4gICAgICAgIGRhdGEuZW1vdGljb25zID0gW107XG4gICAgICB9XG5cbiAgICAgIGlmICghZGF0YS5oaWRkZW4pIHtcbiAgICAgICAgZGF0YS5oaWRkZW4gPSBbXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFkYXRhLnRleHQpIHtcbiAgICAgICAgZGF0YS50ZXh0ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLm9ic29sZXRlcykge1xuICAgICAgICAvLyBnZXQga2V5d29yZHMgZnJvbSBlbW9qaSB0aGF0IGl0IG9ic29sZXRlcyBzaW5jZSB0aGF0IGlzIHNoYXJlZFxuICAgICAgICBjb25zdCBmID0gbGlzdC5maW5kKHggPT4geC51bmlmaWVkID09PSBkYXRhLm9ic29sZXRlcyk7XG4gICAgICAgIGlmIChmKSB7XG4gICAgICAgICAgaWYgKGYua2V5d29yZHMpIHtcbiAgICAgICAgICAgIGRhdGEua2V5d29yZHMgPSBbLi4uZGF0YS5rZXl3b3JkcywgLi4uZi5rZXl3b3JkcywgZi5zaG9ydF9uYW1lXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5rZXl3b3JkcyA9IFsuLi5kYXRhLmtleXdvcmRzLCBmLnNob3J0X25hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm5hbWVzW2RhdGEudW5pZmllZF0gPSBkYXRhO1xuICAgICAgZm9yIChjb25zdCBuIG9mIGRhdGEuc2hvcnRfbmFtZXMpIHtcbiAgICAgICAgdGhpcy5uYW1lc1tuXSA9IGRhdGE7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldERhdGEoXG4gICAgZW1vamk6IEVtb2ppRGF0YSB8IHN0cmluZyxcbiAgICBza2luPzogRW1vamlbJ3NraW4nXSxcbiAgICBzZXQ/OiBFbW9qaVsnc2V0J10sXG4gICk6IEVtb2ppRGF0YSB8IG51bGwge1xuICAgIGxldCBlbW9qaURhdGE6IGFueTtcblxuICAgIGlmICh0eXBlb2YgZW1vamkgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBtYXRjaGVzID0gZW1vamkubWF0Y2goQ09MT05TX1JFR0VYKTtcblxuICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgZW1vamkgPSBtYXRjaGVzWzFdO1xuXG4gICAgICAgIGlmIChtYXRjaGVzWzJdKSB7XG4gICAgICAgICAgc2tpbiA9IHBhcnNlSW50KG1hdGNoZXNbMl0sIDEwKSBhcyBFbW9qaVsnc2tpbiddO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uYW1lcy5oYXNPd25Qcm9wZXJ0eShlbW9qaSkpIHtcbiAgICAgICAgZW1vamlEYXRhID0gdGhpcy5uYW1lc1tlbW9qaV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGVtb2ppLmlkKSB7XG4gICAgICBlbW9qaURhdGEgPSB0aGlzLm5hbWVzW2Vtb2ppLmlkXTtcbiAgICB9XG5cbiAgICBpZiAoIWVtb2ppRGF0YSkge1xuICAgICAgZW1vamlEYXRhID0gZW1vamk7XG4gICAgICBlbW9qaURhdGEuY3VzdG9tID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNTa2luVmFyaWF0aW9ucyA9IGVtb2ppRGF0YS5za2luX3ZhcmlhdGlvbnMgJiYgZW1vamlEYXRhLnNraW5fdmFyaWF0aW9ucy5sZW5ndGg7XG4gICAgaWYgKGhhc1NraW5WYXJpYXRpb25zICYmIHNraW4gJiYgc2tpbiA+IDEgJiYgc2V0KSB7XG4gICAgICBlbW9qaURhdGEgPSB7IC4uLmVtb2ppRGF0YSB9O1xuXG4gICAgICBjb25zdCBza2luS2V5ID0gU0tJTlNbc2tpbiAtIDFdO1xuICAgICAgY29uc3QgdmFyaWF0aW9uRGF0YSA9IGVtb2ppRGF0YS5za2luX3ZhcmlhdGlvbnMuZmluZChcbiAgICAgICAgKG46IEVtb2ppVmFyaWF0aW9uKSA9PiBuLnVuaWZpZWQuaW5jbHVkZXMoc2tpbktleSksXG4gICAgICApIGFzIGFueTtcblxuICAgICAgaWYgKCF2YXJpYXRpb25EYXRhLnZhcmlhdGlvbnMgJiYgZW1vamlEYXRhLnZhcmlhdGlvbnMpIHtcbiAgICAgICAgZGVsZXRlIGVtb2ppRGF0YS52YXJpYXRpb25zO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXZhcmlhdGlvbkRhdGEuaGlkZGVuIHx8ICF2YXJpYXRpb25EYXRhLmhpZGRlbi5pbmNsdWRlcyhzZXQpKSB7XG4gICAgICAgIGVtb2ppRGF0YS5za2luX3RvbmUgPSBza2luO1xuICAgICAgICBlbW9qaURhdGEgPSB7IC4uLmVtb2ppRGF0YSwgLi4udmFyaWF0aW9uRGF0YSB9O1xuICAgICAgfVxuICAgICAgZW1vamlEYXRhLm5hdGl2ZSA9IHRoaXMudW5pZmllZFRvTmF0aXZlKGVtb2ppRGF0YS51bmlmaWVkKTtcbiAgICB9XG5cbiAgICBpZiAoZW1vamlEYXRhLnZhcmlhdGlvbnMgJiYgZW1vamlEYXRhLnZhcmlhdGlvbnMubGVuZ3RoKSB7XG4gICAgICBlbW9qaURhdGEgPSB7IC4uLmVtb2ppRGF0YSB9O1xuICAgICAgZW1vamlEYXRhLnVuaWZpZWQgPSBlbW9qaURhdGEudmFyaWF0aW9ucy5zaGlmdCgpIGFzIHN0cmluZztcbiAgICB9XG5cbiAgICBlbW9qaURhdGEuc2V0ID0gc2V0IHx8ICcnO1xuXG4gICAgcmV0dXJuIGVtb2ppRGF0YSBhcyBFbW9qaURhdGE7XG4gIH1cblxuICB1bmlmaWVkVG9OYXRpdmUodW5pZmllZDogc3RyaW5nKSB7XG4gICAgY29uc3QgY29kZVBvaW50cyA9IHVuaWZpZWQuc3BsaXQoJy0nKS5tYXAodSA9PiBwYXJzZUludChgMHgke3V9YCwgMTYpKTtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cyk7XG4gIH1cblxuICBzYW5pdGl6ZShlbW9qaTogRW1vamlEYXRhIHwgbnVsbCk6IEVtb2ppRGF0YSB8IG51bGwge1xuICAgIGlmIChlbW9qaSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGlkID0gZW1vamkuaWQgfHwgZW1vamkuc2hvcnRfbmFtZXNbMF07XG4gICAgbGV0IGNvbG9ucyA9IGA6JHtpZH06YDtcbiAgICBpZiAoZW1vamkuc2tpbl90b25lKSB7XG4gICAgICBjb2xvbnMgKz0gYDpza2luLXRvbmUtJHtlbW9qaS5za2luX3RvbmV9OmA7XG4gICAgfVxuICAgIGVtb2ppLmNvbG9ucyA9IGNvbG9ucztcbiAgICByZXR1cm4geyAuLi5lbW9qaSB9O1xuICB9XG5cbiAgZ2V0U2FuaXRpemVkRGF0YShcbiAgICBlbW9qaTogc3RyaW5nIHwgRW1vamlEYXRhLFxuICAgIHNraW4/OiBFbW9qaVsnc2tpbiddLFxuICAgIHNldD86IEVtb2ppWydzZXQnXSxcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemUodGhpcy5nZXREYXRhKGVtb2ppLCBza2luLCBzZXQpKTtcbiAgfVxufVxuIl19