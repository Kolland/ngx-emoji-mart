/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AnchorsComponent } from './anchors.component';
import { CategoryComponent } from './category.component';
import { EmojiFrequentlyService } from './emoji-frequently.service';
import { EmojiSearch } from './emoji-search.service';
import { PickerComponent } from './picker.component';
import { PreviewComponent } from './preview.component';
import { SearchComponent } from './search.component';
import { SkinComponent } from './skins.component';
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
export { PickerModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0LyIsInNvdXJjZXMiOlsicGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQscUJBQU0sVUFBVSxHQUFVO0lBQ3hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtDQUNkLENBQUM7Ozs7O2dCQUVELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztvQkFDakQsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLFlBQVksRUFBRSxVQUFVO29CQUN4QixTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsc0JBQXNCLENBQUM7aUJBQ2pEOzt1QkE1QkQ7O1NBNkJhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBFbW9qaU1vZHVsZSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgeyBBbmNob3JzQ29tcG9uZW50IH0gZnJvbSAnLi9hbmNob3JzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEVtb2ppRnJlcXVlbnRseVNlcnZpY2UgfSBmcm9tICcuL2Vtb2ppLWZyZXF1ZW50bHkuc2VydmljZSc7XG5pbXBvcnQgeyBFbW9qaVNlYXJjaCB9IGZyb20gJy4vZW1vamktc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTa2luQ29tcG9uZW50IH0gZnJvbSAnLi9za2lucy5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnlbXSA9IFtcbiAgUGlja2VyQ29tcG9uZW50LFxuICBBbmNob3JzQ29tcG9uZW50LFxuICBDYXRlZ29yeUNvbXBvbmVudCxcbiAgU2VhcmNoQ29tcG9uZW50LFxuICBQcmV2aWV3Q29tcG9uZW50LFxuICBTa2luQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEVtb2ppTW9kdWxlXSxcbiAgZXhwb3J0czogY29tcG9uZW50cyxcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxuICBwcm92aWRlcnM6IFtFbW9qaVNlYXJjaCwgRW1vamlGcmVxdWVudGx5U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlck1vZHVsZSB7fVxuIl19