module.exports = {
  Query:{
    launches: (_, __, {dataSources}) =>
      dataSources.launchAPI.getAllLaunches(),
    laucnh: (_, { id }, { dataSources }) =>
      dataSources.launchAPI.getLaunchById({ launchId: id}),
    me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};