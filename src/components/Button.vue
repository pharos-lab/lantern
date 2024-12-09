<template>
    <a :href="props.href" class="l-button font-semibold transition-all duration-200 ease-in-out" 
        :class="classes" v-if="props.href">
        <component :is="Heroicons[props.icon]" v-if="props.icon" class="size-6"></component>
        <slot></slot>
    </a>

    <RouterLink v-else-if="props.to" class="l-button font-semibold transition-all duration-200 ease-in-out" 
        :class="classes">
        <component :is="Heroicons[props.icon]" v-if="props.icon" class="size-6"></component>
        <slot></slot>
    </RouterLink>

    <button class="l-button font-semibold transition-all duration-200 ease-in-out" 
        :class="classes" v-else>
        <component :is="Heroicons[props.icon]" v-if="props.icon" class="size-6"></component>
        <slot></slot>
    </button>
</template>

<script setup>
import { computed, inject } from 'vue'
import * as Heroicons from '@heroicons/vue/24/outline'

const props = defineProps({
    color: {
        type: String,
        default: 'secondary'
    },
    variant: {
        type: String,
        default: 'base',
        validator(value) {
            return ['light', 'dark', 'base', 'outline', 'text'].includes(value)
        }
    },
    rounded: {
        type: String,
        default: 'base'
    },
    hover: {
        type: Boolean,
        default: true
    },
    shadow: {
        type: Boolean,
        default: false
    },
    icon: String,
    iconPosition: {
        type: String,
        validator(value) {
            return ['top', 'bottom', 'left', 'right'].includes(value)
        }
    },
    size: {
        type: String,
        default: 'medium',
        validator: value => ['small', 'medium', 'large'].includes(value),
    },    
    href: String,
    to: [String, Object],
    unstyled: { type: Boolean, default: false }
})

const getClasses = inject('getClasses')

const classes = computed(() => {
    if (props.unstyled) return 
    
    let position

    if (props.icon) {
        position = "inline-flex items-center gap-2 "
        switch(props.iconPosition) {
            case 'right':
                position += 'flex-row-reverse'
                break
            case 'top':
                position += 'flex-col'
                break
            case 'bottom':
                position += 'flex-col-reverse'
                break
        }
    }
    return getClasses(props, 'button', { exclude: ["subBackground"]}) + ' ' + position
})
</script>