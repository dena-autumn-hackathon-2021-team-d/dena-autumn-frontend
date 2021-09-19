export const state = () => ({
  groups: [],
})

export const mutations = {
  setGroupName(state, groupId, groupName) {
    state.groups[groupId] = {
      groupName,
    }
  },
}

export const getters = {
  getGroupName: (state) => (groupId) => {
    return state.groups[groupId]?.name
  },
}
