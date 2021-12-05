#! /usr/bin/env node

const fs = require('fs')
console.log('年齢を教えてね')
const input = parseInt(fs.readFileSync('/dev/stdin', 'utf8'))

if (input < 0  || isNaN(input)) {
    console.log('HOHOHO 正しい年齢を入力してね')
} else if (input <= 15) {
    const presents = JSON.parse(fs.readFileSync('gifts.json', 'utf8'))
    const result = presents.find(present => present.age === input)
    console.log(`メリークリスマス！${result.name}を贈ります${result.emoji}`)
} else {
    const gift = Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100)
    console.log(`メリークリスマス！${gift}円を贈ります🎉`)
}
