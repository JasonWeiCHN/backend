import { App } from 'vue';
import MyButton from './components/MyButton.vue';
import MyButton1 from './components/MyButton1.vue';
import Header from './components/Header.vue';
import ImgCard from './components/ImgCard.vue';

const install = (app: App) => {
  app.component('Header', Header);
  app.component('ImgCard', ImgCard);
  app.component('MyButton', MyButton);
  app.component('MyButton1', MyButton1);
};

export default { install };
export { Header, ImgCard, MyButton, MyButton1 };
