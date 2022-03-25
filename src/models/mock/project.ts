import { ProjectListResponse } from '@/api/ProjectApi/IProjectApi';
import { State, Skill, Type } from '../Project';

export const states: State[] = [
  {
    id: 1,
    state: 'Обработка',
    created_at: '',
    updated_at: '',
  },
  {
    id: 2,
    state: 'Открытый',
    created_at: '',
    updated_at: '',
  },
  {
    id: 3,
    state: 'Активный',
    created_at: '',
    updated_at: '',
  },
  {
    id: 4,
    state: 'Закрытый',
    created_at: '',
    updated_at: '',
  },
];

export const types: Type[] = [
  {
    id: 2,
    type: 'Проектное обучение',
    created_at: '',
    updated_at: '',
  },
  {
    id: 3,
    type: 'Научная деятельность',
    created_at: '',
    updated_at: '',
  },
];

export const skills: Skill[] = [
  {
    id: 1,
    skill: 'Web',
    created_at: '',
    updated_at: '',
    pivot: {
      project_id: 1,
      skill_id: 1,
    },
  },
  {
    id: 2,
    skill: 'Mobile',
    created_at: '',
    updated_at: '',
    pivot: {
      project_id: 1,
      skill_id: 1,
    },
  },
  {
    id: 3,
    skill: 'Конференция',
    created_at: '',
    updated_at: '',
    pivot: {
      project_id: 1,
      skill_id: 1,
    },
  },
  {
    id: 4,
    skill: 'Обучение',
    created_at: '',
    updated_at: '',
    pivot: {
      project_id: 1,
      skill_id: 1,
    },
  },
  {
    id: 5,
    skill: 'Коммерческий',
    created_at: '',
    updated_at: '',
    pivot: {
      project_id: 1,
      skill_id: 1,
    },
  },
  {
    id: 6,
    skill: 'Долгосрочный',
    created_at: '',
    updated_at: '',
    pivot: {
      project_id: 1,
      skill_id: 1,
    },
  },
  {
    id: 7,
    skill: 'Неординарный',
    created_at: '',
    updated_at: '',
    pivot: {
      project_id: 1,
      skill_id: 1,
    },
  },
];

