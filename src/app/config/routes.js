define({
  '/': {
    controller: 'accountsController',
    action: 'overview'
  },
  '/accounts': {
    controller: 'accountsController',
    action: 'overview'
  },
  '/accounts/add': [
    {
      controller: 'accountsController',
      action: 'add'
    },
    {
      controller: 'wizardsController',
      action: 'doYouNeedAnAccount'
    }
  ],
  '/wizards': {
    controller: 'wizardsController',
    action: 'doYouNeedAnAccount'
  }
});