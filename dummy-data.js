const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Programming for everyone',
    description: '所有人都可以学习Coding',
    location: '广州',
    date: '2022-08-01',
    image: 'images/01.jpg',
    isFeatured: false
  },
  {
    id: 'e2',
    title: '22Title',
    description: 'Desc 222',
    location: '广州2',
    date: '2021-05-30',
    image: 'images/02.jpg',
    isFeatured: true
  },
  {
    id: 'e3',
    title: '333Title',
    description: 'Desc3333333',
    location: '广州3',
    date: '2022-04-10',
    image: 'images/03.jpg',
    isFeatured: true
  },
]

function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => {
    return event.isFeatured
  })
}

function getAllEvents() {
  return DUMMY_EVENTS
}

function getFilteredEvents(dateFilter) {
  const {year, month} = dateFilter
  return DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  })
}

function getEventById(id) {
  return DUMMY_EVENTS.find(event => event.id === id)
}

export {
  getFeaturedEvents,
  getAllEvents,
  getFilteredEvents,
  getEventById
}
