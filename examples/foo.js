#!/usr/bin/env node


const workshopper = require('../')
    , path        = require('path')


workshopper({
    name        : 'ejercicio_3'
  , title       : 'FOO OR DIE'
  , exerciseDir : path.join(__dirname, 'exercises')
  , appDir      : __dirname
  , languages   : ['de', 'en', 'es', 'fr', 'ja', 'pt-br', 'ru', 'vi', 'zh-cn', 'zh-tw', 'ko', 'nb-no']
})
