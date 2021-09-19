export const state = () => ({
  groups: {},
})

export const mutations = {
  setGroupName(state, params) {
    state.groups[params.groupId] = {
      groupName: params.groupName,
    }
  },
}

export const getters = {
  getGroupName: (state) => (groupId) => {
    return state.groups[groupId]?.groupName || ''
  },
}
