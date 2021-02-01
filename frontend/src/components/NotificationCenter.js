import React from 'react';
import Notification from './Notification';

const NotificationCenter = () => {
  const notifications = [
    {
      id: 1,
      sender: 'M.J. Morant',
      date: '09:57AM',
      subject: 'Re: Duda sobre el concepto de persona',
      senderAvatar: 'images/avatar-profe.jpg',
      opened: false
    },
    {
      id: 2,
      sender: 'M.J. Morant',
      date: 'Ayer',
      subject: 'Aviso: modificación bases de la convocatoria',
      senderAvatar: 'images/avatar-profe.jpg',
      opened: true
    },
    {
      id: 3,
      sender: 'M.J. Morant',
      date: 'Miércoles',
      subject: 'Re: Duda sobre impuesto herencia',
      senderAvatar: 'images/avatar-profe.jpg',
      opened: true
    },
    {
      id: 4,
      sender: 'M.J. Morant',
      date: '20/11/2020',
      subject: 'Re: Duda sobre impuesto herencia',
      senderAvatar: 'images/avatar-profe.jpg',
      opened: true
    },
    {
      id: 5,
      sender: 'M.J. Morant',
      date: '17/11/2020',
      subject: 'Re: Duda sobre impuesto herencia',
      senderAvatar: 'images/avatar-profe.jpg',
      opened: true
    },
    {
      id: 6,
      sender: 'M.J. Morant',
      date: '4/11/2020',
      subject: 'Re: Duda sobre impuesto herencia',
      senderAvatar: 'images/avatar-profe.jpg',
      opened: true
    },
    {
      id: 7,
      sender: 'M.J. Morant',
      date: '28/10/2020',
      subject: 'Re: Duda sobre impuesto herencia',
      senderAvatar: 'images/avatar-profe.jpg',
      opened: true
    }
  ]

  return (
    <div className="notification-wrapper">
      {
        notifications.map(notification => 
          <Notification 
            key={notification.id}
            sender={notification.sender}
            date={notification.date}
            subject={notification.subject}
            opened={notification.opened}
            // avatarImage={notification.senderAvatar}
          />
        )
      }
    </div>
  );
};

export default NotificationCenter;