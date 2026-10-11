ServerEvents.recipes(event => {
    /**
     * @type {import("@special/types").SpecialTypes.RecipeId[]}
     */
    let dim_recipes = [
        'kaleidoscope_dim_wine:barrel/cave_glowbrew',
        'kaleidoscope_dim_wine:barrel/dawnlight_dew',
        'kaleidoscope_dim_wine:barrel/dead_end_spittle',
        'kaleidoscope_dim_wine:barrel/druids_secret_brew',
        'kaleidoscope_dim_wine:barrel/embereye',
        'kaleidoscope_dim_wine:barrel/giants_hymn',
        'kaleidoscope_dim_wine:barrel/goblins_stash',
        'kaleidoscope_dim_wine:barrel/moorglow_birds_song',
        'kaleidoscope_dim_wine:barrel/rangers_satchel',
        'kaleidoscope_dim_wine:barrel/snakeskin_liqueur',
        'kaleidoscope_dim_wine:barrel/stagcall_monsoon',
        'kaleidoscope_dim_wine:barrel/thornheart'
    ]
    
    for (let i of dim_recipes) event.remove({id: i})
    event.remove({id: 'kaleidoscope_dim_wine:pressing_tub/torchberries_juice'})
    event.remove({id: 'kaleidoscope_dim_wine:integration/create/compacting/torchberries_juice'})
})