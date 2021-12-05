#! /usr/bin/env node

const fs = require('fs')

const getAge = () => {
    console.log('年齢を教えてね')
    const input = parseInt(fs.readFileSync('/dev/stdin', 'utf8'))
    return input
}

const selectGift = (age) => {
    if (age < 0 || isNaN(age)){
        console.log('HOHOHO 正しい年齢を入力してね')
    } else if (age <= 15){
        const presents = JSON.parse(fs.readFileSync('gifts.json', 'utf8'))
        const result = presents.find(present => age === present.age)
        console.log(`メリークリスマス！${result.name}を贈ります${result.emoji}`)
    }
    else {
        const gift = Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100)
        console.log(`メリークリスマス！${gift}円を贈ります🎉`)
    }
}

selectGift(getAge())
