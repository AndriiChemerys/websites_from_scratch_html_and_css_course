import './dom';
import { styleBody, addTitle, contact} from './dom';
import users, {getPremUsers} from './data';

const premUsers = getPremUsers(users);
console.log(users, premUsers);

console.log('index file');
addTitle('Test');
styleBody();
console.log(contact);

