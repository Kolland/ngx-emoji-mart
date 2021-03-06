/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class EmojiFrequentlyService {
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
function EmojiFrequentlyService_tsickle_Closure_declarations() {
    /** @type {?} */
    EmojiFrequentlyService.prototype.NAMESPACE;
    /** @type {?} */
    EmojiFrequentlyService.prototype.frequently;
    /** @type {?} */
    EmojiFrequentlyService.prototype.defaults;
    /** @type {?} */
    EmojiFrequentlyService.prototype.initialized;
    /** @type {?} */
    EmojiFrequentlyService.prototype.DEFAULTS;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktZnJlcXVlbnRseS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvIiwic291cmNlcyI6WyJlbW9qaS1mcmVxdWVudGx5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsTUFBTTs7eUJBQ1EsWUFBWTswQkFDdUIsSUFBSTt3QkFDYixFQUFFOzJCQUMxQixLQUFLO3dCQUNSO1lBQ1QsSUFBSTtZQUNKLFVBQVU7WUFDVixlQUFlO1lBQ2YsWUFBWTtZQUNaLFVBQVU7WUFDViw4QkFBOEI7WUFDOUIsYUFBYTtZQUNiLEtBQUs7WUFDTCxRQUFRO1lBQ1IsY0FBYztZQUNkLFVBQVU7WUFDVixPQUFPO1lBQ1AsS0FBSztZQUNMLFlBQVk7WUFDWixPQUFPO1lBQ1AsTUFBTTtTQUNQOzs7OztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGFBQWEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0tBQ3pCOzs7OztJQUNELEdBQUcsQ0FBQyxLQUFnQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDakM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0tBQ3ZGOzs7OztJQUNELEdBQUcsQ0FBQyxPQUFlO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFFbkIsdUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUVsQixHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2Y7UUFFRCx1QkFBTSxRQUFRLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUM3Qix1QkFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEQsdUJBQU0sTUFBTSxHQUFHLGNBQWM7YUFDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLG9CQUFDLElBQUksQ0FBQyxVQUFVLEdBQUUsQ0FBQyx1QkFBSSxJQUFJLENBQUMsVUFBVSxHQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3pELE9BQU8sRUFBRSxDQUFDO1FBQ2IsdUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLHVCQUFNLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsT0FBTyxDQUFDLENBQUM7UUFFNUQsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZjs7O1lBM0VGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVtb2ppRGF0YSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbW9qaUZyZXF1ZW50bHlTZXJ2aWNlIHtcbiAgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnO1xuICBmcmVxdWVudGx5OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9IHwgbnVsbCA9IG51bGw7XG4gIGRlZmF1bHRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XG4gIGluaXRpYWxpemVkID0gZmFsc2U7XG4gIERFRkFVTFRTID0gW1xuICAgICcrMScsXG4gICAgJ2dyaW5uaW5nJyxcbiAgICAna2lzc2luZ19oZWFydCcsXG4gICAgJ2hlYXJ0X2V5ZXMnLFxuICAgICdsYXVnaGluZycsXG4gICAgJ3N0dWNrX291dF90b25ndWVfd2lua2luZ19leWUnLFxuICAgICdzd2VhdF9zbWlsZScsXG4gICAgJ2pveScsXG4gICAgJ3NjcmVhbScsXG4gICAgJ2Rpc2FwcG9pbnRlZCcsXG4gICAgJ3VuYW11c2VkJyxcbiAgICAnd2VhcnknLFxuICAgICdzb2InLFxuICAgICdzdW5nbGFzc2VzJyxcbiAgICAnaGVhcnQnLFxuICAgICdwb29wJyxcbiAgXTtcblxuICBpbml0KCkge1xuICAgIHRoaXMuZnJlcXVlbnRseSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dGhpcy5OQU1FU1BBQ0V9LmZyZXF1ZW50bHlgKSB8fCAnbnVsbCcpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG4gIGFkZChlbW9qaTogRW1vamlEYXRhKSB7XG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZyZXF1ZW50bHkpIHtcbiAgICAgIHRoaXMuZnJlcXVlbnRseSA9IHRoaXMuZGVmYXVsdHM7XG4gICAgfVxuICAgIGlmICghdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSkge1xuICAgICAgdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSA9IDA7XG4gICAgfVxuICAgIHRoaXMuZnJlcXVlbnRseVtlbW9qaS5pZF0gKz0gMTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5sYXN0YCwgZW1vamkuaWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3RoaXMuTkFNRVNQQUNFfS5mcmVxdWVudGx5YCwgSlNPTi5zdHJpbmdpZnkodGhpcy5mcmVxdWVudGx5KSk7XG4gIH1cbiAgZ2V0KHBlckxpbmU6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmZyZXF1ZW50bHkgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZGVmYXVsdHMgPSB7fTtcblxuICAgICAgY29uc3QgcmVzdWx0ID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGVyTGluZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdHNbdGhpcy5ERUZBVUxUU1tpXV0gPSBwZXJMaW5lIC0gaTtcbiAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ERUZBVUxUU1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGNvbnN0IHF1YW50aXR5ID0gcGVyTGluZSAqIDQ7XG4gICAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZyZXF1ZW50bHkpO1xuXG4gICAgY29uc3Qgc29ydGVkID0gZnJlcXVlbnRseUtleXNcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmZyZXF1ZW50bHkhW2FdIC0gdGhpcy5mcmVxdWVudGx5IVtiXSlcbiAgICAgIC5yZXZlcnNlKCk7XG4gICAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KTtcblxuICAgIGNvbnN0IGxhc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0ubGFzdGApO1xuXG4gICAgaWYgKGxhc3QgJiYgIXNsaWNlZC5pbmNsdWRlcyhsYXN0KSkge1xuICAgICAgc2xpY2VkLnBvcCgpO1xuICAgICAgc2xpY2VkLnB1c2gobGFzdCk7XG4gICAgfVxuICAgIHJldHVybiBzbGljZWQ7XG4gIH1cbn1cbiJdfQ==