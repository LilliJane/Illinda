json.array!(@wifiusers) do |wifiuser|
  json.extract! wifiuser, :id, :year, :month, :users, :gender, :nationality
  json.url wifiuser_url(wifiuser, format: :json)
end
