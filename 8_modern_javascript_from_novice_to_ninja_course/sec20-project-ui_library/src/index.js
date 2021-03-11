import './test.css';
import Tooltip from './ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from '.ninja-ui/tabs';

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

console.log("test A");

//create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

