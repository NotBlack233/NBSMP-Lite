ServerEvents.recipes(event => {
    /**
     * 
     * @param {import("@package/net/neoforged/neoforge/fluids").$FluidStack_} fluid 
     */
    function removeFluid(fluid) {
        event.remove({output: Fluid.of(fluid)})
    }
    removeFluid('createdieselgenerators:diesel')
    removeFluid('createdieselgenerators:gasoline')
    removeFluid('createdieselgenerators:biodiesel')
    removeFluid('createdieselgenerators:ethanol')
    removeFluid('createdieselgenerators:plant_oil')
    event.remove({id: 'createdieselgenerators:distillation/crude_oil'})
    event.remove({id: 'createdieselgenerators:distillation/superheated_crude_oil'})
    event.remove({id: 'createdieselgenerators:mixing/biodiesel'})
    event.remove({id: 'createdieselgenerators:basin_fermenting/fermented_spider_eye'})
    event.remove({id: 'createdieselgenerators:basin_fermenting/fermentable'})
    event.remove({id: 'createdieselgenerators:bulk_fermenting/fermentable'})
    event.remove({id: 'createdieselgenerators:crafting/distillation_controller'})
})