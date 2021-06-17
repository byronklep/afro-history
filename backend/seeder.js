import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import people from './data/people.js'
import articles from './data/articles.js'
import entries from './data/entries.js'
import Person from './models/personModel.js'
import Article from './models/articleModel.js'
import Entry from './models/entryModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Person.deleteMany()
    await Article.deleteMany()
    await Entry.deleteMany()

    const samplePeople = people.map((person) => {
      return { ...person }
    })
    const sampleArticles = articles.map((article) => {
      return { ...article }
    })
    const sampleEntries = entries.map((entry) => {
      return { ...entry }
    })

    await Person.insertMany(samplePeople)
    await Article.insertMany(sampleArticles)
    await Entry.insertMany(sampleEntries)

    console.log('Data imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Product.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
