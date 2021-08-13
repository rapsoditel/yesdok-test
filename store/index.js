export const state = () => ({
    category: ""
})

export const mutations = {
    handleCategory(state, value) {
        state.category = value
    }
}