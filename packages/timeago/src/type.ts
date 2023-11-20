/*
 * Copyright (c) 2023.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { Locale } from 'date-fns';

export type ConverterOptions = {
    includeSeconds?: boolean | undefined,
    addSuffix?: boolean | undefined,
};

export type Converter = (date: number | Date, locale: Locale, options?: ConverterOptions) => string;

export type InjectionContext = {
    locales: Record<string, Locale>,
    converter?: Converter
};

type Options = {
    /**
     * default: en
     */
    locale?: string,
    /**
     * default: {}
     */
    locales?: Record<string, Locale>
    converter?: Converter
};

export type {
    Options,
};
