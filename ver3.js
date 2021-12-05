#! /usr/bin/env node

const fs = require('fs')

const getAge = () => {
    console.log('年齢を教えてね')
    const input = parseInt(fs.readFileSync('/dev/stdin', 'utf8'))
    return input
}

const giftForKids = (age) => {
    const gifts = JSON.parse(fs.readFileSync('gifts.json', 'utf8'))
    const gift = gifts.find(gift => age === gift.age)
    return gift
}

const giftForAdults = () => {
    const money = Math.floor(Math.random() * 100) * Math.floor(Math.random() * 100)
    return money
}

const printOutput = (age) => {
    if (age < 0 || isNaN(age)) {
        console.log('HOHOHO 正しい年齢を入力してね')
    } else if (age <= 15) {
        console.log(`メリークリスマス！${giftForKids(age).name}を贈ります${giftForKids(age).emoji}`)
    } else {
        console.log(`メリークリスマス！${giftForAdults()}円を贈ります🎉`)
    }
}

printOutput(getAge())
