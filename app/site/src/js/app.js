//styles
import '../styles/app.scss';
import 'swiper/swiper-bundle.css';

// js
import lazyLoad from './lazyLoad';
import toggleMenu from './toggleMenu';
import swiper from './swiper';
import carCard from "./carCard";
import hiddenTextDescription from "./hiddenTextDescription";

// inits
toggleMenu();
swiper();
carCard();
lazyLoad();
hiddenTextDescription();
