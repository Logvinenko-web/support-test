import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {SimpleAccordion} from './Acordion'
import Container from '@mui/material/Container';



export const TabDays = ()=> {
  const data = [
    {
    id: '1',
    day: 'Перший день',
    tasks:[
      {
      id: '1',
      name: 'Співробітнику проводять презентацію компанії та самого продукту, обговорення організаційних питань',
      
      documents:[
        {
        id: '1',
        name: 'Презентація проєкту',
        link: 'https://docs.google.com/presentation/d/1brCbhzHCZOyBXtL9aKLrS-f9UzGbxBs_S5Z-rtjXNoQ/edit?usp=sharing'
      }
      ]
    },
    {
      id: '2',
      name: 'Ознайомлення з необхідною нормативною базою',
      link: '',
      documents:[
        {
        id: '1',
        name: 'Базовий закон',
        link: 'https://zakon.rada.gov.ua/laws/show/265/95-%D0%B2%D1%80#Text'
      },
      {
        id: '2',
        name: 'Наказ 306',
        link: 'https://zakon.rada.gov.ua/laws/show/z0624-20#Text'
      },
      {
        id: '3',
        name: 'НАКАЗ №329',
        link: 'https://zakon.rada.gov.ua/laws/show/z0832-21#Text'
      },
      ]
    },
    {
      id: '3',
      name: 'Перевірка знань за допомогою відповідей на тематичні запитання',
      documents:[
        {
        id: '1',
        name: 'Питання',
        link: 'https://docs.google.com/document/d/1rr0w7FLzE5TAZYpqFXdixU1joga0t2TiG-PX5LdzK2g/edit?usp=sharing'
      }
      ]
    },
    ],
    
    },
    {
      id: '2',
      day: 'Другий день',
      tasks:[
        {
        id: '1',
        name: 'Надання доступів до Slack та Wiki, запис в таблицю доступів',
        
        documents:[
          {
          id: '1',
          name: 'Slack',
          link: 'https://slack.com/'
        },
        {
          id: '2',
          name: 'Wiki для супорта',
          link: 'https://wiki.checkbox.in.ua/'
        },
        {
          id: '3',
          name: 'Wiki для клієнтів',
          link: 'https://wiki.checkbox.ua/'
        }
        ]
      },
      {
        id: '2',
        name: 'Реєстрація на порталі, потрібно зареєструвати тестову організація, без ключа ецп',
        documents:[
          {
          id: '1',
          name: 'Портал checkbox',
          link: 'https://my.checkbox.ua/'
        },
        {
          id: '2',
          name: 'Реєстрація',
          link: 'https://wiki.checkbox.ua/uk/instructions/registration'
        },
        
        ]
      },
      
      {
        id: '3',
        name: 'Створення торгової точки, каси та касира, розбір розділу  “Дані організації”',
        documents:[]
      },
      {
        id: '4',
        name: 'Створення торгової точки, каси та касира, розбір розділу  “Дані організації”',
        documents:[]
      },
      {
        id: '5',
        name: 'Нормативна база, яка стосується цих розділів',
        documents:[]
      },
      {
        id: '6',
        name: 'Огляд розділів “Архів чеків” та “Робочі зміни”',
        documents:[]
      },
      {
        id: '7',
        name: 'Перевірка знань за допомогою відповідей на тематичні запитання',
        documents:[
          {
            id: '1',
            name: 'Питання',
            link: 'https://docs.google.com/document/d/1-Y2_oynYsOZkconK6LiCcSPJDYD4Ge2q9DiQulhSZ3Q/edit'
          }
        ]
      },
      ],
      
      },
      {
        id: '3',
        day: 'Третій день',
        tasks:[
          {
          id: '1',
          name: 'Детальний розбір розділу порталу “Товари”',
          documents:[         
          ]
        },
        {
          id: '2',
          name: 'Створення та редагування податкових ставок, розбір питань, що можуть стосуватись розділу “Податкові ставки”',
          documents:[
          ]
        },
        {
          id: '3',
          name: 'Огляд розділів “ Звіти” , та “Редактор чека”. Розбір всіх можливих питань від клієнтів, що стосуються цих розділів',
          documents:[
          ]
        },
        {
          id: '4',
          name: 'Форма чека ФКЧ - 1 та необхідна  нормативна база',
          documents:[
          ]
        },
        {
          id: '5',
          name: 'Перевірка знань за допомогою відповідей на тематичні запитання',
          documents:[
            {
            id: '1',
            name: 'Питання',
            link: 'https://docs.google.com/document/d/1dcy7htyhkt_jWruJBg-pUVReZaq0rcreKJMEg0FC_Tk/edit'
          }
          ]
        },
        ],
        
        },
        
          {
            id: '4',
            day: 'Четвертий день',
            tasks:[
              {
              id: '1',
              name: 'Ознайомлення з утилітами  CheckboxПідпис та CheckboxКаса',
              documents:[{
                id: '1',
                name: 'Каса інструкція',
                link: 'https://wiki.checkbox.ua/uk/instructions/kasa'       
              },
              {
                id: '2',
                name: 'Підпис локальний, інстукція',
                link: 'https://wiki.checkbox.ua/uk/instructions/signer'       
              },
              {
                id: '3',
                name: 'Підпис на захищеному хмарному сховищі',
                link: 'https://wiki.checkbox.ua/uk/instructions/upload-key'       
              },
            ]
            },
            {
              id: '2',
              name: 'Мобільний додаток та банківський POS - термінал',
              documents:[
                {
                  id: '1',
                  name: 'МОбільний додаток інструкція',
                  link: 'https://wiki.checkbox.ua/uk/instructions/mobile-app'       
                },
              ]
            },
            {
              id: '3',
              name: 'АРІ - загальна інформація',
              documents:[
              ]
            },
            {
              id: '4',
              name: 'Перевірка знань за допомогою відповідей на тематичні запитання',
              documents:[
                {
                id: '1',
                name: 'Питання',
                link: 'https://docs.google.com/document/d/1qxpwCUCwwyQIVx4gg310BC7jFKVar8ByFqkADsEnf3o/edit'
              }
              ]
            },
            ],
            
            },
            {
              id: '5',
              day: 'П`ятий день',
              tasks:[
                {
                id: '1',
                name: 'Розділ “Оплата” та білінг - розбір можливих питань та ситуацій від клієнтів',
                documents:[         
                ]
              },
              {
                id: '2',
                name: 'Ознайомлення з інструкціями платіжних систем Liqpay та еквайрингу від Монобанку',
                documents:[
                ]
              },
              {
                id: '3',
                name: 'Розбір партнерських умов співпраці з Чекбокс, партнерський портал',
                documents:[
                ]
              },
              {
                id: '4',
                name: 'Програма лояльності “Приведи друга”',
                documents:[
                              ]
              },
              {
                id: '5',
                name: 'Перевірка знань за допомогою відповідей на тематичні запитання',
                documents:[
                  {
                  id: '1',
                  name: 'Питання',
                  link: 'https://docs.google.com/document/d/16OPTJamqmzUKBYxWARQ4L9XIile1bW_85BOcpWRp1yk/edit'
                }
                ]
              },
              ],
              
              },
              {
                id: '6',
                day: 'Шостий день',
                tasks:[
                  {
                  id: '1',
                  name: 'Знайомство з інструментами, необхідними для роботи першої лінії - адмінка, бот в ТГ, скрипти',
                  documents:[         
                  ]
                },
                {
                  id: '2',
                  name: 'Проведення інструктажу в HelpDesk та  Binotell',
                  documents:[
                  ]
                },
                {
                  id: '3',
                  name: 'Проведення тестування для оцінювання рівня готовності співробітника до роботи першої лінії',
                  documents:[
                  ]
                },
                ],
                
                },
  ]
  
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
   
    <Container maxWidth="xl">
      
       <Box sx={{ width: '100%' }}>
       
      <TabContext value={value}>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} >
            {data.map(day =>(
            <Tab label={day.day} value={day.id} />
            ))}
          </TabList>
        </Box>
        <Container maxWidth="md">
        {data.map(day =>{
         return <div>
          {day.tasks.map(task =>{
            return <TabPanel sx={{padding: '0px'}} value={day.id}><h3>{task.id}. {task.name}</h3>{task.documents.length > 0 ?<SimpleAccordion tasks={task}/> : null}</TabPanel>
          })}
          </div>
          })}
          </Container>
      </TabContext>
    </Box>
    </Container>
    
  );
}





