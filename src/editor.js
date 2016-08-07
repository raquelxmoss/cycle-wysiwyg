import xs from 'xstream';
import {div} from '@cycle/dom';

export default function main ({DOM}) {
  return {
    DOM: xs.of(div('hello world'))
  }
}
