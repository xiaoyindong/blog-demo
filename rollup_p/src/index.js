import { log } from './logger';
import message from './message';
import { name, version } from '../package.json';

const msg = message.hi;
log(msg);

log(name);
log(version);