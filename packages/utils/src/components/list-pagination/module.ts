/*
 * Copyright (c) 2022-2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { h, mergeProps } from 'vue';
import { Component } from '../constants';
import { buildListBaseOptions } from '../list-base';
import { Pagination } from '../pagination';
import { ListPaginationBuildOptions, ListPaginationBuildOptionsInput } from './type';
import { unrefWithDefault } from '../../utils';

export function buildListPaginationOptions<T extends Record<string, any>>(
    input: ListPaginationBuildOptionsInput<T>,
) : ListPaginationBuildOptions<T> {
    const options = buildListBaseOptions(input, Component.ListPagination, {
        class: {
            alt: 'list-pagination',
        },
    });

    return {
        ...options,

        busy: unrefWithDefault(options.busy, false),

        meta: unrefWithDefault(options.meta, {}),
    };
}

export function buildListPagination<T extends Record<string, any>>(
    input?: ListPaginationBuildOptionsInput<T>,
) {
    input = input || {};
    const options = buildListPaginationOptions(input);

    return h(
        options.tag,
        mergeProps({ class: options.class }, options.props),
        [
            h(Pagination, {
                ...options.meta,
                busy: options.busy,
                ...(options.load ? { onLoad: options.load } : {}),
                ...options.props,
            }),
        ],
    );
}
