<div align="center">
 <a href="https://etagi-one-section-evg-zlg.netlify.app/" target="_blank">
  <img style="height: 250px" src="https://user-images.githubusercontent.com/85534817/230378133-9141e39a-d0f5-4472-b1d5-220eeb0c2134.png" />
  <img style="height: 250px" src="https://user-images.githubusercontent.com/85534817/230380571-f3a68afe-7ee3-4fee-9d31-3f58de611fb5.png" />
 </a>
 <p>Поиск и отображение квартир в одной секции дома</p>
 <a href="https://etagi-one-section-evg-zlg.netlify.app/" target="_blank"> Открыть деплой </a>
</div>

## Технологический стек
- React
- TypeScript
- Redux Toolkit, RTK Query
- Styled components
- Express.js
- PostgreSQL
- Vite

## Реализованный функционал 
- отображение имеющихся в секции квартир списком (отображаются основные параметры)
- при клике на квартиру открывается страница с детальным описанием параметров квартиры
- фильтрация квартир, выбранные параметры сохраняются в адресной строке и при повторном открытии в панель фильтрации проставляются выбранные значения
- поле для ввода суммы отображает сумму с разделителями
- дополнительные параметры скрыты за кнопкой "Расширенный поиск"
- если в расширенном поиске заполнены какие-то параметры при перезагрузке страницы панель фитрации будет раскрыта
- сортировка квартир по разным параметрам
- при загрузке страницы отображается не более 6 квартир, если ещё квартиры для отображения то под квартирами активна кнопка с текстом сколько ещё квартир можно открыть следующим кликом, и так до тех пор, пока все квартиры не будут отображены; отображаются только те квартиры, которые удовлетворяют условиям фильтрации
