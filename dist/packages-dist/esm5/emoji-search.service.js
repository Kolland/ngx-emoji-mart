/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { categories, EmojiService, } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { intersect } from './utils';
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
            for (var _a = tslib_1.__values(this.emojiService.emojis), _b = _a.next(); !_b.done; _b = _a.next()) {
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
                            for (var _a = tslib_1.__values(Object.keys(aPool)), _b = _a.next(); !_b.done; _b = _a.next()) {
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
export { EmojiSearch };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktc2VhcmNoLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY3RybC9uZ3gtZW1vamktbWFydC8iLCJzb3VyY2VzIjpbImVtb2ppLXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsVUFBVSxFQUVWLFlBQVksR0FDYixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7O0lBY2xDLHFCQUFvQixZQUEwQjtRQUE5QyxpQkFnQkM7UUFoQm1CLGlCQUFZLEdBQVosWUFBWSxDQUFjOzRCQVYxQixFQUFFO3FCQUtsQixFQUFFOzBCQUNZLEVBQUU7NkJBQ3VCLEVBQUU7MkJBQ0osRUFBRTtnQ0FHOUIsU0FBUztZQUNWLElBQUEsbUNBQVcsRUFBRSwrQkFBUyxDQUFlO1lBQzdDLHFCQUFNLEVBQUUsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFMUIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFFBQVE7Z0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxNQUFNLENBQUM7aUJBQ1I7Z0JBRUQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDbkMsQ0FBQyxDQUFDO1lBRUgsT0FBSyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBSyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0QsT0FBSyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDOzs7O1lBYnBDLEdBQUcsQ0FBQyxDQUFvQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUEsZ0JBQUE7Z0JBQTNDLElB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LEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7b0JBQ3RELENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRXBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2hCO2lCQUNGLENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztTQUNKLENBQUM7UUFFRixXQUFXLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9CLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEIsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3QixXQUFXLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCOztnQkFyTkYsVUFBVTs7OztnQkFKVCxZQUFZOztzQkFMZDs7U0FVYSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBjYXRlZ29yaWVzLFxuICBFbW9qaURhdGEsXG4gIEVtb2ppU2VydmljZSxcbn0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCB7IGludGVyc2VjdCB9IGZyb20gJy4vdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRW1vamlTZWFyY2gge1xuICBvcmlnaW5hbFBvb2w6IGFueSA9IHt9O1xuICBpbmRleDoge1xuICAgIHJlc3VsdHM/OiBFbW9qaURhdGFbXTtcbiAgICBwb29sPzogeyBba2V5OiBzdHJpbmddOiBFbW9qaURhdGEgfTtcbiAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gIH0gPSB7fTtcbiAgZW1vamlzTGlzdDogYW55ID0ge307XG4gIGVtb3RpY29uc0xpc3Q6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgZW1vamlTZWFyY2g6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtb2ppU2VydmljZTogRW1vamlTZXJ2aWNlKSB7XG4gICAgZm9yIChjb25zdCBlbW9qaURhdGEgb2YgdGhpcy5lbW9qaVNlcnZpY2UuZW1vamlzKSB7XG4gICAgICBjb25zdCB7IHNob3J0X25hbWVzLCBlbW90aWNvbnMgfSA9IGVtb2ppRGF0YTtcbiAgICAgIGNvbnN0IGlkID0gc2hvcnRfbmFtZXNbMF07XG5cbiAgICAgIGVtb3RpY29ucy5mb3JFYWNoKGVtb3RpY29uID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZW1vdGljb25zTGlzdFtlbW90aWNvbl0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVtb3RpY29uc0xpc3RbZW1vdGljb25dID0gaWQ7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5lbW9qaXNMaXN0W2lkXSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldFNhbml0aXplZERhdGEoaWQpO1xuICAgICAgdGhpcy5vcmlnaW5hbFBvb2xbaWRdID0gZW1vamlEYXRhO1xuICAgIH1cbiAgfVxuXG4gIGFkZEN1c3RvbVRvUG9vbChjdXN0b206IGFueSwgcG9vbDogYW55KSB7XG4gICAgY3VzdG9tLmZvckVhY2goKGVtb2ppOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGVtb2ppSWQgPSBlbW9qaS5pZCB8fCBlbW9qaS5zaG9ydF9uYW1lc1swXTtcblxuICAgICAgaWYgKGVtb2ppSWQgJiYgIXBvb2xbZW1vamlJZF0pIHtcbiAgICAgICAgcG9vbFtlbW9qaUlkXSA9IHRoaXMuZW1vamlTZXJ2aWNlLmdldERhdGEoZW1vamkpO1xuICAgICAgICB0aGlzLmVtb2ppc0xpc3RbZW1vamlJZF0gPSB0aGlzLmVtb2ppU2VydmljZS5nZXRTYW5pdGl6ZWREYXRhKGVtb2ppKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlYXJjaChcbiAgICB2YWx1ZTogc3RyaW5nLFxuICAgIGVtb2ppc1RvU2hvd0ZpbHRlcj86ICh4OiBhbnkpID0+IGJvb2xlYW4sXG4gICAgbWF4UmVzdWx0cyA9IDc1LFxuICAgIGluY2x1ZGU6IGFueVtdID0gW10sXG4gICAgZXhjbHVkZTogYW55W10gPSBbXSxcbiAgICBjdXN0b206IGFueVtdID0gW10sXG4gICk6IEVtb2ppRGF0YVtdIHwgbnVsbCB7XG4gICAgdGhpcy5hZGRDdXN0b21Ub1Bvb2woY3VzdG9tLCB0aGlzLm9yaWdpbmFsUG9vbCk7XG5cbiAgICBsZXQgcmVzdWx0czogRW1vamlEYXRhW10gfCB1bmRlZmluZWQ7XG4gICAgbGV0IHBvb2wgPSB0aGlzLm9yaWdpbmFsUG9vbDtcblxuICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJy0nIHx8IHZhbHVlID09PSAnLTEnKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5lbW9qaXNMaXN0WyctMSddXTtcbiAgICAgIH1cblxuICAgICAgbGV0IHZhbHVlcyA9IHZhbHVlLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1tcXHN8LHxcXC18X10rLyk7XG4gICAgICBsZXQgYWxsUmVzdWx0cyA9IFtdO1xuXG4gICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdmFsdWVzID0gW3ZhbHVlc1swXSwgdmFsdWVzWzFdXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluY2x1ZGUubGVuZ3RoIHx8IGV4Y2x1ZGUubGVuZ3RoKSB7XG4gICAgICAgIHBvb2wgPSB7fTtcblxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlzSW5jbHVkZWQgPVxuICAgICAgICAgICAgaW5jbHVkZSAmJiBpbmNsdWRlLmxlbmd0aFxuICAgICAgICAgICAgICA/IGluY2x1ZGUuaW5kZXhPZihjYXRlZ29yeS5pZCkgPiAtMVxuICAgICAgICAgICAgICA6IHRydWU7XG4gICAgICAgICAgY29uc3QgaXNFeGNsdWRlZCA9XG4gICAgICAgICAgICBleGNsdWRlICYmIGV4Y2x1ZGUubGVuZ3RoXG4gICAgICAgICAgICAgID8gZXhjbHVkZS5pbmRleE9mKGNhdGVnb3J5LmlkKSA+IC0xXG4gICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgICAgaWYgKCFpc0luY2x1ZGVkIHx8IGlzRXhjbHVkZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXRlZ29yeS5lbW9qaXMhLmZvckVhY2goXG4gICAgICAgICAgICBlbW9qaUlkID0+IChwb29sW2Vtb2ppSWRdID0gdGhpcy5lbW9qaVNlcnZpY2UubmFtZXNbZW1vamlJZF0pLFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjdXN0b20ubGVuZ3RoKSB7XG4gICAgICAgICAgY29uc3QgY3VzdG9tSXNJbmNsdWRlZCA9XG4gICAgICAgICAgICBpbmNsdWRlICYmIGluY2x1ZGUubGVuZ3RoID8gaW5jbHVkZS5pbmRleE9mKCdjdXN0b20nKSA+IC0xIDogdHJ1ZTtcbiAgICAgICAgICBjb25zdCBjdXN0b21Jc0V4Y2x1ZGVkID1cbiAgICAgICAgICAgIGV4Y2x1ZGUgJiYgZXhjbHVkZS5sZW5ndGggPyBleGNsdWRlLmluZGV4T2YoJ2N1c3RvbScpID4gLTEgOiBmYWxzZTtcbiAgICAgICAgICBpZiAoY3VzdG9tSXNJbmNsdWRlZCAmJiAhY3VzdG9tSXNFeGNsdWRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGRDdXN0b21Ub1Bvb2woY3VzdG9tLCBwb29sKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYWxsUmVzdWx0cyA9IHZhbHVlc1xuICAgICAgICAubWFwKHYgPT4ge1xuICAgICAgICAgIGxldCBhUG9vbCA9IHBvb2w7XG4gICAgICAgICAgbGV0IGFJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG5cbiAgICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2Lmxlbmd0aDsgY2hhckluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSB2W2NoYXJJbmRleF07XG4gICAgICAgICAgICBsZW5ndGgrKztcbiAgICAgICAgICAgIGlmICghYUluZGV4W2NoYXJdKSB7XG4gICAgICAgICAgICAgIGFJbmRleFtjaGFyXSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYUluZGV4ID0gYUluZGV4W2NoYXJdO1xuXG4gICAgICAgICAgICBpZiAoIWFJbmRleC5yZXN1bHRzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNjb3JlczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xuXG4gICAgICAgICAgICAgIGFJbmRleC5yZXN1bHRzID0gW107XG4gICAgICAgICAgICAgIGFJbmRleC5wb29sID0ge307XG5cbiAgICAgICAgICAgICAgZm9yIChjb25zdCBpZCBvZiBPYmplY3Qua2V5cyhhUG9vbCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbW9qaSA9IGFQb29sW2lkXTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZW1vamlTZWFyY2hbaWRdKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmVtb2ppU2VhcmNoW2lkXSA9IHRoaXMuYnVpbGRTZWFyY2goXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppLnNob3J0X25hbWVzLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbW9qaS5rZXl3b3JkcyxcbiAgICAgICAgICAgICAgICAgICAgZW1vamkuZW1vdGljb25zLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmVtb2ppU2VhcmNoW2lkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWIgPSB2LnN1YnN0cigwLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1YkluZGV4ID0gcXVlcnkuaW5kZXhPZihzdWIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1YkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgaWYgKHN1YiA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2NvcmUgPSAwO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBhSW5kZXgucmVzdWx0cy5wdXNoKHRoaXMuZW1vamlzTGlzdFtpZF0pO1xuICAgICAgICAgICAgICAgICAgYUluZGV4LnBvb2xbaWRdID0gZW1vamk7XG5cbiAgICAgICAgICAgICAgICAgIHNjb3Jlc1tpZF0gPSBzY29yZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBhSW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYVNjb3JlID0gc2NvcmVzW2EuaWRdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJTY29yZSA9IHNjb3Jlc1tiLmlkXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmU7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhUG9vbCA9IGFJbmRleC5wb29sO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBhSW5kZXgucmVzdWx0cztcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcihhID0+IGEpO1xuXG4gICAgICBpZiAoYWxsUmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHJlc3VsdHMgPSBpbnRlcnNlY3QuYXBwbHkobnVsbCwgYWxsUmVzdWx0cyk7XG4gICAgICB9IGVsc2UgaWYgKGFsbFJlc3VsdHMubGVuZ3RoKSB7XG4gICAgICAgIHJlc3VsdHMgPSBhbGxSZXN1bHRzWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICBpZiAoZW1vamlzVG9TaG93RmlsdGVyKSB7XG4gICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmZpbHRlcigocmVzdWx0OiBFbW9qaURhdGEpID0+XG4gICAgICAgICAgZW1vamlzVG9TaG93RmlsdGVyKHRoaXMuZW1vamlTZXJ2aWNlLm5hbWVzW3Jlc3VsdC5pZF0pLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IG1heFJlc3VsdHMpIHtcbiAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzIHx8IG51bGw7XG4gIH1cblxuICBidWlsZFNlYXJjaChcbiAgICBzaG9ydF9uYW1lczogc3RyaW5nW10sXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGtleXdvcmRzOiBzdHJpbmdbXSxcbiAgICBlbW90aWNvbnM6IHN0cmluZ1tdLFxuICApIHtcbiAgICBjb25zdCBzZWFyY2g6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBhZGRUb1NlYXJjaCA9IChzdHJpbmdzOiBzdHJpbmcgfCBzdHJpbmdbXSwgc3BsaXQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3RyaW5ncykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIChBcnJheS5pc0FycmF5KHN0cmluZ3MpID8gc3RyaW5ncyA6IFtzdHJpbmdzXSkuZm9yRWFjaChzdHJpbmcgPT4ge1xuICAgICAgICAoc3BsaXQgPyBzdHJpbmcuc3BsaXQoL1stfF98XFxzXSsvKSA6IFtzdHJpbmddKS5mb3JFYWNoKHMgPT4ge1xuICAgICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoIXNlYXJjaC5pbmNsdWRlcyhzKSkge1xuICAgICAgICAgICAgc2VhcmNoLnB1c2gocyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhZGRUb1NlYXJjaChzaG9ydF9uYW1lcywgdHJ1ZSk7XG4gICAgYWRkVG9TZWFyY2gobmFtZSwgdHJ1ZSk7XG4gICAgYWRkVG9TZWFyY2goa2V5d29yZHMsIGZhbHNlKTtcbiAgICBhZGRUb1NlYXJjaChlbW90aWNvbnMsIGZhbHNlKTtcblxuICAgIHJldHVybiBzZWFyY2guam9pbignLCcpO1xuICB9XG59XG4iXX0=