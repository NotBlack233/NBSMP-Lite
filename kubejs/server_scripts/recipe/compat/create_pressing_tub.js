ServerEvents.recipes(event => {
    let recipes = event.findRecipes({ type: 'kaleidoscope_tavern:pressing_tub' })
    let blacklist = [
        'kaleidoscope_nether:warped_juice',
        'kaleidoscope_dim_wine:torchberries_juice'
    ]

    for (let r of recipes) {
        let fluid = r.json.get('fluid').getAsString()
        let ingredient = r.json.get('ingredient')
        console.log(fluid)

        if (blacklist.indexOf(fluid) != -1) continue // WTF broken recipe
        try {
            if (ingredient.get('item') != null)
                event.recipes.create.compacting([Fluid.of(fluid, 125)], Ingredient.of(ingredient.get('item').getAsString()))
            else
                event.recipes.create.compacting([Fluid.of(fluid, 125)], Ingredient.of('#' + ingredient.get('tag').getAsString()))
        } catch (e) { }
    }
})