/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */
import { VNode, VNodeArrayChildren, h } from 'vue';
import {
    ListActionRefreshBuildOptions,
    ListActionRefreshOptionsInput,
} from './type';
import { unrefWithDefault, withOptionalDefault } from '../../utils';

export function buildListActionRefreshOptions<T extends Record<string, any>>(
    options: ListActionRefreshOptionsInput<T>,
) : ListActionRefreshBuildOptions<T> {
    return {
        ...options,

        slotItems: options.slotItems || {},
        slotProps: unrefWithDefault(options.slotProps, {}),

        load: unrefWithDefault(options.load, () => Promise.resolve()),
        busy: unrefWithDefault(options.busy, false),

        type: unrefWithDefault(options.type, 'button'),
        props: unrefWithDefault(options.props, {
            class: 'btn btn-xs btn-dark',
        }),

        text: unrefWithDefault(options.text, true),
        textContent: withOptionalDefault(options.textContent, 'refresh'),

        icon: unrefWithDefault(options.icon, true),
        iconProps: unrefWithDefault(options.iconProps, {
            class: 'fa fa-sync',
        }),
    };
}

export function buildListActionRefresh<T extends Record<string, any>>(
    input: ListActionRefreshOptionsInput<T>,
) : VNode | VNode[] {
    const options = buildListActionRefreshOptions(input);

    const refreshActionChildren : VNodeArrayChildren = [];
    if (options.icon) {
        refreshActionChildren.push(h('i', options.iconProps));
    }

    if (options.text) {
        if (
            options.icon &&
            typeof options.textContent === 'string'
        ) {
            refreshActionChildren.push(' ');
        }

        refreshActionChildren.push(options.textContent);
    }

    // todo: remove div wrapper ?
    return h('div', [
        h(options.type, {
            ...(options.type === 'button' ? { type: options.type } : {}),
            disabled: options.busy,
            onClick($event: any) {
                $event.preventDefault();

                return options.load.apply(null);
            },
            ...options.props,
        }, refreshActionChildren),
    ]);
}
