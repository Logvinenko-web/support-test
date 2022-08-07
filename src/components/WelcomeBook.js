import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',

  //   color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) => ({
  headerTextSize: {
    fontSize: '20px',
  },
  itemTextSize: {
    fontSize: '16px',
  },
}));
export const WelcomeBook = () => {
  const classes = useStyles();
  return (
    <>
      <Container className="welcomeContainer" maxWidth="xl">
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              {/* <Item>1</Item> */}
              <p className={classes.headerTextSize}>
                Привіт! Ти скоро станеш частиною команди Checkbox, вітаємо тебе!{' '}
              </p>
              <p>
                Тут знайдеш корисну інформацію та зможеш швидко орієнтуватися на
                новому місці.
              </p>
              <p>
                <strong>Наша місія</strong> - створювати цінність для наших
                клієнтів через сучасне програмне забезпечення, отримувати від
                нашої роботи задоволення та гідну фінансову винагороду.
              </p>
              <h2>Наші фундаментальні принципи </h2>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Професіоналізм</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                Ми цінуємо професіоналів своєї справи, людей, що глибоко
                розуміють те, чим займаються, а у разі відсутності необхідних
                знань готових розбиратись та вивчати нові сфери. Постійний
                саморозвиток є невід’ємною частиною професіоналізму.
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Відкритість та чесність</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                Будь-хто з команди може відкрито обговорювати будь-які робочі
                моменти (задачі, успіхи, невдачі, ідеї, помилки тощо) і
                отримувати конструктивну та чесну інформацію. Ми відкрито
                висловлюємо свою позицію з будь-яких робочих питань і
                розраховуємо на таку ж відкриту і чесну відповідь.
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Відповідальність за результат</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                Кожен член команди докладає максимум зусиль для досягнення
                результату по продукту/проекту/задачі незалежно від того, чи є
                це його персональна відповідальність. Команда має спільну мету,
                тому перемоги і поразки також є спільними для всіх членів
                команди.{' '}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Комунікабельність</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                Людські стосунки мають найбільшу цінність. Взаємоповага,
                ввічливість, взаємопідтримка є ключовими елементами людських
                стосунків і спілкування.{' '}
              </Item>
            </Grid>

            <Grid item xs={12} sx={{ fontSize: 20 }}>
              <p>
                Для початку роботи тобі корисно буде переглянути загальну
                презентацію проекту, можеш це зробити{' '}
                <a
                  target="_blank"
                  href="https://docs.google.com/presentation/d/1brCbhzHCZOyBXtL9aKLrS-f9UzGbxBs_S5Z-rtjXNoQ/edit#slide=id.gb059c67864_0_119"
                >
                  за посиланням
                </a>
                , а також за потребою ознайомитися з його архітектурою,
                посилання{' '}
                <a
                  target="_blank"
                  href="https://docs.google.com/document/d/1Zhkc4OljKjea_235YafVvZunkWSp6TCAKeckhgl8t2w/edit?usp=sharing"
                >
                  тут
                </a>
                .
              </p>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <h2>Онбордінг</h2>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Welcome зустріч 1-ий день</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                <p>
                  Визначаємо коло задач на найближчий тиждень, знайомишся зі
                  своєю командою та технічним лідом
                </p>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Зустріч за підсумками першого тижня</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                <p>
                  {' '}
                  Ділимося враженнями від роботи та взаємодії, даємо один одному
                  фідбек, обговорюємо та ставимо задачі на найближчі тижні
                </p>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Зустріч за підсумками першого місяця</h3>
              </Item>
            </Grid>

            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                <p>
                  Обговорюємо результати роботи останніх тижнів, складаємо план
                  подальшої співпраці
                </p>
              </Item>
            </Grid>
            <Grid item xs={12} sx={{ fontSize: 20 }}>
              <p>
                Спілкування в команді відбувається через мессенджер{' '}
                <a target="_blank" href="https://slack.com/">
                  Slack
                </a>
                , у профіль потрібно додати актуальні номер телефону та адресу
                поштового ящика.
              </p>
              <p>
                Після Welcome зустрічі твій тім лід{' '}
                <strong>Олександра Товба</strong> надасть усі необхідні доступи да
                додасть до усіх необхідних зустрічей проекту, а також
                розповість, до кого звертатися по тим чи іншим питанням. Ніколи
                не соромся їх ставити. Краще порадитись з колегами, ніж дарма
                витратити свій час.
              </p>
              <p>
                Для того, щоб краще орієнтуватися,{' '}
                <a
                  target="_blank"
                  href="https://miro.com/app/board/uXjVONgOlnQ=/?share_link_id=984528509169"
                >
                  ознайомся
                </a>{' '}
                зі структурою команди та дізнайся, хто з колег чим займається та
                за що відповідає.{' '}
              </p>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <h2>Важливі організаційні питання:</h2>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Робочий час</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                <h3>full-time</h3>
                <p>
                  - 5 робочих днів на тиждень/субота-неділя вихідні
                  <br />
                  - час роботи с 9:00 до 18:00
                  <br />- За окремою домовленістю робочі години можуть бути
                  зсунуті (раніше або пізніше) або перерозподілені.
                </p>

                <h3>part-time</h3>
                <p>
                  - кількість робочих годин за домовленістю
                  <br />
                  - щоденне логування відпрацьованих годин у системі Redmine
                  <br />- щоденний репорт на пошту andrii.sukhov@maryta.com.ua
                </p>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Оплата</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                Перша виплата здійснюється після 14 відпрацьованих днів і надалі
                за таким графіком :<h3>full-time</h3>
                - два рази на місяць
                <br />
                - аванс 15 числа кожного місяця
                <br />- заробітна плата в останній робочий день.
                <h3>part-time</h3>
                - один раз на місяць
                <br />- перший робочій день місяця, наступного за відпрацьованим
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Відпустка</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                - на рік надається 24 календарні дні відпустки
                <br />
                - оплачується як звичайні робочі дні
                <br />
                - планувати необхідно заздалегідь
                <br />- попереджати Марію Литвин (mariia.lytvyn@checkbox.ua) за
                два тижні до бажаної дати
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Лікарняний</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                - оплачуються як звичайний робочій день
                <br />- компенсація здійснюється за перші 5 днів хвороби, що
                випадають на робочі дні
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <h3>Відгул</h3>
              </Item>
            </Grid>
            <Grid item xs={8}>
              <Item className={classes.itemTextSize}>
                - у разі настання форс-мажорних обставин можно взяти декілька
                днів відпустки без оплати, заздалегідь погодивши зі своїм тім
                лідом та попередивши Марію Литвин
              </Item>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <h3>
                З будь яким питанням ти завжди можеш звернутися до керівника
                проекту Андрія Сухова as@checkbox.ua +380 93 521 95 59
              </h3>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <h3>
                З будь якими організаційними питаннями, питаннями взаємодії,
                заробітної плати, адміністративними та кадровими питаннями до
                Марії Литвин mariia.lytvyn@checkbox.ua +380 95 499 24 20
              </h3>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};
