import Card from './Card';

export default function CardList() {
  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      media: 'https://wow.zamimg.com/uploads/screenshots/normal/699192-aruun-the-darkener.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'post',
    },
    {
      title: 'Evento de aprendizado digital',
      partner: 'Learning Village team • 30m',
      date: '06/09/2021',
      hour: '10:00',
      media: 'https://wow.zamimg.com/uploads/screenshots/normal/699192-aruun-the-darkener.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'event',
    },
    {
      title: 'Evento de aprendizado digital',
      partner: 'Learning Village team • 30m',
      date: '06/09/2021',
      hour: '10:00',
      media: 'https://wow.zamimg.com/uploads/screenshots/normal/699192-aruun-the-darkener.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'event',
    },
    {
      image:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      media: 'https://wow.zamimg.com/uploads/screenshots/normal/699192-aruun-the-darkener.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'post',
    },
  ];

  return (
    <>
      {data.map((e, index) => {
        return <Card key={index} data={e} index={index} />;
      })}
    </>
  );
}
