ServerEvents.recipes(event => {
    const {create} = event.recipes
    event.remove({id: 'scguns:create/scorched_blend_from_mixing'})
    event.remove({id: 'scguns:macerator/scorched_blend_from_macerating'})
    event.remove({id: 'scguns:powered_macerator/powered_scorched_blend_from_macerating'})
    event.remove({id: 'scguns:macerator'})
    event.remove({id: 'scguns:powered_macerator'})
    create.mixing([
        Item.of('scguns:scorched_blend', 8)
    ], [
        'scguns:vehement_coal',
        'scguns:nether_star_fragment',
        'minecraft:netherite_ingot',
        'minecraft:dragon_breath',
        'cataclysm:witherite_ingot',
        'cataclysm:ignitium_ingot'
    ]).superheated()
})