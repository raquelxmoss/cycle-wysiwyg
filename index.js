import {run} from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import Editor from './src/editor';

const drivers = {
  DOM: makeDOMDriver('.app')
}

run(Editor, drivers);
