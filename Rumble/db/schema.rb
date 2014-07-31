# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140730135357) do

  create_table "traficgowexes", force: true do |t|
    t.text     "date"
    t.text     "hour"
    t.text     "avrcv"
    t.text     "minrcv"
    t.text     "maxrcv"
    t.text     "avtr"
    t.text     "mintr"
    t.text     "maxtr"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "traficgowexes4", id: false, force: true do |t|
    t.text "ID"
    t.text "DATE / TIME"
    t.text ""
    t.text "Average Receive bps HdV-B42-6610 Délestage - Uplink Gowex-Indoor"
    t.text "Min/Max Receive bps HdV-B42-6610 Délestage - Uplink Gowex-Indoor"
    t.text "Max Receive"
    t.text "Average Transmit bps HdV-B42-6610 Délestage - Uplink Gowex-Indoor"
    t.text "Min/Max Transmit bps HdV-B42-6610 Délestage - Uplink Gowex-Indoor"
    t.text "max Transmit"
    t.text "Received_at"
    t.text "Updated_at"
  end

  create_table "tweets", force: true do |t|
    t.text     "status"
    t.text     "username"
    t.text     "userscreen"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "wificonsos", force: true do |t|
    t.integer  "year"
    t.text     "month"
    t.text     "news"
    t.text     "sessions"
    t.text     "hours"
    t.text     "up_b"
    t.text     "down_b"
    t.text     "up_gb"
    t.text     "down_gb"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "wifiusers", force: true do |t|
    t.integer  "year"
    t.text     "month"
    t.text     "users"
    t.text     "gender"
    t.text     "nationality"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