export const projectListResponse: ProjectListResponse = {
  projectCount: 62,
  data: [
    {
      id: 10,
      title: 'Архив ВКР (1 этап)',
      places: 3,
      goal: 'Помощь студентам при выборе тем ВКР и руководителей на основе исторического архива',
      idea: 'Реализовать веб-приложение позволяющее преподавателям заносить в базу данных темы и рефераты защищенных ВКР за предыдущие годы, а также указывать свои области интересов. Предусмотреть возможность просмотра студентами тем и рефератов ВКР с возможностью наложения фильтров по преподавателям и специальностям',
      difficulty: 1,
      date_start: '2020-09-01',
      date_end: '2020-12-20',
      requirements:
        'Умения: проектирование БД, разработка информационной архитектуры и макетов экранов\r\nТехнологии: PHP, СУБД MySQL, JQ, HTML5+CSS, Bootstrap',
      customer: 'Институт ИТиАД',
      expected_result:
        'разработка модели данных, функциональных моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, реализация БД. Прототип систем (выбор средств реализации, фрагменты серверной части и черновая верстка веб-страниц)',
      additional_inf:
        'Предусмотреть кабинет администратора и кабинет руководителя ВКР',
      result:
        'Выполнено проектирование данных, разработаны функциональные моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, выполнена реализация БД. Реализованный прототип отображает список ВКР из БД.',
      updated_at: '2020-11-21 09:43:22',
      created_at: '1',
      skills: [
        {
          id: 9,
          skill: 'Web',
          created_at: '',
          updated_at: '',
          pivot: {
            project_id: 1,
            skill_id: 1,
          },
        },
      ],
      type: {
        id: 1,
        type: 'Прикладной',
        created_at: '',
        updated_at: '',
      },
      supervisor: {
        fio: 'Аршинский Вадим Леонидович',
        api_token: null,
        created_at: '',
        updated_at: '',
        email: 'some-email@gmail.com',
        id: 1,
        position: 'руководитель',
      },
      state: {
        state: 'Закрытый',
        id: 1,
        created_at: '',
        updated_at: '',
      },
    },
    {
      id: 11,
      title: 'Архив ВКР (1 этап)',
      places: 3,
      goal: 'Помощь студентам при выборе тем ВКР и руководителей на основе исторического архива',
      idea: 'Реализовать веб-приложение позволяющее преподавателям заносить в базу данных темы и рефераты защищенных ВКР за предыдущие годы, а также указывать свои области интересов. Предусмотреть возможность просмотра студентами тем и рефератов ВКР с возможностью наложения фильтров по преподавателям и специальностям',
      difficulty: 1,
      date_start: '2020-09-01',
      date_end: '2020-12-20',
      requirements:
        'Умения: проектирование БД, разработка информационной архитектуры и макетов экранов\r\nТехнологии: PHP, СУБД MySQL, JQ, HTML5+CSS, Bootstrap',
      customer: 'Институт ИТиАД',
      expected_result:
        'разработка модели данных, функциональных моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, реализация БД. Прототип систем (выбор средств реализации, фрагменты серверной части и черновая верстка веб-страниц)',
      additional_inf:
        'Предусмотреть кабинет администратора и кабинет руководителя ВКР',
      result:
        'Выполнено проектирование данных, разработаны функциональные моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, выполнена реализация БД. Реализованный прототип отображает список ВКР из БД.',
      updated_at: '2020-11-21 09:43:22',
      created_at: '1',
      skills: [
        {
          id: 9,
          skill: 'Web',
          created_at: '',
          updated_at: '',
          pivot: {
            project_id: 1,
            skill_id: 1,
          },
        },
      ],
      type: {
        id: 1,
        type: 'Прикладной',
        created_at: '',
        updated_at: '',
      },
      supervisor: {
        fio: 'Аршинский Вадим Леонидович',
        api_token: null,
        created_at: '',
        updated_at: '',
        email: 'some-email@gmail.com',
        id: 1,
        position: 'руководитель',
      },
      state: {
        state: 'Закрытый',
        id: 1,
        created_at: '',
        updated_at: '',
      },
    },
    {
      id: 13,
      title: 'Архив ВКР (1 этап)',
      places: 3,
      goal: 'Помощь студентам при выборе тем ВКР и руководителей на основе исторического архива',
      idea: 'Реализовать веб-приложение позволяющее преподавателям заносить в базу данных темы и рефераты защищенных ВКР за предыдущие годы, а также указывать свои области интересов. Предусмотреть возможность просмотра студентами тем и рефератов ВКР с возможностью наложения фильтров по преподавателям и специальностям',
      difficulty: 1,
      date_start: '2020-09-01',
      date_end: '2020-12-20',
      requirements:
        'Умения: проектирование БД, разработка информационной архитектуры и макетов экранов\r\nТехнологии: PHP, СУБД MySQL, JQ, HTML5+CSS, Bootstrap',
      customer: 'Институт ИТиАД',
      expected_result:
        'разработка модели данных, функциональных моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, реализация БД. Прототип систем (выбор средств реализации, фрагменты серверной части и черновая верстка веб-страниц)',
      additional_inf:
        'Предусмотреть кабинет администратора и кабинет руководителя ВКР',
      result:
        'Выполнено проектирование данных, разработаны функциональные моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, выполнена реализация БД. Реализованный прототип отображает список ВКР из БД.',
      updated_at: '2020-11-21 09:43:22',
      created_at: '1',
      skills: [
        {
          id: 9,
          skill: 'Web',
          created_at: '',
          updated_at: '',
          pivot: {
            project_id: 1,
            skill_id: 1,
          },
        },
      ],
      type: {
        id: 1,
        type: 'Прикладной',
        created_at: '',
        updated_at: '',
      },
      supervisor: {
        fio: 'Аршинский Вадим Леонидович',
        api_token: null,
        created_at: '',
        updated_at: '',
        email: 'some-email@gmail.com',
        id: 1,
        position: 'руководитель',
      },
      state: {
        state: 'Закрытый',
        id: 1,
        created_at: '',
        updated_at: '',
      },
    },
    {
      id: 16,
      title: 'Архив ВКР (1 этап)',
      places: 3,
      goal: 'Помощь студентам при выборе тем ВКР и руководителей на основе исторического архива',
      idea: 'Реализовать веб-приложение позволяющее преподавателям заносить в базу данных темы и рефераты защищенных ВКР за предыдущие годы, а также указывать свои области интересов. Предусмотреть возможность просмотра студентами тем и рефератов ВКР с возможностью наложения фильтров по преподавателям и специальностям',
      difficulty: 1,
      date_start: '2020-09-01',
      date_end: '2020-12-20',
      requirements:
        'Умения: проектирование БД, разработка информационной архитектуры и макетов экранов\r\nТехнологии: PHP, СУБД MySQL, JQ, HTML5+CSS, Bootstrap',
      customer: 'Институт ИТиАД',
      expected_result:
        'разработка модели данных, функциональных моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, реализация БД. Прототип систем (выбор средств реализации, фрагменты серверной части и черновая верстка веб-страниц)',
      additional_inf:
        'Предусмотреть кабинет администратора и кабинет руководителя ВКР',
      result:
        'Выполнено проектирование данных, разработаны функциональные моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, выполнена реализация БД. Реализованный прототип отображает список ВКР из БД.',
      updated_at: '2020-11-21 09:43:22',
      created_at: '1',
      skills: [
        {
          id: 9,
          skill: 'Web',
          created_at: '',
          updated_at: '',
          pivot: {
            project_id: 1,
            skill_id: 1,
          },
        },
      ],
      type: {
        id: 1,
        type: 'Прикладной',
        created_at: '',
        updated_at: '',
      },
      supervisor: {
        fio: 'Аршинский Вадим Леонидович',
        api_token: null,
        created_at: '',
        updated_at: '',
        email: 'some-email@gmail.com',
        id: 1,
        position: 'руководитель',
      },
      state: {
        state: 'Закрытый',
        id: 1,
        created_at: '',
        updated_at: '',
      },
    },
    {
      id: 17,
      title: 'Архив ВКР (1 этап)',
      places: 3,
      goal: 'Помощь студентам при выборе тем ВКР и руководителей на основе исторического архива',
      idea: 'Реализовать веб-приложение позволяющее преподавателям заносить в базу данных темы и рефераты защищенных ВКР за предыдущие годы, а также указывать свои области интересов. Предусмотреть возможность просмотра студентами тем и рефератов ВКР с возможностью наложения фильтров по преподавателям и специальностям',
      difficulty: 1,
      date_start: '2020-09-01',
      date_end: '2020-12-20',
      requirements:
        'Умения: проектирование БД, разработка информационной архитектуры и макетов экранов\r\nТехнологии: PHP, СУБД MySQL, JQ, HTML5+CSS, Bootstrap',
      customer: 'Институт ИТиАД',
      expected_result:
        'разработка модели данных, функциональных моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, реализация БД. Прототип систем (выбор средств реализации, фрагменты серверной части и черновая верстка веб-страниц)',
      additional_inf:
        'Предусмотреть кабинет администратора и кабинет руководителя ВКР',
      result:
        'Выполнено проектирование данных, разработаны функциональные моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, выполнена реализация БД. Реализованный прототип отображает список ВКР из БД.',
      updated_at: '2020-11-21 09:43:22',
      created_at: '1',
      skills: [
        {
          id: 9,
          skill: 'Web',
          created_at: '',
          updated_at: '',
          pivot: {
            project_id: 1,
            skill_id: 1,
          },
        },
      ],
      type: {
        id: 1,
        type: 'Прикладной',
        created_at: '',
        updated_at: '',
      },
      supervisor: {
        fio: 'Аршинский Вадим Леонидович',
        api_token: null,
        created_at: '',
        updated_at: '',
        email: 'some-email@gmail.com',
        id: 1,
        position: 'руководитель',
      },
      state: {
        state: 'Закрытый',
        id: 1,
        created_at: '',
        updated_at: '',
      },
    },
    {
      id: 19,
      title: 'Архив ВКР (1 этап)',
      places: 3,
      goal: 'Помощь студентам при выборе тем ВКР и руководителей на основе исторического архива',
      idea: 'Реализовать веб-приложение позволяющее преподавателям заносить в базу данных темы и рефераты защищенных ВКР за предыдущие годы, а также указывать свои области интересов. Предусмотреть возможность просмотра студентами тем и рефератов ВКР с возможностью наложения фильтров по преподавателям и специальностям',
      difficulty: 1,
      date_start: '2020-09-01',
      date_end: '2020-12-20',
      requirements:
        'Умения: проектирование БД, разработка информационной архитектуры и макетов экранов\r\nТехнологии: PHP, СУБД MySQL, JQ, HTML5+CSS, Bootstrap',
      customer: 'Институт ИТиАД',
      expected_result:
        'разработка модели данных, функциональных моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, реализация БД. Прототип систем (выбор средств реализации, фрагменты серверной части и черновая верстка веб-страниц)',
      additional_inf:
        'Предусмотреть кабинет администратора и кабинет руководителя ВКР',
      result:
        'Выполнено проектирование данных, разработаны функциональные моделей для всех типов пользователей (администратор, преподаватель, студент), макеты интерфейсов пользователей, выполнена реализация БД. Реализованный прототип отображает список ВКР из БД.',
      updated_at: '2020-11-21 09:43:22',
      created_at: '1',
      skills: [
        {
          id: 9,
          skill: 'Web',
          created_at: '',
          updated_at: '',
          pivot: {
            project_id: 1,
            skill_id: 1,
          },
        },
      ],
      type: {
        id: 1,
        type: 'Прикладной',
        created_at: '',
        updated_at: '',
      },
      supervisor: {
        fio: 'Аршинский Вадим Леонидович',
        api_token: null,
        created_at: '',
        updated_at: '',
        email: 'some-email@gmail.com',
        id: 1,
        position: 'руководитель',
      },
      state: {
        state: 'Закрытый',
        id: 1,
        created_at: '',
        updated_at: '',
      },
    },
  ],
};
