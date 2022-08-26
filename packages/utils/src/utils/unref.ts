/*
 * Copyright (c) 2022.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import { unref } from 'vue';
import { MaybeRef, NonBoolean } from '../type';

export function unrefWithDefault<T>(value: MaybeRef<T>, alt: T) : NonNullable<T> {
    const raw = unref(value);
    if (typeof raw === 'undefined') {
        return alt as NonNullable<T>;
    }

    return raw as NonNullable<T>;
}

export function withOptionalDefault<T>(value: T, alt?: T) : NonBoolean<T> {
    if (
        typeof value === 'boolean'
    ) {
        return alt as NonBoolean<T>;
    }

    return value as NonBoolean<T>;
}
