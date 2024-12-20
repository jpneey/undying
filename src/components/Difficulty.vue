<script setup>

    const props = defineProps(['metas'])

    const metas = [
        { "name" : "Alias", "prop" : "alias" },   
        { "name" : "Source", "prop" : "source" },   
        { "name" : "Cure", "prop" : "cure" },   
        { "name" : "Intelligence", "prop" : "intelligence" },   
        { "name" : "Speed", "prop" : "speed" },   
    ]

    const prepareMeta = ( key, value ) => {

        if ( key == 'alias' ) {
            return value || 'Infected';
        }

        if ( key == 'speed' ) {
            switch( value ) {
                case 1:
                    return "Shamblers";
                case 2:
                    return "Normal";
                case 3:
                    return "Fast";
                case 4:
                    return "Extremely Fast";
                default:
                    return "Normal";
            }
        }

        if ( key == 'source' ) {
            return value || 'Unknown';
        }

        if ( key == 'intelligence' ) {
            return value
        }

        return value;
    }

</script>

<template>
    <div class="difficulty">
        <div class="row" v-for="meta in metas">
            <div class="col-12 pb-3">
                <div class="border-dark">
                    <p class="subtitle mb-0">
                        <small class="d-block opacity-75">{{ meta.name }}</small>
                        {{ prepareMeta( meta.prop, props.metas[meta.prop] ) || "&mdash;" }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>