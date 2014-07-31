require 'sqlite3'
require 'tweetstream'

begin
  db = SQLite3::Database.open "db/development.sqlite3"
  db.execute "CREATE TABLE IF NOT EXISTS tweets(
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
status TEXT,
username TEXT,
userscreen TEXT,
created_at DATETIME,
received_at DATETIME)"
  
  TweetStream.configure do |config|
    config.consumer_key = "8qA1bSRrF2oDjio6qonYX8vDi"
    config.consumer_secret = "vifQbI6wwnQDmwY6hyP2tuZbPihDfC5lagXKnmtk2herlRS7z7"
    config.oauth_token = "2570973415-iKYZzt8cvx8UFmCkEkjcPYMbg5XctUdBpEb0pJM"
    config.oauth_token_secret = "tETnErPZ9b9WwyfpgWduOPHrMUFos0LSTGs048dyRu89N"
    config.auth_method = :oauth
  end

  TweetStream::Client.new.track('Bordeaux') do |status|
    db.execute( "INSERT INTO tweets(
'status',
'username',
'userscreen')
VALUES (?, ?, ?)", status.text, status.user.name, status.user.screen_name)
  end
  
rescue SQLite3::Exception => e
  puts "Exception occured"
  puts e
ensure
  db.close if db
end
