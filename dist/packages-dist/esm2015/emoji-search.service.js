/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { categories, EmojiService, } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { intersect } from './utils';
export class EmojiSearch {
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
function EmojiSearch_tsickle_Closure_declarations() {
    /** @type {?} */
    EmojiSearch.prototype.originalPool;
    /** @type {?} */
    EmojiSearch.prototype.index;
    /** @type {?} */
    EmojiSearch.prototype.emojisList;
    /** @type {?} */
    EmojiSearch.prototype.emoticonsList;
    /** @type {?} */
    EmojiSearch.prototype.emojiSearch;
    /** @type {?} */
    EmojiSearch.prototype.emojiService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktc2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC8iLCJzb3VyY2VzIjpbImVtb2ppLXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxVQUFVLEVBRVYsWUFBWSxHQUNiLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUdwQyxNQUFNOzs7O0lBV0osWUFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7NEJBVjFCLEVBQUU7cUJBS2xCLEVBQUU7MEJBQ1ksRUFBRTs2QkFDdUIsRUFBRTsyQkFDSixFQUFFO1FBR3pDLEdBQUcsQ0FBQyxDQUFDLHVCQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakQsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxTQUFTLENBQUM7WUFDN0MsdUJBQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUxQixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakMsTUFBTSxDQUFDO2lCQUNSO2dCQUVELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ25DLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxH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Q0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNoQjtpQkFDRixDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7U0FDSixDQUFDO1FBRUYsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0IsV0FBVyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUU5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN6Qjs7O1lBck5GLFVBQVU7Ozs7WUFKVCxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBjYXRlZ29yaWVzLFxuICBFbW9qaURhdGEsXG4gIEVtb2ppU2VydmljZSxcbn0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCB7IGludGVyc2VjdCB9IGZyb20gJy4vdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1vamlTZWFyY2gge1xuICBvcmlnaW5hbFBvb2w6IGFueSA9IHt9O1xuICBpbmRleDoge1xuICAgIHJlc3VsdHM/OiBFbW9qaURhdGFbXTtcbiAgICBwb29sPzogeyBba2V5OiBzdHJpbmddOiBFbW9qaURhdGEgfTtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fTtcbiAgZW1vamlzTGlzdDogYW55ID0ge307XG4gIGVtb3RpY29uc0xpc3Q6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgZW1vamlTZWFyY2g6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtb2ppU2VydmljZTogRW1vamlTZXJ2aWNlKSB7XG4gICAgZm9yIChjb25zdCBlbW9qaURhdGEgb2YgdGhpcy5lbW9qaVNlcnZpY2UuZW1vamlzKSB7XG4gICAgICBjb25zdCB7IHNob3J0X25hbWVzLCBlbW90aWNvbnMgfSA9IGVtb2ppRGF0YTtcbiAgICAgIGNvbnN0IGlkID0gc2hvcnRfbmFtZXNbMF07XG5cbiAgICAgIGVtb3RpY29ucy5mb3JFYWNoKGVtb3RpY29uID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZW1vdGljb25zTGlzdFtlbW90aWNvbl0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtb3RpY29uc0xpc3RbZW1vdGljb25dID0gaWQ7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5lbW9qaXNMaXN0W2lkXSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldFNhbml0aXplZERhdGEoaWQpO1xuICAgICAgdGhpcy5vcmlnaW5hbFBvb2xbaWRdID0gZW1vamlEYXRhO1xuICAgIH1cbiAgfVxuXG4gIGFkZEN1c3RvbVRvUG9vbChjdXN0b206IGFueSwgcG9vbDogYW55KSB7XG4gICAgY3VzdG9tLmZvckVhY2goKGVtb2ppOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGVtb2ppSWQgPSBlbW9qaS5pZCB8fCBlbW9qaS5zaG9ydF9uYW1lc1swXTtcblxuICAgICAgaWYgKGVtb2ppSWQgJiYgIXBvb2xbZW1vamlJZF0pIHtcbiAgICAgICAgcG9vbFtlbW9qaUlkXSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldERhdGEoZW1vamkpO1xuICAgICAgICB0aGlzLmVtb2ppc0xpc3RbZW1vamlJZF0gPSB0aGlzLmVtb2ppU2VydmljZS5nZXRTYW5pdGl6ZWREYXRhKGVtb2ppKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaChcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIGVtb2ppc1RvU2hvd0ZpbHRlcj86ICh4OiBhbnkpID0+IGJvb2xlYW4sXG4gICAgbWF4UmVzdWx0cyA9IDc1LFxuICAgIGluY2x1ZGU6IGFueVtdID0gW10sXG4gICAgZXhjbHVkZTogYW55W10gPSBbXSxcbiAgICBjdXN0b206IGFueVtdID0gW10sXG4gICk6IEVtb2ppRGF0YVtdIHwgbnVsbCB7XG4gICAgdGhpcy5hZGRDdXN0b21Ub1Bvb2woY3VzdG9tLCB0aGlzLm9yaWdpbmFsUG9vbCk7XG5cbiAgICBsZXQgcmVzdWx0czogRW1vamlEYXRhW10gfCB1bmRlZmluZWQ7XG4gICAgbGV0IHBvb2wgPSB0aGlzLm9yaWdpbmFsUG9vbDtcblxuICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJy0nIHx8IHZhbHVlID09PSAnLTEnKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5lbW9qaXNMaXN0WyctMSddXTtcbiAgICAgIH1cblxuICAgICAgbGV0IHZhbHVlcyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHN8LHxcXC18X10rLyk7XG4gICAgICBsZXQgYWxsUmVzdWx0cyA9IFtdO1xuXG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluY2x1ZGUubGVuZ3RoIHx8IGV4Y2x1ZGUubGVuZ3RoKSB7XG4gICAgICAgIHBvb2wgPSB7fTtcblxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzSW5jbHVkZWQgPVxuICAgICAgICAgICAgaW5jbHVkZSAmJiBpbmNsdWRlLmxlbmd0aFxuICAgICAgICAgICAgICA/IGluY2x1ZGUuaW5kZXhPZihjYXRlZ29yeS5pZCkgPiAtMVxuICAgICAgICAgICAgICA6IHRydWU7XG4gICAgICAgICAgY29uc3QgaXNFeGNsdWRlZCA9XG4gICAgICAgICAgICBleGNsdWRlICYmIGV4Y2x1ZGUubGVuZ3RoXG4gICAgICAgICAgICAgID8gZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXRlZ29yeS5lbW9qaXMhLmZvckVhY2goXG4gICAgICAgICAgICBlbW9qaUlkID0+IChwb29sW2Vtb2ppSWRdID0gdGhpcy5lbW9qaVNlcnZpY2UubmFtZXNbZW1vamlJZF0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjdXN0b20ubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgY3VzdG9tSXNJbmNsdWRlZCA9XG4gICAgICAgICAgICBpbmNsdWRlICYmIGluY2x1ZGUubGVuZ3RoID8gaW5jbHVkZS5pbmRleE9mKCdjdXN0b20nKSA+IC0xIDogdHJ1ZTtcbiAgICAgICAgICBjb25zdCBjdXN0b21Jc0V4Y2x1ZGVkID1cbiAgICAgICAgICAgIGV4Y2x1ZGUgJiYgZXhjbHVkZS5sZW5ndGggPyBleGNsdWRlLmluZGV4T2YoJ2N1c3RvbScpID4gLTEgOiBmYWxzZTtcbiAgICAgICAgICBpZiAoY3VzdG9tSXNJbmNsdWRlZCAmJiAhY3VzdG9tSXNFeGNsdWRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDdXN0b21Ub1Bvb2woY3VzdG9tLCBwb29sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWxsUmVzdWx0cyA9IHZhbHVlc1xuICAgICAgICAubWFwKHYgPT4ge1xuICAgICAgICAgIGxldCBhUG9vbCA9IHBvb2w7XG4gICAgICAgICAgbGV0IGFJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG5cbiAgICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2Lmxlbmd0aDsgY2hhckluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSB2W2NoYXJJbmRleF07XG4gICAgICAgICAgICBsZW5ndGgrKztcbiAgICAgICAgICAgIGlmICghYUluZGV4W2NoYXJdKSB7XG4gICAgICAgICAgICAgIGFJbmRleFtjaGFyXSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYUluZGV4ID0gYUluZGV4W2NoYXJdO1xuXG4gICAgICAgICAgICBpZiAoIWFJbmRleC5yZXN1bHRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNjb3JlczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuXG4gICAgICAgICAgICAgIGFJbmRleC5yZXN1bHRzID0gW107XG4gICAgICAgICAgICAgIGFJbmRleC5wb29sID0ge307XG5cbiAgICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBPYmplY3Qua2V5cyhhUG9vbCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbW9qaSA9IGFQb29sW2lkXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZW1vamlTZWFyY2hbaWRdKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmVtb2ppU2VhcmNoW2lkXSA9IHRoaXMuYnVpbGRTZWFyY2goXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppLnNob3J0X25hbWVzLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaS5rZXl3b3JkcyxcbiAgICAgICAgICAgICAgICAgICAgZW1vamkuZW1vdGljb25zLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmVtb2ppU2VhcmNoW2lkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWIgPSB2LnN1YnN0cigwLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YkluZGV4ID0gcXVlcnkuaW5kZXhPZihzdWIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgaWYgKHN1YiA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBhSW5kZXgucmVzdWx0cy5wdXNoKHRoaXMuZW1vamlzTGlzdFtpZF0pO1xuICAgICAgICAgICAgICAgICAgYUluZGV4LnBvb2xbaWRdID0gZW1vamk7XG5cbiAgICAgICAgICAgICAgICAgIHNjb3Jlc1tpZF0gPSBzY29yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhSW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYVNjb3JlID0gc2NvcmVzW2EuaWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJTY29yZSA9IHNjb3Jlc1tiLmlkXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhUG9vbCA9IGFJbmRleC5wb29sO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhSW5kZXgucmVzdWx0cztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihhID0+IGEpO1xuXG4gICAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJlc3VsdHMgPSBpbnRlcnNlY3QuYXBwbHkobnVsbCwgYWxsUmVzdWx0cyk7XG4gICAgICB9IGVsc2UgaWYgKGFsbFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMgPSBhbGxSZXN1bHRzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICBpZiAoZW1vamlzVG9TaG93RmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcigocmVzdWx0OiBFbW9qaURhdGEpID0+XG4gICAgICAgICAgZW1vamlzVG9TaG93RmlsdGVyKHRoaXMuZW1vamlTZXJ2aWNlLm5hbWVzW3Jlc3VsdC5pZF0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IG1heFJlc3VsdHMpIHtcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzIHx8IG51bGw7XG4gIH1cblxuICBidWlsZFNlYXJjaChcbiAgICBzaG9ydF9uYW1lczogc3RyaW5nW10sXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGtleXdvcmRzOiBzdHJpbmdbXSxcbiAgICBlbW90aWNvbnM6IHN0cmluZ1tdLFxuICApIHtcbiAgICBjb25zdCBzZWFyY2g6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBhZGRUb1NlYXJjaCA9IChzdHJpbmdzOiBzdHJpbmcgfCBzdHJpbmdbXSwgc3BsaXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3RyaW5ncykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIChBcnJheS5pc0FycmF5KHN0cmluZ3MpID8gc3RyaW5ncyA6IFtzdHJpbmdzXSkuZm9yRWFjaChzdHJpbmcgPT4ge1xuICAgICAgICAoc3BsaXQgPyBzdHJpbmcuc3BsaXQoL1stfF98XFxzXSsvKSA6IFtzdHJpbmddKS5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoIXNlYXJjaC5pbmNsdWRlcyhzKSkge1xuICAgICAgICAgICAgc2VhcmNoLnB1c2gocyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhZGRUb1NlYXJjaChzaG9ydF9uYW1lcywgdHJ1ZSk7XG4gICAgYWRkVG9TZWFyY2gobmFtZSwgdHJ1ZSk7XG4gICAgYWRkVG9TZWFyY2goa2V5d29yZHMsIGZhbHNlKTtcbiAgICBhZGRUb1NlYXJjaChlbW90aWNvbnMsIGZhbHNlKTtcblxuICAgIHJldHVybiBzZWFyY2guam9pbignLCcpO1xuICB9XG59XG4iXX0=