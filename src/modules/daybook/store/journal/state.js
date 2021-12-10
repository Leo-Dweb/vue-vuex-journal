export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Laboris esse officia sint aute esse proident. Eu adipisicing ad ad non deserunt labore ex nisi tempor laboris cupidatat dolor excepteur. Voluptate irure non proident non aute sit. Pariatur dolor nostrud excepteur et eu. Deserunt nostrud esse anim reprehenderit officia ad eu id.',
      picture: null
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: 'Do nostrud sit nisi eu culpa. labore ex nisi tempor laboris cupidatat dolor excepteur. Voluptate irure non proiden',
      picture: null
    },
    {
      id: new Date().getTime() + 1500,
      date: new Date().toDateString(),
      text: 'Do nostrud sit nisi eu culpa. labore ex nisi tempor laboris cupidatat dolor excepteur.',
      picture: null
    }
  ]
})