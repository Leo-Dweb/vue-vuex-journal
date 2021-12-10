export default {

  name: 'daybook',
  component: () => import(/* webpackChunkName: "DayBook.Layout" */ '../layouts/DayBook.Layout.vue'),
  children: [
    {
      path: '',
      name: 'no-entry',
      component: () => import(/* webpackChunkName: "DayBook-NoEntry" */ '../views/NoEntrySelect.vue'),
    },
    {
      path: ':id',
      name: 'entry-view',
      component: () => import(/* webpackChunkName: "DayBook-EntryView" */ '../views/EntryView.vue'),
    }
  ]





}