/*
 * Copyright (c) 2023-2023.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

import type { PropType } from 'vue';
import { defineComponent, toRef } from 'vue';
import type { ValidationMessages, ValidationResult, ValidationTranslator } from '../type';
import { buildFormInputCheckbox } from './module';

export const FormInputCheckbox = defineComponent({
    name: 'FormInputCheckbox',
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        label: {
            type: Boolean,
            default: false,
        },
        labelClass: {
            type: String,
            default: '',
        },
        labelContent: {
            type: String,
            default: '',
        },

        hint: {
            type: String,
            default: undefined,
        },

        validationResult: {
            type: Object as PropType<Partial<ValidationResult>>,
            default: undefined,
        },
        validationMessages: {
            type: Object as PropType<ValidationMessages>,
            default: undefined,
        },
        validationTranslator: {
            type: Function as PropType<ValidationTranslator>,
            default: undefined,
        },
    },
    emits: ['update:modelValue'],
    setup(props, { attrs, emit }) {
        const label = toRef(props, 'label');
        const labelClass = toRef(props, 'labelClass');
        const labelContent = toRef(props, 'labelContent');

        const hint = toRef(props, 'hint');

        const value = toRef(props, 'modelValue');

        const validationResult = toRef(props, 'validationResult');
        const validationMessages = toRef(props, 'validationMessages');

        return () => buildFormInputCheckbox({
            label,
            labelClass,
            labelContent,

            hint: hint.value,

            value: value.value,

            onChange(input) {
                emit('update:modelValue', input);
            },

            validationResult: validationResult.value,
            validationMessages: validationMessages.value,
            validationTranslator: props.validationTranslator,

            props: attrs,
        });
    },
});
