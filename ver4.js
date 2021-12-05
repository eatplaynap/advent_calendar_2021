#! /usr/bin/env node

const fs = require('fs')

const getData = (resource) => {
    return fs.readFileSync(resource, 'utf8')
}

const getAge = () => {
    console.log('年齢を教えてね')
    const input = getData('/dev/stdin')
    return parseInt(input)
}

const giftForKids = (age) => {
    const gifts = JSON.parse(getData('gifts.json'))
    const gift = gifts.find(gift => age === gift.age)
    return `メリークリスマス！${gift.name}を贈ります${gift.emoji}`
}

const giftForAdults = () => {
    const money = Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100)
    return `メリークリスマス！${money}円を贈ります🎉`
}

const printOutput = (age) => {
    if (age < 0 || isNaN(age)) {
        console.log('HOHOHO 正しい年齢を入力してね')
    } else if (age <= 15) {
        console.log(giftForKids(age))
    } else {
        console.log(giftForAdults())
    }
}

printOutput(getAge())
