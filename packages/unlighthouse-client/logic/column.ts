import {UnlighthouseColumn, WindiResponsiveClasses} from "unlighthouse-utils";
import {Ref} from "vue";

export const useColumnClasses = (columnRef: Ref<UnlighthouseColumn>) => {
    return computed(() => {
        const column = columnRef.value
        const classes = column.classes || []
        if (column.cols) {
            const keys = Object.keys(column.cols)
            for (const i in keys) {
                let key = keys[i] as WindiResponsiveClasses
                const span = column.cols[key]
                let prefix = ''
                if (key === 'xs') {
                    prefix = ''
                } else {
                    prefix = key + ':'
                }
                if (!span) {
                    classes.push(`${prefix}hidden`)
                } else {
                    classes.push(`${prefix}col-span-${span}`)
                    classes.push(`${prefix}flex`)
                }
            }
        }
        return classes
    })
}