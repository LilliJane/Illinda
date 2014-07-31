json.array!(@tweets) do |tweet|
  json.extract! tweet, :id, :status, :username, :userscreen, :posted
  json.url tweet_url(tweet, format: :json)
end
