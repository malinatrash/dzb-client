import { Supervisor } from '../Supervisor';
import { UserSupervisor } from '../User';

export const supervisorList: Supervisor[] = [
  {
    id: 3,
    fio: 'Серышева Ирина Анатольевна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: null,
  },
  {
    id: 4,
    fio: 'Антипин Дмитрий Алексеевич',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: null,
  },
  {
    id: 5,
    fio: 'Антипина Оксана Викторовна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: null,
  },
  {
    id: 6,
    fio: 'Бацюн Наталья Владимировна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: null,
  },
  {
    id: 7,
    fio: 'Богатырева Марина Валерьевна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: null,
  },
  {
    id: 8,
    fio: 'Вовсеенко Елена Александровна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: null,
  },
  {
    id: 9,
    fio: 'Вязников Вадим Евгеньевич',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: null,
  },
  {
    id: 10,
    fio: 'Гафарова Елена Владиславовна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: null,
  },
];

export const userSupervisor: UserSupervisor = {
  ...supervisorList[1],
  is_student: false,
  is_teacher: true,
  canSendParticipations: false,
};
