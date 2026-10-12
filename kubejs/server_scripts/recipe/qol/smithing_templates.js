ServerEvents.recipes(event => {
    event.remove({ id: 'betterend:copy_handle_attachment' })
    event.remove({ id: 'betterend:copy_leather_handle_attachment' })
    event.remove({ id: 'betterend:copy_tool_assembly' })
    event.remove({ id: 'betterend:copy_plate_upgrade' })
    event.remove({ id: 'betterend:copy_thallasium_upgrade' })
    event.remove({ id: 'betterend:copy_terminite_upgrade' })
    event.remove({ id: 'betterend:copy_aeternium_upgrade' })
    event.remove({ id: 'betterend:copy_netherite_upgrade' })

    let betterendTemplates = [
        'betterend:handle_attachment_smithing_template',
        'betterend:leather_handle_attachment_smithing_template',
        'betterend:tool_assembly_smithing_template',
        'betterend:plate_upgrade_smithing_template',
        'betterend:thallasium_upgrade_smithing_template',
        'betterend:terminite_upgrade_smithing_template',
        'betterend:aeternium_upgrade_smithing_template',
        'betterend:netherite_upgrade_smithing_template'
    ]
    for (let t of betterendTemplates) {
        event.stonecutting(t, 'betterend:thallasium_forged_plate')
    }

    event.shaped('minecraft:netherite_upgrade_smithing_template', [
        'NNN',
        'NDN',
        'NNN'
    ], {
        N: '#c:netherracks',
        D: '#c:storage_blocks/diamond'
    })
    event.shaped('create_dragons_plus:blaze_upgrade_smithing_template', [
        'NNN',
        'NBN',
        'NNN'
    ], {
        N: '#c:netherracks',
        B: 'create:blaze_burner'
    })
    event.shaped('betternether:bowl_upgrade_smithing_template', [
        'DND',
        'DCD',
        'DDD'
    ], {
        D: '#c:gems/diamond',
        N: '#c:ingots/netherite',
        C: 'betternether:cincinnasite_block'
    })
    event.shaped('betternether:flaming_ruby_upgrade_smithing_template', [
        'DSD',
        'DRD',
        'DDD'
    ], {
        D: '#c:gems/diamond',
        S: 'minecraft:sculk_catalyst',
        R: 'betternether:nether_ruby'
    })
    event.shaped('betternether:cincinnasite_diamond_upgrade_smithing_template', [
        'DBD',
        'DCD',
        'DDD'
    ], {
        D: '#c:gems/diamond',
        B: '#c:storage_blocks/diamond',
        C: 'betternether:cincinnasite_block'
    })
})

BlockEvents.broken('farmersdelight:wild_tomatoes', event => {
    event
})