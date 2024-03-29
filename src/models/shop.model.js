const { Schema, model } = require('mongoose')

const DOCUMENT_NAME =  'Shop'
const COLECTION_NAME = 'Shop'

const ShopSchema = new Schema({
  name: {
    type: String,
    trim: true,
    maxLength: 150
  },
  email: {
    type: String,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },
  verify: {
    type: Schema.Types.Boolean,
    default: false,
  },
  roles: {
    type: Array,
    default: []
  }
}, {
  timestamps: true,
  collation: COLECTION_NAME
})

module.exports = model('shop', ShopSchema)