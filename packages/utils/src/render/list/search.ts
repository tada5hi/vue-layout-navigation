/*
 * Copyright (c) 2022-2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { h, unref } from 'vue';
import {
    ListSearchBuildOptions,
    ListSearchBuildOptionsInput,
} from './type';
import { unrefWithDefault } from '../../utils';

export function buildListSearchOptions(
    options: ListSearchBuildOptionsInput,
) : ListSearchBuildOptions {
    return {
        ...options,

        type: unrefWithDefault(options.type, 'div'),
        props: unrefWithDefault(options.props, {
            class: 'list-search',
        }),

        slotItems: options.slotItems || {},
        slotProps: unrefWithDefault(options.slotProps, {}),

        q: unref(options.q),
    };
}

export function buildListSearch<T extends Record<string, any>>(
    input: ListSearchBuildOptionsInput,
) {
    const options = buildListSearchOptions(input);

    return h(
        options.type,
        options.props,
        [
            h('div', { staticClass: 'form-group' }, [
                h('div', { staticClass: 'input-group' }, [
                    h('input', {
                        directives: [{
                            name: 'model',
                            value: options.q,
                        }],
                        class: 'form-control',
                        type: 'text',
                        placeholder: '...',
                        value: options.q,
                        onInput($event: any) {
                            if ($event.target.composing) {
                                return;
                            }

                            options.q = $event.target.value;
                        },
                    }),
                ]),
            ]),
        ],
    );
}
