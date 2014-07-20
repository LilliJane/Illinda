require 'sqlite3'
require 'tweetstream'

begin
  db = SQLite3::Database.open "databuzz.db"
  db.execute "CREATE TABLE IF NOT EXISTS Tweets(
id, INTEGER PRIMARY KEY,
tweetid TEXT,
text TEXT,
screen_name TEXT,
userid TEXT,
user_name TEXT,
profile_image_url TEXT,
language,
created_at TEXT,
received_at TIMESTAMPS)"
  
  TweetStream.configure do |config|
    config.consumer_key = "8qA1bSRrF2oDjio6qonYX8vDi"
    config.consumer_secret = "vifQbI6wwnQDmwY6hyP2tuZbPihDfC5lagXKnmtk2herlRS7z7"
    config.oauth_token = "2570973415-iKYZzt8cvx8UFmCkEkjcPYMbg5XctUdBpEb0pJM"
    config.oauth_token_secret = "tETnErPZ9b9WwyfpgWduOPHrMUFos0LSTGs048dyRu89N"
    config.auth_method = :oauth
  end

  TweetStream::Client.new.track('Bordeaux') do |status|
    db.execute( "INSERT INTO store_tweets(
'text',
'screen_name',
'user_name',
'language')
VALUES (?, ?, ?, ?)",
                [status.text],
                [status.user.screen_name],
                [status.user.name],
                [status.lang])
  end
  
rescue SQLite3::Exception => e
  puts "Exception occured"
  puts e
ensure
  db.close if db
end
