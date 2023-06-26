/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type {
    OptionsInputValue,
    OptionsOverride,
    PartialPick,
} from '@vue-layout/core';
import type { VNodeChild } from 'vue';
import type { ExpectListBaseOptions, ListBaseOptions, ListBaseOptionsInput } from '../list-base';

export type ListNoMoreBuildOptions<T extends Record<string, any>> = ListBaseOptions & {
    textContent: VNodeChild,

    busy: boolean,
    total?: number
};

export type ListNoMoreBuildOptionsInput<T extends Record<string, any>> = ListBaseOptionsInput &
OptionsOverride<
ExpectListBaseOptions<ListNoMoreBuildOptions<T>>,
PartialPick<ListNoMoreBuildOptions<T>, 'busy' | 'total'> &
OptionsInputValue<PartialPick<ListNoMoreBuildOptions<T>, 'textContent'>>
>;
