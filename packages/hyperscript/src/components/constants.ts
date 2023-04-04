/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

export enum Component {
    Pagination = 'pagination',
    ValidationGroup = 'validationGroup',

    FormInput = 'formInput',
    FormInputCheckbox = 'formInputCheckbox',
    FormInputText = 'formInputText',
    FormSelect = 'formSelect',
    FormSubmit = 'formSubmit',
    FormTextarea = 'formTextarea',

    ItemActionToggle = 'itemActionToggle',

    List = 'list',
    ListActionRefresh = 'listActionRefresh',
    ListHeader = 'listHeader',
    ListItem = 'listItem',
    ListItems = 'listItems',
    ListLoading = 'listLoading',
    ListNoMore = 'listNoMore',
    ListPagination = 'listPagination',
    ListSearch = 'listSearch',
    ListTitle = 'listTitle',
}

export enum SlotName {
    DEFAULT = 'default',
    HEADER = 'header',
    HEADER_TITLE = 'header-title',
    HEADER_ACTIONS = 'header-actions',
    ITEMS = 'items',
    LOADING = 'loading',
    NO_MORE = 'no-more',
    ITEM = 'item',
    ITEM_ACTIONS = 'item-actions',
    ITEM_ACTIONS_EXTRA = 'item-actions-extra',
}
